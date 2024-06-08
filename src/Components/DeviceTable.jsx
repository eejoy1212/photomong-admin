import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Button, Chip } from '@mui/material';
import { getDeivceInfo } from '../apis/device';
import { useNavigate, useParams } from 'react-router-dom';
import { putDeleteDevice } from '../apis/device';

function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
  createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
  createData('Eclair', 262, 16.0, 24, 6.0),
  createData('Cupcake', 305, 3.7, 67, 4.3),
  createData('Gingerbread', 356, 16.0, 49, 3.9),
];

export default function DeviceTable() {
    // const { id } = useParams();
  const [deviceInfo,setDeviceInfo]=React.useState([])
  const navigate=useNavigate()
  const fetchDeviceInfo=async()=>{
    const res=await getDeivceInfo()
    setDeviceInfo(res)
  }
  React.useEffect(()=>{

fetchDeviceInfo()
  },[])
  const deleteDevice=async(id)=>{
    const res= window.confirm("Are you sure you want to delete?")
    if (res) {
      // const idx=parseInt(id)+1
     const res=await putDeleteDevice(id)
     if (res[1]===200) {
      window.confirm("delete success")

      fetchDeviceInfo()
     } else {
      window.confirm("delete fail")
     }
    } else {
     
    }
    }
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell align="left">Device</TableCell>
            <TableCell align="left">Device Code</TableCell>
            <TableCell align="left">Remaining amount</TableCell>
            <TableCell align="left">Promotion Code</TableCell>
            <TableCell align="left">Sales</TableCell>
            <TableCell align="left"></TableCell>
            <TableCell align="left"></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {deviceInfo.map((row,idx) => (
            <TableRow
              key={row.id}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
       
              <TableCell align="left">{row.name}</TableCell>
              <TableCell align="left">{row.device_code}</TableCell>
              <TableCell align="left">{row.remaining_amount}</TableCell>
              <TableCell align="left">{row.promotion_code}</TableCell>
              <TableCell align="left">{row.sales}</TableCell>
               <TableCell align="left"><Button
               variant='outlined'
               sx={{
                width:"100px"
               }}
               onClick={()=>{
                sessionStorage.setItem("editRow",JSON.stringify(row))
                navigate(`/edit-device/:${row.id}`)
               }}
               >Edit</Button></TableCell>
                <TableCell align="left"><Button
               variant='outlined'
               color='error'
               sx={{
                width:"100px"
               }}
               onClick={()=>{deleteDevice(row.id)}}
               >DELETE</Button></TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}