import { Outlet } from "react-router-dom";
import NavigationBar from "../NavigationBar/NavigationBar";
import Footer from "../Footer/Footer";


const Root = () => {
    return (
        <div >
            <div className="container mx-auto space-y-9 ">
            <NavigationBar></NavigationBar>
            <Outlet></Outlet>
            </div>
            
            <div className="mt-7">
            <Footer></Footer>
            </div>
        </div>
    );
};

export default Root;