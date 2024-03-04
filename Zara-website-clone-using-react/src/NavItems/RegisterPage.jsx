import { useContext, useState } from "react"
import { AuthContext } from "../Context/AuthContext"
import { Route, Routes,Link, useNavigate } from "react-router-dom"
import "../Styling/Navbar.css"

function RegisterPage(){

      let {login}=useContext(AuthContext)
      const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [mobile, setMobile] = useState('');

  const handleRegister = () => {
    const userData = { email, password, name, mobile };
    localStorage.setItem(email, JSON.stringify(userData));
    login(email, password);
   alert("Successfully Registered")
   console.log(email,password,name,mobile);
  };

    return <>
     <div>
     <div className="login-container">
  <div className="sub-login-container">
    <p className="login-title">PERSONAL DETAILS</p>
   <form onSubmit={handleRegister}>
   <input type="email"  placeholder="E-MAIL"name="email" required className="inputfields"  value={email} onChange={(e)=>setEmail(e.target.value)}/> <br />
    <input type="password" placeholder="PASSWORD" required name="password"  className="inputfields"  value={password} onChange={(e)=>setPassword(e.target.value)}/> <br/>
    <input type="text" placeholder="NAME" required name="name" className="inputfields" value={name} onChange={(e)=>setName(e.target.value)}/> <br/>
    <input type="number" placeholder="MOBILE NUMBER" required name="mobile"  className="inputfields"  value={mobile} onChange={(e)=>setMobile(e.target.value)}/>
    <p className="forget-password">We will send you an SMS to verify your phone number</p>
    <input type="checkbox" /><label htmlFor="" className="forget-password">I wish to receive Zara news on my e-mail</label><br/>
    <input type="checkbox" /><label htmlFor="" className="forget-password">I accept the privacy statement</label>
   <button className="button-in-login-page" type="submit">SUBMIT</button>
  
   </form>
  
  </div>
 
</div>
     </div>
    </>
 
}
export default RegisterPage