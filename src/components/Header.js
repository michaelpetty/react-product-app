import { Menu } from "semantic-ui-react"

const Header = () => {
    return (
        <Menu inverted>
        <Menu.Item header>Home</Menu.Item>
        <Menu.Item position='right'>All Products</Menu.Item>
      </Menu>
    )
}

export default Header