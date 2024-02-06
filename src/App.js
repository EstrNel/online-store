import "./App.css";
import { Routes, Route } from "react-router-dom";
import { useState } from "react";

// Components
import Heading from "./components/Navigate";
import Landing from "./components/Landing";
import Login from "./components/Login";
import ShoppingCart from "./components/ShoppingCart";
import Cart from "./components/Cart";
import Registration from "./components/Registration";
import About from "./components/About";

import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  const [totalCart, setTotalCart] = useState(0);

  // Create a function to handle the state change
  function handleCart(totalCart) {
    setTotalCart(totalCart);
  }

  return (
    <div className="App">
      <Heading />
      <Routes>
        <Route exact path="/" element={<Landing />} />
        <Route path="/login" element={<Login />} />
        <Route path="/registration" element={<Registration />} />
        <Route
          path="/product"
          element={
            <ShoppingCart totalCart={totalCart} handleCart={handleCart} />
          }
        />
        <Route path="/cart" element={<Cart totalCart={totalCart} />} />

        <Route path="/about" element={<About totalCart={totalCart} />} />
      </Routes>
    </div>
  );
}

export default App;
