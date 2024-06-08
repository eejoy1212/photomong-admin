import React from 'react';
import "./Set.css"
import { TextField, Typography } from '@mui/material';
function TxtfieldSet({title,placeholder=""}) {
    return (
        <div
        className='set'
        >
            <Typography variant='h5'>{title}</Typography>
            <TextField
            placeholder={placeholder===""?title:placeholder}
            />
        </div>
    );
}

export default TxtfieldSet;