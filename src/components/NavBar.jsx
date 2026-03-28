import React from "react";
import SearchIcon from "@mui/icons-material/Search";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import PersonIcon from "@mui/icons-material/Person";
import { NavLink } from "react-router-dom";
import Badge from "@mui/material/Badge";
import { useSelector } from "react-redux";

function NavBar() {

  const cartItems = useSelector(state => state.cart.list)
  const favItems = useSelector(state => state.fav?.list || [])

  return (
    <header>
      <nav className="nav">
        <NavLink to="/Products"><h3>Plants</h3></NavLink>

        <NavLink to="/">Home</NavLink>
        <NavLink to="/Products">Products</NavLink>
        <NavLink to="/About">About Us</NavLink>
        <NavLink to="/Contact">Contact Us</NavLink>

        <div className='nav-icons'>
          <SearchIcon />

          <NavLink to="/Cart">
            <Badge badgeContent={cartItems.length} color="error">
              <ShoppingCartIcon />
            </Badge>
          </NavLink>

          <NavLink to="/Fav">
            <Badge badgeContent={favItems.length} color="error">
              <FavoriteBorderIcon />
            </Badge>
          </NavLink>
          <NavLink to="/Login">
          <PersonIcon />
          </NavLink>
          
        </div>
      </nav>

      <div className="Hero">
        <h1>Bonsai</h1>
        <p>
          Discover everything you need to know about your plants,
          treat them with kindness and they will take care of you.
        </p>
        <NavLink to="/Products">
          <button>Explore More</button>
        </NavLink>
      </div>

      <img className="hero-img" src="hero.png" alt="Bonsai" />
    </header>
  );
}

export default NavBar;