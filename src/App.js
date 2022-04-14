import logo from './logo.svg';
import './App.css';
// import { Route,Switch, Link } from 'react-router-dom';
// import {Switch} from "react-router"
import {Route, Routes, BrowserRouter} from "react-router-dom"
import Home from "./Components/MainComponents/Home"
import Login from "./Components/MainComponents/Login"
import Signup from "./Components/MainComponents/Signup"
import Header from "./Components/SubComponents/Header"

export default function App() {

  return (

    <>
      <Header></Header>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/login" element={<Login/>}></Route>
        <Route path="/signup" element={<Signup/>}></Route>
      </Routes>
      </BrowserRouter>
      </>
/*     
        //  <Router>
        //     <div>
        //       <nav>
        //         <ul>
        //           <li>
        //             <Link to="/">Home</Link>
        //           </li>
        //           <li>
        //             <Link to="/login">Login</Link>
        //           </li>
        //           <li>
        //             <Link to="/signup">Signup</Link>
        //           </li>
        //         </ul>
        //       </nav>

        //       <Switch>
        //         <Route path="/">
        //           <Home />
        //         </Route>
        //         <Route path="/abloginout">
        //           <Login />
        //         </Route>
        //         <Route path="/signup">
        //           <Signup />
        //         </Route>
        //       </Switch>
        //     </div>
        //   </Router> */

  );
}


