import React from 'react';
import "./AddDevice.css"
import TxtfieldSet from '../Components/TxtfieldSet';
import SelectSet from '../Components/SelectSet';
import { Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';
function AddDevice(props) {
    const navigate=useNavigate()
    return (
        <div
             className='add-device-content'
        >
            <TxtfieldSet  title={"Name"}/>
            <TxtfieldSet  title={"Code"} placeholder="Device Code"/>
            <SelectSet title={"Remaining amount"}/>
            <TxtfieldSet  title={"Promotion Code"}/>
            <TxtfieldSet  title={"Sales"}/>
            {/* <TxtfieldSet  title={"Photo Work Time"}/>
            <TxtfieldSet  title={"Product Price"}/>
            <TxtfieldSet  title={"Contact Number"}/>
            <SelectSet title={"Status"}/> */}
            <div
            className='action-area'
            >
<Button
variant='contained'
>Submit</Button>
<Button
variant='contained'
onClick={()=>{
    navigate(-1)
}}
>Cancel</Button>

            </div>
            </div>
    );
}

export default AddDevice;