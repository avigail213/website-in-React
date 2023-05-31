import axios from 'axios'
import React, { useContext, useRef, useState } from 'react'
import RecipesContext from '../ourContext'
const SignOnJ = () => {
  let myN=useRef(null)
  let myD=useRef(null)
  let myL=useRef(null)
  let myDu=useRef(null)
  let myA=useRef(null)
  let myI=useRef(null)
  const myuser=useContext(RecipesContext).myuser
  const setmyuser=useContext(RecipesContext).setmyuser
  const login=useContext(RecipesContext).login
  

  const add=()=>{
    axios.put('http://localhost:1234/Users/addUser',myuser).then(l=>{setmyuser(l.data)},alert("Added successfully"))
  }
  const check=(k)=>{
    k.preventDefault()
    let a=myN.current
    let b=myD.current
    let c=myA.current
    let d=myDu.current
    let e=myI.current
    let f=myL.current
    if(a.value=="")
    a.style.borderColor="red"
    else
      a.style.borderColor="black"
    if(b.value=="")
      b.style.borderColor="red"
    else
      b.style.borderColor="black"
    if(c.value=="")
      c.style.borderColor="red"
    else
      c.style.borderColor="black"
    if(d.value=="")
      d.style.borderColor="red"
    else
      d.style.borderColor="black"
    if(f.value=="")
      f.style.borderColor="red"
    else
      f.style.borderColor="black"
    if(a.value!="" && b.value!="" && c.value!="" && d.value!="" && f.value!="")
    {
      add()
      a.value=""
      b.value=""
      c.value=""
      d.value=""
      f.value=""
      e.value=""
      e.style.borderColor="black"
    }
  
  }
  
  return (
  // <div class="col-sm-10">
  //   <input type='text' class="form-control" placeholder='Enter name' onChange={(e)=>setmyuser({...myuser,name:e.target.value})}></input>
  //   <input type='text' placeholder='Enter id' onChange={(e)=>setmyuser({...myuser,id:e.target.value})}></input>
  //   <input type='text' placeholder='Enter address' onChange={(e)=>setmyuser({...myuser,adress:e.target.value})}></input>
  //   <input type='text' placeholder='Enter phone' onChange={(e)=>setmyuser({...myuser,phone:e.target.value})}></input>
  //   <input type='text' placeholder='Enter isManger' onChange={(e)=>setmyuser({...myuser,isMnager:e.target.value})}></input>
  //   <input type='text' placeholder='Enter favoriteRecipes' onChange={(e)=>setmyuser({...myuser,favoriteRecipe:e.target.value})}></input>
  //   <div class="col-sm-offset-2 col-sm-10">
  //       <button type="submit" class="btn btn-default" onClick={()=>add()}>Save</button>
  //   </div>
  // </div>
  <div class="container">
  <form class="form-horizontal">
    <div class="form-group">
      <div class="col-sm-8" style={{marginLeft:150}}>
      <input ref={myN} type='text' class="form-control" placeholder='Enter name' onChange={(e)=>setmyuser({...myuser,name:e.target.value})}></input><br></br>  
      <input ref={myA} type='text' class="form-control" placeholder='Enter id' onChange={(e)=>setmyuser({...myuser,id:e.target.value})}></input><br></br>  
      <input ref={myD} type='text' class="form-control" placeholder='Enter address' onChange={(e)=>setmyuser({...myuser,adress:e.target.value})}></input><br></br>           
      <input ref={myDu} type='text' class="form-control" placeholder='Enter phone' onChange={(e)=>setmyuser({...myuser,phone:e.target.value})}></input><br></br>           
      {login!=null && login.isMnager?<div><input ref={myI} type='text' class="form-control" placeholder='Enter isManger' onChange={(e)=>setmyuser({...myuser,isMnager:e.target.value})}></input><br></br></div>:<span></span>}           
      <input ref={myL} type='text' class="form-control" placeholder='Enter favoriteRecipes' onChange={(e)=>setmyuser({...myuser,favoriteRecipe:e.target.value})}></input><br></br>         
      <div class="col-sm-offset-5 col-sm-10">
        <button type="submit" class="btn btn-default" onClick={(k)=>check(k)}>Save</button>
      </div>
      </div>
    </div>
  </form>
</div>
  )
}

export default SignOnJ