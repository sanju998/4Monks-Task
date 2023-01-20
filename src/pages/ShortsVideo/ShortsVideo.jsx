import React, { useState } from "react";
import "./ShortsVideo.css";
import Slider from "react-slick";
import { VideosData } from "../../../src/utils/VideosData";
import Videos from "../../../src/assets/Videos/video.mp4";
import CakeImage from "../../assets/Images/Cake.jpg";
import { TbDotsCircleHorizontal } from "react-icons/tb";
import { TbVolume } from "react-icons/tb";
import { IoIosShare } from "react-icons/io";
import { AiFillHeart, AiFillMessage } from "react-icons/ai";

function ShortsVideo() {


const [like, setlike] = useState(false)

  const settings = {
    dots: false,
    arrows: false,
    infinite: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    vertical: true,
    verticalSwiping: true,
    beforeChange: function (currentSlide, nextSlide) {
      console.log("before change", currentSlide, nextSlide);
    },
    afterChange: function (currentSlide) {
      console.log("after change", currentSlide);
    },
  };
  return (
    <div className=" main-div ">
      <div className="main-container">
        <Slider {...settings}>
          {VideosData.map((item) => (
            <div className="slide position-relative">
              <video src={Videos} controls autoplay></video>
              <div className="slide-overly p-3">
                <div>
                  <div className="d-flex justify-content-between">
                    <div className="d-flex justify-content-between align-items-center">
                      <div
                        className="rounded-circle overflow-hidden me-2"
                        style={{ width: "40px", height: "40px" }}
                      >
                        <img src={CakeImage} style={{ width: "100%" }} alt="" />
                      </div>
                      <div style={{ fontSize: "12px" }}>Cakes & Cheese</div>
                      <button
                        className="rounded-pill overflow-hidden me-2 py-2 px-3 ms-2 border-0 text-white"
                        style={{ background: "#2C3033", fontSize: "12px" }}
                      >
                        Follow
                      </button>
                    </div>
                    <div className="d-flex justify-content-between align-items-center">
                      <div className="me-2" style={{ fontSize: "22px" }}>
                        <TbDotsCircleHorizontal />
                      </div>
                      <div style={{ fontSize: "21px" }}>
                        <TbVolume />
                      </div>
                    </div>
                  </div>
                  <div className="mt-2" style={{ fontSize: "12px" }}>
                   {item.discreption}
                  </div>
                </div>
                <div className="d-flex flex-column justify-content-between align-items-end">
                  <div>
                    <div
                      className="rounded-4 d-flex align-items-center  justify-content-center overflow-hidden mt-2"
                      style={{
                        width: "36px",
                        height: "36px",
                        fontSize: "27px",
                        background:
                          "linear-gradient(90.82deg, rgba(0, 0, 0, 0.2) 0%, rgba(0, 0, 0, 0.2) 99.85%)    ",
                      }}
                      onClick={()=>setlike(!like)}
                    >
                      <AiFillHeart className={like?"text-danger":"text-white"}/>
                    </div>
                    <div className="text-center" style={{ fontSize: "12px" }}>
                    {item.likes}

                    </div>
                  </div>
                  <div>
                    <div
                      className="rounded-4 d-flex align-items-center  justify-content-center overflow-hidden mt-2"
                      style={{
                        width: "36px",
                        height: "36px",
                        fontSize: "27px",
                        background:
                          "linear-gradient(90.82deg, rgba(0, 0, 0, 0.2) 0%, rgba(0, 0, 0, 0.2) 99.85%)    ",
                      }}
                    >
                      <AiFillMessage />
                    </div>
                    <div className="text-center" style={{ fontSize: "12px" }}>
                    {item.n_of_comments}

                    </div>
                  </div>

                  <div
                    className="rounded-4 d-flex align-items-center  justify-content-center overflow-hidden mt-2"
                    style={{
                      width: "36px",
                      height: "36px",
                      fontSize: "27px",
                      background:
                        "linear-gradient(90.82deg, rgba(0, 0, 0, 0.2) 0%, rgba(0, 0, 0, 0.2) 99.85%)    ",
                    }}
                  >
                    <IoIosShare style={{ transform: "rotate(90deg)" }} />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
}

export default ShortsVideo;
