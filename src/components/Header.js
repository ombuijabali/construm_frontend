
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import {
  AppBar,
  Toolbar,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemText,
  Typography,
  Box
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import logo from './logo.png';
import './Header.css';

const Header = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [scrolled]);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <div>
      <List>
        {[
          { label: 'Home', path: '/' },
          { label: 'Services', path: '/services' },
          { label: 'About', path: '/about' },  // Fixed path to '/about'
          //{ label: 'Projects', path: '/projects' },
          //{ label: 'Blogs', path: '/blogs' },
          { label: 'Career', path: '/career' },  // Fixed path to '/career'
          { label: 'Contact', path: '/contact' } // Fixed path to '/contact'
        ].map((item) => (
          <ListItem
            button
            component={Link}
            to={item.path}  // Correct path
            onClick={handleDrawerToggle}
            key={item.label}
          >
            <ListItemText primary={item.label} />
          </ListItem>
        ))}
      </List>
    </div>
  );

  return (
    <div className={`header ${scrolled ? 'header--scrolled' : ''}`}>
      <AppBar position="static" color="transparent" elevation={0}>
        <Toolbar sx={{ justifyContent: 'space-between' }}>
          {/* Left side: Logo and Company Name */}
          <Box display="flex" alignItems="center">
            <img src={logo} alt="Construm Geosystems Logo" className="logo" />
 
          </Box>

          {/* Mobile Menu Icon */}
          <IconButton
            color="inherit"
            edge="start"
            aria-label="menu"
            onClick={handleDrawerToggle}
            sx={{ display: { xs: 'block', sm: 'none' }, ml: 2 }}
          >
            <MenuIcon />
          </IconButton>

          {/* Desktop Navigation */}
          <nav className="desktop-nav">
            <ul>
              {[
                { label: 'Home', path: '/' },
                { label: 'Services', path: '/services' },
                { label: 'About', path: '/about' },  // Fixed path
                //{ label: 'Projects', path: '/projects' },
                //{ label: 'Blogs', path: '/blogs' },
                { label: 'Career', path: '/career' },  // Fixed path
                { label: 'Contact', path: '/contact' } // Fixed path
              ].map((item) => (
                <li key={item.label}>
                  <Link to={item.path}>{item.label}</Link>
                </li>
              ))}
            </ul>
          </nav>
        </Toolbar>
      </AppBar>

      {/* Mobile Drawer */}
      <Drawer
        variant="temporary"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        ModalProps={{
          keepMounted: true, // Better open performance on mobile.
        }}
        sx={{
          display: { xs: 'block', sm: 'none' },
          '& .MuiDrawer-paper': { boxSizing: 'border-box', width: 240 },
        }}
      >
        {drawer}
      </Drawer>
    </div>
  );
};

export default Header;
