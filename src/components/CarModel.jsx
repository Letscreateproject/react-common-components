// src/Dashboard.js
import React, { useState } from 'react';
import Box from '@mui/material/Box';

import Styles from '../styles/component_styles.module.css'
import Button from '@mui/material/Button';

// import SearchBar from "material-ui-search-bar";
import { Unstable_Popup as BasePopup } from '@mui/base/Unstable_Popup';

import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';



// routing

import { Outlet, Link } from "react-router-dom";

import CardContent from '@mui/material/CardContent';
import { useEffect } from 'react';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';



// const gridData = [
//   {
//   "id": 0,
     
//   "image": "require('../images/Jeep_logo_PNG19.png')"

// }, {
//   "id": 1,
  
//   "image": "require('../images/580b57fcd9996e24bc43c467.png')"
// }, {
//   "id": 2,
 
//   "image": "require('../images/638e307b3eae41f3706b4076.png')"
// },
// {
//   "id": 3,

//   "image": "require('../images/580b57fcd9996e24bc43c467.png')"
// }, {
//   "id": 4,
 
//   "image": "require('../images/580b57fcd9996e24bc43c467.png')" 
// }, {
//   "id": 5,
 
//   "image": "require('../images/580b57fcd9996e24bc43c467.png')"

// },
// {
//   "id": 6,
 
//   "image": "require('../images/580b57fcd9996e24bc43c467.png')"

// }, {
//   "id": 7,
//   "image": "require('../images/580b57fcd9996e24bc43c467.png')"

// }, {
//   "id": 9,
//   "image": "require('../images/580b57fcd9996e24bc43c467.png')"

// }
//  ];


function SimplePopup() {
  const [anchor, setAnchor] = React.useState(null);

  const handleClick = (event) => {
    setAnchor(anchor ? null : event.currentTarget);
  };

  const close = Boolean(anchor);
  const id = close ? 'simple-popper' : undefined;

  return (
    <div>
      <Button aria-describedby={id} type="button" onClick={handleClick}>
        <NotificationsNoneIcon />
      </Button>
      <BasePopup id={id} open={close} anchor={anchor}>
        <div>The content of the Popup.</div>
      </BasePopup>
    </div>
  );
}
function HeaderDashboard() {
  return (
    <div className={Styles.profile_Header}>
      <Box component="div" sx={{ display: 'inline' }}>
        <SimplePopup />
      </Box>
      <Box component="div" sx={{ display: 'inline' }}>inline</Box>
    </div>
  )
}
function Header() {
  return (
    <>
      <Container fixed>
        <HeaderDashboard />

        <h2 className={Styles.dashboard_header}>
          Dashboard
        </h2>
      </Container>
    </>

  )
}
function SearchBar() {
  return (
    <div className={Styles.serachbar}>
      <h2>
        Select Car Model
      </h2>
    </div>
  )
}


export default function Home() {
    // fetch data from json
  const [records,setRecords]=useState([])
useEffect(()=>{
  fetch('http://localhost:3000/CommonData.json').
  then(res=>res.json())
  .then(data=>{
    setRecords(data.payload)

  })
})

  return (

    <>
      <React.Fragment>
        <CssBaseline />
        <Header />
        <Container maxWidth="md" className={Styles.bodycontainer}>
          <SearchBar />
          <Grid container  >
            {/* display list of data using map, it must have return*/}
            {records.map(function (data) {
              return (

                <Grid md={3} columnSpacing={{ xs: 6, sm: 3, md: 2 }} className={Styles.gridSpace}>


                  <Card elevation={3} sx={{ p: 3, height: "100%" }} >
                    <CardContent>
                      <Link to="/carvarient"  rel="noreferrer">
                        <span><ArrowForwardIcon></ArrowForwardIcon></span> <span>{data.value}</span>

                      </Link>





                    </CardContent>

                  </Card>




                </Grid>




              )
            })}

          </Grid>
          <Button variant="outlined" className={Styles.buttonHome}>Other</Button>
        </Container>
      </React.Fragment>

      <Outlet />
    </>

  );

}
