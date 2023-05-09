import Navbar from "./navbar"
import "../styles/admin.css";


const Admin = () => {
    return ( 
        <section className="section"> 
            <div className="admin">
        <Navbar/>
        <div className="body">
            <img src="https://www.greenwichlibrary.org/wp-content/uploads/2022/09/Books.jpg" alt="" style={{width:"1349px",height:"600px"}}/>
        </div>
        <div className="over">
            <h1 >Where The Crawdads Sing</h1>
            <p>On Friday, March 10 at 7:00 pm, come see the adaptation of the bestselling novel about <br/>a girl raising herself in the marshlands of North Carolina.</p>
            <button>Register Here → </button>
        </div>
    </div>
        <div className="center">
            <img src="https://www.greenwichlibrary.org/wp-content/uploads/2023/02/CafeatGreenwichLibrary-2048x800.jpg" alt="" />
        </div>
        <div className="over2">
            <h4>VISIT</h4>
            <h1>Café at Greenwich Library</h1>
            <p>There’s no need to stroll down the Ave for a meal when you’re at the Library!<br/> Visit our lower level to get coffee, drinks, snacks, and lunch options, locally <br/> sourced from favorites like Happiness Is and Shearwater Coffee.</p>
            <button>Place an Order →</button>
        </div>
        <div className="center2">
            <img src="https://www.greenwichlibrary.org/wp-content/uploads/2016/04/Pattern-BG-Main.svg" alt=""style={{width
        :"1349px"}}/>
        </div>
            <div className="over3">
                <h1>March Events</h1>
                <p>Join us for a full slate of programming and events at the Greenwich Libraries!<br/>These printable  one-page Library calendars are fridge-ready.</p>
                <button>Printable Event Calendars →</button>
            </div>


           <div className="box">
             <div className="over4">
                <h1>Tax Help</h1>
                <p>On Saturday, March 11 from 9:00 am – 2:00 pm,<br/>drop in to get free help with your taxes from the <br/> AARP Foundation.</p>
                <button>Learn More</button>
            </div>

            <div className="over5">
            <h1>Sea Glass Frames</h1>
                <p>On Saturday, March 11 at 10:30 am at Cos Cob<br/> Library, join us to create fun and breezy sea<br/> glass frames!</p>
                <button>Register Here</button>
           </div>
        </div>     
        <div className="box1">
             <div className="over6">
                <h1>Protect Yourself Online</h1>
                <p>On Wednesday, March 15 at 3:00 pm, find out <br /> the ten vital practices to protect your personal <br/> information and finances.</p>
                <button>Mark Your Calendar</button>
            </div>

            <div className="over7">
            <h1>Adopt-a-Shelf</h1>
                <p>On Tuesday, March 14 at 10:30 am, volunteer at <br /> the Library by taking care of a shelf twice a <br /> month at a time that works for you.</p>
                <button>Become a Volunteer</button>
           </div>
        </div>   
        <div className="footer1">
            <h2 style={{fontSize:"30px",fontWeight:"normal",fontFamily:" Gotham SSm A,Gotham SSm B"}}>Michel Embry</h2>
            <p style={{fontFamily:" Gotham SSm A,Gotham SSm B",fontStyle:"italic",fontSize:"25px"}}>I don't have to look far to find treasures.I discover them every <br />time I visit a library..!   </p>
            </div>  
            
    </section>
    );
}
 
export default Admin;