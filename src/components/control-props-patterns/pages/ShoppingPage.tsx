
import { ProductButtons, ProductCard, ProductImage, ProductTitle } from "../components";

import { products } from "../data/product";

import { useShoppingCart } from "../hooks/useShoppingCart";

import { Product, ProductInCart } from "../interfaces/interfaces";

import "../styles/custom-styles.css";

/** Example of shopping page with a shopping cart */
export const ShoppingPage = () => {

    // State of the shopping cart
    const { shoppingCart, onProductCountChange } = useShoppingCart();

    return (
        <div className="bg-dark">
            <h1>ShoppingPage</h1>

            <div
                style={{
                    display: "flex",
                    flexDirection: "row",
                    flexWrap: "wrap",
                }}
            >
                {/* Product list */}
                {products.map((product: Product) => (
                    <ProductCard
                        key={product.id}
                        product={product}
                        className={"bg-dark color-white"}
                        // Execute custom function
                        // onChange={ ( transmittedData ) => { onProductCountChange(transmittedData)}}
                        onChange={onProductCountChange}
                        value={shoppingCart[product.id]?.count || 0}
                    >
                        <ProductCard.Image className={"custom-image"} />
                        <ProductCard.Title className={"text-bold"} />
                        <ProductCard.Buttons className={"custom-buttons"} />
                    </ProductCard>
                ))}
            </div>

            {/* Shopping cart */}
            <div className={"shopping-cart"}>
                {Object.values(shoppingCart).map(({ count, ...product }: ProductInCart) => {
                    return (
                        <ProductCard
                            key={product.id}
                            product={product}
                            style={{ width: "100px" }}
                            onChange={onProductCountChange}
                            value={count}
                        >
                            <ProductImage
                                className={"custom-image"}
                                style={{ padding: "1rem 1rem 0 1rem" }}
                            />
                            <ProductButtons />
                        </ProductCard>
                    );
                })}
            </div>
        </div>
    );
};
