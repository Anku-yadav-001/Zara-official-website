import { createContext, useState } from "react"

export let AuthContext=createContext();
function AuthContextProvider({children}){
        let [isRender,setIsRender]=useState(false)
        let [register,setRegister]=useState(false)
    return <>
     <AuthContext.Provider value={{isRender,setIsRender,setRegister,register}}>
        {children}
     </AuthContext.Provider>
    </>
}
export default AuthContextProvider