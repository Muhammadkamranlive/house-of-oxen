import Landing from "../Components/Landing";
import {
    BrowserRouter,
    Routes,
    Route,
} from "react-router-dom";
import Navbar from "../Components/Navbar";
import Shop from "../Components/Shop";
import DetailView from "../Components/DetailView";
import Admin from "../Components/Admin/Admin";

function Routing() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={
                    <>
                        <Navbar />
                        <Landing />
                    </>
                } />
                <Route path="/shop" element={
                    <>
                        <Navbar />
                        <Shop />
                    </>
                } />
                <Route path="/detail" element={
                    <>
                        <Navbar />
                        <DetailView/>
                    </>
                } />
                <Route path="/admin" element={
                    <>
                        
                        <Admin/>
                    </>
                } />
            </Routes>
        </BrowserRouter>
    );
}

export default Routing;