import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import swal from 'sweetalert'
export default function Signup()
{
    const navigate = useNavigate();
    const[name, setName] = useState("");
    const[email, setEmail] = useState("");
    const[password, setPassword] = useState("");
    const[confermPassword, setConfermPassword] = useState("");
    const[error, setError] = useState("");
    const[msgType, setmsgType] = useState("");
    const mailformat = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
    const passw =  /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,15}$/;

    const nameInputHandler=(e)=>{   
        setError("")
        setName(e.target.value);
    }
    
    const emailInputHandler=(e)=>{  
        setError("");      
        setEmail(e.target.value);
    }

    const passwordInputHandler=(e)=>{
        setError("");
        setPassword(e.target.value);
    }
    const confermPasswordHandler=(e)=>{   
        setError("");     
        setConfermPassword(e.target.value);
    }

    const submitHandler = (e)=>{
        e.preventDefault();
        if(name.trim()===""){
            setError("Please Enter First Name");
            setmsgType("alert-danger m-1");
            return;
        }
        
        else if(email.trim() === "")
        {
            setError("Please Enter Email Address");
            setmsgType("alert-danger m-1");
            return;
        }
        else if(!(mailformat.test(email)))
        {
            setError("Please Enter Vallid Email Address");
            setmsgType("alert-danger m-1");
            return;
        }
        else if(password.trim() === "")
        {
            setError("Please Enter Password");
            setmsgType("alert-danger m-1");
            return;
        }
        else if(!(passw.test(password)))
        {
            setError("Please Enter vallid Password");
            setmsgType("alert-danger m-1");
            return;
        }
        else if(confermPassword.trim() ==="")
        {
            setError("Please Enter Re-Password");
            setmsgType("alert-danger m-1");
            return;
        }
        else if(password !== confermPassword)
        {
            setError("Password must be same");
            setmsgType("alert-danger m-1");
            return;
        }
        else{
            const userData = {
                name:name,
                email:email,
                password:password
            }
                fetch('http://127.0.0.1:2610/register',{
                method:"POST",
                body:JSON.stringify(userData),
                headers:{
                    "Content-Type": "application/json"
                }

            }).then((res)=>res.json())
            .then((result)=>{
                setError(result.message)
                setmsgType("alert-success m-1");
            }).catch((err)=>{
                console.log(err)
            })
            setName("")
            setEmail("")
            setPassword("")
            setConfermPassword("")
            swal("Good job!", "You Have Successfully Register !", "success");
            navigate("/login")
        }
    }

    return(
        <>
            <div>
                <div class="container">
                    <div class="row">
                        <div class="col-3"></div>
                        <div class="col-6">
                            <div className={msgType} role="alert">
                                {error}
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-3"></div>
                        <div className="col-6">
                            <div className="card m-1">
                                <div className="card-header">
                                    <h2 className="text-center alert alert-primary">
                                        <i>User Registration</i>
                                    </h2>
                                </div>
                                <form onSubmit={submitHandler}>
                                    <div className="card-body">
                                        <div className="form-group">
                                            <center><i><h4> Name </h4></i></center>
                                            <input type="text"name="name" class="form-control" placeholder="Enter Your Name" value={name} onChange={nameInputHandler} ></input>
                                        </div>
                                        <div className="form-group">
                                            <center><i><h4> Email Id </h4></i></center>
                                            <input type="email"name="email" class="form-control" placeholder="Email" value={email} onChange={emailInputHandler} ></input>
                                        </div>
                                
                                        <div className="form-group">
                                            <center><i><h4>Password </h4></i></center>
                                            <input type="password" placeholder="Password" className="form-control" value={password} onChange={passwordInputHandler}/>
                                        </div>
                                        <div class="form-group">
                                            <center><i><h4>Confirm Password </h4></i></center>
                                            <input type="password" className="form-control" placeholder="Conferm Password" value={confermPassword} onChange={confermPasswordHandler}/>
                                        </div>
                                        <div className="card-footer text-center bg-warning">
                                            <button className="btn btn-success " type="submit">Submit</button>
                                            <p className="text-center">Already have an account.Login? <Link to="/login">Login</Link></p>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}