import { Outlet } from "react-router-dom";
import NavigationBar from "../NavigationBar/NavigationBar";
import Footer from "../Footer/Footer";


const Root = () => {
    return (
        <div className="container mx-auto space-y-9 ">
            <div >
            <NavigationBar></NavigationBar>
            <Outlet></Outlet>
            </div>
            
            <div>
            <Footer></Footer>
            </div>
        </div>
    );
};

export default Root;