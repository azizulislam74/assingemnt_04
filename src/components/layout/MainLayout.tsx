import { Button } from "../ui/button";
import CarouselPlugin from "./CarouselPlugin";
import Navbar from "./Navbar";


const MainLayout = () => {
    return (
        <div className="container mx-auto">
        <Navbar/>
        <CarouselPlugin/>
        </div>
    );
};

export default MainLayout;