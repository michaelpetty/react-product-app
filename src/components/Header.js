import { NavLink } from "react-router-dom"
import { Menu } from "semantic-ui-react"

const Header = () => {
    return (
        <Menu inverted>
        <Menu.Item header as={NavLink} to='/'>Home</Menu.Item>
        <Menu.Item position='right' as={NavLink} to='/products'>All Products</Menu.Item>
      </Menu>
    )
}

export default Header