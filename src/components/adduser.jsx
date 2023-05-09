import Navbar from "./navbar";
import "../styles/adduser.css"
import { useRef } from "react";
// import { useNavigate } from "react-router-dom";

const Adduser = () => {
    let firstname=useRef()
    let lastname=useRef()
    let email=useRef()
    let contact=useRef()

    
    // let navigate=useNavigate()
    let addUser=(e)=>{
        e.preventDefault()

        let data={
            firstname:firstname.current.value,
            lastname:lastname.current.value,
            email:email.current.value,
            contact:contact.current.value,
        }
        fetch("http://localhost:4000/users",{
            method:'POST',
            headers:{'content-Type':'application/json'},
            body:JSON.stringify(data),
        })
        alert("USER ADDED")
        // navigate("/user-list")
        
    }
    return ( 
    <div className="adduser">
        <Navbar/>
        <div className="flex">
         <div className="left">
            <h1>ADD USERS</h1>
         </div>
        <div className="list">
            <form action=""  >
                <label htmlFor="name">FIRST NAME</label><br />
                <input ref={firstname} type="text" placeholder="First Name"/><br />

                <label htmlFor="name">LAST NAME</label><br />
                <input ref={lastname} type="text"placeholder="Last Name" /><br />

                <label htmlFor="name">Email</label><br />
                <input ref={email} type="Email" placeholder="@Email" /><br />

                <label htmlFor="name">Contact</label><br />
                <input ref={contact} type="tel" placeholder="Contact No." MaxLength={10}/><br />

                <button onClick={addUser} type="Sign in">ADD USER</button>
                
            </form>
        </div>
        </div>
    </div>
     );
}
 
export default Adduser;