
import { ProductCard as ProductCardComponent } from './ProductCard'

import { ProductTitle } from './ProductTitle'
import { ProductButtons } from './ProductButtons'
import { ProductImage } from './ProductImage'
import { ProductCardHOCProps } from '../interfaces/interfaces'

export { ProductTitle } from './ProductTitle'
export { ProductButtons } from './ProductButtons'
export { ProductImage } from './ProductImage'

// Needed to work with Producsth intellisense
export const ProductCard:ProductCardHOCProps = Object.assign(ProductCardComponent, {
    Title:ProductTitle,
    Image:ProductImage,
    Buttons:ProductButtons
})

export default ProductCard;