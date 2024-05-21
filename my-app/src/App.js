
import './App.css';
import Home from './screen/Home';
import {
  BrowserRouter as Router,
   Routes,
    Route 
 } from "react-router-dom";

import Signup from './components/Signup';
import Login from './components/Login';
import { Cartprovider } from './components/ContextReducer';


function App() {
  return (
    <Cartprovider>

    <Router>
   <Routes>
    <Route path='/' element={<Home/>}/>
    <Route path='/login' element={<Login/>}/>
    <Route path='/signup' element={<Signup/>}/>
   
   </Routes>
    </Router> 
    
    </Cartprovider>
  );
}

export default App;
