import React, { useState } from "react";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { AiOutlineClose } from "react-icons/ai";
import { registerUser } from "../services/authenticationServices/register";
import Form from "./Form";
import "../styles/Form.css";

const SignUp = () => {
  const navigate = useNavigate();
  const [FormData, setFormData] = useState({
    username: "",
    password: "",
  });

  const handleFormSubmission = (event) => {
    event.preventDefault();
    registerUser(FormData).then((response)=>{
      if(response.status === 409){
         throw Error('User already exists');
      }
      return response.json();
    }).then((data)=>{
      toast.success(data.message);
      navigate('/login');
    }).catch((error)=>{
      toast.error(error.message);
    })

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
          <h2 className="Form-Title">Register to SwipTory</h2>
        </div>
        <div>
          <Form
            buttonType="Register"
            FormData={FormData}
            setFormData={setFormData}
            handleSubmit={handleFormSubmission}
          />
        </div>
      </div>
    </section>
  );
};

export default SignUp;
