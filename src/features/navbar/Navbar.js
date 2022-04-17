import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = ({loggedIn = false}) => {
  return (
    <div>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/products">Products</NavLink>
        { loggedIn ? <NavLink to="/user">Account</NavLink> 
          : <NavLink to="/login">Login</NavLink> }
        <NavLink to="/basket">Basket</NavLink>
    </div>
  )
}

export default Navbar