// Update the import to include the useState AND useEffect hook; can rm Component
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Button, Card, Dimmer, Loader, Segment } from "semantic-ui-react";
import ProductCard from "../components/ProductCard";
import ProductModel from "../models/product";

const ProductList = (props) => {
    // state = {
    //     products: [],
    //     maxDisplay: this.props.maxDisplay
    // }
    const [products, setProducts] = useState([]) 
    const [maxDisplay, setMaxDisplay] = useState(props.maxDisplay)
    // useState always returns an array of two elements
    // First element "games" is the value of the state returned
    // Second element "setGames" is a setter function for updating the state
    
    // componentDidMount() {
    //     this.fetchData()
    // }

    // takes a callback function; REQUIRED first argument
    // no second arg = called every render
    // empty [] second arg = called once (componentDidMount)
    // array with vars = called when one of those values changes
    useEffect(() => {
        fetchData()
        // Return a "cleanup" function
        return () => {
            console.log("runs on unmount")
        }
    }, [])

    const loadMore = () => {
        console.log('button')
        // move setMaxDisplay to fetchData
        fetchData(maxDisplay + 3)
    }

    const fetchData = (max=3) => {
        ProductModel.all(max)
            .then((res) => {
                console.log(res)
                setProducts(res.data)
                setMaxDisplay(max)
            })
    }

    let productCards = products.map((product) => (
        <Link to={`/products/${product.id}`} key={product.id}>
            <ProductCard product={product} key={product.id}/>
        </Link>
    ))

    return (
        <>
            <h2>List of Products</h2>
            <h3>Found: {products[0]? products.length:  '...Searching'}</h3>
            <Segment style={{minHeight: "100px"}}>
                    <Dimmer active={!products.length}>
                        <Loader size='tiny' indeterminate>Getting Products</Loader>
                    </Dimmer>
                    <Card.Group centered stackable doubling itemsPerRow={3}>
                        {productCards}
                    </Card.Group>
            </Segment>
            <Button onClick={loadMore} content="Load More" color='black' fluid/>
        </>
    )
}

export default ProductList