import { Routes, Route } from 'react-router-dom'
import Home from '../pages/Home'
import ProductDetail from '../pages/ProductDetail'
import ProductList from '../pages/ProductList'

export default (
    <Routes>
        <Route exact path='/' element={<Home />} />
        <Route path='/products/:id' element={<ProductDetail />} />
        <Route path='/products' element={<ProductList />} />
    </Routes>
)