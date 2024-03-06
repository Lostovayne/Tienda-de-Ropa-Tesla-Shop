import type { CartProduct } from "@/interfaces";
import { create } from "zustand";
import { persist } from "zustand/middleware";

interface State {
  cart: CartProduct[];
  addProductToCart: (product: CartProduct) => void;
  //updateProductQuantity
  //removeProductFromCart
}

export const useCartStore = create<State>()(
  persist(
    (set, get) => ({
      cart: [],

      // Metodos
      addProductToCart: (product: CartProduct) => {
        const { cart } = get();
        // 1. Revisar si el producto existe en el carrito con la talla seleccionada
        const productInCart = cart.some((item) => item.id === product.id && item.size === product.size);

        if (!productInCart) {
          set({ cart: [...cart, product] });
          return;
        }

        // 2. Si llega aqui el producto existe entonces toca incrementarlo por talla
        const updatedCartProducts = cart.map((item) => {
          if (item.id === product.id && item.size === product.size) {
            return { ...item, quantity: item.quantity + product.quantity };
          }
          return item;
        });

        set({ cart: updatedCartProducts });
      },
    }),

    {
      name: "shopping-cart",
    }
  )
);
