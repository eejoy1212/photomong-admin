import React from 'react';
import "./Set.css"
import { TextField, Typography } from '@mui/material';
function TxtfieldSet({value,onChange,title,placeholder=""}) {
    return (
        <div
        className='set'
        >
            <Typography variant='h5'>{title}</Typography>
            <TextField
            value={value}
            onChange={onChange}
            placeholder={placeholder===""?title:placeholder}
            />
        </div>
    );
}

export default TxtfieldSet;