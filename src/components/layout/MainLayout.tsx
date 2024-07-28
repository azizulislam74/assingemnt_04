import Footer from "@/pages/Footer";
import MyCarousel from "../myCarousel/MyCarousel";
import Navbar from "../navbar/Navbar";
import Card from "./Card";



const MainLayout = () => {
  return (
    <div className="container mx-auto">
      <Navbar />
      <MyCarousel />
      <Card />
      <Footer/>
    </div>
  );
};

export default MainLayout;
