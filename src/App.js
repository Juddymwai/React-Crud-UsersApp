
import { AddUser } from './AddUser';
import './App.css';
import { EditUser } from './EditUser';
import {Home} from "./Home"
import {  Routes, Route } from "react-router-dom"

function App() {
  return (
    <div className="App">

      
       

        <Routes>


        <Route exact path="/" element ={ <Home/>} />
        <Route path="/add" element ={ <AddUser/>} />
        <Route path="/edit" element ={ <EditUser/>} />

        </Routes>
       
    </div>
  );
}

export default App;
