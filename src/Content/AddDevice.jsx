import React, { useState } from 'react';
import "./AddDevice.css"
import TxtfieldSet from '../Components/TxtfieldSet';
import SelectSet from '../Components/SelectSet';
import { Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { postAddDeivce } from '../apis/device';
function AddDevice(props) {
    const navigate=useNavigate()
    const [name,setName]=useState("")
    const [code,setCode]=useState("")
    const [remain,setRemain]=useState("")
    const [promotionCode,setPromotionCode]=useState("")
    const [sales,setSales]=useState("")
    const addDevice=async()=>{
        const addCondition=
        name.trim()!=""&&
        code.trim()!=""&&
        remain.trim()!=""&&
        promotionCode.trim()!=""&&
        sales.trim()!=""
if (addCondition) {
     const newPayload={
            name:name,
            device_code:code,
            remaining_amount:remain,
            promotion_code:promotionCode,
            sales:sales,
        }
        const res=await postAddDeivce(newPayload)
console.log('디바이스 추가!!',res)
if (res[1]===201) {
    window.confirm("add success")
    navigate("/all-devices")
} else {
    window.confirm("fail")
}
} else {
    window.confirm("Please enter all device information")
}
       
    }
    const onChangeName=(e)=>{
        setName(e.target.value)
    }
    const onChangeCode=(e)=>{
        setCode(e.target.value)
    }
    const onChangeRemain=(e)=>{
        setRemain(e.target.value)
    }
    const onChangePromotionCode=(e)=>{
        setPromotionCode(e.target.value)
    }
    const onChangeSales=(e)=>{
        setSales(e.target.value)
    }
    return (
        <div
             className='add-device-content'
        >
            <TxtfieldSet 
            value={name}
            onChange={onChangeName}
            title={"Name"}/>
            <TxtfieldSet 
            value={code}
            onChange={onChangeCode}
            title={"Code"} placeholder="Device Code"/>
            <TxtfieldSet
            value={remain}
            onChange={onChangeRemain}
            title={"Remaining amount"}/>
            <TxtfieldSet 
            value={promotionCode}
            onChange={onChangePromotionCode}
            title={"Promotion Code"}/>
            <TxtfieldSet 
            value={sales}
            onChange={onChangeSales}
            title={"Sales"}/>
            {/* <TxtfieldSet  title={"Photo Work Time"}/>
            <TxtfieldSet  title={"Product Price"}/>
            <TxtfieldSet  title={"Contact Number"}/>
            <SelectSet title={"Status"}/> */}
            <div
            className='action-area'
            >
<Button
variant='contained'
onClick={addDevice}
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