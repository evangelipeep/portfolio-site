import React, { useState } from 'react'
import {
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  Button,
  Menu,
  MenuItem,
  useMediaQuery,
} from '@mui/material'
import { Menu as MenuIcon } from '@mui/icons-material'

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
      <MenuItem onClick={handleMenuClose}>Проекты</MenuItem>
      <MenuItem onClick={handleMenuClose}>Навыки</MenuItem>
      <MenuItem onClick={handleMenuClose}>Резюме</MenuItem>
    </Menu>
  )

  return (
    <AppBar
      position="static"
      color="transparent"
      elevation={0}
      sx={{
        width: '70%',
        margin: '0 auto',
        borderRadius: '20px',
        backdropFilter: 'blur(20px)',
        backgroundColor: 'rgba(255, 255, 255, 0.5)',
        marginTop: '20px',
      }}
    >
      <Toolbar>
        <img
          src="./../images/logo.png"
          alt="Logo"
          style={{ marginRight: '16px' }}
        />

        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          evangelipeep
        </Typography>

        {isDesktop ? (
          <Button
            color="inherit"
            sx={{ color: '#ffffff', '&:hover': { color: '#edae61' } }}
            onClick={handleMenuOpen}
            endIcon={<MenuIcon />}
          >
            Портфолио
          </Button>
        ) : (
          <IconButton color="inherit" onClick={handleMenuOpen}>
            <MenuIcon />
          </IconButton>
        )}

        {isDesktop && renderMenu}
      </Toolbar>
      {!isDesktop && renderMenu}
    </AppBar>
  )
}

export default MyAppBar
