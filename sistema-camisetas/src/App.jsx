import NavBar from "./Components/NavBar/NavBar";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Shop from "./pages/Shop"
import ShopCategory from "./pages/ShopCategory"
import Product from "./pages/Product" 
import Cart from "./pages/Cart"
import Footer from "./Components/Footer/Footer";
import men_banner from "./assets/img/men_banner.png"
import women_banner from "./assets/img/women_banner2.webp"
import kid_banner from "./assets/img/kids_banner2.jpg"
import SingUp from "./pages/SingUp";
import Login from "./pages/Login";
import User from "./pages/User";
import UserPurchases from "./pages/UserPurchases";
import Admin from "./pages/Admin";
import ManageProducts from "./pages/ManageProducts";





//ShopCategory,Product,LoginSingUp, Cart
function App() {
  return (
    <div className="App">
    
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path ="/" element ={<Shop/>}  />
          <Route path ="/mens" element ={<ShopCategory  banner={men_banner} category="men"/>}  />
          <Route path ="/womens" element ={<ShopCategory banner={women_banner} category="women"/>}  />
          <Route path ="/kids" element ={<ShopCategory banner={kid_banner} category="kid" />}  />
          <Route path="/product" element={<Product/>}>
            <Route path=":productId" element={<Product/>} />
          </Route>
          <Route path="/cart" element={<Cart/>} />
          <Route path="/login" element={<Login/>} />
          <Route path="/Singup" element={<SingUp/>} />
          <Route path="/User" element={<User/>}/>
          <Route path="/UserPurchases" element={<UserPurchases/>}/>
          <Route path="/Admin" element={<Admin/>}/>
          <Route path="/ManageProducts" element={<ManageProducts/>}/>
        </Routes> 
        <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;
