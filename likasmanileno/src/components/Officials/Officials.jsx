import axios, { Axios } from "axios";
import React,{useEffect,useState} from "react";

import "./officials.scss"
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Stack from '@mui/material/Stack';

import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';



function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}

  
function Officials() {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };


  const [users,setUser] = useState([]);
  useEffect(() => {
      const fetchPosts = async () => {
          axios.post('http://localhost:4000/app/getUsers')
              .then(res => {
                  console.log(res);
                  setUser(res.data);
              }).catch(err => {
                  console.log(err);
              })
      };
      fetchPosts();
  }, []);


  //get first and lastname
  const setID=(firstName, lastName) =>{

    
    
    const data = {
      firstName: firstName,
      lastName: lastName,      
    }
    console.log(data)
    axios.post('http://localhost:4000/app/deleteresident',data)
    .then(res => {
      if(res.data != null){
        alert("deleted")
      }
    }).catch((res) =>{
      console.log(res)
    })
  
  }

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
           <TextField
            autoFocus
            margin="dense"
            id="username"
            label="Username"
            type="username"
            fullWidth
          />
           <TextField
            autoFocus
            margin="dense"
            id="password"
            label="Password"
            type="password"
            fullWidth
          />
           <TextField
            autoFocus
            margin="dense"
            id="confirmPass"
            label="Confirm Password"
            type="password"
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
    <TableContainer component={Paper} className="table">
    <Table sx={{ minWidth: 650 }} aria-label="simple table">
      <TableHead>
        <TableRow>
          {/* <TableCell className="tableCell">ID No.</TableCell> */}
          <TableCell className="tableCell">First Name</TableCell>
          <TableCell className="tableCell">Last Name</TableCell>
          <TableCell className="tableCell">Address</TableCell>
          <TableCell className="tableCell">Email</TableCell>
          <TableCell className="tableCell">Contact#</TableCell>
          <TableCell className="tablecell">Actions</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {users.map(res => (
          <TableRow key={res.id}>
            {/* <TableCell>{res._id}</TableCell> */}
            <TableCell className="tableCell">{res.firstName}</TableCell>
            <TableCell  className="tableCell">{res.lastName}</TableCell>
            <TableCell  className="tableCell">{res.contactNo}</TableCell>
            <TableCell  className="tableCell">{res.dateAdmitted}</TableCell>
            <TableCell  className="tableCell">{res.siteT}</TableCell>
            <TableCell  className="tableCell"><span className={`status ${res.status}`}>{res.status}</span>
            
            {/* <TableCell  className="tableCell">{res.username}</TableCell>
            <TableCell  className="tableCell">{res.password}</TableCell> */}
            </TableCell>
          
            <TableCell className="tableCell">
            <button onClick={() =>setID(res.firstName,res.lastName)}>Delete</button>
            </TableCell> 
            
          </TableRow>
        ))}
      </TableBody>
    </Table>
  </TableContainer>
    </div>
  )
}

export default Officials