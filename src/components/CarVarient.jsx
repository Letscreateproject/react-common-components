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

import { Outlet, Link,useLocation } from "react-router-dom";

import { useEffect } from 'react';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { useParams } from 'react-router-dom';

const variantData = {
  "pageName":"varient",
  "payload":[
    {"key":"2.0ldiesel","value":"2.0 L Diesel"}
    ,{"key":"1.5lpetrol","value":"1.5 L Petrol"}
  ],oldPayload:{
    "brand":"honda",
    "model":"civic"
  }
}






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
        Select Car Variant
      </h2>
    </div>
  )
}


export default function Home() {
  
  let {id} = useParams();
  const [records,setRecords]=useState([]);
  const [record,setRecord]=useState([]);
  const location = useLocation();
  let  apiPayload  = location.state;
  apiPayload.pageRequest.model = apiPayload.selectedValue;

  useEffect(() => {
    const fetchData = async () => {
      delete apiPayload.selectedValue;
      try {
        const response = await fetch('http://192.168.100.150:8083/rak/dynamic', {
          method: 'POST', // Assuming you are sending data in the request body
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(apiPayload)
        });
  
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
  
        const data = await response.json();
        setRecord(data)
        setRecords(data.payload);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
  
    fetchData();
  }, []);

  return (

    <>
      <React.Fragment>
        <CssBaseline />
        <Header />
        <Container maxWidth="md" className={Styles.bodycontainer}>
          <SearchBar />
          <Grid container  >
            {/* display list of data using map, it must have return*/}
            {records?.map(function (data) {
              record.oldPayload.variant = data.value;
              return (

                <Grid md={12} columnSpacing={{ xs: 6, sm: 3, md: 2 }} className={Styles.gridSpace}>


                  {/* <Card elevation={3} sx={{ p: 3, height: "100%" }} >
                    <CardContent> */}
                      <Link to="/caryear"
                       state={{
                        "pageName":"variant",
                        "pageRequest":record.oldPayload,
                        "selectedValue":data.value,
                      }}
                      rel="noreferrer">
                        {/* <img src={data.image} alt="" className={Styles.image_resolution} /> */}
                        <span><ArrowForwardIcon></ArrowForwardIcon></span> <span>{data.value}</span>

                      </Link>





                    {/* </CardContent>

                  </Card> */}




                </Grid>




              )
            })}

          </Grid>
        </Container>
      </React.Fragment>

      <Outlet />
    </>

  );

}
