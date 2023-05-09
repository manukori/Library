import { useState } from "react";
import {useNavigate} from "react-router-dom";
import "../styles/login.css"


const Login = () => {
    let [email,setEmail]=useState("")
    let [password,setPassword]=useState("")
    let navigate=useNavigate()

    let submit=(e)=>{
        e.preventDefault()
        if (email=="admin@gmail.com" && password==1234) {
            navigate('/admin')
        } else {
            alert('invalid Credentials')
        }
    }
    return ( 
        <section>
        <div className="bg"></div>
        <div className="login">
                <h1>USER LOGIN</h1>
            <form action="" onSubmit={submit}>
                <input value={email} onChange={(e)=>setEmail(e.target.value)} type="email" placeholder="Enter Email"/><br />
                <input value={password} onChange={(e)=>setPassword(e.target.value)} type="password" placeholder="Enter Password"/><br />
                <button>LOG IN</button>
            </form>
            <p className="text">―――Or Login Using―――</p>

            <div className="link">
                <div className="facebook"></div>
                <div  className="google"></div>
            </div>
       </div> 
    </section>   
       
    );
}
 
export default Login;