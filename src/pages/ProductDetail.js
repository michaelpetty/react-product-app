import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import ProductCard from "../components/ProductCard"
import ProductModel from "../models/product"

const ProductDetail = () => {
    // destructure the params obj and rename; assign the value for 
    // the key id to the var productId
    const {id:productId} = useParams()
    const [product, setProduct] = useState({})
    // state = {
    //     productId: 3,
    //     product: {}
    // }
    
    useEffect(() => {
        ProductModel.show(productId)
            .then((res) => {
                console.log(res)
                setProduct(res.data)
            })
    }, [productId])
    // componentDidMount() {
    // }

    // render() {
    return (
        <>
            <h2>Individual Product</h2>
            {(product.title)? (
                <ProductCard product={product} detail/>
                ) : (
                <div>loading...</div>
                )}

        </>
        )
    // }

}

export default ProductDetail