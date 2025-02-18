import {create} from "zustand";

const useCartStore = create((set) => ({
    carts: [
        {
            id: 1,
            productId: 2,
            quantity: 3,
        },
        {
            id: 2,
            productId: 7,
            quantity: 1,
        },
    ],

    increaseQuantity: (id) => set((state) => ({
        carts: state.carts.map((el) => (el.id === id ? {...el, quantity: el.quantity + 1} : el))
    })),

    decreaseQuantity: (id) => set((state) => ({
        carts: state.carts.map((el) => (el.id === id ? {...el, quantity: el.quantity - 1} : el))
    }))

}));

export default useCartStore;