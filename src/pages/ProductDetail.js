import { Component } from "react"
import ProductCard from "../components/ProductCard"
import ProductModel from "../models/product"

class ProductDetail extends Component {

    state = {
        productId: 3,
        product: {}
    }
    
    componentDidMount() {
        ProductModel.show(this.state.productId)
            .then((res) => {
                console.log(res)
                this.setState({product: res.data})
            })
    }

    render() {
        return (
            <>
                <h2>Individual Product</h2>
                {(this.state.product.title)? (
                  <ProductCard product={this.state.product} detail/>
                    ) : (
                  <div>loading...</div>
                  )}
    
            </>
        )
    }

}

export default ProductDetail