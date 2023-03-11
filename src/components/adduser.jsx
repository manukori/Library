import Navbar from "./navbar";
import "../styles/adduser.css"
import { useRef } from "react";

const Adduser = () => {
    let firstname=useRef(null)
    let lastname=useRef(null)
    let email=useRef(null)
    let contact=useRef(null)

    let addUser=(e)=>{
        e.preventDefault()

        let data={
            firstname:firstname.current.value,
            lastname:lastname.current.value,
            email:email.current.value,
            contact:contact.current.value
        }
        fetch("http://localhost:4000/users",{
            method:'POST',
            headers:{'contact-Type':'application.json'},
            body:JSON.stringify(data)
        })
        alert("USER ADDED")
    }
    return ( 
    <div className="adduser">
        <Navbar/>
        <div className="flex">
         <div className="left">
            <h1>ADD USERS</h1>
         </div>
        <div className="list">
            <form action="" onSubmit={addUser}>
                <label htmlFor="text">FIRST NAME</label><br />
                <input ref={firstname} type="text" placeholder="First Name"/><br />

                <label htmlFor="text">LAST NAME</label><br />
                <input ref={lastname} type="text"placeholder="Last Name" /><br />

                <label htmlFor="Email">Email</label><br />
                <input ref={email} type="Email" placeholder="@Email" /><br />

                <label htmlFor="Ph.no">Contact</label><br />
                <input ref={contact} type="tel" placeholder="Contact No." maxLength={10}/><br />
                <button>ADD USER</button>
                
            </form>
        </div>
        </div>
    </div>
     );
}
 
export default Adduser;