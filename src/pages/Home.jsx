import React from "react";
import CategoryMenu from "../components/CategoryMenu";
import FoodItems from "../components/FoodItems";
import Cart from "../components/Cart";
import BottomNav from "../components/BottomNav";
import Navbar from "../shared/Navbar";
import Footer from "../components/Footer";
import About from "../components/About";
const Home = () => {
  return (
    <>
     <Navbar/>
      <About/>
      <BottomNav />
      <CategoryMenu />
      <FoodItems />
      <Cart />  
      <Footer/>
    </>
  );
};

export default Home;
