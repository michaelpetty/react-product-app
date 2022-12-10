import { Component } from "react";
import { Link } from "react-router-dom";
import { Button, Card, Image, Dimmer, Loader, Segment } from "semantic-ui-react";
import ProductCard from "../components/ProductCard";
import ProductModel from "../models/product";

class ProductList extends Component {
    state = {
        products: [],
        maxDisplay: this.props.maxDisplay
    }

    componentDidMount() {
        this.fetchData()
    }

    loadMore = () => {
        console.log('button')
        let maxDisplay = this.state.maxDisplay + 3
        this.fetchData(maxDisplay)
    }

    fetchData = (max=3) => {
        ProductModel.all(max)
            .then((res) => {
                console.log(res)
                this.setState({
                    products: res.data,
                    maxDisplay: max
                })
            })
    }

    render() {
        let productCards = this.state.products.map((product) => (
            <Link to={`/products/${product.id}`} key={product.id}>
                <ProductCard product={product} key={product.id}/>
            </Link>
        ))
        return (
            <>
                <h2>List of Products</h2>
                <h3>Found: {this.state.products[0]? this.state.products.length:  '...Searching'}</h3>
                <Segment style={{minHeight: "100px"}}>
                        <Dimmer active={!this.state.products.length}>
                            <Loader size='tiny' indeterminate>Getting Products</Loader>
                        </Dimmer>
                        <Card.Group centered stackable doubling itemsPerRow={3}>
                            {productCards}
                        </Card.Group>
                </Segment>
                <Button onClick={this.loadMore} content="Load More" color='black' fluid/>
            </>
        )
    }
}

export default ProductList