import React, { useState } from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
const userDetails = {
  name: "Akshay",
  email: "email@email.com",
  phoneNo: "66998841",
};

export default function ToVerify({ openUp, handleClose }) {
  const [OTP, setOTP] = useState(false);
  const [verifiedOTP, setVerifiedOTP] = useState(false);
  const [formData, setFormData] = useState({
    fullName: "Akshay",
    email: "email@email.com",
    phoneNo: "66998841",
  });

 
  const sendOTP = () => {
    alert("OTP sent successfully");
    setOTP(true);
  };

  const verifyOTP = () => {
    setVerifiedOTP(true);
  };
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };
  return (
    <>
      {openUp && (
        <Dialog
          open={openUp}
          
          onClose={handleClose}
          PaperProps={{
            component: "form",
            onSubmit: (event) => {
              event.preventDefault();
              const formData = new FormData(event.currentTarget);
              const formJson = Object.fromEntries(formData.entries());
              const email = formJson.email;
              console.log(email);
              handleClose();
            },
          }}
        >
          <DialogTitle>GET VERIFIED TO GET PROPOSAL</DialogTitle>
          <DialogContent>
            <DialogContentText></DialogContentText>
            <TextField
              autoFocus
              required
              margin="dense"
              id="name"
              name="fullName"
              label="Full Name"
              value={formData.fullName}
              onChange={handleInputChange}
              type="text"
              fullWidth
              variant="standard"
            />
            <TextField
              autoFocus
              required
              margin="dense"
              id="name"
              name="email"
              label="Email Address"
              value={formData.email}
              onChange={handleInputChange}
              type="email"
              fullWidth
              variant="standard"
            />
            <TextField
              autoFocus
              required
              margin="dense"
              id="phoneNo"
              name="phoneNo"
              label="Phone"
              type="number"
              value={formData.phoneNo}
              onChange={handleInputChange}
              fullWidth
              variant="standard"
            />
            <div className={OTP?'txt-red':null}>
            <Button  onClick={sendOTP}>
              {!OTP ? "Send OTP" : "Resend OTP"}
            </Button>
            </div>
            
            {OTP && (
              <>
                <TextField
                  autoFocus
                  required
                  margin="dense"
                  id="otp"
                  name="ptp"
                  label="Enter OTP"
                  type="number"
                  fullWidth
                  variant="standard"
                />
                <Button onClick={verifyOTP}>
                  {!verifiedOTP ? "Verify" : "Verified"}
                </Button>
              </>
            )}
          </DialogContent>
          <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
            <Button type="submit">View Proposal</Button>
          </DialogActions>
        </Dialog>
      )}
    </>
  );
}
