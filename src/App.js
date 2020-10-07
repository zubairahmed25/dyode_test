import React from "react";
import { Header } from "./components/Header/Header";
import Banner from "./components/Banner/Banner";
import ProductCategories from "./components/ProductCategories/ProductCategories";
import NewArrivials from "./components/NewArivials/NewArrivials";
import Slider from "./components/Slider/Slider";
import InstagramFollow from "./components/InstagramFollow/InstagramFollow";
import SignUp from "./components/SignUp/SignUp";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <div className="app">
      <Header />
      <Slider />
      <ProductCategories />
      <NewArrivials />
      <Banner />
      <InstagramFollow />
      <SignUp />
      <Footer />
    </div>
  );
}

export default App;
