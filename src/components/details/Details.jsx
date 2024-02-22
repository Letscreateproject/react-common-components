    import React, { useEffect } from 'react';
    import './Details.css';
    import image from '../../assets/new.webp';
    import { useNavigate } from 'react-router-dom';
    import axios from 'axios';
    import { useState } from 'react';
    const Details = () => {

    const fields={  
    customerType:"Induvitual",vehicleGccSpesification:"yes",typeOfVehicle:"Private",coverageType:"Comprehensive",purposeOfTransaction:"Brand New",
    vin:"19XFC267XKE450363",modelYear:"2019",makeMaufacturer:"Honda",vehicleModel:"City",category:"Sedan",bodyType:"Metal",engine: "2.0L",
    transmission:"Manual",cylinder:4,noOfseats:5, manufacturedCountry:"japan",cityOfRegistration:"Dubai",noClaimDiscount:0,vehilcleRepair:"Approved workshop-Garage",
    sumInsured:100000,nationality:"Indian",ownersDateOfBirth:"05/09/1998",drivingLicenceIssueDate:"20/05/2012",driverAge:25,insuranceDetails:
    [
        {type:"Premium AED", compr:"2,079",thirdParty:"1,329"},
        {type:"Gross Premium AED", compr:"2,079",thirdParty:"1,329"},
        {type:"VAS 5%", compr:"103.95",thirdParty:"66.45"},
        {type:"Final Premium AED", compr:"2,182.95",thirdParty:"1,395.45"}
    ]
}
    const navigate = useNavigate();

    const [payload, setPayload] = useState({
        pageName:"details",object:{"input":""}

      });
      const handleProceed = async () => {
        const url = 'http://192.168.100.150:8083/rak/dynamic';
        const data = {
            pageName:"details",pageRequest:{}
        };
        try {
          const response = await axios.post(url, data );
          navigate('/'+response.data.pageName);
          console.log(response.data); 
        } catch (error) {
          console.error('Error making the API call:', error);
        }
      };

    // const handleProceed = () => {
    //     navigate('/success');
    // };

    return (
        <>
        <img style={{width:'240px'}} src={image} alt=" Empty page" />

        <div className="details-container">
            <div className="card">
            <h2 className='head'>BASIC INFORMATION</h2>
                <div  className="input-group">
                <label >Customer Type</label>
                <input type="text" id={fields.customerType} defaultValue={fields.customerType} />
                </div>
                <div  className="input-group">
                <label >Vehicle GCC Spesification</label>
                <input type="text" id={fields.vehicleGccSpesification} defaultValue={fields.vehicleGccSpesification} />
                </div>
                <div  className="input-group">
                <label >Type of Vehicle</label>
                <input type="text" id={fields.typeOfVehicle} defaultValue={fields.typeOfVehicle} />
                </div>
                <div  className="input-group">
                <label >Coverage Type</label>
                <input type="text" id={fields.coverageType} defaultValue={fields.coverageType} />
                </div>
                <div  className="input-group">
                <label >Purpose of transaction Type</label>
                <input type="text" id={fields.purposeOfTransaction} defaultValue={fields.purposeOfTransaction} />
                </div>
            </div>
            <div className="card">
            <h2 className='head'>VEHICLE INFORMATION</h2>
                <div  className="input-group">
                <label >VIN</label>
                <input type="text" id={fields.vin} defaultValue={fields.vin} />
                </div>
                <div  className="input-group">
                <label >Model Year</label>
                <input type="text" id={fields.modelYear} defaultValue={fields.modelYear} />
                </div>
                <div  className="input-group">
                <label >Make/Maufacturer</label>
                <input type="text" id={fields.makeMaufacturer} defaultValue={fields.makeMaufacturer} />
                </div>
                <div  className="input-group">
                <label >Vehicle Model</label>
                <input type="text" id={fields.vehicleModel} defaultValue={fields.vehicleModel} />
                </div>
                <div  className="input-group">
                <label >Category</label>
                <input type="text" id={fields.category} defaultValue={fields.category} />
                </div>
                <div  className="input-group">
                <label >Body Type</label>
                <input type="text" id={fields.bodyType} defaultValue={fields.bodyType} />
                </div>
                <div  className="input-group">
                <label >Engine Type</label>
                <input type="text" id={fields.engine} defaultValue={fields.engine} />
                </div>
                <div  className="input-group">
                <label >Transmission</label>
                <input type="text" id={fields.transmission} defaultValue={fields.transmission} />
                </div>
                <div  className="input-group">
                <label >Cylinder</label>
                <input type="text" id={fields.cylinder} defaultValue={fields.cylinder} />
                </div>
                <div  className="input-group">
                <label >No of Seats</label>
                <input type="text" id={fields.noOfseats} defaultValue={fields.noOfseats} />
                </div>
                <div  className="input-group">
                <label >Manufactured Country</label>
                <input type="text" id={fields.manufacturedCountry} defaultValue={fields.manufacturedCountry} />
                </div>
                <div  className="input-group">
                <label >City of Registration</label>
                <input type="text" id={fields.cityOfRegistration} defaultValue={fields.cityOfRegistration} />
                </div>
                <div  className="input-group">
                <label >No Claim Discount(No. of years)</label>
                <input type="text" id={fields.noClaimDiscount} defaultValue={fields.noClaimDiscount} />
                </div>
                <div  className="input-group">
                <label >Vehicle Repair</label>
                <input type="text" id={fields.vehilcleRepair} defaultValue={fields.vehilcleRepair} />
                </div>
                <div  className="input-group">
                <label >Sum Insured</label>
                <input type="text" id={fields.sumInsured} defaultValue={fields.sumInsured} />
                </div>
                </div>
                <div className="card">
            <h2 className='head'>OWNER DETAILS</h2>
                <div  className="input-group">
                <label >Nationality</label>
                <input type="text" id={fields.nationality} defaultValue={fields.nationality} />
                </div>
                <div  className="input-group">
                <label >Owner's Date Of Birth</label>
                <input type="text" id={fields.ownersDateOfBirth} defaultValue={fields.ownersDateOfBirth} />
                </div>
                <div  className="input-group">
                <label >UAE Driving Licence Issue Date</label>
                <input type="text" id={fields.drivingLicenceIssueDate} defaultValue={fields.drivingLicenceIssueDate} />
                </div>
                <div  className="input-group">
                <label >Driver Age</label>
                <input type="text" id={fields.driverAge} defaultValue={fields.driverAge} />
                </div>
            </div>
            <div className="card">
            <h2 className='head'>INSURANCE DETAILS</h2>
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
        {fields.insuranceDetails.map((detail, index) => (
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
                <input type="text" id={fields.driverAge} defaultValue={fields.driverAge} />
                </div> */}
            </div>
        <div className="proceed-button">
            <button type="button" className='button' onClick={handleProceed}>Proceed</button>
        </div>
        </div>
        </>
    );
    };

    export default Details;
