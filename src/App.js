import { BrowserRouter,Routes,Route} from 'react-router-dom';
import Login from"./components/login"
import Admin from "./components/admin"
import './App.css';
import BookList from './components/booklist';
import Addbook from "./components/addbooks"
import Adduser from './components/adduser';
import Readbook from './components/readmore';
import Userlist from './components/userlist';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route element ={<Login/>}path="/"/>
          <Route element={<Admin/>}path="/admin"/>
          <Route element={<BookList/>}path="/book-list"/>
          <Route element={<Addbook/>}path="/add-book"/>
          <Route element={<Adduser/>} path="/add-user"/>
          {/* <Route element={<Userlist/>}path="/user-list"/> */}
          <Route element={<Userlist/>} path="/user-list"/>
          <Route element={<Readbook/>} path="/book-list/:id"/>



        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
