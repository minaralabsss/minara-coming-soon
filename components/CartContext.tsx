"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";
import {
  shopifyConfigured,
  createCart,
  getCart,
  addLine,
  updateLine,
  removeLine,
  type ShopifyCart,
} from "@/lib/shopify";

export type CartLine = {
  slug: string;
  name: string;
  price: number;
  currency: string;
  quantity: number;
  /** Shopify cart line id. Absent in local mode. */
  lineId?: string;
};

type AddInput = {
  slug: string;
  name: string;
  price: number;
  currency: string;
  /** gid://shopify/ProductVariant/... — required for Shopify mode */
  variantId?: string;
};

type CartValue = {
  lines: CartLine[];
  count: number;
  subtotal: number;
  currency: string;
  isOpen: boolean;
  isSyncing: boolean;
  /** Shopify hosted checkout. Null in local mode. */
  checkoutUrl: string | null;
  add: (item: AddInput, quantity?: number) => void;
  setQuantity: (slug: string, quantity: number) => void;
  remove: (slug: string) => void;
  open: () => void;
  close: () => void;
};

const LOCAL_KEY = "minara_cart";
const CART_ID_KEY = "minara_shopify_cart_id";

const CartContext = createContext<CartValue | null>(null);

function fromShopify(cart: ShopifyCart): CartLine[] {
  return cart.lines.map((l) => ({
    slug: l.handle || l.merchandiseId,
    name: l.title,
    price: l.price,
    currency: l.currency,
    quantity: l.quantity,
    lineId: l.id,
  }));
}

export function CartProvider({ children }: { children: React.ReactNode }) {
  const [lines, setLines] = useState<CartLine[]>([]);
  const [isOpen, setIsOpen] = useState(false);
  const [isSyncing, setIsSyncing] = useState(false);
  const [hydrated, setHydrated] = useState(false);
  const [cartId, setCartId] = useState<string | null>(null);
  const [checkoutUrl, setCheckoutUrl] = useState<string | null>(null);
  const [shopifySubtotal, setShopifySubtotal] = useState<number | null>(null);
  const [shopifyCurrency, setShopifyCurrency] = useState<string | null>(null);

  const applyCart = useCallback((cart: ShopifyCart) => {
    setLines(fromShopify(cart));
    setCheckoutUrl(cart.checkoutUrl);
    setShopifySubtotal(cart.subtotal);
    setShopifyCurrency(cart.currency);
    try {
      localStorage.setItem(CART_ID_KEY, cart.id);
    } catch {
      /* no-op */
    }
    setCartId(cart.id);
  }, []);

  /* ---- restore ---- */
  useEffect(() => {
    (async () => {
      if (shopifyConfigured) {
        try {
          const saved = localStorage.getItem(CART_ID_KEY);
          if (saved) {
            const cart = await getCart(saved);
            // A completed or expired cart returns null. Start fresh.
            if (cart) applyCart(cart);
            else localStorage.removeItem(CART_ID_KEY);
          }
        } catch {
          /* fall through to an empty cart */
        }
      } else {
        try {
          const raw = localStorage.getItem(LOCAL_KEY);
          if (raw) setLines(JSON.parse(raw));
        } catch {
          /* no-op */
        }
      }
      setHydrated(true);
    })();
  }, [applyCart]);

  /* ---- persist, local mode only ---- */
  useEffect(() => {
    if (!hydrated || shopifyConfigured) return;
    try {
      localStorage.setItem(LOCAL_KEY, JSON.stringify(lines));
    } catch {
      /* no-op */
    }
  }, [lines, hydrated]);

  const add = useCallback(
    async (item: AddInput, quantity = 1) => {
      setIsOpen(true);

      if (shopifyConfigured && item.variantId) {
        setIsSyncing(true);
        try {
          const cart = cartId
            ? await addLine(cartId, item.variantId, quantity)
            : await createCart(item.variantId, quantity);
          applyCart(cart);
        } catch (err) {
          console.error("Shopify add failed", err);
        } finally {
          setIsSyncing(false);
        }
        return;
      }

      setLines((prev) => {
        const existing = prev.find((l) => l.slug === item.slug);
        if (existing) {
          return prev.map((l) =>
            l.slug === item.slug ? { ...l, quantity: l.quantity + quantity } : l
          );
        }
        return [...prev, { ...item, quantity }];
      });
    },
    [cartId, applyCart]
  );

  const setQuantity = useCallback(
    async (slug: string, quantity: number) => {
      const line = lines.find((l) => l.slug === slug);

      if (shopifyConfigured && cartId && line?.lineId) {
        setIsSyncing(true);
        try {
          const cart =
            quantity <= 0
              ? await removeLine(cartId, line.lineId)
              : await updateLine(cartId, line.lineId, quantity);
          applyCart(cart);
        } catch (err) {
          console.error("Shopify update failed", err);
        } finally {
          setIsSyncing(false);
        }
        return;
      }

      setLines((prev) =>
        quantity <= 0
          ? prev.filter((l) => l.slug !== slug)
          : prev.map((l) => (l.slug === slug ? { ...l, quantity } : l))
      );
    },
    [lines, cartId, applyCart]
  );

  const remove = useCallback(
    (slug: string) => setQuantity(slug, 0),
    [setQuantity]
  );

  const value = useMemo<CartValue>(
    () => ({
      lines,
      count: lines.reduce((n, l) => n + l.quantity, 0),
      subtotal:
        shopifySubtotal ??
        lines.reduce((n, l) => n + l.price * l.quantity, 0),
      currency: shopifyCurrency ?? lines[0]?.currency ?? "SAR",
      isOpen,
      isSyncing,
      checkoutUrl,
      add,
      setQuantity,
      remove,
      open: () => setIsOpen(true),
      close: () => setIsOpen(false),
    }),
    [
      lines,
      isOpen,
      isSyncing,
      checkoutUrl,
      shopifySubtotal,
      shopifyCurrency,
      add,
      setQuantity,
      remove,
    ]
  );

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

export function useCart() {
  const ctx = useContext(CartContext);
  if (!ctx) throw new Error("useCart must be used inside CartProvider");
  return ctx;
}
