import Navbar from "./navbar";
import {useState, useEffect} from "react"
import "../styles/booklist.css"
import { Link } from "react-router-dom";


const BookList = () => {
    let [book,setBook]=useState([])
    useEffect(() => {
        let fetchData=async() => {
            let response=await fetch(" http://localhost:4000/books")
            let data =await response.json()
            setBook(data)
        }
        fetchData()
    });
    let deleteBook=(id,title)=>{
        fetch(`http://localhost:4000/books/${id}`,{
            method:'DELETE'
        })
        alert(`${title} has been deleted`)
    }
    return ( 
    <div className="Booklist">
        <Navbar/>
        <div className="books-list">
            {book.map(data=>(
                <div className="book">
                    <img src={data.thumbnailUrl} alt="" />
                    <div className="card-body">
                        <h1>{data.title}</h1>
                        <h3>Page Count: {data.pageCount}</h3>
                        <p>written by: {data.authors}</p>
                        <p>Catagory: {data.categories}</p>
                    <div className="footer">
                        <Link to={`/book-list/${data.id}`} style={{fontSize:"15px",textDecoration:"none",color:"black",border:"2px solid black",borderRadius:"4px",padding:"2px 3px",backgroundColor:"green",fontWeight:"bold"}}>READ MORE</Link>
                        <button onClick={()=>deleteBook(data.id,data.title)}>REMOVE</button>
                    </div>
                    </div>
                </div>
            ))}
        </div>
    </div> 
    );
}
 
export default BookList;