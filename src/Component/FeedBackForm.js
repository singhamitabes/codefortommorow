import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const FeedBackForm = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    address: "",
    country: "",
    email: "",
    phone: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

  
    if (
      formData.firstName &&
      formData.lastName &&
      formData.address &&
      formData.country &&
      formData.email &&
      formData.phone
    ) {
      
      console.log("Form submitted:", formData);
      setSubmitted(true);

     
      setFormData({
        firstName: "",
        lastName: "",
        address: "",
        country: "",
        email: "",
        phone: "",
      });
    } else {
      alert("Please fill in all fields before submitting.");
    }
  };

  return (
    <div className="container">
      <h2>Thankyou so much for taking the time</h2>
      <h2>Please provide the below details</h2>
     
      {submitted && <p className="alert alert-success">Thank you for your feedback!</p>}
      <form onSubmit={handleSubmit}>
        <h4>First Name</h4>
        <div className="mb-3 w-50">
          <input
            type="text"
            name="firstName"
            value={formData.firstName}
            onChange={handleInputChange}
            className="form-control"
            placeholder="First Name"
          />
        </div>
        <h4>Last Name</h4>
        <div className="mb-3 w-50">
          <input
            type="text"
            name="lastName"
            value={formData.lastName}
            onChange={handleInputChange}
            className="form-control"
            placeholder="Last Name"
          />
        </div>
        <h4>address</h4>
        <div className="mb-3  w-75">
          <input
            type="text"
            name="address"
            value={formData.address}
            onChange={handleInputChange}
            className="form-control"
            placeholder="Address"
          />
        </div>
        <h4>Country</h4>
        <div className="mb-3 w-75">
          <input
            type="text"
            name="country"
            value={formData.country}
            onChange={handleInputChange}
            className="form-control"
            placeholder="Country"
          />
        </div>
        <h4>Email ID</h4>
        <div className="mb-3 w-50">
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            className="form-control"
            placeholder="Email"
          />
        </div>
        <h4>Phone Number</h4>
        <div className="mb-3 w-50">
          <input
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleInputChange}
            className="form-control"
            placeholder="Phone"
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Submit Feedback
        </button>
      </form>
    </div>
  );
};

export default FeedBackForm;
