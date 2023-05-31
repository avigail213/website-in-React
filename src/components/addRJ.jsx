import axios from 'axios'
import React, { useContext, useEffect, useRef, useState } from 'react'
import RecipesContext from '../ourContext'

const AddRJ = () => {
  let myN=useRef(null)
  let myD=useRef(null)
  let myP=useRef(null)
  let myL=useRef(null)
  let myDu=useRef(null)
  let myT=useRef(null)
  let myI=useRef(null)
  let myname=useRef(null)
  let myA=useRef(null)
  const listrecipe=useContext(RecipesContext).listrecipe
  const setlistrecipe=useContext(RecipesContext).setlistrecipe
  const login=useContext(RecipesContext).login
  const [list,setlist]=useState({component:[]})
  const [name,setname]=useState({})
  const [amount, setamount]=useState({})
  // const add=()=>{
  //   let y=listrecipe
  //   axios.put('http://localhost:1234/Recipes/addRecipe',y).then(l=>{setlistrecipe(l.data)},alert("Added successfully"))
  // }
  const add=()=>{

    axios.put('http://localhost:1234/Recipes/addRecipe',list).then(l=>{
      let arr=[...listrecipe,list]
      setlistrecipe(arr)
    })
  }
  const addCom=(e)=>
  {
       e.preventDefault()
       let newItem={name:name,amount:amount}
       setlist({...list,component:[...(list.component),newItem]})
       document.getElementById("name").value=""
       document.getElementById("amount").value=""
  }
  const check=(l)=>{
  
    l.preventDefault()
    let a=myN.current
    let b=myD.current
    let c=myA.current
    let d=myDu.current
    let e=myI.current
    let f=myL.current
    let g=myP.current
    let h=myT.current
    let i=myname.current
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
    if(e.value=="")
      e.style.borderColor="red"
    else
      e.style.borderColor="black"
    if(f.value=="")
      f.style.borderColor="red"
    else
      f.style.borderColor="black"
    if(g.value=="")
      g.style.borderColor="red"
    else
      g.style.borderColor="black"
    if(h.value=="")
      h.style.borderColor="red"
    else
      h.style.borderColor="black"
    if(i.value=="")
      i.style.borderColor="red"
    else
      i.style.borderColor="black"
  
    if(c.value!="" && i.value!="")
    {
      
      addCom();
    }
    if(a.value!="" && b.value!="" && d.value!="" && e.value!="" && f.value!="" && g.value!="" && h.value!="")
    {
      c.style.borderColor="black"
      i.style.borderColor="black"
      add()
      a.value=""
      b.value=""
      c.value=""
      d.value=""
      e.value=""
      f.value=""
      g.value=""
      h.value=""
      i.value=""
    }
    
      
  }

  return (
    <div>
      {login==null?
      <div class="alert alert-warning">
        <strong>Sorry!</strong> You dont login to the site, you can't add recipe.
      </div>:
      <div class="container">
      <form class="form-horizontal">
        <div class="form-group">
          <div class="col-sm-10">
          <input ref={myN} type='text' class="form-control" placeholder='Enter name' onChange={(e)=>setlist({...list,name:e.target.value})}></input><br></br>
          <input ref={myD} type='text' class="form-control" placeholder='Enter description' onChange={(e)=>setlist({...list,description:e.target.value})}></input><br></br>        
          <input ref={myP} type='text' class="form-control" placeholder='Enter pic' onChange={(e)=>setlist({...list,pic:e.target.value})}></input><br></br>         
          <input ref={myL} type='text' class="form-control" placeholder='Enter level' onChange={(e)=>setlist({...list,level:e.target.value})}></input><br></br>          
          <input ref={myDu} type='text' class="form-control" placeholder='Enter duration' onChange={(e)=>setlist({...list,duration:e.target.value})}></input><br></br>      
          <input ref={myT} type='text' class="form-control" placeholder='Enter type' onChange={(e)=>setlist({...list,type:e.target.value})}></input><br></br>       
          <input ref={myI} type='text' class="form-control" placeholder='Enter id' onChange={(e)=>setlist({...list,id:e.target.value})}></input>
          </div>
        </div>
        <div class="form-group">
          <div class="col-sm-4">          
          <input ref={myname} id='name' type='text' class="form-control" placeholder='Enter name' onChange={(e)=>setname(e.target.value)}></input>
          </div>
        </div>
        <div class="form-group">
          <div class="col-sm-4">          
          <input ref={myA} id='amount' type='text' class="form-control" placeholder='Enter amount' onChange={(e)=>setamount(e.target.value)}></input>
          </div>
        </div>
        <div class="form-group">        
          <div class="col-sm-offset-0 col-sm-10">
            <button type="submit" class="btn btn-default" onClick={(e)=>addCom(e)}>SaveComponent</button>
          </div>
        </div>
        <div class="form-group">        
          <div class="col-sm-offset-5 col-sm-10">
            <button type="submit" class="btn btn-default" onClick={(l)=>check(l)}>Save</button>
          </div>
        </div>
        
      </form>
    </div>}
    </div>
  )
}

export default AddRJ