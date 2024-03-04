import Navbar from "./Navbar"
import "../Styling/Navbar.css"
import { Link, Route, Routes } from "react-router-dom"
import Perfumes from "../ItemPages/Perfumes"
import Kids from "../ItemPages/Kids"
import Man from "../ItemPages/Man"
import Woman from "../ItemPages/Woman"

function Navbar1(){

    return <>
  <div id="navbar1">

  <div>
   <Navbar/>
   </div>
    <div className="nav1-main-container">

        <div className="sub-division">
       <Link to="/woman"> <div className="nav-items">WOMAN</div></Link>
        <Link to="/man"><div className="nav-items">MAN</div></Link>
       <Link to="/kids"> <div className="nav-items">KIDS</div></Link>
       <Link to="/perfumes"> <div className="nav-items">PERFUMES</div></Link>
        </div>

       
    </div>

  </div>
  <Routes>
    <Route exact  path="/:woman" element={<Woman/>}/>
    <Route path="/man" element={<Man/>}/>
    <Route path="/kids" element={<Kids/>}/>
    <Route path="/perfumes" element={<Perfumes/>}/>
  </Routes>

    </>
}
export default Navbar1