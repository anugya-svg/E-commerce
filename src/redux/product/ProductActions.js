import { PRODUCT_CLICKED } from "./ProductTypes.js";

export const productClicked = (product) => {
    return {
        type:PRODUCT_CLICKED,
        payload:product
    }
}