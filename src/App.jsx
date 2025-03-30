import { Routes, Route } from 'react-router-dom';
import HomePage from './components/1HomePage';
import NavBar from './components/2NavBar'
import ProductList from './components/ProductList'
import ProductInfo from './components/ProductInfo'
import AddProduct from './components/AddProduct'
import EditProduct from './components/EditProduct'


function App() {
  return (
    <>

      <NavBar />

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/productlist" element={<ProductList />} />

        {/* <Route path="/productinfo" element={<ProductInfo />} /> */}

        <Route path="/addproduct" element={<AddProduct />} />
        <Route path="/editproduct" element={<EditProduct />} />
      </Routes>
    </>
  );
}

export default App;
