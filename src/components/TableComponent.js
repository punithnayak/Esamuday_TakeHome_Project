import React from 'react'
import { MDBTable,MDBTableHead,MDBRow,MDBCol, MDBTableBody } from 'mdb-react-ui-kit';
import { useContext } from 'react';
import { AppState } from '../Context';
const TableComponent = () => {
    const {data,getAge,Pagination} =useContext(AppState);
  return (
    <div style={{marginTop: '50px'}}>
      
      
      <MDBRow>
        <MDBCol size="12">
          <MDBTable>
            <MDBTableHead dark>
              <tr>
              <th scope='col'> No.</th>
                <th scope='col'> Avatar</th>
                <th scope='col'> Name</th>
                <th scope='col'> Age</th>
              </tr>

            </MDBTableHead>
            {data.length === 0 ? (
              <MDBTableBody className="algin-center mb-0">
                <tr>
                  <td colSpan={8} className="text-center mb-0">Data loading please wait..........</td>
                </tr>
              </MDBTableBody>
            ):(
              data.map((item,index) => (
                <MDBTableBody key={item.id}>
                  <tr>
                    <th scope='row'> {item.id}</th>
                    <td><img src={item.avatar} alt={item.name} style={{borderRadius: '5px',height: '30px', width: '30px'}} /></td>
                    <td>{item.name}</td>
                    <td>{getAge(item.bornAt.slice(0,item.bornAt.length-14))} Months</td>
                  </tr>


                </MDBTableBody>
              ))
            )}
          </MDBTable>

        </MDBCol>
      </MDBRow>
      <div style={{margin:"auto",padding:"15px",maxWidth:"400px",alignContent:"center"}}>
        {Pagination()}
      </div>
      
    </div>
  )
}

export default TableComponent;