import { createContext } from "react";

// Example of CSS module based component
import styles from "../styles/styles.module.css";

import { useProduct } from "../hooks/useProduct";
import {
    onChangeArgs,
    Product,
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
    children?: React.ReactElement | React.ReactElement[];

    // Extensible style pattern
    className?: String;
    style?: React.CSSProperties | undefined;

    // Control patterns
    onChange?: (args: onChangeArgs) => void;
    value?: number;
}
/**
 * The value specified to the provider
 * is an object containing the information needed by the children
 * @param {Product} product
 */
export const ProductCard = ({
    children,
    product,
    // Extensible styles
    className,
    style,
    // Control patterns
    onChange,
    value
}: Props) => {
    const { counter, handleIncreaseBy } = useProduct({ product, onChange, value });

    return (
        <Provider
            value={{
                counter,
                handleIncreaseBy,
                product,
            }}
        >
            <div className={`${styles.productCard} ${className}`} style={style}>
                {children}

                {/* 
                    <ProductImage img={product.img} />
                    <ProductTitle title={'Coffee mug'} />
                    <ProductButtons /> 
                */}
            </div>
        </Provider>
    );
};
