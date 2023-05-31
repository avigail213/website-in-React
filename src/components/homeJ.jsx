import axios from 'axios'
import React, { useContext, useEffect, useState } from 'react'
import { Link, Outlet, useNavigate } from 'react-router-dom'
import RecipesContext from '../ourContext'


const HomeJ = () => {
    let myrecipe=useContext(RecipesContext).listrecipe
    let nav=useNavigate()
  const moreD=(l)=>{
    nav(`/mymoredetails/${l._id}`)
    //<Link to={}></Link>
  }
  return  <div className='row text-center'>
      {myrecipe?.map(n=><div  ><div className='col-sm-3'><div className='thumbnail' style={{width:220, height:270, backgroundColor:'white', borderColor:'black'}}><p  key={n.id}><div >   
      <img src={n.pic} width="200" height="160"></img>
      <p style={{color:'black'}}><strong>{n.name}</strong></p>
      <button class="btn" style={{color:'white', backgroundColor:'black'}} onClick={(e)=>moreD(n)}>More details</button></div><br></br></p></div></div></div>)}
      {/*<Outlet ></Outlet> */}
      </div>
}

export default HomeJ