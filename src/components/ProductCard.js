import { Card, Image } from "semantic-ui-react"

const ProductCard = (props) => {
    const {image, title, category, description} = props.product
    const isDetailCard = props.detail !== undefined
    return (
        <Card raised centered>
                    <Card.Content textAlign="center">
                        <Card.Header>{title}</Card.Header>
                    </Card.Content>
                    <Image src={image} centered size={isDetailCard? 'large' : 'small'} />
                    {isDetailCard &&
                    <Card.Content>
                        <Card.Meta>{category}</Card.Meta>
                        <Card.Description>{description}</Card.Description>
                    </Card.Content>
                    }
                  </Card>
    )
}

export default ProductCard