import { Route, Routes,Link } from 'react-router-dom';
import { useContext, useEffect, useState } from 'react';

import FirstPage from "./Pages/FirstPage"
import Secondpage from './Pages/SecondPage';
import Thirdpage from './Pages/ThirdPage';
import FourthPage from './Pages/FourthPage';

import './App.css'
import Navbar1 from './NavItems/Navbar1';
import LoginRoute from './NavItems/LoginRoute';
import { AuthContext } from './Context/AuthContext';
function App() {
let [count,setCount]=useState(1)
let {isRender}=useContext(AuthContext)
  return (
    <>
 {!isRender?(<> <Navbar1/> <div className='aman'>
  
   
  </div>
   <div>
   <Link to="/"><button className="prev" onClick={() => setCount(count - 1)} disabled={count === 1}>&#10094;</button></Link>
     <Link to="/about"> <button className="next" onClick={() => setCount(count + 1)} disabled={count === 4}>&#10095;</button></Link>
   
   </div>
   <Routes>
     {count==1?(<Route path='/' element={<FirstPage/>}/>):count==2?(<Route path='/about' element={<Secondpage/>}/>):count==3?(<Route path='/about' element={<Thirdpage/>}/>):(<Route path='/about' element={<FourthPage/>}/>)}
   </Routes></>):(<LoginRoute/>)}
    </>
  )
}

export default App
