import Navbar from "./navbar";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/addbooks.css"

const AddBook = () => {
    let [title,setTitle]=useState("")
    let [pagecount,setPagecount]=useState("")
    let [author,setAuthor]=useState("")
    let [category,setCategory]=useState("")
    let [description,setDescription]=useState("")
    let [imgurl,setImgurl]=useState("")

    let navigate=useNavigate()

    let handlesubmit=(e)=>{
        e.preventDefault()
        let data={title,pagecount,author,category,description,imgurl}
        fetch ( "http://localhost:4000/books",{
            method:'POST',
            header:{'content-type':'application/json'},
            body:JSON.stringify(data)
        })
        alert("BOOK ADDED")
        navigate('/add-book')
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
                <input value={title} onChange={(e)=>setTitle(e.target.value)} type="texT"placeholder="TITLE" /><br />

                <label htmlFor="name">PAGECOUNT</label><br />
                <input value={pagecount} onChange={(e)=>setPagecount(e.target.value)} type="text"placeholder="PAGE COUNT" /><br />

                <label htmlFor="name">AUTHOR</label><br />
                <input value={author} onChange={(e)=>setAuthor(e.target.value)} type="text"placeholder="AUTHOR" /><br />

                <label htmlFor="name">CATEGORY</label><br />
                <input value={category} onChange={(e)=>setCategory(e.target.value)} type="text"placeholder="CATEGORY" /><br />

                <label htmlFor="name">DESCRIPTION</label><br />
                <input value={description} onChange={(e)=>setDescription(e.target.value)} type="text" placeholder="DESCRIPTION" /><br />

                <label htmlFor="name">IMAGEURL</label><br />
                <input value={imgurl} onChange={(e)=>setImgurl(e.target.value)} type="text"placeholder="IMAGEURL" /><br />
                <button>ADD BOOKS</button>
                <button>DELETE</button> 
                
            </form>
        </div>
       </div>

    </div> );
}
 
export default AddBook;