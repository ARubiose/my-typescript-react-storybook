import { useState } from "react";
import { Product, ProductInCart } from "../interfaces/interfaces";

/**
 * Hook to manage the state of the shopping cart
 * @returns
 */
export const useShoppingCart = () => {

    // State of the shopping cart
    const [shoppingCart, setShoppingCart] = useState<{
        [key: string]: ProductInCart;
    }>({});

    // Update shopping cart state with transmitted values
    const onProductCountChange = ({ count, product }: { count: number; product: Product }) => {

        // Works as well
        setShoppingCart((oldShoppingCart) => {

            if (count === 0) {
                const { [product.id]: toDelete, ...rest } = oldShoppingCart;
                return rest;
            }
            return {
                ...oldShoppingCart,
                [product.id]: { ...product, count },
            };
        });
    };
    return {
        shoppingCart,
        onProductCountChange,
    };
};
