import React, { useEffect,} from 'react'
import { useNavigate } from 'react-router-dom'
export default function Home(){
    const navigate = useNavigate();
    const getToken = localStorage.getItem("token")
    //const [userName, setUserName] = useState("")
    //console.log(getToken)
    useEffect(()=>{
        if(!getToken)
        {
            navigate("/login");
        }
        else{
            const verifyData={
                "token":getToken
            }
            fetch('http://127.0.0.1:2610/verify_token',{
                method:"POST",
                body:JSON.stringify(verifyData),
                headers:{'Content-Type':'application/json'}
            }).then((res)=>res.json())
              .then((result)=>{
                //console.log(result.email)
                //setUserName(result.email);
              }).catch((err)=>{
                console.log(err)
              })  
        }
    })
    const logout =()=>{
        localStorage.removeItem("token")
        navigate("/user_registration");
    }
    return(
        <>
            <h1>Home Page</h1>
            {/* <p>{userName}</p> */}
            <button onClick={logout}>Logout</button>
        </>
    )
    
};
