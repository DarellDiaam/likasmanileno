import "./login.scss";
import logo from '../images/LandingIcon.png';
import { useState } from "react";
import axios from 'axios';
import * as React from 'react';
import { Link } from "react-router-dom";

import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import Input from '@mui/material/Input';
import FilledInput from '@mui/material/FilledInput';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import FormHelperText from '@mui/material/FormHelperText';
import FormControl from '@mui/material/FormControl';
import TextField from '@mui/material/TextField';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';

import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';

const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

function Login() {

  const [values, setValues] = React.useState({
    amount: '',
    password: '',
    weight: '',
    weightRange: '',
    showPassword: false,
  });

  const handleChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
  };

  const handleClickShowPassword = () => {
    setValues({
      ...values,
      showPassword: !values.showPassword,
    });
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  //Alert dialog feature
  const [open, setOpen] = React.useState(false);
  const handleClick = () => {
    setOpen(true);
  };

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpen(false);
  };
  //////

  const[lUsername,setLusername] = useState("");
  const[loginPassword,setLoginpassword] = useState("");

function handleLogin(){
   
    const data = {
      username: lUsername,
      password: loginPassword
    }
    
    axios.post('http://localhost:4000/app/signin',data)
    .then(res => {
      console.log(res)
    }).catch((res) =>{
      console.log(res)
    })
  }

  const date = new Date();

  return (
    <div className="login">
      <div className="loginWrapper">
        <div className="loginLeft">
          {/* <h3 className="loginLogo">LikasManileno</h3> */} 
          
          <img className="loginLogo" src={logo}/>
          
          <span className="loginDesc">
            {/* Makes Sures Residents Are Safe and Well 24/7. */}
          </span>
        </div>
        <div className="loginRight">
        <h3 className="title">Login your admin account</h3>
          <div className="loginBox">
              <input placeholder="Username" className="loginInput" required onChange={(e) => setLusername(e.target.value)}/>
              {/* <input placeholder="Password" className="loginInput" type="password" required onChange={(e) => setLoginpassword(e.target.value)}/> */}
              {/* Password input */}
              <FormControl sx={{ m: 1, width: '43ch' }} variant="outlined">
          <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
          <OutlinedInput
            id="outlined-adornment-password"
            type={values.showPassword ? 'text' : 'password'}
            value={values.password}
            onChange={handleChange('password')}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPassword}
                  onMouseDown={handleMouseDownPassword}
                  edge="end"
                >
                  {values.showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            }
            label="Password"
          />
        </FormControl>
              <button className="loginButton"  onClick={handleClick}>Login</button>
              <Stack spacing={2} sx={{ width: '100%' }}>
              <Snackbar open={open} autoHideDuration={3000} onClose={handleClose}>
                <Alert onClose={handleClose} severity="success" sx={{ width: '100%' }}>
                  You Are Logged In! Hi There!
                </Alert>
              </Snackbar>
            </Stack>
          </div>
        </div>
      </div>
    </div>
  
  )
}

export default Login