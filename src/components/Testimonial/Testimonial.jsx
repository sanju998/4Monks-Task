import React from "react";
import { Carousel } from "react-bootstrap";
import "./Testimonial.css";
import { CarouselData } from "../../../src/utils/CarouselData";
import { FaQuoteRight } from "react-icons/fa";
function Testimonial() {
  return (
    <>
      <Carousel controls={false}>
        {CarouselData.map((item) => (
          <Carousel.Item>
            <div className="ps-4">
              <div
                style={{
                  color: "#000",
               
                  fontWeight: "500 ",
                }}
                className="commants"
              >
                <FaQuoteRight
                  style={{
                    fontSize: " 12px ",
                    transform: "rotate(180deg)",
                    marginLeft: "-12px",
                    zIndex: "2",
                  }}
                  className="mb-5"
                />
                {item.commants}
                <FaQuoteRight style={{ fontSize: " 12px " }} className="mb-4" />
              </div>
              <div className="mt-4"> {item.name}</div>
              <div className="mt-1"> {item.position}</div>
            </div>
          </Carousel.Item>
        ))}
      </Carousel>
    </>
  );
}

export default Testimonial;
