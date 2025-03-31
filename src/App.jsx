import { Routes, Route } from "react-router-dom";
import HomePage from "./components/1HomePage";
import NavBar from "./components/2NavBar";
import ProductList from "./components/ProductList";
import ProductInfo from "./components/ProductInfo";
import AddProduct from "./components/AddProduct";
import EditProduct from "./components/EditProduct";
import Footer from "./components/Footer";


function App() {
  return (
    <div className="d-flex flex-column min-vh-100">
    <header>
      <NavBar />
    </header>
    
    <main className="flex-grow-1">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/productlist" element={<ProductList />} />
        <Route path="/product/:id" element={<ProductInfo />} />
        <Route path="/addproduct" element={<AddProduct />} />
        <Route path="/editproduct/:id" element={<EditProduct />} />
      </Routes>
    </main>

    <footer className="bg-light text-center py-3 mt-auto">
      <Footer />
    </footer>
  </div>
  );
}

export default App;
