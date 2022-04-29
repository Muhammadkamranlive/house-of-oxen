import PageTitle from "./PageTitle";
import ShopList from "./ShopList";
import SideBar from "./SideBarFilter";

function Shop() {
    return ( 
        <>
         <PageTitle/>
         <div className="container pb-5 mb-2 mb-md-4">
             <div className="row">
                 <SideBar/>
                 <ShopList/>
             </div>
         </div>
        </>
     );
}

export default Shop;