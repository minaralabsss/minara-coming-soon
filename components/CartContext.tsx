"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";
import { PANEL_CURRENCY } from "@/lib/products";

export type CartLine = {
  slug: string;
  name: string;
  price: number;
  currency: string;
  quantity: number;
};

type AddInput = Omit<CartLine, "quantity">;

type CartValue = {
  lines: CartLine[];
  count: number;
  subtotal: number;
  currency: string;
  isOpen: boolean;
  /** True while a checkout session is being created. */
  isSyncing: boolean;
  /**
   * Hosted checkout URL from the payment gateway.
   * Null until a gateway is wired — see the Moyasar seam below.
   */
  checkoutUrl: string | null;
  add: (item: AddInput, quantity?: number) => void;
  setQuantity: (slug: string, quantity: number) => void;
  remove: (slug: string) => void;
  open: () => void;
  close: () => void;
};

const STORAGE_KEY = "minara_cart";
const CartContext = createContext<CartValue | null>(null);

export function CartProvider({ children }: { children: React.ReactNode }) {
  const [lines, setLines] = useState<CartLine[]>([]);
  const [isOpen, setIsOpen] = useState(false);
  const [hydrated, setHydrated] = useState(false);

  /* --------------------------------------------------------------
   * MOYASAR SEAM
   *
   * Checkout is not wired yet. When the Moyasar account exists:
   *   1. POST the cart to /api/checkout
   *   2. That route creates a Moyasar payment and returns its URL
   *   3. setIsSyncing(true) around the call, setCheckoutUrl(url) after
   *
   * CartDrawer already renders all three states, so nothing there
   * needs to change. Required: MOYASAR_SECRET_KEY on the server, and
   * a CR plus Maroof registration before Moyasar will onboard you.
   * ------------------------------------------------------------- */
  const [isSyncing] = useState(false);
  const [checkoutUrl] = useState<string | null>(null);

  useEffect(() => {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (raw) setLines(JSON.parse(raw));
    } catch {
      /* corrupt or unavailable storage — start empty */
    }
    setHydrated(true);
  }, []);

  useEffect(() => {
    if (!hydrated) return;
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(lines));
    } catch {
      /* no-op */
    }
  }, [lines, hydrated]);

  const add = useCallback((item: AddInput, quantity = 1) => {
    setLines((prev) => {
      const existing = prev.find((l) => l.slug === item.slug);
      if (existing) {
        return prev.map((l) =>
          l.slug === item.slug ? { ...l, quantity: l.quantity + quantity } : l
        );
      }
      return [...prev, { ...item, quantity }];
    });
    setIsOpen(true);
  }, []);

  const setQuantity = useCallback((slug: string, quantity: number) => {
    setLines((prev) =>
      quantity <= 0
        ? prev.filter((l) => l.slug !== slug)
        : prev.map((l) => (l.slug === slug ? { ...l, quantity } : l))
    );
  }, []);

  const remove = useCallback((slug: string) => {
    setLines((prev) => prev.filter((l) => l.slug !== slug));
  }, []);

  const value = useMemo<CartValue>(
    () => ({
      lines,
      count: lines.reduce((n, l) => n + l.quantity, 0),
      subtotal: lines.reduce((n, l) => n + l.price * l.quantity, 0),
      currency: lines[0]?.currency ?? PANEL_CURRENCY,
      isOpen,
      isSyncing,
      checkoutUrl,
      add,
      setQuantity,
      remove,
      open: () => setIsOpen(true),
      close: () => setIsOpen(false),
    }),
    [lines, isOpen, isSyncing, checkoutUrl, add, setQuantity, remove]
  );

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

export function useCart() {
  const ctx = useContext(CartContext);
  if (!ctx) throw new Error("useCart must be used inside CartProvider");
  return ctx;
}
