import React, { createContext,useState,useEffect } from 'react'

import axios from 'axios';
import Pagination from './components/Pagination';

export const AppState =createContext();

function getAge(dateString) {
    let ageInMilliseconds = new Date() - new Date(dateString);
    let ageinMonths = Math.floor(ageInMilliseconds/1000/60/60/24/30);
   
     
    return ageinMonths;
}

const Context = ({children}) => {
    
  const [data,setData]=useState([]);
  const[sortValue,setSortValue]=useState('');
  const[currentPage,setCurrentPage]=useState(1);
  const[type,setType]=useState('');
  const[searchValue,setSearchValue]=useState('');
  const[displayAutocomplete,setDisplayAutocomplete]=useState(false);

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
  const handleSearch=async()=>{
      
    setType('search');
    fetchPets(currentPage,'search');
    
    //return axios.get(`https://60d075407de0b20017108b89.mockapi.io/api/v1/animals?search=${value}&page=${currentPage}&limit=5`).then((response) => {setData(response.data); setValue('')}).catch((error) =>console.log(error));

  }
  const handleReset= ()=>{
    setCurrentPage(1);
   setSortValue('');
   setSearchValue('');
   setType('');
   fetchPets(currentPage,'');
    
  }


  const handleSort=async(e)=>{
    
    setType('sort');
    setCurrentPage(1);
    
    
    fetchPets(currentPage,'sort');
   // return axios.get(`https://60d075407de0b20017108b89.mockapi.io/api/v1/animals?sortBy=createdAt&order=${value}&page=${currentPage}&limit=5`).then((response) => {setData(response.data); setValue('')}).catch((error) =>console.log(error));


  }
  
  useEffect(()=>{
    
    fetchPets(currentPage,'');
    
      // eslint-disable-next-line 
  },[]);
  useEffect(()=>{
    
    fetchPets(currentPage,type);
    
    
      
  },[currentPage]);

 
  return (
    <div>
        <AppState.Provider value={{data,setData,sortValue,setSortValue,currentPage,setCurrentPage,type,setType,searchValue,setSearchValue,handleSearch,handleReset,getAge,handleSort,Pagination,displayAutocomplete,setDisplayAutocomplete}}>
            {children}
            
        </AppState.Provider>
    </div>
  )
}

export default Context;