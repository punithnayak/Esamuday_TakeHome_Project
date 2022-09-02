import React from 'react'
import SearchIcon from '@mui/icons-material/Search';
import RefreshIcon from '@mui/icons-material/Refresh';
import IconButton from '@mui/material/IconButton';
import Paper from '@mui/material/Paper';
import InputBase from '@mui/material/InputBase';
import Divider from '@mui/material/Divider';
import Stack from '@mui/material/Stack';

import { useContext } from 'react';
import { AppState } from '../Context';

const SearchBar = () => {
    const {setSearchValue,handleSearch,handleReset,searchValue ,setDisplay} =useContext(AppState);
  return (
   
    <Stack>
    
        <Paper
      component="form"
      sx={{ p: '2px 4px ',marginTop:"10px", display: 'flex', alignItems: 'center', width: 400 }}
    >
     
      <InputBase
        sx={{ ml: 1, flex: 1 }}
       
        placeholder="Search ....."
        inputProps={{ 'aria-label': 'search...' }}
        onChange={(e)=>{ setSearchValue(e.target.value);setDisplay(true);}}
        value={searchValue}
      />
      <IconButton type="button" sx={{ p: '10px' }} aria-label="search"  onClick={()=> handleSearch()}>
        <SearchIcon />
      </IconButton>
      <Divider sx={{ height: 28, m: 0.5 }} orientation="vertical" />
      <IconButton color="primary" sx={{ p: '10px' }} aria-label="directions" onClick={()=> handleReset()}>
        <RefreshIcon />
      </IconButton>
    </Paper>
    </Stack>
     
    
  )
}

export default SearchBar;