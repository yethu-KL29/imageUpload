import React from 'react';
import { useState } from 'react';
import { Button, IconButton, Input } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import './style.css'

const DisplayImage = () => {
    const [image, setImage] = useState(null);
    const [images, setImages] = useState([]);
    const [display, setDisplay] = useState(false);

    const addImage = () => {
        setImages([...images, image])
        setDisplay(true)
    }

    const removeImage = (index) => {
        const newImages = images.filter((image, i) => i !== index);
        setImages(newImages);
        setDisplay(false)
    }

    return (
        <div className='container'>
            <div className='body'>
                <div>
                    <Input type="file" onChange={(e) => setImage(e.target.files[0])} />
                    <Button variant="contained" onClick={addImage}>Upload</Button>
                </div>
                <div>
                    {images.map((image, index) => (
                        <div key={index}>
                            <img width="400px" height="400px" src={URL.createObjectURL(image)} alt="image" />
                           <IconButton onClick={() => removeImage(index)}>
                                <DeleteIcon />
                            </IconButton>
                        </div>
                    ))}
                </div>
                {display && (
                    <>
                        <Button variant='outlined'>Show Details</Button>
                    </>
                )}
            </div>
        </div>
    );
};

export default DisplayImage;
