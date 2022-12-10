import axios from "axios"


const apiUrl = "https://fakestoreapi.com/products"

class ProductModel {
    // call the index method in the api
    static all = (max=6) => {
        let response = axios.get(`${apiUrl}?limit=${max}`)
        return response
    }

    // call the detail/show method in the api
    static show = (id) => {
        let response = axios.get(`${apiUrl}/${id}`)
        return response
    }
}

export default ProductModel