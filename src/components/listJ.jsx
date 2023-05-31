import React, { useContext} from 'react'
import RecipesContext from '../ourContext'
const ListJ = () => {
    const listuser=useContext(RecipesContext).myuser
    const login=useContext(RecipesContext).login
    debugger
    console.log(login);
    return <div>
      {login==null || !login.isMnager?
      <p class="alert alert-danger">
      <strong>Sorry!</strong> You are'nt the manager <a href="#" class="alert-link">You con't see the userlist</a>
      </p>:<p className='container'>
      <table className='table' style={{color:'white'}}>
    <thead>
      <tr>
        <th>Name</th>
        <th>Password</th>
        <th>Address</th>
        <th>Phone</th>
        <th>IsManager</th>
        <th>FavoriteRecipes</th>
      </tr>
    </thead>
    <tbody>
      {listuser?.map((n)=>(
      <tr>
        <td>{n.name}</td>
        <td>{n.id}</td>
        <td>{n.adress}</td>
        <th>{n.phone}</th>
        <th>{n.isMnager==true?<span>true</span>:<span>false</span>} </th>
        <th>{n.favoriteRecipe}</th>
      </tr> 
      ))}
       </tbody> 
    </table> 
      </p>}
      </div>
}

export default ListJ