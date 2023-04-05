import React from 'react';
import { useState } from 'react';
import { Button, Input } from '@mui/material';
import './style.css'

const DisplayImage = () => {
    const [image, setImage] = useState(null);
    const [images, setimages] = useState([]);
    const [display, setdisplay] = useState(false)
    const addImage = () => {
        setimages([...images, image])
        setdisplay(true)
    }
    return (
        <div className='container'>
            <div className='body'>
            <div>
                <Input type="file" onChange={(e) => setImage(e.target.files[0])} />
                <Button variant="contained" onClick={addImage}>Upload</Button>
            </div>
            <div>
                {images.map((image) => (
                    <img width="400px" height="400px"src={URL.createObjectURL(image)} alt="image" />
                ))}
               
            </div>
            {display?
            <Button variant='outlined'>Show Details</Button>: null}
            <div>
               
                {/* <div>
                    <h1>name</h1>
                    <h1>description</h1>
                    <h1>price</h1>
                    <h1>category</h1>
                </div>
                 */}
               
            </div>
            </div>
        </div>
    );
};

export default DisplayImage;