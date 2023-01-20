import React, { useState } from "react";
import { AiOutlineEye } from "react-icons/ai";
import { AiOutlineEyeInvisible } from "react-icons/ai";
import "./SignInForm.css";

function SignInForm() {
  const [passwordType, setPasswordType] = useState("password");
  const [passwordInput, setPasswordInput] = useState("");
  const handlePasswordChange = (evnt) => {
    setPasswordInput(evnt.target.value);
  };
  const togglePassword = () => {
    if (passwordType === "password") {
      setPasswordType("text");
      return;
    }
    setPasswordType("password");
  };
  return (
    <>
      <div className="form-card px-sm-5 pt-4  pt-sm-5 pb-3 d-flex justify-content-between flex-column ">
        <div className="px-4">
          <div className="text-center mt-3">
            <h3 className="fw-semibold">Hello, Again!</h3>
            <p className="mt-3" style={{ color: "#666666" }}>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry.
            </p>
          </div>
          <div className="mt-4">
            <input
              type="text"
              className=" px-4 w-100 mb-4"
              placeholder="Cusomer ID"
            />
            <input
              type="email"
              className=" px-4 w-100 mb-4"
              placeholder="Email"
            />
            <div className="possword-field-div">
              <input
                className="px-4 w-100 mb-2"
                placeholder="Password"
                type={passwordType}
                onChange={handlePasswordChange}
                value={passwordInput}
                name="password"
              />
              <span onClick={togglePassword} className="pb-2">
                {passwordType === "password" ? (
                  <AiOutlineEyeInvisible />
                ) : (
                  <AiOutlineEye />
                )}
              </span>
            </div>

            <div className="text-end">
              <span
                style={{
                  color: "#666666",
                  fontSize: " 12px ",
                  cursor: "pointer",
                }}
              >
                Forgot Password?
              </span>
            </div>
          </div>
        </div>
        <div className="text-center px-3">
          <button className="w-100">Sign In</button>
          <p
            style={{
              color: "#666666",
              fontSize: " 12px ",
            }}
            className="mt-4"
          >
            Don’t have an account?
            <span style={{ color: "#25A0DA", cursor: "pointer" }}>
              Register
            </span>
          </p>
        </div>
      </div>
    </>
  );
}

export default SignInForm;
