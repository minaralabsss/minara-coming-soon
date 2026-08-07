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
  add: (item: AddInput, quantity?: number) => void;
  setQuantity: (slug: string, quantity: number) => void;
  remove: (slug: string) => void;
  /** Empty the cart. Called once an order is confirmed. */
  clear: () => void;
  open: () => void;
  close: () => void;
};

const STORAGE_KEY = "minara_cart";
const CartContext = createContext<CartValue | null>(null);

export function CartProvider({ children }: { children: React.ReactNode }) {
  const [lines, setLines] = useState<CartLine[]>([]);
  const [isOpen, setIsOpen] = useState(false);
  const [hydrated, setHydrated] = useState(false);

  /* Checkout now lives at /checkout, which posts the cart to
   * /api/checkout and redirects to Moyasar's hosted page. The cart
   * itself stays a plain local store. */

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

  const clear = useCallback(() => setLines([]), []);

  const value = useMemo<CartValue>(
    () => ({
      lines,
      count: lines.reduce((n, l) => n + l.quantity, 0),
      subtotal: lines.reduce((n, l) => n + l.price * l.quantity, 0),
      currency: lines[0]?.currency ?? PANEL_CURRENCY,
      isOpen,
      add,
      setQuantity,
      remove,
      clear,
      open: () => setIsOpen(true),
      close: () => setIsOpen(false),
    }),
    [lines, isOpen, add, setQuantity, remove, clear]
  );

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

export function useCart() {
  const ctx = useContext(CartContext);
  if (!ctx) throw new Error("useCart must be used inside CartProvider");
  return ctx;
}
