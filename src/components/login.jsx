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
            {/* <div className="image">
            <img src="https://images.pexels.com/photos/1907785/pexels-photo-1907785.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" style={{width:"300px",height:"500px"}} />
            </div> */}
             <h1>LOGIN</h1>
                <form action="" onSubmit={submit}>
                <input value={email} onChange={(e)=>setEmail(e.target.value)} type="email" placeholder="Enter Email"/><br />
                <input value={password} onChange={(e)=>setPassword(e.target.value)} type="password" placeholder="Enter Password"/><br />
                <button>LogIn</button>
            </form>
            {/* <div className="login_form">
               
          </div> */}
       </div> 
    </section>   
       
    );
}
 
export default Login;