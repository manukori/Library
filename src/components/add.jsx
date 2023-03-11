import Navbar from "./navbar";
import "../styles/addbooks.css"

const ADD = () => {
    return (    
    <div className="addbook">
        <Navbar/>
        <div className="one">
        <div className="add">
            <h1>ADD BOOKS</h1>
        </div>
        <div className="form">
        <form action="" >
                <label htmlFor="name">TITLE</label> <br/>
                <input type="text" placeholder="TITLE" /><br/>

                <label htmlFor="name">PAGE COUNT</label><br/>
                <input type="text" placeholder="PAGE COUNT"/><br/>

                <label htmlFor="name">AUTHOR</label><br/>
                <input type="text" placeholder="AUTHOR" /><br/>

                <label htmlFor="name">CATEGORY</label><br/>
                <input type="text" placeholder="CATEGORY" /><br/>

                <label htmlFor="name">DESCRIPTION</label><br />
                <input type="text" placeholder="DESCRIPTION"/><br />

                <label htmlFor="name">IMAGE URL</label><br/>
                <input type="text" placeholder="IMAGEURL" /><br/> 
                <button>ADD BOOKS</button>
                <button>DELETE</button>

             </form>
        </div>
        </div>
    </div>
     );
}
 
export default ADD;