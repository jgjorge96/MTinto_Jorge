import {products} from "../Products/Products"


export const DataFunct = () => {
    return new Promise((resolve, reject) => {         
        setTimeout(() => {
            resolve(products)
        }, 1000)
    })
}