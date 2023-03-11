import Navbar from "./navbar";
import {useState, useEffect} from "react"


const UserList = () => {
    let [user,setUser]=useState([])
    useEffect(() => {
        let fetchData=async() => {
            let response=await fetch(" http://localhost:4000/users")
            let data =await response.json()
            setUser(data)
        }
        fetchData()
    })
    let deleteUser=(id,title)=>{
        fetch(`http://localhost:4000/user/${id}`,{
            method:'DELETE'
        })
        alert(`${title}has been deleted`)
    }
    return ( 
    <div className="userlist">
        <Navbar/>
        <div className="user-list">
            {user.map(data=>(
                <div className="user">
                    <div className="first">
                        <h1>{data.firstname}</h1>
                    </div>
                    <div className="card-body">
                        <h3> first name:{data.firstname}</h3>
                        <p>last name: {data.lastname}</p>
                        <p>Email:{data.email}</p>
                        <p>Contace:{data.contact}</p>
                    <div className="footer">
                        <button onClick={()=>deleteUser(data.id,data.title)}>REMOVE</button>
                    </div>
                    </div>
                </div>
            ))}
        </div>
    </div> 
    );
}
 
export default UserList;