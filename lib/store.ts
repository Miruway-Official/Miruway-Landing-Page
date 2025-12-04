import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';

export interface CartItem {
  id: string | number;
  title: string;
  price: number;
  image: string;
  category: string;
  detail?: string;
}

interface CartStore {
  items: CartItem[];
  addItem: (item: CartItem) => void;
  removeItem: (id: string | number) => void;
  clearCart: () => void;
}

export const useCartStore = create<CartStore>()(
  persist(
    (set, get) => ({
      items: [],
      
      addItem: (item) => {
        const currentItems = get().items;
        // เช็คว่ามีสินค้านี้อยู่แล้วหรือไม่ (ถ้าสินค้าเป็น Digital อาจจะอนุญาตให้ซ้ำได้ หรือไม่ได้ แล้วแต่ Logic)
        // ในที่นี้จะให้เพิ่มซ้ำได้ (มองเป็นคนละชิ้น) โดยการ Gen ID ใหม่ หรือใช้ ID เดิม
        set({ items: [...currentItems, item] });
      },

      removeItem: (id) => {
        set({ items: get().items.filter((item) => item.id !== id) });
      },

      clearCart: () => set({ items: [] }),
    }),
    {
      name: 'cart-storage', // ชื่อ key ใน localStorage
      storage: createJSONStorage(() => localStorage),
    }
  )
);