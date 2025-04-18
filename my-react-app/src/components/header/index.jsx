import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { NavLink } from 'react-router-dom';
import PersonPinIcon from '@mui/icons-material/PersonPin';
import SearchIcon from '@mui/icons-material/Search';
import InputBase from '@mui/material/InputBase';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Dialog from '@mui/material/Dialog';
import RegisterForm from '../../features/Auth/components/Registerform';
import LoginForm from '../../features/Auth/components/LoginForm';
import CodeIcon from '@mui/icons-material/Code';
import { Close } from '@mui/icons-material';
import { useEffect, useState } from 'react';

import './style.scss';

// Enum để xác định chế độ login/register
const Mode = {
  LOGIN: 'login',
  REGISTER: 'register',
};

export default function Header() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [openDialog, setOpenDialog] = React.useState(false);
  const [mode, setMode] = React.useState(Mode.LOGIN); // default: login
  const [scrolled, setScrolled] = useState(false);

  // Hiệu ứng cuộn
  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      setScrolled(isScrolled); // Không cần kiểm tra !== scrolled nữa
    };
  
    // Gọi 1 lần khi component mount để đặt đúng trạng thái ban đầu
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
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar   position="fixed"
                sx={{
                  transition: '0.3s all ease',
                  backgroundColor: 'rgba(29, 135, 222, 1)', // Luôn màu xanh
                  boxShadow: scrolled ? '0 2px 10px rgba(0, 0, 0, 0.1)' : 'none', // Chỉ nổi khi scroll
                  backdropFilter: scrolled ? 'blur(10px)' : 'none', // Chỉ blur khi scroll
                  backgroundImage: 'none',
                  padding: scrolled ? '0' : '10px 0',
                }}
                className={scrolled ? 'scrolled' : ''} >
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

          <NavLink to="/Register" className="navlink__register">
            <Button color="inherit">HOME</Button>
          </NavLink>

          <NavLink to="/Login" className="navlink__login">
            <Button color="inherit">ABOUT</Button>
          </NavLink>

          <NavLink to="/UserProfile" className="navlink__userProfile">
            <Button color="inherit">CONTACT</Button>
          </NavLink>

          <Button color="inherit" onClick={handleMenuClick}>
            <PersonPinIcon />
          </Button>
        </Toolbar>
      </AppBar>

      {/* Menu dropdown */}
      <Menu
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={handleCloseMenu}
      >
        <MenuItem onClick={() => handleClickOpen(Mode.LOGIN)}>Login</MenuItem>
        <MenuItem onClick={() => handleClickOpen(Mode.REGISTER)}>Register</MenuItem>
        <MenuItem>Logout</MenuItem>
      </Menu>

      {/* Dialog hiển thị form login hoặc register */}

      <Dialog open={openDialog} onClose={handleCloseDialog} fullWidth className="dialog" 
      >
      <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
          <IconButton onClick={handleCloseDialog}>
            <Close />
          </IconButton>
        </div>
        {mode === Mode.REGISTER ? (
          <>
            <RegisterForm
              onSubmit={(data) => {
                console.log('Gửi dữ liệu tới API:', data);
                setOpenDialog(false);
              }}
            />
            <Button className="dialog__loginHere" variant="text" onClick={() => setMode(Mode.LOGIN)}>
              Already have an account? Login here
            </Button>
          </>
        ) : (
          <>
            <LoginForm
              onSubmit={(data) => {
                console.log('Dữ liệu đăng nhập:', data);
                setOpenDialog(false);
              }}
            />
            <Button className="dialog__RegisterHere" variant="text" onClick={() => setMode(Mode.REGISTER)}>
              Don't have an account? Register here
            </Button>
          </>
        )}
      </Dialog>
    </Box>
  );
}
