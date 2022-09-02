import React from 'react'
import Header from '../components/Header';
import SearchBar from '../components/SearchBar';
import Sorting from '../components/Sorting';
import TableComponent from '../components/TableComponent';
import { MDBContainer } from 'mdb-react-ui-kit';
import Autocomplete from '../components/Autocomplete/Autocomplete';
import { useContext } from 'react';
import { AppState } from '../Context';

// since single it is singlepage apllication we have only home page here
const Home = () => {
  const {searchValue,display} =useContext(AppState);
  //Home page is devided in to Hearder,Searchbar,AutoComplete component ,TableComponent and Sorting Component.
  return (
    <MDBContainer >
        <Header/>
        <div className='d-flex input-group w-auto' style={{margin:"auto",padding:"15px",maxWidth:"400px",alignContent:"center"}} >
            <SearchBar/>
            {searchValue.length && display>0 ? (<Autocomplete/>):('')}
            
        
            </div>
        <TableComponent/>
       
        <Sorting/>
        
    </MDBContainer>
    
  )
}

export default Home;