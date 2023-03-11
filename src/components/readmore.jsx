import Navbar from "./navbar";
import {useState,useEffect} from "react"
import { useParams } from "react-router-dom";
import "../styles/readmore.css"
const Readmore = () => {
    let parms=useParams()       //to fetch id from url or route
    let [book,setBook]=useState([])

    useEffect(()=>{
        let fetchdata=async() => {
            let response= await fetch(`http://localhost:4000/books/${parms.id}`)
            let data =await response.json()
            setBook(data)
        }
        fetchdata()
    })
    return ( 
    <div className="readbook">
        <Navbar/> 
        <div className="div1">
            <div className="div2">
                <center><h1 style={{textDecoration:"underline"}}>{book.title}</h1></center>
                <img src={book.thumbnailUrl} alt="" />
            </div>
            <div className="div3">
                <h2>AUTHOR: {book.authors}</h2>
                <h3 style={{textDecoration:"underline"}}>SHORT-DESCRIPTION:</h3>
                <h4 style={{textAlign:"justify"}}>{book.shortDescription}</h4>
                <h3 style={{textDecoration:"underline"}}>LONG-DESCRIPTION:</h3>
                <h4 style={{textAlign:"justify"}}>{book.longDescription}</h4>

            </div>
        </div>
        
    </div> );
}
 
export default Readmore;