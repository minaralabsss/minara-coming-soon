/**
 * Shopify Storefront API client.
 *
 * The Storefront token is designed to be public — it is scoped to read products
 * and manage carts only, and cannot touch orders, customers or admin data. The
 * NEXT_PUBLIC_ prefix is correct and safe here. Never put an *Admin* API token
 * in a NEXT_PUBLIC_ variable.
 */

const DOMAIN = process.env.NEXT_PUBLIC_SHOPIFY_DOMAIN;
const TOKEN = process.env.NEXT_PUBLIC_SHOPIFY_STOREFRONT_TOKEN;
// Shopify ships a new version quarterly and supports each for a year.
// Check https://shopify.dev/docs/api/usage/versioning and bump when needed.
const API_VERSION = process.env.NEXT_PUBLIC_SHOPIFY_API_VERSION ?? "2026-04";

export const shopifyConfigured = Boolean(DOMAIN && TOKEN);

const endpoint = () =>
  `https://${DOMAIN}/api/${API_VERSION}/graphql.json`;

async function storefront<T>(
  query: string,
  variables: Record<string, unknown> = {}
): Promise<T> {
  if (!shopifyConfigured) {
    throw new Error("Shopify is not configured");
  }

  const res = await fetch(endpoint(), {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "X-Shopify-Storefront-Access-Token": TOKEN as string,
    },
    body: JSON.stringify({ query, variables }),
  });

  if (!res.ok) {
    throw new Error(`Shopify responded ${res.status}`);
  }

  const json = await res.json();
  if (json.errors?.length) {
    throw new Error(json.errors[0]?.message ?? "Shopify query failed");
  }
  return json.data as T;
}

/* ------------------------------------------------------------------ */
/* Types                                                               */
/* ------------------------------------------------------------------ */

export type ShopifyCartLine = {
  id: string;
  quantity: number;
  merchandiseId: string;
  title: string;
  handle: string;
  price: number;
  currency: string;
  image?: string;
};

export type ShopifyCart = {
  id: string;
  checkoutUrl: string;
  totalQuantity: number;
  subtotal: number;
  currency: string;
  lines: ShopifyCartLine[];
};

/* ------------------------------------------------------------------ */
/* Fragments                                                           */
/* ------------------------------------------------------------------ */

const CART_FIELDS = `
  id
  checkoutUrl
  totalQuantity
  cost {
    subtotalAmount { amount currencyCode }
  }
  lines(first: 50) {
    edges {
      node {
        id
        quantity
        merchandise {
          ... on ProductVariant {
            id
            title
            price { amount currencyCode }
            image { url }
            product { title handle }
          }
        }
      }
    }
  }
`;

/* eslint-disable @typescript-eslint/no-explicit-any */
function normalise(cart: any): ShopifyCart {
  return {
    id: cart.id,
    checkoutUrl: cart.checkoutUrl,
    totalQuantity: cart.totalQuantity ?? 0,
    subtotal: Number(cart.cost?.subtotalAmount?.amount ?? 0),
    currency: cart.cost?.subtotalAmount?.currencyCode ?? "SAR",
    lines: (cart.lines?.edges ?? []).map((e: any) => ({
      id: e.node.id,
      quantity: e.node.quantity,
      merchandiseId: e.node.merchandise.id,
      title: e.node.merchandise.product?.title ?? e.node.merchandise.title,
      handle: e.node.merchandise.product?.handle ?? "",
      price: Number(e.node.merchandise.price?.amount ?? 0),
      currency: e.node.merchandise.price?.currencyCode ?? "SAR",
      image: e.node.merchandise.image?.url,
    })),
  };
}

/* ------------------------------------------------------------------ */
/* Operations                                                          */
/* ------------------------------------------------------------------ */

export async function createCart(
  merchandiseId?: string,
  quantity = 1
): Promise<ShopifyCart> {
  const data = await storefront<any>(
    `mutation CartCreate($input: CartInput!) {
      cartCreate(input: $input) {
        cart { ${CART_FIELDS} }
        userErrors { message }
      }
    }`,
    {
      input: merchandiseId
        ? { lines: [{ merchandiseId, quantity }] }
        : { lines: [] },
    }
  );
  return normalise(data.cartCreate.cart);
}

export async function getCart(cartId: string): Promise<ShopifyCart | null> {
  const data = await storefront<any>(
    `query GetCart($id: ID!) { cart(id: $id) { ${CART_FIELDS} } }`,
    { id: cartId }
  );
  return data.cart ? normalise(data.cart) : null;
}

export async function addLine(
  cartId: string,
  merchandiseId: string,
  quantity = 1
): Promise<ShopifyCart> {
  const data = await storefront<any>(
    `mutation CartLinesAdd($cartId: ID!, $lines: [CartLineInput!]!) {
      cartLinesAdd(cartId: $cartId, lines: $lines) {
        cart { ${CART_FIELDS} }
        userErrors { message }
      }
    }`,
    { cartId, lines: [{ merchandiseId, quantity }] }
  );
  return normalise(data.cartLinesAdd.cart);
}

export async function updateLine(
  cartId: string,
  lineId: string,
  quantity: number
): Promise<ShopifyCart> {
  const data = await storefront<any>(
    `mutation CartLinesUpdate($cartId: ID!, $lines: [CartLineUpdateInput!]!) {
      cartLinesUpdate(cartId: $cartId, lines: $lines) {
        cart { ${CART_FIELDS} }
        userErrors { message }
      }
    }`,
    { cartId, lines: [{ id: lineId, quantity }] }
  );
  return normalise(data.cartLinesUpdate.cart);
}

export async function removeLine(
  cartId: string,
  lineId: string
): Promise<ShopifyCart> {
  const data = await storefront<any>(
    `mutation CartLinesRemove($cartId: ID!, $lineIds: [ID!]!) {
      cartLinesRemove(cartId: $cartId, lineIds: $lineIds) {
        cart { ${CART_FIELDS} }
        userErrors { message }
      }
    }`,
    { cartId, lineIds: [lineId] }
  );
  return normalise(data.cartLinesRemove.cart);
}
