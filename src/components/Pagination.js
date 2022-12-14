import React from 'react'
import Button from '@mui/material/Button';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import Stack from '@mui/material/Stack';
import { useContext } from 'react';
import { AppState } from '../Context';


// pagination ui and functionality
const Pagination=()=>{
  // calling State from Context Api
    const {setCurrentPage,currentPage} =useContext(AppState);

    //pagination logic on when the next and previos button should be displayed
     if (currentPage === 1){
      return(
        <Button variant="contained" onClick={()=>{
         
          setCurrentPage(currentPage + 1);}} endIcon={<ChevronRightIcon />}>
      Next
    </Button>
      )
    }
    else if(currentPage === 12){
      return(
        <Button variant="contained"  onClick={()=>{ setCurrentPage(currentPage - 1);}} startIcon={<ChevronLeftIcon />}>
      Prev
    </Button> 
      )
    }
    else 
    {return(
      
     
     <Stack direction="row" spacing={2}>
      
    <Button variant="contained"  onClick={()=> setCurrentPage(currentPage - 1)} startIcon={<ChevronLeftIcon />}>
      Prev
    </Button>
    <Button variant="contained" onClick={()=> setCurrentPage(currentPage + 1)} endIcon={<ChevronRightIcon />}>
      Next
    </Button>
  </Stack>
     
    )}
    
   
  }

export default Pagination;