import "./forminput.scss";
import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { Link } from "react-router-dom";
import { useState } from "react";
import axios from 'axios'

import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';



// const FormInput = () =>{
  function FormInput() {
    const[address,setAddress] = useState("");
    const[capacity,setCapacity] = useState("");
    const[room,setRoom] = useState("");
    const[restroom,setRestRoom] = useState("");
    const[kitchen,setKitchen] = useState("");
    const[evehicle,setEvehicle] = useState("");
    const[firstaid,setFirstAid] = useState("");
    const[official,setOfficial] = useState("");
    const[description,setDescription] = useState("");
    

    function handleButton(){
      //pag pinindot ko yung submit
      const data = {
        address: address,
        capacity: capacity,
        room: room,
        restroom: restroom,
        kitchen: kitchen,
        evehicle: evehicle,
        firstaid: firstaid,
        official: official,
        description: description
      }
      //dito ma sasave ng database
      axios.post('http://localhost:4000/app/signuplocation',data)
      .then(res => {
        console.log(res)
        console.log("nice 1")
      }).catch(err =>{
        console.log(err)
      })
    }
    return(
        <div className="forminput">
        <Box  component="form" sx={{ '& .MuiTextField-root': { m: 2, width: '55ch' }}}
        noValidate
        autoComplete="off">
        <div>

        <div className="title">Add Evacuation Site</div>
        {/* <form onSubmit={submit}></form> */}
        <TextField
          // required
          id="outlined-required"
          label="Evactuation Site"
          placeholder="National University"
          onChange={(e) => setAddress(e.target.value)}
        />
         <TextField 
          // required
          id="outlined-required"
          label="Address"
          placeholder="Jhocson Street Sampaloc Manila"
          

          onChange={(e) => setAddress(e.target.value)}
        />
        <TextField
          required
          id="outlined-number"
          label="Capacity"
          // type="number"
          onChange={(e) => setCapacity(e.target.value)}
          InputLabelProps={{
            shrink: true,
          }}
        />
        <TextField
          required
          id="outlined-number"
          label="Rooms"
          //type="number"
          onChange={(e) => setRoom(e.target.value)}
          InputLabelProps={{
            shrink: true,
          }}
        />
        <TextField
          required
          id="outlined-number"
          label="Restrooms"
          // type="number"
          onChange={(e) => setRestRoom(e.target.value)}
          InputLabelProps={{
            shrink: true,
          }}
        />

        <TextField
          required
          id="outlined-number"
          label="Kitchens"
          // type="number"
          onChange={(e) => setKitchen(e.target.value)}
          InputLabelProps={{
            shrink: true,
          }}
        />

          <div className="radioButton">
          <FormLabel id="demo-row-radio-buttons-group-label">First Aid</FormLabel>
          <RadioGroup
            row
            aria-labelledby="demo-row-radio-buttons-group-label"
            name="row-radio-buttons-group"
          >
            <FormControlLabel value="available" control={<Radio />} label="Available" />
            <FormControlLabel value="notA" control={<Radio />} label="N/A" />
          </RadioGroup>

          <FormLabel  id="demo-row-radio-buttons-group-label">Relief Goods</FormLabel>
          <RadioGroup
            row
            aria-labelledby="demo-row-radio-buttons-group-label"
            name="row-radio-buttons-group"
          >
            <FormControlLabel value="available" control={<Radio />} label="Available" />
            <FormControlLabel value="notA" control={<Radio />} label="N/A" />
          </RadioGroup>

          
          </div>
        
        <TextField
           required
          id="outlined-required"
          label="Description"
          placeholder="Type here"
          style={{width:"83vw"}}
          onChange={(e) => setDescription(e.target.value)}
        />
        
        <div className="actions">
            <div className="back">
            <Link to="/Sites"  style={{textDecoration:"none"}}>
            <button>Back</button>
            </Link>
            </div>
            {/* <button onClick={handleButton}>Submit</button> */}
            <div className="submit">
            <Link to="/Sites"  style={{textDecoration:"none"}}>
            <button onClick={handleButton}>Submit</button>
            </Link>
            </div>
        </div>
       
      </div>
      </Box>
        </div>
    )
}

export default FormInput