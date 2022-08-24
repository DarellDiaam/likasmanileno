import React,{useEffect,useState} from "react";
import axios, { Axios } from "axios";
import "./datatable.scss"
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import {MapContainer, Marker, Popup, TileLayer, useMap} from 'react-leaflet'
import "leaflet/dist/leaflet.css"
import L from "leaflet";
import { Link } from "react-router-dom";
// import Modal from "../modal/Modal";

const icon = L.icon({
  iconUrl:'./pin.png',
  iconSize:[38, 38]
});

const position = [14.6110, 120.9962]

function ResetCenterView(props){

  

  const { selectPosition } = props;
  const map = useMap();
  
      useEffect(() => {
          if(selectPosition){
              map.setView(
                  L.latLng(selectPosition?.lat, selectPosition?.lon),
                  map.getZoom(),
                  {
                      animate: true
                  }
              )
          }
      },[selectPosition]);
  
  return null;
  }

function List(props) {
  
  const [users,setUser] = useState([]);
  useEffect(() => {
      const fetchPosts = async () => {
          axios.post('http://localhost:4000/app/getUsers')
              .then(res => {
                  console.log(res);
                  setUser(res.data);
              }).catch(err => {
                  console.log(err);
              })
      };
      fetchPosts();
  }, []);

  

  //get first and lastname
  const setID=(firstName, lastName) =>{
    
    const data = {
      firstName: firstName,
      lastName: lastName,      
    }
    console.log(data)
    axios.post('http://localhost:4000/app/deleteresident',data)
    .then(res => {
      if(res.data != null){
        alert("deleted")
      }
    }).catch((res) =>{
      console.log(res)
    })
  
  }

  // const [openModal, setOpenModal] = useState(false)
  const { selectPosition } = props;
  const locationSelection = [selectPosition?.lat, selectPosition?.lon];
  return (
    <div className="datatable">
    
      <MapContainer center={position} zoom={15} style={{width: '100%', height:'70%'}}>
          <TileLayer
             attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
             url="https://api.maptiler.com/maps/basic/256/{z}/{x}/{y}.png?key=JCOZOQSNIOfS1M9PBUgN"
          />
          { selectPosition && (
          <Marker position={locationSelection} icon={icon}>
            <Popup>
            A pretty CSS3 popup. <br /> Easily customizable.
            </Popup>
          </Marker>
       )}

        <ResetCenterView selectPosition={selectPosition}/>
      </MapContainer>
      
    <div className="datatableTitle">
      Residents

      <Link to="/users/new" style={{textDecoration:"none"}} className="link"> 
      Add Resident
      </Link>

      {/* <button className="openModalBtn" onClick={() => {setOpenModal(true)}}>Add Resident</button>
      {openModal && <Modal closeModal={setOpenModal} />} */}

    </div>
    
    <TableContainer component={Paper} className="table">
    <Table sx={{ minWidth: 650 }} aria-label="simple table">
      <TableHead>
        <TableRow>
          {/* <TableCell className="tableCell">ID No.</TableCell> */}
          <TableCell className="tableCell">First Name</TableCell>
          <TableCell className="tableCell">Last Name</TableCell>
          <TableCell className="tableCell">Contact No.</TableCell>
          <TableCell className="tableCell">Date Admitted</TableCell>
          <TableCell className="tableCell">Site Transfered</TableCell>
          <TableCell className="tableCell">Status</TableCell>
          <TableCell className="tablecell">actions</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {users.map(res => (
          <TableRow key={res.id}>
            {/* <TableCell>{res._id}</TableCell> */}
            <TableCell className="tableCell">{res.firstName}</TableCell>
            <TableCell  className="tableCell">{res.lastName}</TableCell>
            <TableCell  className="tableCell">{res.contactNo}</TableCell>
            <TableCell  className="tableCell">{res.dateAdmitted}</TableCell>
            <TableCell  className="tableCell">{res.siteT}</TableCell>
            <TableCell  className="tableCell"><span className={`status ${res.status}`}>{res.status}</span>
            
            {/* <TableCell  className="tableCell">{res.username}</TableCell>
            <TableCell  className="tableCell">{res.password}</TableCell> */}
            </TableCell>
          
            <TableCell className="tableCell">
            <Link to="/users/userId" style={{textDecoration:"none"}}>
            <button>View</button>
            </Link>
            <button onClick={() =>setID(res.firstName,res.lastName)}>Delete</button>
            </TableCell> 
            
          </TableRow>
        ))}
      </TableBody>
    </Table>
  </TableContainer>
  </div>
  )
}

export default List