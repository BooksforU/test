import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import '../../css/Navbar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartArrowDown, faTrashAlt } from '@fortawesome/free-solid-svg-icons';

export default class Navbar extends Component {
    render() {
        return (
      <header className="">

          <nav className="header ">
         
               {/* <div className="logo ">
                 <Link to="/">
                   Medilife
                 </Link>
               </div> */}
               <ul className="main-nav">
               <li>
                   <Link to="/" className="a">
                     <img src="https://image.flaticon.com/icons/png/512/33/33777.png" height="50" width="50"/>
                   </Link>
         
                 </li>
                 <li>
                   
         
                 </li>
                 <li>
                   <Link to="/add"  className="a">
                     Add
                   </Link>
         
                 </li>
                 <li>
                   <Link to="/equipment"  className="a">
                     Medical Equipment
                   </Link>
         
                 </li>
                 <li>
                   <Link to="/cart"  className="a">
                   <h2 className="p-1">
                      <FontAwesomeIcon className="cart-icon" icon={faCartArrowDown} />
                      <span>Cart</span>
                    </h2>
                   </Link>
         
                 </li>
               </ul>
               
             </nav>
                         
      </header>      
            
        )
    }
}
