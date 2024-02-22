// src/Dashboard.js
import React, { useState } from "react";

import Styles from "../styles/component_styles.module.css";
import Button from "@mui/material/Button";

import CssBaseline from "@mui/material/CssBaseline";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";

import { Outlet, Link } from "react-router-dom";

import CardContent from "@mui/material/CardContent";
import { useEffect } from 'react';
import Honda from '../images/honda.png'


let response = {
  "pageName":"brand",
  "payload":[
    {"key":"honda","value":"honda"},
    {"key":"tata","value":"tata"}
  ],
  oldPayload:{"input":""}}

const gridData = [
  {
    id: 0,
    brand:'Honda',
    image: require("../images/honda.png"),
  },
  {
    id: 1,
    brand:'Tata',
    image: require("../images/tata.png"),
  },
  {
    id: 2,
    brand:'Benz',
    image: require("../images/mercedes.png"),
  },
  {
    id: 3,
    brand:'Kia',
    image: require("../images/kia.png"),
  },
  {
    id: 4,
    brand:'Citrogen',
    image: require("../images/citroen.png"),
  },
  {
    id: 5,
    brand:'Jeep',
    image: require("../images/jeep.png"),
  },
  {
    id: 6,
    brand:'Land Rover',
    image: require("../images/audi.png"),
  },
  {
    id: 7,
    brand:'Volvo',
    image: require("../images/valvoline.png"),
  }
];

function Header() {
  return (
    <>
      <Container fixed>
        <h2 className={Styles.dashboard_header}>Dashboard</h2>
      </Container>
    </>
  );
}
function SearchBar() {
  return (
    <div className={Styles.serachbar}>
      <h2>Select Car Brand</h2>
    </div>
  );
}

export default function Home() {
  const [records, setRecords] = useState([]);
  const [record, setRecord] = useState([]);
  response.payload.forEach(item =>{
  //   let array = {
  //     brand:key,
  //     image: require(`../images/${brand}.png`)
  //   }
  // gridData.push(array);
  })
  let apiPayload = {
    "pageName": "home"
   
  }
  useEffect(() => {
    const fetchData = async () => {
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
        const filterBrands = data.payload.map(item => item.value);
        const filteredData = gridData.filter(item => filterBrands.includes(item.brand));
        setRecord(data);
        setRecords(filteredData);
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
          <Grid container>
            {/* display list of data using map, it must have return*/}
            {records?.map(function (data) {

              return (
                <Grid
                  md={2}
                  columnSpacing={{ xs: 6, sm: 3, md: 2 }}
                  className={Styles.gridSpace}
                >
                  <Card elevation={3} sx={{ p: 3, height: "100%" }}>
                    <CardContent>
                      {/* using link for routing */}
                      <Link to="/model"
                      state={{
                        "pageName":"brand",
                        "pageRequest":{
                          "brand":data.key
                        }
                      }} 
                      rel="noreferrer">
                        <img
                          src={data.image}
                          alt=""
                          className={Styles.image_resolution}
                        />
                      </Link>
                    </CardContent>
                  </Card>
                </Grid>
              );
            })}
          </Grid>
          <Button variant="outlined" className={Styles.buttonHome}>
            Other
          </Button>
        </Container>
      </React.Fragment>

      <Outlet />
    </>
  );
}
