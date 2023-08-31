import { createContext,useContext,useState } from "react";
import jwt from 'jsonwebtoken';

const AppContext = createContext()
export default AppContext


//////////////////////////////////////
const AuthContext= createContext()

export function useAuth(){
    const auth = useContext(AuthContext)
    if (!auth){
        return("Error : Empty Auth ")

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
  
        const url = "http://127.0.0.1:8000/api/token/"
        const options={
                method : "POST",
                body : JSON.stringify({username,password}),
                headers :{"Content-Type": "application/json"}

        }
        const response = await fetch(url,options )
        const data = await response.json()
        console.log(data)
        const decodedToken = jwt.decode(data.access)
        console.log(111111111111,decodedToken)

        const newState = {
            token : data,
            user :{
                username :decodedToken.username ,
                email : decodedToken.email ,
                id : decodedToken.user_id, 
            }
        }
        setState(prevState=> ({...prevState,... newState}));
        // setState(newState)
    }
    function logout(){
        const newState={
            token : null, 
            user : null
        }
        setState(prevState=> ({...prevState,... newState}));

    }


    return(
        <AuthContext.Provider value={state}>
            {props.children}

        </AuthContext.Provider>
    )

}