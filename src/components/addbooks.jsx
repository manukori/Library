import Navbar from "./navbar";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/addbooks.css"

const AddBook = () => {
    let [title,settitle]=useState("")
    let [pageCount,setpageCount]=useState("")
    let [authors,setauthors]=useState("")
    let [categories,setcategories]=useState("")
    let [shortDescription,setshortDescription]=useState("")
    let [thumbnailUrl,setthumbnailUrl]=useState("")

    let navigate=useNavigate()

    let handlesubmit=(e)=>{
        e.preventDefault()
        let data={title,pageCount,authors,categories,shortDescription,thumbnailUrl}
        
        fetch ( "http://localhost:4000/books",{
            method:'POST',
            headers:{'content-Type':'application/json'},
            body:JSON.stringify(data)
        })
        alert("BOOK ADDED")
        navigate('/book-list')
    }
    return ( 
    <div className="addbook">
        <Navbar/>
       <div className="one">
             <div className="add">
            <h1>ADD BOOKS</h1>
        </div>
        <div className="form">
            <form action="" onSubmit={handlesubmit}>
                <label htmlFor="name">TITLE</label><br />
                <input value={title} onChange={(e)=>settitle(e.target.value)} type="texT"placeholder="TITLE" /><br />

                <label htmlFor="name">PAGECOUNT</label><br />
                <input value={pageCount} onChange={(e)=>setpageCount(e.target.value)} type="text"placeholder="PAGE COUNT" /><br />

                <label htmlFor="name">AUTHOR</label><br />
                <input value={authors} onChange={(e)=>setauthors(e.target.value)} type="text"placeholder="AUTHOR" /><br />

                <label htmlFor="name">CATEGORY</label><br />
                <input value={categories} onChange={(e)=>setcategories(e.target.value)} type="text"placeholder="CATEGORY" /><br />

                <label htmlFor="name">DESCRIPTION</label><br />
                <input value={shortDescription} onChange={(e)=>setshortDescription(e.target.value)} type="text" placeholder="DESCRIPTION" /><br />

                <label htmlFor="name">IMAGEURL</label><br />
                <input value={thumbnailUrl} onChange={(e)=>setthumbnailUrl(e.target.value)} type="text"placeholder="IMAGEURL" /><br />
                <button type="submit">ADD BOOKS</button>
                
            </form>
        </div>
       </div>

    </div> );
}
 
export default AddBook;