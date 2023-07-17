import React, { useState } from 'react'
import {
  AppBar,
  Toolbar,
  IconButton,
  Button,
  Menu,
  MenuItem,
  useMediaQuery,
} from '@mui/material'
import { Menu as MenuIcon, GitHub, LinkedIn } from '@mui/icons-material'
import { Link } from 'react-router-dom'

const MyAppBar: React.FC = () => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null)
  const isDesktop = useMediaQuery('(min-width: 960px)')

  const handleMenuOpen = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget)
  }

  const handleMenuClose = () => {
    setAnchorEl(null)
  }

  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      open={Boolean(anchorEl)}
      onClose={handleMenuClose}
      anchorOrigin={{
        vertical: 'bottom',
        horizontal: 'left',
      }}
      transformOrigin={{
        vertical: 'top',
        horizontal: 'left',
      }}
      sx={{
        marginTop: '16px',
        width: '200px',
      }}
    >
      <MenuItem onClick={handleMenuClose}>
        <Link className="link" to="/my-works-page">
          My Works
        </Link>
      </MenuItem>
      <MenuItem onClick={handleMenuClose}>
        <Link className="link" to="/bot">
          Telegram Bot
        </Link>
      </MenuItem>
      <MenuItem onClick={handleMenuClose}>Резюме</MenuItem>
    </Menu>
  )

  return (
    <AppBar
      position="absolute"
      color="transparent"
      elevation={0}
      sx={{
        top: 0,
        left: 0,
        width: '70%',
        margin: '0 auto',
        borderRadius: '20px',
        backdropFilter: 'blur(20px)',
        backgroundColor: 'rgba(255, 255, 255, 0.2)',
        marginTop: '20px',
      }}
    >
      <Toolbar>
        {isDesktop ? (
          <Button
            color="inherit"
            sx={{ color: '#ffffff', '&:hover': { color: '#b5895a' } }}
            onClick={handleMenuOpen}
            startIcon={<MenuIcon />}
          >
            Portfolio
          </Button>
        ) : (
          <IconButton color="inherit" onClick={handleMenuOpen}>
            <MenuIcon />
          </IconButton>
        )}

        {isDesktop && renderMenu}
        <div style={{ flexGrow: 1 }}></div>

        <Link className="link" to="/">
          <img
            src="./../images/logo-portfolio.png"
            alt="Logo"
            style={{ height: '50px', marginRight: '16px' }}
          />
        </Link>
        <div style={{ flexGrow: 1 }}></div>
        <IconButton
          color="inherit"
          href="https://github.com/evangelipeep"
          target="_blank"
          rel="noopener"
        >
          <GitHub sx={{ color: '#b5895a' }} />
        </IconButton>
        <IconButton
          color="inherit"
          href="https://www.linkedin.com/"
          target="_blank"
          rel="noopener"
        >
          <LinkedIn sx={{ color: '#b5895a' }} />
        </IconButton>
      </Toolbar>

      {!isDesktop && renderMenu}
    </AppBar>
  )
}

export default MyAppBar
