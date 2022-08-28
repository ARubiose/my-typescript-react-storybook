import { useCallback, useEffect, useRef, useState } from "react";
import { InitialValues, onChangeArgs, Product } from "../interfaces/interfaces";

interface useProductArgs {
    product: Product;
    onChange?: (args: onChangeArgs) => void;
    value?: number;
    initialValues?: InitialValues;
}

/**
 * If onChange exists, the component is being controlled
 * @param param0
 * @returns
 */
export const useProduct = ({
    product,
    onChange,
    value = 0,
    initialValues,
}: useProductArgs) => {

    const [counter, setCounter] = useState<number>(
        initialValues?.count || value
    );

    const isMounted = useRef(false);
   
    
    useEffect(() => {
        isMounted.current = true;
    });

    useEffect(() => {
        if (isMounted.current) return;
        setCounter(value);
    }, [value]);


    const handleIncreaseBy = (value: number) => {
        let newValue = Math.max( counter + value, 0 )

        if (initialValues?.maxCount) {
            newValue = Math.min(newValue, initialValues.maxCount);
        }

        setCounter(newValue);

        // Conditional execution of custom function. Transmit data.
        onChange &&
            onChange({
                product,
                count: newValue, // State synchronization
            });
    };

    const reset = () => {
        setCounter( initialValues?.count || value)
    }

    return {
        counter,
        isMaxCountReached: !!initialValues?.count && initialValues.maxCount === counter,
        maxCount: initialValues?.maxCount,
        
        handleIncreaseBy,
        reset,
    };
};
