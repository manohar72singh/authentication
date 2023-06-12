import React, { useEffect } from 'react'

export default function About() {
    const getToken = localStorage.getItem("token")
    useEffect(()=>{
        if(!getToken){
            console.log("token not found")
        }
        else
        {
            const verifyData ={
                "token": getToken
            }
            fetch('http://127.0.0.1:2610/about',{
                method:"POST",
                body:JSON.stringify(verifyData),
                headers:{'Content-Type':'application/json'}
            }).then((res)=>res.json())
            .then((result)=>{

            })
            .catch((err)=>{
                console.log(err)
            })
        }
    })
  return (
    <>
        <h1>About Us</h1>
    </>
  )
}
