import * as React from 'react'
import { CssBaseline, Box } from '@mui/material'
import MenuIcon from '@mui/icons-material/Menu'
import { Drawer } from '../../atoms/drawer'
import { SearchBar } from '../searchBar'
import { MenuI } from '../../atoms/menu'
import { CustomModal } from '../../atoms/modal'
import { StyledButton } from '../../atoms/button'
import { CustomText } from '../../atoms/text'
import {
  AppBar,
  LogoBox,
  CustomToolbar,
  SandwichIcon,
  ButtonsBox,
  DrawerHeader,
  MainBox,
  ChildrenMainBox
} from './style'

const Navbar = ({ children }) => {
  const [open, setOpen] = React.useState(false)

  const handleDrawerOpen = () => {
    setOpen(true)
  }

  const handleDrawerClose = () => {
    setOpen(false)
  }

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar position="fixed" open={open}>
        <CustomToolbar>
          <LogoBox>
            <SandwichIcon
              color="inherit"
              aria-label="open drawer"
              onClick={handleDrawerOpen}
              edge="start"
              sx={{
                ...(open && { display: 'none' })
              }}
            >
              <MenuIcon />
            </SandwichIcon>
            <CustomText variant="h6">BooKollection</CustomText>
          </LogoBox>
          <ButtonsBox>
            <StyledButton>Inicio</StyledButton>
            <StyledButton>Sua coleção</StyledButton>
            <StyledButton>Obras</StyledButton>
          </ButtonsBox>
          <CustomModal>
            <SearchBar />
          </CustomModal>
          <MenuI />
        </CustomToolbar>
      </AppBar>
      <Drawer open={open} handleDrawerClose={handleDrawerClose} />
      <MainBox component="main">
        <DrawerHeader />
        <ChildrenMainBox>{children}</ChildrenMainBox>
      </MainBox>
    </Box>
  )
}

export { Navbar }
