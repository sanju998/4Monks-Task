import React, { useState } from "react";
import SignInForm from "../../components/SignInForm/SignInForm";
import "./SignIn.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import FlightsBg from "../../../src/assets/Images/FlightsBg.svg";
import Testimonial from "../../components/Testimonial/Testimonial";

function SignIn() {
  return (
    <>
      <div
        className="app-main-div"
        style={{ backgroundImage: `url(${FlightsBg})` }}
      >
        <Container className="pt-4 pt-sm-5 pb-2">
          <Row className="mt-sm-5 ">
            <Col lg={6} className="d-flex justify-content-end flex-column mt-5 mt-lg-0 ">
              <div className="pb-4 pe-5">
                <Testimonial />
              </div>
            </Col>
            <Col
              lg={{ span: 6, order: "last" }}
              xl={{ span: 5, offset: 1, order: "last" }}
              xs={{ order: "first" }}
              className="px-xl-4 "
            >
              <div className="px-sm-2">
                <SignInForm />
              </div>
            </Col>
          </Row>

          <div className="d-flex justify-content-center w-100 pt-5"   style={{
                  color: "#878B95",
                  fontSize: " 12px ",
                 
                }}>
            <div className="mx-2">corefares @ 2023</div>
            <div className="mx-2">About Us</div>
            <div className="mx-2">Privacy Policy</div>
            <div className="mx-2">Terms & Conditions</div>
     
          </div>
        </Container>
      </div>
    </>
  );
}

export default SignIn;
