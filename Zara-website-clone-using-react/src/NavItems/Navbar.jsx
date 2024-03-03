import { Route, Routes,Link } from "react-router-dom"
import "../Styling/Navbar.css"
import Login from "../NavItems/Login"
import Help from "../NavItems/Help"
import ShoppingBag from "../NavItems/ShoppingBag"
function Navbar(){
    return <>
    <div className="main-container">

            <div className="main-container1">
                {/* <img src="https://th.bing.com/th/id/OIP.8S2XTB6bX82ZBCf4y0fBOgAAAA?w=165&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7" alt="" className="nav-logo" /> */}
                <h2 className="nav-logo">&#9776;</h2>
            </div>
            <div  className="main-container2" >
                <img src="https://logos-world.net/wp-content/uploads/2020/05/Zara-Logo.png" alt=""  className="zara-logo" />
            </div>
            <div  className="main-container3">
                <input type="text" placeholder="SEARCH" className="search-box"  />
            </div>

            <div  className="main-container4">
          
                <Link to="/login" className="link-tags">LOG IN</Link>
               
                    <Link to="/help-center" className="link-tags">HELP</Link>
                    
              
                <Link to="/shop/cart" className="link-tags">SHOPPING BAG(0)</Link>
               
            </div>

    </div>


  <Routes>
        <Route path="/login" element={<Login/>}/>
        <Route path="/help-center" element={<Help/>}/>
        <Route path="/shop/cart" element={<ShoppingBag/>}/>
    </Routes>
 

    </>
}
export default Navbar