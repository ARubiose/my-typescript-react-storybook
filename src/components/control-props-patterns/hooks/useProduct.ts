import { useEffect, useRef, useState } from "react";
import { onChangeArgs, Product } from "../interfaces/interfaces";

interface useProductArgs {
    product: Product;
    onChange?: (args: onChangeArgs) => void;
    value?: number;
}

/**
 * If onChange exists, the component is being controlled
 * @param param0 
 * @returns 
 */
export const useProduct = ({ product, onChange, value = 0 }: useProductArgs) => {
    
    const [counter, setCounter] = useState(value);

    useEffect( () => {
        setCounter(value)
    }, [value])

    const handleIncreaseBy = (value: number) => {

        const newValue = counter + value >= 0 ? counter + value : counter;
        setCounter((counter: number) => newValue);

        // Conditional execution of custom function.
        onChange &&
            onChange({
                product,
                count: newValue, // State synchronization
            });
    };

    return { counter, handleIncreaseBy };
};
