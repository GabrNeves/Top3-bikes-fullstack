import React, { useEffect, useState } from "react";
import axios from "axios";
import "./App.css";
import Nav from "./components/Nav";
import RankPage from "./pages/RankPage";
import Hero from "./components/Hero";
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';


function App() {
  const [product, setProduct] = useState();
  const fetchProduct = () => {
    axios
      .get("http://localhost:9000/products")
      .then((response) => setProduct(response.data))
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    fetchProduct()
  }, [])

  //test if it is running
  console.log(product)

  return <div className="App">
    <Nav/>
    <Hero/>
    <RankPage product={product}/>

  </div>;
}

export default App;
