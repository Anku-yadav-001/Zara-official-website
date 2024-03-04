import { Route, Routes,Link, useNavigate } from "react-router-dom"
import "../Styling/Navbar.css"
import Help from "../NavItems/Help"
import ShoppingBag from "../NavItems/ShoppingBag"
import RegisterPage from "./RegisterPage"
import { useContext,useState } from "react"
import { AuthContext } from "../Context/AuthContext"
function LoginRoute(){
    document.title="LOG IN / CREATE ACCOUNT - ZARA India"
   let {register,setRegister,login}=useContext(AuthContext)
   const [email, setEmail] = useState('');
   const [password, setPassword] = useState('');

   function handleLogin(){
    if(login(email,password)){
      alert("Login Successfully : YOU CAN SHOP")
    }else{
      alert("Invalid email and password !!! Please try again !!!")
    }
   }
  if(register){
    return (<RegisterPage/>)
  }
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
                    <Link to="/help-center" className="link-tags">HELP</Link>   
                <Link to="/shop/cart" className="link-tags">SHOPPING BAG(0)</Link>
               
            </div>
    </div>


    <div className="login-container">
  <div className="sub-login-container">
    <p className="login-title">LOG IN TO YOUR ACCOUNT</p>
   <form action="" onSubmit={handleLogin}>
   <input type="email" placeholder="E-MAIL" required className="inputfields" value={email} onChange={(e)=>setEmail(e.target.value)}/> <br />
    <input type="password" placeholder="PASSWORD" required  className="inputfields" value={password} onChange={(e)=>setPassword(e.target.value)}/>
   <button className="button-in-login-page" type="submit">Login</button>
   </form>
   <p className="forget-password">Have you forgotten your password?</p>
  </div>
  <div>
  <p className="login-title">NEED AN ACCOUNT?</p>
 <button  className="button-in-login-page" onClick={()=>setRegister(true)}>REGISTER</button>
  </div>
</div>
    
<div>
   
</div>
  <Routes>
       
        <Route path="/help-center" element={<Help/>}/>
        <Route path="/shop/cart" element={<ShoppingBag/>}/>
        
    </Routes>
 

    </>
}
export default LoginRoute