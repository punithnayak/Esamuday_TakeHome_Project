import React from 'react'
import {MDBRow,MDBCol, MDBBtnGroup} from 'mdb-react-ui-kit';

import Button from '@mui/material/Button';

import { useContext } from 'react';
import { AppState } from '../Context';

const Sorting = () => {
 
    // calling State from Context Api
    const {sortValue,setSortValue,handleSort} =useContext(AppState);
   //Sorting Ui and Functionality
  return (
    <MDBRow>
      <MDBCol size='8'>
        <h5>Sort By</h5>
        <MDBBtnGroup>
        
      
      <Button variant="outlined" color="success" onClick={()=>{setSortValue("asce"); handleSort();}}>
        Increasing order
      </Button>
      <Button variant="outlined" color="success" onClick={()=>{setSortValue("desc"); handleSort();}}>
        Decreasing order
      </Button>
    
        </MDBBtnGroup>

        <p>{ sortValue===""? "": (`${sortValue}nding Order` )}</p>
      </MDBCol>
      
    </MDBRow>
  )
}

export default Sorting;