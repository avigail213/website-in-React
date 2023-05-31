import logo from './logo.svg';
import './App.css';
import './bootstrap.css';
import Routing from './components/routing';
import axios from 'axios';
import site3 from './site3.jpg'

function App() {

  return (
 <div>
    {/* <h1>React Project</h1> */}
     {/* <img src='site' className='vertical-align: middle'></img> */}
     {/* <img src="site.jpg" class="img-rounded" alt="Cinque Terre" width="304" height="236"> </img> */}
    <div style={{backgroundImage:`url(${site3})`,height:1000, width:1260,backgroundSize:"cover"}}><Routing></Routing></div>
 </div>
   
  );
}

export default App;
