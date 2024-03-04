import { createContext, useState } from "react"

export let AuthContext=createContext();
function AuthContextProvider({children}){
        let [isRender,setIsRender]=useState(false)
        let [register,setRegister]=useState(false)
        let [user,setUser]=useState(null)

        function login(email,password){
                let userData=JSON.parse(localStorage.getItem(email))
                if(userData && userData.password===password){
                    setUser(userData)
                    return true
                }
                else{
                    return false
                }       
        }
    return <>
     <AuthContext.Provider value={{isRender,setIsRender,setRegister,register,user,login}}>
        {children}
     </AuthContext.Provider>
    </>
}
export default AuthContextProvider