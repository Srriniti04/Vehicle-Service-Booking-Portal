import React from "react";

import CommonSection from "../components/UI/CommonSection";
import Helmet from "../components/Helmet/Helmet";
import AboutSection from "../components/UI/AboutSection";
import { Container, Row, Col } from "reactstrap";
import driveImg from "../assets/all-images/drive.jpg";
import "../styles/about.css";

const About = () => {
  return (
    <Helmet title="About">
      <CommonSection title="About Us" />
      <AboutSection aboutClass="aboutPage" />

      <section className="about__page-section">
        <Container>
          <Row>
            <Col lg="6" md="6" sm="12">
              <div className="about__page-img">
                <img src={driveImg} alt="" className="w-100 rounded-3" />
              </div>
            </Col>

            <Col lg="6" md="6" sm="12">
              <div className="about__page-content">
                <h2 className="section__title">
                  We Are Committed To Provide The Best Service 
                </h2>

                <p className="section__description">
                  
                </p>

                <p className="section__description">
                We provide various package for service which has been meticulously curtained to meet us requirements. Be it Cars or Bikes we are there for you always, we provide complete transparency to customers and satisfy their needs, provide an opportunity to serve you and we guarantee that you will not be disappointed because customer satisfaction is the first and foremost thing that we aim for, Be it night or day we will be buy your side Alwayz.
                </p>

               
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      
    </Helmet>
  );
};

export default About;
