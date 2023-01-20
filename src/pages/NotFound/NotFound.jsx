import React from "react";
import FlightsBg from "../../../src/assets/Images/FlightsBg.svg";

function NotFound() {
  return (
    <>
      <div
        className="app-main-div d-flex justify-content-center align-items-center"
        style={{ backgroundImage: `url(${FlightsBg})` }}
      >
        
          <div className="text-center text-white fw-bold" >
   
            <h1 className="m-0 mt-2"> 404 </h1> <br />
            <h4> Page Not Found</h4>


        
        </div>
      </div>
    </>
  );
}

export default NotFound;
