import axios from 'axios'
import { useContext, useEffect, useState } from 'react';
import { useParams} from 'react-router-dom'


const Moredetails = () => {
  const [recipe,setrecipe]=useState()
  let params=useParams()
  
  
  useEffect(function(){
    axios.get(`http://localhost:1234/Recipes/getbyid/${params._id}`).then(l=>{
    setrecipe(l.data[0])})
  },[params])
  return (
    <div>
    <div><div className='text-center' style={{fontSize:40, backgroundColor:'white', height:70, width:1260}}>{recipe?.name}</div></div>
    <div className='container text-center' style={{backgroundImage:`url(${recipe?.pic})`, color:'white'}}>
    <p> <p><strong>Descruption:</strong> {recipe?.description}</p><p><strong>Level:</strong> {recipe?.level}</p>  <p><strong>Duration:</strong> {recipe?.duration}</p>  <p><strong>Type:</strong> {recipe?.type}</p>  <p><strong>Id:</strong> {recipe?.id}</p><p><strong>Components:</strong></p>  
    <p>{recipe?.component.map(item=><span>*  {item.name} {item.amount}<br></br></span>)}</p></p>
    </div>
    </div>
  )
}

export default Moredetails