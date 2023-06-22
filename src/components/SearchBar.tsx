import React from "react"

import SearchIcon from "@mui/icons-material/Search"
import InputBase from "@mui/material/InputBase"
import { alpha } from "@mui/material/styles"
import styledWrapper from "styled-components"

const styled = styledWrapper

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

const SearchBar = () => {
  return (
    <Search>
      <SearchIconWrapper>
        <SearchIcon />
      </SearchIconWrapper>
      <StyledInputBase
        placeholder="Search…"
        inputProps={{ "aria-label": "search" }}
      />
    </Search>
  )
}

export default SearchBar
