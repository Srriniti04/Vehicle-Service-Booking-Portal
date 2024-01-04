import React from "react";
import "../../styles/find-car-form.css";
import "../../styles/find-car-form.css";
import { Form, FormGroup } from "reactstrap";

const FindCarForm = () => {
  return (
    <Form className="form">
      <div className=" d-flex align-items-center justify-content-between flex-wrap">
        <FormGroup className="form__group">
          <input type="text" placeholder="Vehicle Type" required />
        </FormGroup>

        <FormGroup className="form__group">
          <input type="text" placeholder="Type of service" required />
        </FormGroup>

        <FormGroup className="form__group">
          <input type="date" placeholder="Appointment Date" required />
        </FormGroup>
        <FormGroup className="form__group">
         <button className="btn find__car-btn">Book Your Service</button>
        </FormGroup>
      </div>
    </Form>
  );
};
export default FindCarForm;
