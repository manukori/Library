import Navbar from "./navbar";
import '../styles/userlist.css'
import { useState, useEffect } from "react";

const Userlist = () => {
  let [users, setUser] = useState([]);

  useEffect(() => {
    let fetchData = async () => {
      let response = await fetch(" http://localhost:4000/users");
      let data = await response.json();
      setUser(data);
    };


    fetchData();
  })
  let deleteUser = (id,firstname) => {
    fetch(`http://localhost:4000/users/${id}`, {
      method: "DELETE"
    });
    alert(`${firstname} has been deleted`);
  };
  return (
    <div className="userlist">
      <Navbar />

      <div className="user-list">
        {users.map(data => (
          <div className="user">
            {/* <div className="first">
              <h1>{(data.firstname[0])}</h1>
            </div> */}
            <div className="card-body">
                <div className="first">
                <h1 style={{marginLeft:"5px"}}>{data.firstname[0]}</h1>
              <h1>{data.lastname[0]}</h1>
                </div>
              <h3>First Name:{data.firstname}</h3>
              <p>Last Name:{data.lastname}</p>
              <p>Email:{data.email}</p>
              <p>Contact:{data.contact}</p>
              <div className="footer">
                <button onClick={() => deleteUser(data.id,data.title)}>REMOVE</button>
              </div>
            </div>
          </div>
        ))}
      </div>
   
    </div>
  );
};

export default Userlist;
