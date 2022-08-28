import noImage from '../assets/no-image.jpg';
import { ProductContext } from './ProductCard';
import styles from '../styles/styles.module.css';
import { useContext } from 'react';

export interface Props {
    img?: string;
    className?: string;
    style?: React.CSSProperties | undefined
}
/**
 * Basic Image component for ProductCards
 * @param param0 
 */
export const ProductImage = ({ img = '', className = '', style }: Props) => {

    const { product } = useContext(ProductContext);
    let imgToShow: string;

    if (img) {
        // An image passed to ProductImage
        imgToShow = img;
    } else if (product.img) {
        // An image passed to ProductCard as Product
        imgToShow = product.img;
    } else {
        // No image passed
        imgToShow = noImage;
    }
    return (
        <img className={`${styles.productImg} ${className}`} src={imgToShow} alt={'Product'} style={style} />
    );
};
