import { createContext,useContext,useState, useEffect } from "react";
import jwt from 'jsonwebtoken';
import Swal from "sweetalert2";

// const AppContext = createContext()
// export default AppContext


//////////////////////////////////////
export const AuthContext = createContext();


export function ueAuth(){
    const auth = useContext(AuthContext)
    if (!auth){
        return(null)

    }
    return auth // {token, user, login}
}
//////////////////////
const baseUrl = process.env.NEXT_PUBLIC_URL


export function AuthProvider(props){

    const [state, setState] = useState({
        token : null,
        user : null,
        login,
        logout
    })

    async function login(username,password){
        const url = "https://back-end-git-ibraheem-deploy-blog-blender.vercel.app/api/token/"
        const options={
                method : "POST",
                body : JSON.stringify({username,password}),
                headers :{"Content-Type": "application/json"}

        }
        const response = await fetch(url,options )
        const data = await response.json()
        const decodedToken = jwt.decode(data.access)
        console.log(decodedToken,"DECODED TOKEN")
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
        }
        else{
            console.log(data);
            Swal.fire({
                icon: 'error',
                title: 'Something went wrong!',
                text: `${data.password?"password: "+ data.password:""} ${data.username?"username: "+data.username:""}`
            })
        }
    }
    function logout(){
        const newState={
            token : null, 
            user : null
        }
        setState(prevState=> ({...prevState,... newState}));
        localStorage.setItem("authData",JSON.stringify(state))
    }

    // TODO add token refresh function
    useEffect(()=>{
        const authDataLocal = localStorage.getItem("authData")
        if(authDataLocal)
            {
                const parsedLocalAuthData = JSON.parse(authDataLocal)
                if (parsedLocalAuthData.token) {
                    setState(prevState=> ({...prevState,...parsedLocalAuthData}));
                }
            }
    },[])
    return(
        <AuthContext.Provider value={state}>
            {props.children}
        </AuthContext.Provider>
    )

}