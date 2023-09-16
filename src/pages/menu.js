import React from 'react'
import './menu.css';import logo from './Logo.png';
import { faHome, faVideo,faTelevision,faTrailer,faLogout} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
function menu() {
  return (<div className='moviebox'>
    <div className='logo'><img src={logo} alt="n"  className="d-inline p-2 "/></div>
     <div className='menu-links '>
      <a href={`/`} className='d-flex flex-row'>
         <div class="p-2 "><FontAwesomeIcon icon={faHome} /></div>
  <div class="p-2">Home</div>
        </a>
           <a href={`/movie`} className='d-flex flex-row'>
         <div class="p-2"><FontAwesomeIcon icon={faVideo}/></div>
  <div class="p-2">Movies</div>
        </a>
               <a href={`/movie`} className='d-flex flex-row'>
         <div class="p-2"><FontAwesomeIcon icon={faTelevision} /></div>
  <div class="p-2">TvSeries</div>
        </a>
       
               <a href={`/movie`} className='d-flex flex-row'>
         <div class="p-2"><FontAwesomeIcon icon={faTrailer}  /></div>
  <div class="p-1">Upcoming</div>
        </a>
       
     
     </div>
   <div className='tickets'><p className='ticket-text'>Play movie quizes
and earn
free tickets</p>
<button className='ticket-button'>Start Playing</button>
</div>
    <div className='logout-menu'><a href=''>Logout</a></div>
      
    
    

</div>
  )
}

export default menu