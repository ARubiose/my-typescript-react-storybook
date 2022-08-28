import { Props as ProductCardProps } from "../components/ProductCard";
import { Props as ProductTitleProps } from "../components/ProductTitle";
import { Props as ProductImageProps } from "../components/ProductImage";
import { Props as ProductButtonsProps } from "../components/ProductButtons";
import internal from "stream";

// Product passed to ProductCard as property.
export interface Product {
    id: string;
    title: string;
    img?: string;
}

// Context for the ProductCard - Encapsulate internal state.
export interface ProductContextProps {
    counter: number;
    isMaxCountReached:boolean;
    maxCount?:number;
    product: Product;

    handleIncreaseBy: (value: number) => void;
}

// Help when typing ProductCard - More intellisense help for children (e.g. ProductCard.Title)
export interface ProductCardHOCProps {
    (props: ProductCardProps): JSX.Element;
    Buttons: (props: ProductButtonsProps) => JSX.Element;
    Image: (props: ProductImageProps) => JSX.Element;
    Title: (props: ProductTitleProps) => JSX.Element;
}

// Interface for control pattern - Values emmited by the component
export interface onChangeArgs {
    product: Product;
    count: number;
}

// Interface for products in shopping cart
export interface ProductInCart extends Product {
    count: number;
}

// Interface for state initializer patterns
export interface InitialValues {
    count:number,
    maxCount:number
}

// ProductCard handlers - Everything the card expose
export interface ProductCardHandlers {
    count:number,
    isMaxCountReached:boolean,
    maxCount?:number,
    product: Product;

    handleIncreaseBy: ( value:number) => void
    reset: () => void
}

