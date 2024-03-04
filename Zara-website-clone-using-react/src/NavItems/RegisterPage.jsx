import { useContext } from "react"
import { AuthContext } from "../Context/AuthContext"
import LoginRoute from "./LoginRoute"
import "../Styling/Navbar.css"
import Navbar1 from "./Navbar1"
import Navbar from "./Navbar"
function RegisterPage(){
  let {render,setIsRender}=useContext(AuthContext)
  if(!render){

    return <>
     <LoginRoute/>
    </>
  }
}
export default RegisterPage