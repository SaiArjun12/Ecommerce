import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from "./components/Home";
import { Products } from "./components/Products";
import { Cart } from "./components/Cart";
import { Sign} from "./components/Sign";
import { Login } from "./components/Login";
import { Pagenotfound} from "./components/Pagenotfound";
import LogoutButton from "./components/Logout";



const App = () => {
  return (
    <>
      <BrowserRouter>
        <Home />
        <Routes>
          <Route path="/" element = {<Products/>} />
          <Route path="/home" element = {<Products />}/>
          <Route path="/cart" element = {<Cart />} />
          <Route path="/sign" element = {<Sign />} />
          <Route path="/login" element = {<Login />} />
          {/* <Route path="/LogoutButton" element = {<Logout />} /> */}
          <Route path="*" element = {<Pagenotfound/>} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
