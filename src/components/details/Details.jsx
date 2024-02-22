import React, { useEffect } from "react";
import "./Details.css";
import image from "../../assets/new.webp";
import { useNavigate , useLocation } from "react-router-dom";
import axios from "axios";
import { useState } from "react";
import Popup from "../ToVerify.jsx";


const Details = () => {
  const fields = [{
    customerType: " ",
    vehicleGccSpesification: " ",
    typeOfVehicle: " ",
    coverageType: " ",
    purposeOfTransaction: " ",
    vin: " ",
    modelYear: " ",
    makeMaufacturer: " ",
    vehicleModel: " ",
    category: " ",
    bodyType: " ",
    engine: " ",
    transmission: " ",
    cylinder: '',
    noOfseats: ' ',
    manufacturedCountry: " ",
    cityOfRegistration: " ",
    noClaimDiscount:'',
    vehilcleRepair: '',
    sumInsured:'',
    nationality:'',
    ownersDateOfBirth: '',
    drivingLicenceIssueDate:'',
    driverAge: '',
    insuranceDetails: [

    ],
  }];
  const navigate = useNavigate();

  const [formData, setFormData] = useState(fields);
  const [openUp, setOpen] = useState(false);
  const location = useLocation();
    let  apiPayload  = location.state;
    apiPayload.pageRequest.regyear = apiPayload.selectedValue;
  const handleClick = (event) => {
    if (event === "clicked") {
        // navigate('/Success')
      setOpen(true);
    }
  };
  const handleClose = () => {
    
      setOpen(false);
    
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };
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
        setFormData(data.payload);
        console.log(data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
  
    fetchData();
  }, []);
  const handleProceed = async () => {
    const url = "http://192.168.100.150:8083/rak/dynamic";
    const data = {
      pageName: "details",
      pageRequest: {
        brand: formData[0].makeMaufacturer,
        model: formData[0].vehicleModel,
        variant: formData[0].category,
        regyear: formData[0].modelYear,
      },
    };
    try {
      const response = await axios.post(url, data);
      navigate("/" + response.data.pageName);
      console.log(response.data);
    } catch (error) {
      console.error("Error making the API call:", error);
    }
  };
  return (
    <>
      <img style={{ width: "240px" }} src={image} alt=" Empty page" />

      <div className="details-container">
        <div className="card">
          <h2 className="head">BASIC INFORMATION</h2>
          <div className="input-group">
            <label>Customer Type</label>
            <input
              type="text"
              name="customerType"
              value={formData[0].customerType}
              onChange={handleInputChange}
            />
          </div>
          <div className="input-group">
            <label>Vehicle GCC Spesification</label>
            <input
              type="text"
              name="vehicleGccSpesification"
              value={formData[0].vehicleGccSpesification}
              onChange={handleInputChange}
            />
          </div>
          <div className="input-group">
            <label>Type of Vehicle</label>
            <input
              type="text"
              name="typeOfVehicle"
              value={formData[0].typeOfVehicle}
              onChange={handleInputChange}
            />
          </div>
          <div className="input-group">
            <label>Coverage Type</label>
            <input
              type="text"
              name="coverageType"
              value={formData[0].coverageType}
              onChange={handleInputChange}
            />
          </div>
          <div className="input-group">
            <label>Purpose of transaction Type</label>
            <input
              type="text"
              name="purposeOfTransaction"
              value={formData[0].purposeOfTransaction}
              onChange={handleInputChange}
            />
          </div>
        </div>
        <div className="card">
          <h2 className="head">VEHICLE INFORMATION</h2>
          <div className="input-group">
            <label>VIN</label>
            <input
              type="text"
              name="vin"
              value={formData[0].vin}
              onChange={handleInputChange}
            />
          </div>
          <div className="input-group">
            <label>Model Year</label>
            <input
              type="text"
              name="modelYear"
              value={formData[0].modelYear}
              onChange={handleInputChange}
            />
          </div>
          <div className="input-group">
            <label>Make/Maufacturer</label>
            <input
              type="text"
              name="makeMaufacturer"
              value={formData[0].makeMaufacturer}
              onChange={handleInputChange}
            />
          </div>
          <div className="input-group">
            <label>Vehicle Model</label>
            <input
              type="text"
              name="vehicleModel"
              value={formData[0].vehicleModel}
              onChange={handleInputChange}
            />
          </div>
          <div className="input-group">
            <label>Category</label>
            <input
              type="text"
              name="category"
              value={formData[0].category}
              onChange={handleInputChange}
            />
          </div>
          <div className="input-group">
            <label>Body Type</label>
            <input
              type="text"
              name="bodyType"
              value={formData[0].bodyType}
              onChange={handleInputChange}
            />
          </div>
          <div className="input-group">
            <label>Engine Type</label>
            <input
              type="text"
              name="engine"
              value={formData[0].engine}
              onChange={handleInputChange}
            />
          </div>
          <div className="input-group">
            <label>Transmission</label>
            <input
              type="text"
              name="transmission"
              value={formData[0].transmission}
              onChange={handleInputChange}
            />
          </div>
          <div className="input-group">
            <label>Cylinder</label>
            <input
              type="text"
              name="cylinder"
              value={formData[0].cylinder}
              onChange={handleInputChange}
            />
          </div>
          <div className="input-group">
            <label>No of Seats</label>
            <input
              type="text"
              name="noOfseats"
              value={formData[0].noOfseats}
              onChange={handleInputChange}
            />
          </div>
          <div className="input-group">
            <label>Manufactured Country</label>
            <input
              type="text"
              name="manufacturedCountry"
              value={formData[0].manufacturedCountry}
              onChange={handleInputChange}
            />
          </div>
          <div className="input-group">
            <label>City of Registration</label>
            <input
              type="text"
              name="cityOfRegistration"
              value={formData[0].cityOfRegistration}
              onChange={handleInputChange}
            />
          </div>
          <div className="input-group">
            <label>No Claim Discount(No. of years)</label>
            <input
              type="text"
              name="noClaimDiscount"
              value={formData[0].noClaimDiscount}
              onChange={handleInputChange}
            />
          </div>
          <div className="input-group">
            <label>Vehicle Repair</label>
            <input
              type="text"
              name="vehilcleRepair"
              value={formData[0].vehilcleRepair}
              onChange={handleInputChange}
            />
          </div>
          <div className="input-group">
            <label>Sum Insured</label>
            <input
              type="text"
              name="sumInsured"
              value={formData[0].sumInsured}
              onChange={handleInputChange}
            />
          </div>
        </div>
        <div className="card">
          <h2 className="head">OWNER DETAILS</h2>
          <div className="input-group">
            <label>Nationality</label>
            <input
              type="text"
              name="nationality"
              value={formData[0].nationality}
              onChange={handleInputChange}
            />
          </div>
          <div className="input-group">
            <label>Owner's Date Of Birth</label>
            <input
              type="text"
              name="ownersDateOfBirth"
              value={formData[0].ownersDateOfBirth}
              onChange={handleInputChange}
            />
          </div>
          <div className="input-group">
            <label>UAE Driving Licence Issue Date</label>
            <input
              type="text"
              name="drivingLicenceIssueDate"
              value={formData[0].drivingLicenceIssueDate}
              onChange={handleInputChange}
            />
          </div>
          <div className="input-group">
            <label>Driver Age</label>
            <input
              type="text"
              name="driverAge"
              value={formData[0].driverAge}
              onChange={handleInputChange}
            />
          </div>
        </div>
        <div className="card">
          <h2 className="head">INSURANCE DETAILS</h2>
          <table className="insurance-table">
            <thead>
              <tr>
                <th>Insurance</th>
                <th>
                  <input type="radio" name="tableRadio" className="radio" />
                  Comprehensive
                </th>
                <th>
                  <input type="radio" name="tableRadio" className="radio" />
                  Third Party Liability
                </th>
              </tr>
            </thead>
            <tbody>
              {formData[0].insuranceDetails.map((detail, index) => (
                <tr key={index}>
                  <td>{detail.type}</td>
                  <td>{detail.compr}</td>
                  <td>{detail.thirdParty}</td>
                </tr>
              ))}
            </tbody>
          </table>
          {/* <div  className="input-group">
                    <label >Chaise Number</label>
                    <input type="text" id={fields.driverAge} value={fields.driverAge} />
                    </div> */}
        </div>
        <div className="proceed-button">
          <button
            type="button"
            className="button"
            onClick={(event) => handleClick("clicked")}
          >
            Proceed
          </button>
          {openUp && <Popup openUp='true' handleClose={handleClose} handleProceedClick={handleProceed} />}
        </div>
      </div>
    </>
  );
};

export default Details;
