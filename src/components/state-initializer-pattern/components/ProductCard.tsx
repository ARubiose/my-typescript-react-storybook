import { createContext } from "react";

// Example of CSS module based component
import styles from "../styles/styles.module.css";

import { useProduct } from "../hooks/useProduct";
import {
    InitialValues,
    onChangeArgs,
    Product,
    ProductCardHandlers,
    ProductContextProps,
} from "../interfaces/interfaces";

// Create context used by components
export const ProductContext = createContext({} as ProductContextProps);
const { Provider } = ProductContext;

/**
 * Product card interface
 */

export interface Props {
    // Compound pattern
    product: Product;
    // children?: React.ReactElement | React.ReactElement[];
    children: (args:ProductCardHandlers) => JSX.Element;// () => JSX.Element;

    // Extensible style pattern
    className?: String;
    style?: React.CSSProperties | undefined;

    // Control patterns
    onChange?: (args: onChangeArgs) => void;
    value?: number;

    // State initializer pattern
    initialValues?: InitialValues 
}
/**
 * The value specified to the provider
 * is an object containing the information needed by the children
 * @param {Product} product
 */
export const ProductCard = ({
    product,
    children,
    // Extensible styles
    className,
    style,
    // Control patterns
    onChange,
    value,
    // State initializer
    initialValues
}: Props) => {

    const { counter, maxCount, isMaxCountReached, handleIncreaseBy, reset } = useProduct({ product, onChange, value, initialValues});

    return (
        <Provider
            value={{
                counter,
                maxCount,
                isMaxCountReached,
                handleIncreaseBy,
                product,
            }}
        >
            <div className={`${styles.productCard} ${className}`} style={style}>
                {children({
                    count:counter,
                    isMaxCountReached,
                    maxCount,
                    product,

                    handleIncreaseBy,
                    reset,
                })}

                {/* 
                    <ProductImage img={product.img} />
                    <ProductTitle title={'Coffee mug'} />
                    <ProductButtons /> 
                */}

            </div>
        </Provider>
    );
};
