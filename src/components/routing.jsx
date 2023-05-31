import { BrowserRouter, Route, Routes, useParams } from 'react-router-dom'
import Nav from './nav'
import HomeJ from './homeJ';
import Moredetails from './moredetails';
import LoginJ from './loginJ';
import SignOnJ from './signOnJ';
import AddRJ from './addRJ';
import ListJ from './listJ';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { MyProvider } from '../ourContext';

export const Routing = () => {
    const [listrecipe,setlistrecipe]=useState([])
    const [myuser,setmyuser]=useState([])
    const [login,setlogin]=useState(null)
    const [add,setadd]=useState(null)
    const [byid,setbyid]=useState(null)
    // let params=useParams()
    // useEffect(function(){
    //   axios.get(`http://localhost:1234/Recipes/getbyid/${params._id}`).then(l=>{
    //   setbyid(l.data[0])})
    // },[params])
    useEffect(function(){
      axios.get('http://localhost:1234/Recipes/getAll').then(l=>{setlistrecipe(l.data)})
    },[])
    useEffect(function(){
        axios.get('http://localhost:1234/Users/getAll').then(k=>{setmyuser(k.data)})
    },[])
    

    const my={
        listrecipe:listrecipe,
        setlistrecipe:setlistrecipe,
        login:login,
        setlogin:setlogin,
        myuser:myuser,
        setmyuser:setmyuser,
        add:add,
        setadd:setadd,
        byid:byid,
        setbyid:setbyid
    }
  return <MyProvider value={my}>
    <BrowserRouter>
    {/* <Route path='/mynav' element={<Nav></Nav>}></Route> */}
    <Nav></Nav>
    <Routes>
      <Route path="/myhome" element={<HomeJ></HomeJ>}></Route>
      <Route path="mymoredetails/:_id" element={<Moredetails></Moredetails>}></Route>
      
      <Route path="/mylogin" element={<LoginJ></LoginJ>}></Route>
      <Route path="/myaddr" element={<AddRJ></AddRJ>}></Route>
      <Route path="/mysignon" element={<SignOnJ></SignOnJ>}></Route>
      <Route path="/mylistusers" element={<ListJ></ListJ>}></Route>
      
    </Routes>
    </BrowserRouter>
    </MyProvider>
}

export default Routing