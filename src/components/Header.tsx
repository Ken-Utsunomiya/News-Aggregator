// import React from "react"

// import { useAppDispatch, useAppSelector } from "../redux/hooks"
// import { selectLanguage, setLanguage } from "../redux/languages/languageSlice"

// const Header = () => {
//   const selectedLanguage = useAppSelector(selectLanguage)
//   const dispatch = useAppDispatch()

//   const handleLanguageChange = (language: string) => {
//     dispatch(setLanguage(language))
//   }

//   return (
//     <div>
//       <div>
//         Header
//       </div>
//       <div>
//         <button
//           onClick={ () => handleLanguageChange("en") }
//           disabled={ selectedLanguage === "en" }
//         >
//           EN
//         </button>
//         <button
//           onClick={ () => handleLanguageChange("jp") }
//           disabled={ selectedLanguage === "jp" }
//         >
//           JP
//         </button>
//       </div>
//     </div>
//   )
// }

// export default Header

import * as React from "react"

import MenuIcon from "@mui/icons-material/Menu"
import SearchIcon from "@mui/icons-material/Search"
import AppBar from "@mui/material/AppBar"
import Box from "@mui/material/Box"
import IconButton from "@mui/material/IconButton"
import InputBase from "@mui/material/InputBase"
import Toolbar from "@mui/material/Toolbar"
import Typography from "@mui/material/Typography"
import { alpha } from "@mui/material/styles"
// eslint-disable-next-line import/no-named-as-default
import styled from "styled-components"

const Search = styled.div`
  position: relative;
  border-radius: ${({ theme }) => theme.shape.borderRadius};
  background-color: ${({ theme }) =>
    alpha(theme.palette.common.white, 0.15)};
  &:hover {
    background-color: ${({ theme }) => alpha(theme.palette.common.white, 0.25)};
  }
  margin-left: 0;
  width: 100%;
  ${({ theme }) => theme.breakpoints.up("sm")} {
    margin-left: ${({ theme }) => theme.spacing(1)};
    width: auto;
  }
`

const SearchIconWrapper = styled.div`
  padding: ${({ theme }) => theme.spacing(0, 2)};
  height: 100%;
  position: absolute;
  pointer-events: none;
  display: flex;
  align-items: center;
  justify-content: center;
`

const StyledInputBase = styled(InputBase)`
  color: inherit;
  & .MuiInputBase-input {
    padding: ${({ theme }) => theme.spacing(1, 1, 1, 0)};
    padding-left: ${({ theme }) => `calc(1em + ${theme.spacing(4)})`};
    transition: ${({ theme }) => theme.transitions.create("width")};
    width: 100%;
    ${({ theme }) => theme.breakpoints.up("sm")} {
      width: 12ch;
      &:focus {
        width: 20ch;
      }
    }
  }
`


export default function SearchAppBar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="open drawer"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ flexGrow: 1, display: { xs: "none", sm: "block" } }}
          >
            News
          </Typography>
          <Search>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Search…"
              inputProps={{ "aria-label": "search" }}
            />
          </Search>
        </Toolbar>
      </AppBar>
    </Box>
  )
}
