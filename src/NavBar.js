import React from 'react';
import { Link } from 'react-router-dom';
import { AppBar, Toolbar, IconButton, Typography, Button } from '@material-ui/core';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';

const NavBar = ({ isLoggedIn, isAdmin }) => {
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6">upGrad Eshop</Typography>
        {!isLoggedIn ? (
          <div>
            <Button component={Link} to="/login" color="inherit">
              Login
            </Button>
            <Button component={Link} to="/signup" color="inherit">
              Signup
            </Button>
          </div>
        ) : (
          <div>
            <input type="text" placeholder="Search Products" />
            <Button component={Link} to="/" color="inherit">
              Home
            </Button>
            <Button component={Link} to="/cart" color="inherit">
              Cart
            </Button>
            <Button color="inherit">Logout</Button>
            {isAdmin && <Button component={Link} to="/add-product" color="inherit">Add Product</Button>}
          </div>
        )}
      </Toolbar>
    </AppBar>
  );
};

export default NavBar;
