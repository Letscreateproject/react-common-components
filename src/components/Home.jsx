// src/Dashboard.js
import React, { useState } from 'react';

import Styles from '../styles/component_styles.module.css'
import Button from '@mui/material/Button';


import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';





import { Outlet, Link } from "react-router-dom";

import CardContent from '@mui/material/CardContent';



const gridData = [
  {
  id: 0,
     
  image: require('../images/Jeep_logo_PNG19.png')

}, {
  id: 1,
  
  image: require('../images/580b57fcd9996e24bc43c467.png')
}, {
  id: 2,
 
  image: require('../images/638e307b3eae41f3706b4076.png')
},
{
  id: 3,

  image: require('../images/580b57fcd9996e24bc43c467.png')
}, {
  id: 4,
 
  image: require('../images/580b57fcd9996e24bc43c467.png')
}, {
  id: 5,
 
  image: require('../images/580b57fcd9996e24bc43c467.png')

},
{
  id: 6,
 
  image: require('../images/580b57fcd9996e24bc43c467.png')

}, {
  id: 7,
  image: require('../images/580b57fcd9996e24bc43c467.png')

}, {
  id: 9,
  image: require('../images/580b57fcd9996e24bc43c467.png')

}
 ];




function Header() {
  return (
    <>
      <Container fixed>
       

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
        Select Car Brand
      </h2>
    </div>
  )
}


export default function Home() {
 

  return (

    <>
      <React.Fragment>
        <CssBaseline />
        <Header />
        <Container maxWidth="md" className={Styles.bodycontainer}>
          <SearchBar />
          <Grid container  >
            {/* display list of data using map, it must have return*/}
            {gridData.map(function (data) {
              return (

                <Grid md={2} columnSpacing={{ xs: 6, sm: 3, md: 2 }} className={Styles.gridSpace}>


                  <Card elevation={3} sx={{ p: 3, height: "100%" }} >
                    <CardContent>
                      {/* using link for routing */}
                      <Link to="/carmodel"  rel="noreferrer">
                        <img src={data.image} alt="" className={Styles.image_resolution} />

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
