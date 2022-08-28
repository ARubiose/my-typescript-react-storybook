import { ProductCard } from "../components";
import { products } from "../data/product";
import "../styles/custom-styles.css";


const product = products[0];

/** Example of shopping page with a shopping cart */
export const ShoppingPage = () => {

    return (
        <div className="bg-dark">
            <h1>ShoppingPage</h1>
                    <ProductCard
                        key={product.id}
                        product={product}
                        className={"bg-dark color-white"}
                        initialValues={{
                            count: 2,
                            maxCount: 15
                        }}
                    >
                        {/* State initializer pattern */}
                        {/* According to the props passed to the parrent... 
                        a set of properties and functions are exposed (interface ProductCardHandlers) */}
                        {
                            ( args ) => (
                                <>
                                    <ProductCard.Image className={"custom-image"} />
                                    <ProductCard.Title className={"text-bold"} />
                                    <ProductCard.Buttons className={"custom-buttons"} />

                                    {/* API component exposed */}
                                    {JSON.stringify(args)}
                                    <hr/>

                                    <button onClick={() => {args.reset()} }>Reset</button><hr/>
                                    <button onClick={() => { args.handleIncreaseBy(2)}} disabled={args.isMaxCountReached} >+2</button><hr/>
                                    <button onClick={() => { args.handleIncreaseBy(-2)}}>-2</button><hr/>
                                    
                                    <span>{args.count} - {args.maxCount}</span>
                                </>
                            )
                        }

                    </ProductCard>

            </div>
    );
};
