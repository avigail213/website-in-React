import axios from "axios"
import { useState , useEffect, useRef, useContext} from "react"
import { Link, Outlet } from "react-router-dom"
import RecipesContext from "../ourContext"
import {FiX} from "react-icons/fi"

const LoginJ = () => {

  let myname=useRef(null)
  let mypass=useRef(null)
  const login=useContext(RecipesContext).login
  const setlogin=useContext(RecipesContext).setlogin
  const loginUser=()=>{
  axios.get(`http://localhost:1234/Users/getbyid/${document.getElementById("passwordI").value}/${document.getElementById("nameI").value}`).then(j=>setlogin(j.data[0]))
}
const check=()=>{
  
  let y=myname.current
  let b=mypass.current
  if(y.value=="")
    y.style.borderColor="red"
  else
    y.style.borderColor="black"

  if(b.value=="")
    b.style.borderColor="red"
  else
    b.style.borderColor="black"

  if(b.value!="" && y.value!="")
  {
    y.style.borderColor="black"
    b.style.borderColor="black"
    loginUser()
  }
    
}

  return <div>
      {/* <br></br>
      <div class="form-group">
      <div class="col-sm-10">          
      <input ref={myname} type='text' id="nameI" placeholder='Enter name*'></input>
      </div>
      </div>
      <br></br>
      <div class="form-group">
      <div class="col-sm-10">          
      <input ref={mypass} type='password' id="passwordI" placeholder='Enter password*'></input> 
      </div>
      </div>
      <br></br>
      <div class="form-group">        
          <div class="col-sm-offset-0 col-sm-10">
          <button type='button' class="btn btn-danger" onClick={()=>check()}>Login {login==null?<span className="badge">❌</span>:<span className="badge">✔</span>}</button>
          </div>
        </div>
    </div> */}
    <div class="container">
  {/* <button type="button" class="btn btn-info btn-lg" data-toggle="modal" data-target="#myModal">Open Modal</button> */}

  <div class="modal fade" id="myModal" role="dialog">
    <div class="modal-dialog">
    
      <div class="modal-content">
        <div class="modal-header">
          <button type="button" class="close" data-dismiss="modal">&times;</button>
          <h4 class="modal-title">Good to see you again!</h4>
        </div>
        <div class="modal-body">
        <div class="form-group">
      <div class="col-sm-10">          
      <input ref={myname} type='text' id="nameI" placeholder='Enter name*'></input>
      </div>
      </div>
      <br></br>
      <div class="form-group">
      <div class="col-sm-10">          
      <input ref={mypass} type='password' id="passwordI" placeholder='Enter password*'></input> 
      </div>
      </div>
      <br></br>
      <div class="form-group">        
          <div class="col-sm-offset-0 col-sm-10">
          <button type='button' class="btn btn-default" onClick={()=>check()}>Login {login==null?<span className="badge"><FiX></FiX></span>:<span className="badge">✔</span>}</button>
          </div>
        </div>
        </div>
        <br></br>
        
        <div class="modal-footer">
          <button type="button" class="btn btn-default" data-dismiss="modal">Close</button>
        </div>
      </div>
  
    </div>
  </div>
  
</div>
    </div>
  
}

export default LoginJ

			