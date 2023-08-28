import React, { useState } from "react";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { AiOutlineClose } from "react-icons/ai";
import { loginUser } from "../services/authenticationServices/login";
import Form from "./Form";
import "../styles/Form.css";
const SignIn = () => {
  const navigate = useNavigate();
  const [FormData, setFormData] = useState({
    username: "",
    password: "",
  });

  const handleFormSubmission = (event) => {
    event.preventDefault();

    loginUser(FormData)
      .then((data) => {
        const msg = data.message;
        if (data.status === 401) {
          throw Error(msg);
        } else {
          toast.success(msg);
          localStorage.setItem('islogged',true);
          navigate('/bookmark');
        }
      })
      .catch((error) => {
        toast.error(error.message);
      });
  };

  return (
    <section className="Form-Modal">
      <div className="Form-Container">
        <div className="Form-Flex">
          <button
            className="Form-Close-Button"
            onClick={() => {
              navigate("/");
            }}
          >
            <AiOutlineClose className="Outline-Close-Button" />
          </button>
        </div>
        <div className="Form-Title-Wrapper">
          <h2 className="Form-Title">Login to SwipTory</h2>
        </div>
        <div>
          <Form
            buttonType="Login"
            FormData={FormData}
            setFormData={setFormData}
            handleSubmit={handleFormSubmission}
          />
        </div>
      </div>
    </section>
  );
};

export default SignIn;
