import React from 'react'
import { useState } from 'react'
import { TextField, Button, Box, Typography } from '@mui/material'
import './style.css'

const Auth = () => {
    const [isSignUp, setisSignUp] = useState(false)

  return (
 
        <div>
          <div className='main'>
          <form>
            <Box className='form' bgcolor='inherit'>
            <Typography  sx={{
              fontSize:30,
              fontWeight:900
      }}>{isSignUp? "Login":"SignUp"}</Typography>
        
        { !isSignUp &&    <TextField   placeholder='name' sx={{width:400}}/>}
            <TextField    type={'email'} placeholder='email' sx={{width:400}}/>
            <TextField   type={'password'} placeholder='password' sx={{width:400}}/>
            <Button type='submit' variant='contained' color='warning'>Submit</Button>
            <Button  variant='outlined' onClick={()=>{setisSignUp(!isSignUp)}} >Change to {isSignUp? "SignUp":"Login"}</Button>
           
          </Box>
          </form>
     
        </div>
      
        </div>
      )
     
}

export default Auth