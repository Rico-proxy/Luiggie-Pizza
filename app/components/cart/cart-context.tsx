import { createContext, useContext, useMemo, useState, type ReactNode } from 'react';
import { initialCart } from './data/initial-cart';

export type CartItem = {
  id: string;
  name: string;
  price: number;
  quantity: number;
};

type ToastState = {
  title: string;
  message: string;
} | null;

type CartContextValue = {
  items: CartItem[];
  isCartOpen: boolean;
  toast: ToastState;
  itemCount: number;
  subtotal: number;
  tax: number;
  total: number;
  addItem: (item: Omit<CartItem, 'quantity'>, message?: string) => void;
  adjustQuantity: (id: string, change: number) => void;
  openCart: () => void;
  closeCart: () => void;
  showToast: (title: string, message: string) => void;
};

const CartContext = createContext<CartContextValue | null>(null);

export function CartProvider({ children }: { children: ReactNode }) {
  const [items, setItems] = useState<CartItem[]>(initialCart);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [toast, setToast] = useState<ToastState>(null);

  const subtotal = items.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const tax = subtotal * 0.08;
  const total = subtotal + tax;
  const itemCount = items.reduce((sum, item) => sum + item.quantity, 0);

  function showToast(title: string, message: string) {
    setToast({ title, message });
    window.setTimeout(() => setToast(null), 3000);
  }

  function addItem(item: Omit<CartItem, 'quantity'>, message?: string) {
    setItems((current) => {
      const match = current.find((entry) => entry.id === item.id);
      if (match) {
        return current.map((entry) =>
          entry.id === item.id ? { ...entry, quantity: entry.quantity + 1 } : entry
        );
      }
      return [...current, { ...item, quantity: 1 }];
    });
    showToast('Added to Basket', message ?? `${item.name} added to your order.`);
  }

  function adjustQuantity(id: string, change: number) {
    setItems((current) =>
      current
        .map((item) =>
          item.id === id ? { ...item, quantity: item.quantity + change } : item
        )
        .filter((item) => item.quantity > 0)
    );
  }

  const value = useMemo(
    () => ({
      items,
      isCartOpen,
      toast,
      itemCount,
      subtotal,
      tax,
      total,
      addItem,
      adjustQuantity,
      openCart: () => setIsCartOpen(true),
      closeCart: () => setIsCartOpen(false),
      showToast,
    }),
    [isCartOpen, itemCount, items, subtotal, tax, toast, total]
  );

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

export function useCart() {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart must be used inside CartProvider');
  }
  return context;
}
