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
import Sidenav from '../components/Sidenav';
import Adminnav from '../components/Adminnav';


const AdminReviews = () => {
  const [orderRows, setOrderRows] = useState([

    {
      id: 1143155,
      product: "Kane Concert",
      customer: "Carlos Johnson",
      date: "15 June",
      pick: "carlos.johnson@gmail.com",
      drop: "Bloomington",
      driver: "",
      status: "Confirmed",
    },
    {
      id: 2235235,
      product: "Picnic at the park",
      customer: "Elena Moreno",
      date: "2 June",
      pick: "moreno@gmail.com",
      drop: "Eagle Pointe",
      driver: "",
      status: "Waitlisted",
    },
    {
      id: 2342353,
      product: "Anatomy Fashion Show",       
      customer: "John Smith",
      date: "24 May",       
      pick: "smithj23@gmail.com",
      drop: "Elm Heights",
      driver: "",
      status: "",
    },
    {
      id: 2357741,
      product: "Little 500",      
      customer: "Sofia Rossi",
      date: "10 May", 
      pick: "sofy200@gmail.com",
      drop: "Cascades",
      driver: "",
      status: "Confirmed",
    },
    {
      id: 2342355,
      product: "Hoosier Cosmic Celebration Party",
      customer: "Harold Carol",
      date: "25 April",        
      pick: "hc25@gmail.com",
      drop: "Near West Side",
      driver: "",
      status: "",

     
    },

    {
      id: 3922409,
      product: "Tech startup week in Bloomington",
      customer: "Tobias Schmidt",
      date: "19 April",        
      pick: "ctobias@gmail.com",
      drop: "Tamarron",
      driver: "4.4",
      status: "",

     
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
      <Sidenav /> 
      <div className="flex flex-1 flex-col">
      <Adminnav />
    
      <div className="shadow-lg p-5 m-5">
        <div className="font-medium text-gray-500 mb-4">Latest Registrations</div>
        <TableContainer component={Paper} className="shadow-md">
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell className="font-medium">Registration ID</TableCell>
                <TableCell className="font-medium">Event</TableCell>
                <TableCell className="font-medium">Customer</TableCell>
                <TableCell className="font-medium">Date</TableCell>
                <TableCell className="font-medium">Email</TableCell>
                <TableCell className="font-medium">Location</TableCell>
                <TableCell className="font-medium">Rating</TableCell>
                <TableCell className="font-medium">Status</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {orderRows.map((row) => (
                <TableRow key={row.id}>
                  <TableCell>{row.id}</TableCell>
                  <TableCell>{row.product}</TableCell>
                  <TableCell>{row.customer}</TableCell>
                  <TableCell>{row.date}</TableCell>
                  <TableCell>{row.pick}</TableCell>
                  <TableCell>{row.drop}</TableCell>
                  <TableCell>{row.driver}</TableCell>
                  <TableCell>
                    <Select
                      value={row.status}
                      onChange={(event) => handleStatusChange(event, row.id)}
                      size="small"
                      sx={{ m: 1, minWidth: 120 }}
                    >
                      <MenuItem value="Out for Pickup">Confirmed</MenuItem>
                      <MenuItem value="Out for Delivery">Waitlisted</MenuItem>
                      <MenuItem value="Delivered">Rejected</MenuItem>
                    </Select>
                  </TableCell>
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

export default AdminReviews