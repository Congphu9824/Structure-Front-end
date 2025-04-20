import { Close } from '@mui/icons-material';
import MenuIcon from '@mui/icons-material/Menu';
import PersonPinIcon from '@mui/icons-material/PersonPin';
import SearchIcon from '@mui/icons-material/Search';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import IconButton from '@mui/material/IconButton';
import InputBase from '@mui/material/InputBase';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import * as React from 'react';
import { useEffect, useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import Cookies from 'js-cookie'; // Thêm js-cookie

import Login from '../../features/Auth/components/Login';
import Register from '../../features/Auth/components/Register';
import './style.scss';
import ApiUser from '../../api/userApi';

const Mode = {
  LOGIN: 'login',
  REGISTER: 'register',
};

export default function Header() {
  const [anchorEl, setAnchorEl] = useState(null);
  const [openDialog, setOpenDialog] = useState(false);
  const [mode, setMode] = useState(Mode.LOGIN);
  const [scrolled, setScrolled] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(!!Cookies.get('AccessToken')); // Kiểm tra token từ cookies
  const navigate = useNavigate();


  // landing page
  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      setScrolled(isScrolled);
    };

    handleScroll();
    document.addEventListener('scroll', handleScroll, { passive: true });
    return () => {
      document.removeEventListener('scroll', handleScroll);
    };
  }, []);

  
  const handleMenuClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleCloseMenu = () => {
    setAnchorEl(null);
  };

  const handleClickOpen = (selectedMode) => {
    setMode(selectedMode);
    setOpenDialog(true);
    handleCloseMenu();
  };

  const handleCloseDialog = () => {
    setOpenDialog(false);
    setMode('');
  };



  const handleLoginSuccess = () => {
    setIsLoggedIn(true);
    setOpenDialog(false);
    navigate('/'); // Chuyển hướng về trang chủ
  };

  const handleLogout = async () => {
    try {
      // Call the API to log out (removes tokens from backend and cookies)
      await ApiUser.LogOut();
  
      // Update login state and close the menu
      setIsLoggedIn(false);
      handleCloseMenu();
      
      // Navigate to the home page after logout
      navigate('/');
    } catch (error) {
      console.error('Lỗi khi logout:', error);
    }
  };
  
  
  
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar
        position="fixed"
        sx={{
          transition: '0.3s all ease',
          backgroundColor: 'rgba(29, 135, 222, 1)',
          boxShadow: scrolled ? '0 2px 10px rgba(0, 0, 0, 0.1)' : 'none',
          backdropFilter: scrolled ? 'blur(10px)' : 'none',
          backgroundImage: 'none',
          padding: scrolled ? '0' : '10px 0',
        }}
        className={scrolled ? 'scrolled' : ''}
      >
        <Toolbar className="navlink">
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography
            variant="h6"
            component="div"
            sx={{ display: 'flex', alignItems: 'center', flexGrow: 1 }}
          >
            News
            <Box className="search" sx={{ ml: 2 }}>
              <Box className="search-icon-wrapper">
                <SearchIcon />
              </Box>
              <InputBase
                className="styled-input-base"
                placeholder="Search…"
                inputProps={{ 'aria-label': 'search' }}
              />
            </Box>
          </Typography>

          <NavLink to="/" className="navlink__register">
            <Button color="inherit">HOME</Button>
          </NavLink>

          <NavLink to="/about" className="navlink__login">
            <Button color="inherit">ABOUT</Button>
          </NavLink>

          <NavLink to="/contact" className="navlink__userProfile">
            <Button color="inherit">CONTACT</Button>
          </NavLink>

          <Button color="inherit" onClick={handleMenuClick}>
            <PersonPinIcon />
          </Button>
        </Toolbar>
      </AppBar>

      <Menu anchorEl={anchorEl} open={Boolean(anchorEl)} onClose={handleCloseMenu}>
        {isLoggedIn
          ? [
              <MenuItem key="profile" onClick={() => navigate('/profile')}>Profile</MenuItem>,
              <MenuItem key="logout" onClick={handleLogout}>Logout</MenuItem>,
            ]
          : [
              <MenuItem key="login" onClick={() => handleClickOpen(Mode.LOGIN)}>Login</MenuItem>,
              <MenuItem key="register" onClick={() => handleClickOpen(Mode.REGISTER)}>Register</MenuItem>,
            ]}
      </Menu>

      <Dialog
        open={openDialog}  onClose={handleCloseDialog} fullWidth
        className="dialog" aria-labelledby="dialog-title" aria-describedby="dialog-description" >
        <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
          <IconButton onClick={handleCloseDialog} aria-label="Close dialog">
            <Close />
          </IconButton>
        </div>
        {mode === Mode.REGISTER ? (
          <>
            <Register
              onSuccess={() => {
                setOpenDialog(false);
              }}
              onSubmit={(data) => {
                console.log('Dữ liệu đăng ký:', data);
              }}
            />
            <Button
              className="dialog__loginHere"
              variant="text"
              onClick={() => setMode(Mode.LOGIN)}
            >
              Already have an account? Login here
            </Button>
          </>
        ) : (
          <>
            <Login onSubmit={handleLoginSuccess} />
            <Button
              className="dialog__RegisterHere"
              variant="text"
              onClick={() => setMode(Mode.REGISTER)}
            >
              Don't have an account? Register here
            </Button>
          </>
        )}
      </Dialog>
    </Box>
  );
}