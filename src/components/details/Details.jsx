import React, { useEffect } from "react";
import "./Details.css";
import image from "../../assets/new.webp";
import { useNavigate , useLocation } from "react-router-dom";
import axios from "axios";
import { useState } from "react";
import Popup from "../ToVerify.jsx";


const Details = () => {
  const fields = {
    customerType: "Induvitual",
    vehicleGccSpesification: "yes",
    typeOfVehicle: "Private",
    coverageType: "Comprehensive",
    purposeOfTransaction: "Brand New",
    vin: "19XFC267XKE450363",
    modelYear: "2019",
    makeMaufacturer: "Honda",
    vehicleModel: "City",
    category: "Sedan",
    bodyType: "Metal",
    engine: "2.0L",
    transmission: "Manual",
    cylinder: 4,
    noOfseats: 5,
    manufacturedCountry: "japan",
    cityOfRegistration: "Dubai",
    noClaimDiscount: 0,
    vehilcleRepair: "Approved workshop-Garage",
    sumInsured: 100000,
    nationality: "Indian",
    ownersDateOfBirth: "05/09/1998",
    drivingLicenceIssueDate: "20/05/2012",
    driverAge: 25,
    insuranceDetails: [
      { type: "Premium AED", compr: "2,079", thirdParty: "1,329" },
      { type: "Gross Premium AED", compr: "2,079", thirdParty: "1,329" },
      { type: "VAS 5%", compr: "103.95", thirdParty: "66.45" },
      { type: "Final Premium AED", compr: "2,182.95", thirdParty: "1,395.45" },
    ],
  };
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

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };
  const handleProceed = async () => {
    const url = "http://192.168.100.150:8083/rak/dynamic";
    const data = {
      pageName: "details",
      pageRequest: {
        brand: formData.makeMaufacturer,
        model: formData.vehicleModel,
        variant: formData.category,
        regyear: formData.modelYear,
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
              value={formData.customerType}
              onChange={handleInputChange}
            />
          </div>
          <div className="input-group">
            <label>Vehicle GCC Spesification</label>
            <input
              type="text"
              name="vehicleGccSpesification"
              value={formData.vehicleGccSpesification}
              onChange={handleInputChange}
            />
          </div>
          <div className="input-group">
            <label>Type of Vehicle</label>
            <input
              type="text"
              name="typeOfVehicle"
              value={formData.typeOfVehicle}
              onChange={handleInputChange}
            />
          </div>
          <div className="input-group">
            <label>Coverage Type</label>
            <input
              type="text"
              name="coverageType"
              value={formData.coverageType}
              onChange={handleInputChange}
            />
          </div>
          <div className="input-group">
            <label>Purpose of transaction Type</label>
            <input
              type="text"
              name="purposeOfTransaction"
              value={formData.purposeOfTransaction}
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
              value={formData.vin}
              onChange={handleInputChange}
            />
          </div>
          <div className="input-group">
            <label>Model Year</label>
            <input
              type="text"
              name="modelYear"
              value={formData.modelYear}
              onChange={handleInputChange}
            />
          </div>
          <div className="input-group">
            <label>Make/Maufacturer</label>
            <input
              type="text"
              name="makeMaufacturer"
              value={formData.makeMaufacturer}
              onChange={handleInputChange}
            />
          </div>
          <div className="input-group">
            <label>Vehicle Model</label>
            <input
              type="text"
              name="vehicleModel"
              value={formData.vehicleModel}
              onChange={handleInputChange}
            />
          </div>
          <div className="input-group">
            <label>Category</label>
            <input
              type="text"
              name="category"
              value={formData.category}
              onChange={handleInputChange}
            />
          </div>
          <div className="input-group">
            <label>Body Type</label>
            <input
              type="text"
              name="bodyType"
              value={formData.bodyType}
              onChange={handleInputChange}
            />
          </div>
          <div className="input-group">
            <label>Engine Type</label>
            <input
              type="text"
              name="engine"
              value={formData.engine}
              onChange={handleInputChange}
            />
          </div>
          <div className="input-group">
            <label>Transmission</label>
            <input
              type="text"
              name="transmission"
              value={formData.transmission}
              onChange={handleInputChange}
            />
          </div>
          <div className="input-group">
            <label>Cylinder</label>
            <input
              type="text"
              name="cylinder"
              value={formData.cylinder}
              onChange={handleInputChange}
            />
          </div>
          <div className="input-group">
            <label>No of Seats</label>
            <input
              type="text"
              name="noOfseats"
              value={formData.noOfseats}
              onChange={handleInputChange}
            />
          </div>
          <div className="input-group">
            <label>Manufactured Country</label>
            <input
              type="text"
              name="manufacturedCountry"
              value={formData.manufacturedCountry}
              onChange={handleInputChange}
            />
          </div>
          <div className="input-group">
            <label>City of Registration</label>
            <input
              type="text"
              name="cityOfRegistration"
              value={formData.cityOfRegistration}
              onChange={handleInputChange}
            />
          </div>
          <div className="input-group">
            <label>No Claim Discount(No. of years)</label>
            <input
              type="text"
              name="noClaimDiscount"
              value={formData.noClaimDiscount}
              onChange={handleInputChange}
            />
          </div>
          <div className="input-group">
            <label>Vehicle Repair</label>
            <input
              type="text"
              name="vehilcleRepair"
              value={formData.vehilcleRepair}
              onChange={handleInputChange}
            />
          </div>
          <div className="input-group">
            <label>Sum Insured</label>
            <input
              type="text"
              name="sumInsured"
              value={formData.sumInsured}
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
              value={formData.nationality}
              onChange={handleInputChange}
            />
          </div>
          <div className="input-group">
            <label>Owner's Date Of Birth</label>
            <input
              type="text"
              name="ownersDateOfBirth"
              value={formData.ownersDateOfBirth}
              onChange={handleInputChange}
            />
          </div>
          <div className="input-group">
            <label>UAE Driving Licence Issue Date</label>
            <input
              type="text"
              name="drivingLicenceIssueDate"
              value={formData.drivingLicenceIssueDate}
              onChange={handleInputChange}
            />
          </div>
          <div className="input-group">
            <label>Driver Age</label>
            <input
              type="text"
              name="driverAge"
              value={formData.driverAge}
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
              {formData.insuranceDetails.map((detail, index) => (
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
          {openUp && <Popup openUp='true' />}
        </div>
      </div>
    </>
  );
};

export default Details;
