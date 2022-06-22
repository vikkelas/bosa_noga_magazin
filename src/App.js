import {Route, Routes} from "react-router";
import './App.css';
import Layout from "./components/Layout/Layout";
import Home from "./pages/Home/Home";
import About from "./pages/About";
import Error404 from "./pages/Error404";
import Contacts from "./pages/Contacts";
import CatalogPage from "./pages/CatalogPage";
import Product from "./components/Product";
import Cart from "./pages/Cart";

function App() {
  return (
    <>
        <Routes>
            <Route path='/' element={<Layout />}>
               <Route index element={<Home/>}/>
               <Route path='/about' element={<About/>}/>
               <Route path='/contacts' element={<Contacts/>}/>
               <Route path='/catalog' element={<CatalogPage/>}/>
                <Route path='/catalog/:id' element={<Product/>}/>
               <Route path ='/cart' element={<Cart/>}/>
               <Route path='/404' element={<Error404/>}/>
               <Route path='*' element={<Error404/>}/>
            </Route>
        </Routes>
    </>
  );
}

export default App;
