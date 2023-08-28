import { useNavigate } from "react-router-dom";
import { AiOutlineClose } from "react-icons/ai";
import Form from "./Form";
import SlideTab from "./SlideTab";
import "../../styles/AddStory.css";

const AddStory = () => {
  const navigate = useNavigate();

  return (
    <div className="AddStory-Container">
      <div className="Form-Container AddStory-Wrapper">
        <div
          className="Form-Flex"
          style={{
            flexDirection: "column",
            alignItems: "flex-end",
            paddingTop: "1rem",
          }}
        >
          <button
            className="Form-Close-Button"
            onClick={() => {
              navigate("/bookmark");
            }}
            style={{ marginBottom: "1.4rem" }}
          >
            <AiOutlineClose className="Outline-Close-Button" />
          </button>
          <span>Add upto 6 slides</span>
        </div>
        <section className="Form-Tab-Wrapper">
          <SlideTab/>
          <div className="AddStory-Form">
            <Form
            />
          </div>
        </section>
      </div>
    </div>
  );
};

export default AddStory;
