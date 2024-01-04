import React from "react";
import { Container, Row, Col } from "reactstrap";
import "../../styles/about-section.css";
import aboutImg from "../../assets/all-images/cars-img/bmw-offer.png";

const AboutSection = ({ aboutClass }) => {
  return (
    <section
      className="about__section"
      style={
        aboutClass === "aboutPage"
          ? { marginTop: "0px" }
          : { marginTop: "280px" }
      }
    >
      <Container>
        <Row>
          <Col lg="6" md="6">
            <div className="about__section-content">
              <h4 className="section__subtitle">About Us</h4>
              <h2 className="section__title">Welcome to car rent service</h2>
              <p className="section__description">
              We focus on automating and improving the process of vehicle service and address the pain points within the user's journey. Just book an appointment with the Website, and then relax, as our pick-up and delivery service, ensures Hassle free service from the comfort of your home or office.
Customers are the most valuable part of our family and we take customer's opinions with utmost importance, after all innovation based on user feedback is our mantra. That's why when you give your vehicle for service, be rest assured for the best service quality because Your Vehicle is Our Responsibility.
              </p>
            </div>
          </Col>

          <Col lg="6" md="6">
            <div className="about__img">
              <img src={aboutImg} alt="" className="w-100" />
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default AboutSection;
