import React, { createContext,useState,useEffect } from 'react'

import axios from 'axios';
import Pagination from './components/Pagination';
// context Api implementation
{/*Context Api is state-management tool in react which help us to pass the state to all 
react fragments avoiding propdrilling */}
// 
export const AppState =createContext();
//Function to convert birthdate to age
function getAge(dateString) {
    let ageInMilliseconds = new Date() - new Date(dateString);
    let ageinMonths = Math.floor(ageInMilliseconds/1000/60/60/24/30);
   
     
    return ageinMonths;
}

const Context = ({children}) => {
    //defining all the states of the app
  const [data,setData]=useState([]);
  const[sortValue,setSortValue]=useState('');
  const[currentPage,setCurrentPage]=useState(1);
  const[type,setType]=useState('');
  const[searchValue,setSearchValue]=useState('');

  const [display,setDisplay]=useState(false);

// api calling 
  const fetchPets=async(pageNo,type) =>{
    if(type==='sort'){
      setType('sort')
      
      return axios.get(`https://60d075407de0b20017108b89.mockapi.io/api/v1/animals?sortBy=createdAt&order=${sortValue}&page=${currentPage}&limit=5`).then((response) => {setData(response.data);setSearchValue('')}).catch((error) =>console.log(error));
     

    }
    else if (type === "search"){
      setType('search');
      
      
      return axios.get(`https://60d075407de0b20017108b89.mockapi.io/api/v1/animals?search=${searchValue}&page=${currentPage}&limit=5`).then((response) => {setData(response.data); }).catch((error) =>console.log(error));

    }
    else{
      return await axios.get(`https://60d075407de0b20017108b89.mockapi.io/api/v1/animals?page=${pageNo}&limit=5
      `).then((response) => {setData(response.data); }).catch((error) =>console.log(error));
    }
    
    
   
  }
  //Implementing Search function
  const handleSearch=async()=>{
      
    setType('search');
    fetchPets(currentPage,'search');
    
    //return axios.get(`https://60d075407de0b20017108b89.mockapi.io/api/v1/animals?search=${value}&page=${currentPage}&limit=5`).then((response) => {setData(response.data); setValue('')}).catch((error) =>console.log(error));

  }

  //implementing reset function
  const handleReset= ()=>{
    setCurrentPage(1);
   setSortValue('');
   setSearchValue('');
   setType('');
   fetchPets(currentPage,'');
    
  }

//implementing sort function
  const handleSort=async(e)=>{
    
    setType('sort');
    setCurrentPage(1);
    
    
    fetchPets(currentPage,'sort');
   // return axios.get(`https://60d075407de0b20017108b89.mockapi.io/api/v1/animals?sortBy=createdAt&order=${value}&page=${currentPage}&limit=5`).then((response) => {setData(response.data); setValue('')}).catch((error) =>console.log(error));


  }
  /// Callling api during initialization of app
  useEffect(()=>{
    
    fetchPets(currentPage,'');
    
      // eslint-disable-next-line 
  },[]);

  // calling api when search,sort function is used
  useEffect(()=>{
    
    fetchPets(currentPage,type);
    
    
      
  },[currentPage,sortValue]);

 // rending the state to all children
  return (
    <div>
      
        <AppState.Provider value={{data,setData,sortValue,setSortValue,currentPage,setCurrentPage,type,setType,searchValue,setSearchValue,handleSearch,handleReset,getAge,handleSort,Pagination,display,setDisplay}}>
            {children}
            
        </AppState.Provider>
    </div>
  )
}

export default Context;