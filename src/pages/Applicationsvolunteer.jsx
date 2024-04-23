import React, { useState } from 'react';
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import SidenavVolunteer from '../components/SidenavVolunteer';
import AdminnavVolunteer from '../components/AdminnavVolunteer';


const ApplicationsVolunteer = () => {
  const [orderRows, setOrderRows] = useState([

    
    {
      id: 2235235,
      product: "Picnic at the park",
      date: "2 June",
      drop: "Eagle Pointe",
      status: "Confirmed",
    },
    {
      id: 2342353,
      product: "Anatomy Fashion Show",       
      date: "24 May",       
      drop: "Elm Heights",
      status: "Rejected",
    },
    {
      id: 2357741,
      product: "Little 500",      
      date: "10 May", 
      drop: "Cascades",
      status: "Confirmed",
    },
    {
      id: 2342355,
      product: "Hoosier Cosmic Celebration Party",
      date: "25 April",        
      drop: "Near West Side",
      status: "Waitlisted",

     
    },

    {
      id: 3922409,
      product: "Tech startup week in Bloomington",
      date: "19 April",        
      drop: "Tamarron",
      status: "Confirmed",

     
    },
    // ...Your initial data
  ]);

  // Handler for changing the status
  const handleStatusChange = (event, id) => {
    setOrderRows(orderRows.map((row) =>
      row.id === id ? { ...row, status: event.target.value } : row
    ));
  };

  return (
    <div className="flex">
      <SidenavVolunteer /> 
      <div className="flex flex-1 flex-col">
      <AdminnavVolunteer />
    
      <div className="shadow-lg p-5 m-5">
        <div className="font-medium text-gray-500 mb-4">Latest Registrations</div>
        <TableContainer component={Paper} className="shadow-md">
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell className="font-medium">Event ID</TableCell>
                <TableCell className="font-medium">Event</TableCell>
                <TableCell className="font-medium">Date</TableCell>
                <TableCell className="font-medium">Location</TableCell>
                <TableCell className="font-medium">Status</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {orderRows.map((row) => (
                <TableRow key={row.id}>
                  <TableCell>{row.id}</TableCell>
                  <TableCell>{row.product}</TableCell>
                  <TableCell>{row.date}</TableCell>
                  <TableCell>{row.drop}</TableCell>
                  <TableCell>{row.status}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </div>
      </div>
    </div>          
  );
};

export default ApplicationsVolunteer