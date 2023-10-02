import { createContext,useContext,useState, useEffect } from "react";
import jwt from 'jsonwebtoken';
import Swal from "sweetalert2";

// const AppContext = createContext()
// export default AppContext


//////////////////////////////////////
export const AuthContext = createContext();



//////////////////////


export function AuthProvider(props){

    const [state, setState] = useState({
        token : null,
        user : null,
        login,
        logout,
        refresh,
        verify,
        keepConnectionValid
    })

    async function login(username,password){
        const url = `${process.env.NEXT_PUBLIC_BACKEND_URL}api/token/`
        const options={
                method : "POST",
                body : JSON.stringify({username,password}),
                headers :{"Content-Type": "application/json"}

        }
        const response = await fetch(url,options )
        const data = await response.json()
        const decodedToken = jwt.decode(data.access)
        // console.log(decodedToken,"DECODED TOKEN")
        if(response.ok){
            let newState = {
                token : data,
                user :{
                    username :decodedToken.username ,
                    email : decodedToken.email ,
                    id : decodedToken.user_id, 
                }
            }
            
            localStorage.setItem("authData",JSON.stringify(newState))
            setState(prevState=> ({...prevState,...newState}));
            // console.log(state,"State after login",newState);
        }
        else{
            // console.log(data);
            Swal.fire({
                icon: 'error',
                title: 'Something went wrong!',
                text: `${data.password?"password: "+ data.password:""} ${data.username?"username: " + data.username:""}`
            })
        }
    }

    async function refresh(token){
        const parsedLocalAuthData = JSON.parse(localStorage.getItem("authData"))
        const url = `${process.env.NEXT_PUBLIC_BACKEND_URL}api/token/refresh/`
        const options={
                method : "POST",
                body : JSON.stringify({refresh:token}),
                headers :{"Content-Type": "application/json"}
        }
        const response = await fetch(url,options )
        const data = await response.json()
        if(response.ok){
            let newState = {}
            newState.token = {access:data.access,refresh:token}
            newState.user = parsedLocalAuthData.user
            setState(prevState=> ({...prevState,...newState}));
            localStorage.setItem("authData",JSON.stringify(newState));
        }
        else{
            state.logout()
        }
        window.location.reload()
    }

    async function verify(token){
        // console.log(token,"CURRENT STATE");
        const url = `${process.env.NEXT_PUBLIC_BACKEND_URL}api/token/verify/`
        const options={
                method : "POST",
                body : JSON.stringify({token:token}),
                headers :{"Content-Type": "application/json"}

        }
        const response = await fetch(url,options )
        // console.log(response,"VERIFY RESPONCE");
        if(response.ok){
           return true
        }
        return false
    }

    function logout(){
        const newState={
            token : null, 
            user : null
        }
        setState(prevState=> ({...prevState,... newState}));
        localStorage.setItem("authData",JSON.stringify(state))
    }

    async function keepConnectionValid(access, refresh){
        let validityState = await state.verify(access)
        // console.log(validityState,"VALIDITY STATE");
        if (validityState == true) {
           return 
        }
        state.refresh(refresh)
    }
    useEffect(()=>{
        const authDataLocal = localStorage.getItem("authData")
        if(authDataLocal)
            {
                const parsedLocalAuthData = JSON.parse(authDataLocal)
                if (parsedLocalAuthData.token) {
                    setState(prevState=> ({...prevState,...parsedLocalAuthData}));
                    // console.log(state,"AFTER LOCAL STORAGE");
                }
            }
    },[])
    return(
        <AuthContext.Provider value={state}>
            {props.children}
        </AuthContext.Provider>
    )

}