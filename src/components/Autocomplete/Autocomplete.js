
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Divider from '@mui/material/Divider';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import ListItemButton from '@mui/material/ListItemButton';
import Typography from '@mui/material/Typography';
import { useContext, useEffect } from 'react';
import { AppState } from '../../Context';
import React, { useState } from 'react';
import axios from 'axios';


const  Autocomplete=()=> {
 
  const [data,setData]=useState([]);
  // calling State from Context Api
  const {searchValue,setSearchValue,setDisplay} =useContext(AppState);
  // Using axios fetched api data for Autocomplete component
  const fetchPets=async()=>{

    return await axios.get(`https://60d075407de0b20017108b89.mockapi.io/api/v1/animals
      `).then((response) => {setData(response.data); }).catch((error) =>console.log(error));

  }
 //Debouncing
  useEffect(()=>{
    let timeout =setTimeout(()=>{
      fetchPets();
    },2000)
   return ()=> clearTimeout(timeout);
  },[searchValue])
  
  return (
    
    <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper',marginTop: '10px'}}>
      {data.filter((item)=>(item.name.toLowerCase().includes(searchValue.toLowerCase()))).map((item)=>(
        <>
      <ListItem alignItems="flex-start" key={item.id}>
      <ListItemButton onClick={()=>{setSearchValue(item.name);setDisplay(false);}}>
        <ListItemAvatar>
          <Avatar alt="Remy Sharp" src={item.avatar} />
        </ListItemAvatar>
        <ListItemText
          
          secondary={
            <React.Fragment>
              <Typography
                sx={{ display: 'inline' }}
                component="span"
                variant="body2"
                color="text.primary"
              >
               {item.name}
              </Typography>
              
            </React.Fragment>
          }
        />
          </ListItemButton>
      </ListItem>
      <Divider variant="inset" component="li" />
      </>
      ))}
      </List>
  );
}
export default Autocomplete;