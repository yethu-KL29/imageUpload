import { Button } from '@mui/material'
import React from 'react'
import './style.css'
import { Link } from 'react-router-dom'
function Home() {
    return (
        <div className='home'>
            <img src="https://img.freepik.com/premium-vector/cartoon-drawing-police-officer_29937-8170.jpg?w=2000"></img>
            
            <div className='btn'>
                <Button LinkComponent={Link} to="/auth"  variant='outlined'>Train Data</Button>
                <Button LinkComponent={Link} to="/display"   variant='contained'>Find Data</Button>



            </div>
        </div>
    )
}

export default Home