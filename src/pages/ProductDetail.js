import { Card, Image } from "semantic-ui-react"

const ProductDetail = () => {
    const { image, title, category, description } = {
        image: 'http://cookie-builder.codetojoy.tech/i/KitchenAidRed.png',
        title: 'Kitchen Aid Mixer',
        category: 'appliances',
        description: 'Red Kitchen Aid Mixer with 5 Qt Bowl'
    }
    return (
        <>
            <h2>Individual Product</h2>
            <Card style={{ minWidth: "400px" }}>
                <Image src={image} size='medium' />
                <Card.Content>
                    <Card.Header>{title}</Card.Header>
                    <Card.Meta>{category}</Card.Meta>
                    <Card.Description>{description}</Card.Description>
                </Card.Content>
              </Card>

        </>
    )
}

export default ProductDetail