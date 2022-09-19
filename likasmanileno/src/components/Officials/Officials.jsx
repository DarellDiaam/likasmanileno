import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import "./officials.scss"
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Stack from '@mui/material/Stack';


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
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  return (
    <div className='officialtable'>
    <div className='datatableTitle'>
    Officials
    <button onClick={handleClickOpen}  style={{textDecoration:"none"}} className="link"> 
      Add Admin
      </button>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle style={{fontWeight: 500,}}>ADD ADMIN ACCOUNT </DialogTitle>
        <DialogContent>
          <DialogContentText>
            To make an account for your officials, please fill out the form below.
          </DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            id="firstName"
            label="First Name"
            fullWidth
          />
           <TextField
            autoFocus
            margin="dense"
            id="lastName"
            label="Last Name"
            fullWidth
          />
          <TextField
            autoFocus
            margin="dense"
            id="age"
            label="Age"
            Width='5'
          />
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
             <TextField
            autoFocus
            style={{maxlength: 11,}}
            margin="dense"
            id="contact"
            label="Contact#"
            Width='15'
            maxlength='11'
          />
           <TextField
            autoFocus
            margin="dense"
            id="address"
            label="Address"
            type="email"
            fullWidth
          />
           <TextField
            autoFocus
            margin="dense"
            id="email"
            label="Email Address"
            type="email"
            fullWidth
          />
        
        </DialogContent>
        
        <DialogActions>
        <Stack  direction="row" spacing={2}>
        <Button onClick={handleClose} variant="contained">Cancel</Button>
      <Button onClick={handleClose}  variant="outlined">Add</Button>
          {/* <Button onClick={handleClose}  variant="outlined" color="error">
            Cancel
          </Button>
          <Button  onClick={handleClose} variant="contained" color="success">
            Add
          </Button> */}
        </Stack>
        
        </DialogActions>
      </Dialog>
    </div>
    

    <DataGrid
        rows={rows}
        columns={columns}
        pageSize={9}
        rowsPerPageOptions={[10]}

      />      
    </div>
  )
}

export default Officials