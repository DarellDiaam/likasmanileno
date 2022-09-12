import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import "./officials.scss"
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';

const columns = [
    { field: 'id', 
    headerName: 'ID', 
    width: 60 
    },

    { field: 'firstName', 
    headerName: 'First name',
    width: 170 
    },

    { field: 'lastName',
     headerName: 'Last name',
      width: 170 },
    {
      field: 'address',
      headerName: 'Address',
      width: 210,
    },

    { 
    field: 'email', 
    headerName: 'Email', 
    width: 200 
    },

    {
    field: 'contact',
    headerName: 'Contact#',
    width:'130',
    },

    {
    field: 'age',
    headerName: 'Age',
    width:'100',
    },

    {
    field: 'action',
    headerName: 'Action',
    width:'160',
    },
    

   
  ];
  
  const rows = [
    { id: 1, lastName: 'Dela Cruz', firstName: 'Juan', address:'Sampaloc Manila', email:'sample@gmail.com', contact:'0999999999', age: 35, },
    { id: 2, lastName: 'Dela Cruz', firstName: 'Juan', address:'Sampaloc Manila', email:'sample@gmail.com', contact:'0999999999', age: 35 },
    { id: 3, lastName: 'Lannister', firstName: 'Jaime', age: 45 },
    { id: 4, lastName: 'Stark', firstName: 'Arya', age: 16 },
    { id: 5, lastName: 'Targaryen', firstName: 'Daenerys', age: null },
    { id: 6, lastName: 'Melisandre', firstName: null, age: 150 },
    { id: 7, lastName: 'Clifford', firstName: 'Ferrara', age: 44 },
    { id: 8, lastName: 'Frances', firstName: 'Rossini', age: 36 },
    { id: 9, lastName: 'Roxie', firstName: 'Harvey', age: 65 },
    { id: 10, lastName: 'Roxie', firstName: 'Harvey', age: 65 },
    { id: 11, lastName: 'Dela Cruz', firstName: 'Juan', address:'Sampaloc Manila', email:'sample@gmail.com', contact:'0999999999', age: 35,  },

    

  ];


function Officials() {
  return (
    <div className='officialtable'>
    <div className='datatableTitle'>
    Officials
    </div>

    <DataGrid
        rows={rows}
        columns={columns}
        pageSize={9}
        rowsPerPageOptions={[10]}
        checkboxSelection
        
      />      
    </div>
  )
}

export default Officials