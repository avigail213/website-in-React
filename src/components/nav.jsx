import { useContext } from "react"
import { Link, Outlet, useEffect } from "react-router-dom"
import RecipesContext from "../ourContext"
import {HiUser} from 'react-icons/hi'
import {BsHouseDoorFill} from 'react-icons/bs'
import {FiLogIn} from 'react-icons/fi'
const Nav=()=>{
const login=useContext(RecipesContext).login

return <>
<nav class="navbar navbar-inverse">
  <div class="container-fluid">
    <div class="navbar-header">
      <button type="button" class="navbar-toggle" data-toggle="collapse" data-target="#myNavbar">
        <span class="icon-bar"></span>
        <span class="icon-bar"></span>
        <span class="icon-bar"></span>                        
      </button>
      <a class="navbar-brand" href="#">SiteRecipes</a>
    </div>
    <div class="collapse navbar-collapse" id="myNavbar">
      <ul class="nav navbar-nav">
        <li><Link to="/myhome"><BsHouseDoorFill></BsHouseDoorFill>Home Page</Link></li>  
      {/* <li><Link to="/mymoredetails">More details</Link></li>  */}
      {/* <li><Link to="/mylogin">Login</Link></li> */}
      {/* <li><Link to="/mysignon">Sign on</Link></li> */}
      <li><Link to="/myaddr">Add Recipe</Link></li>
      <li><Link to="/mylistusers">List Users</Link></li>
      </ul>
      <ul class="nav navbar-nav navbar-right">
        <li><Link to="/mysignon"><span><HiUser></HiUser>Sign Up</span></Link></li>
        <li type="button" data-toggle="modal" data-target="#myModal"><Link to="/mylogin"><span ></span>{login==null?<p><FiLogIn></FiLogIn> Login</p>:<p>{login.name}</p>}</Link></li>
        
      </ul>
    </div>
  </div>
</nav>
{/* class="glyphicon glyphicon-user" Sign Up*/}
{/* class="glyphicon glyphicon-log-in" Login */}
</>
}
export default Nav