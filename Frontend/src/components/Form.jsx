import React from "react";
import "../styles/Form.css";
import { AiOutlineEye } from "react-icons/ai";


const Form = ({buttonType,FormData,setFormData,handleSubmit}) => {
  
  const handleChange = (event) =>{
    const{name,value} = event.target;
    setFormData((prev)=>{
      return {
        ...prev,
        [name]:value
      }
    })
  }
  return (
    <form className="Form" onSubmit={handleSubmit}>
      <div className="Form-Field-Wrapper">
        <label htmlFor="username" className="Field-Label">
          Username
        </label>
        <p className="Form-Input">
          <input
            type="text"
            id="username"
            name="username"
            className="Input-Field"
            value={FormData.username}
            placeholder="Enter Username"
            onChange={handleChange}
          />
        </p>
      </div>

      <div className="Form-Field-Wrapper">
        <label htmlFor="password" className="Field-Label">
          Password
        </label>
        <p className="Form-Input Form-Input-Flex">
          <input
            type="password"
            id="password"
            name="password"
            className="Input-Field"
            placeholder="Enter Password"
            value={FormData.password}
            onChange={handleChange}
          />
          <button className="Password-Eye-Button">
            <AiOutlineEye className="Password-Eye"/>
          </button>
        </p>
      </div>
      <div className="Submit-Button-Wrapper">
        <button type="submit" className="Submit-Button">{buttonType}</button>
      </div>
    </form>
  );
};

export default Form;
