import AdminMaicontent from "./AdminMainContent";
import AdminSideBar from "./AdminSideBar";

function Admin() {
    return (  
        <>
     
             <div className="container-fluid" >
                 <div className="row">
                     <div className="col-xl-2" >
                     <AdminSideBar/>
                     </div>
                     <div className="col-xl-10 " >
                     <AdminMaicontent/>
                     </div>
                 </div>
             </div>
      
        </>
    );
}

export default Admin;