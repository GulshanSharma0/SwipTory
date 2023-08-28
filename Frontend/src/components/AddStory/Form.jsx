import React, { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { StoryContext } from "../../contexts/StoryContext";
import { addStories } from "../../services/Stories/post";
import "../../styles/AddStory.css";
import { toast } from "react-hot-toast";
import { fetchUserStories } from "../../services/Stories/fetchUserStories";
import { checkFormIsNotEmpty } from "../../helper/checkFormIsNotEmpty";

const Form = () => {
  const navigate = useNavigate();
  const {
    totalSlide,
    currentSlide,
    nextStory,
    prevStory,
    FormData,
    setFormData,
    FinalData,
    setFinalData,
  } = useContext(StoryContext);

  const handleChange = (event) => {
    const { name, value } = event.target;

    if (FinalData[currentSlide] !== undefined) {
      const updatedData = {
        ...FinalData[currentSlide],
        [name]: value,
      };
      FinalData[currentSlide] = updatedData;
      setFormData((prev) => {
        return {
          ...FinalData[currentSlide],
          [name]: value,
        };
      });
    } else {
      setFormData((prev) => {
        return {
          ...prev,
          [name]: value,
        };
      });
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    // const formData = [...FinalData, FormData];
    let formData = [];

    if (checkFormIsNotEmpty(FormData)) {
      formData = [...FinalData, FormData];
    } else {
      formData = [...FinalData];
    }

    if (formData.length < 3) {
      toast.error("min 3 slides");
      return;
    } else {
      
      const finalFormData = formData.slice(0,currentSlide+1);
      addStories(finalFormData)
        .then((res) => {
          if (res.status === 400) {
            throw Error("already have 6 stories");
          }
          return res.json();
        })
        .then((data) => {
          toast.success(data.message);
          navigate("/bookmark");
        })
        .catch((error) => {
          toast.error(error.message);
        });
    }
  };

  useEffect(() => {
    fetchUserStories()
      .then((data) => {
        setFormData(data.data[0]);
        setFinalData(data.data);
      })
      .catch((error) => {
        console.log(error);
      });

    return () => {
      setFormData({
        heading: "",
        description: "",
        imageUrl: "",
        category: "",
      });
      setFinalData([]);
    };
  }, []);

  console.log(FinalData);

  return (
    <form style={{ width: "100%" }} onSubmit={handleSubmit}>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-evenly",
          width: "75%",
          marginTop: "1.3rem",
        }}
        className="AddStory-Form-Inner-Wrapper"
      >
        <div className="addstory-form-field">
          <label htmlFor="heading" className="addstory-label">
            Heading:
          </label>
          <input
            type="text"
            placeholder="Your heading"
            name="heading"
            id="heading"
            className="text-input"
            onChange={handleChange}
            value={FormData?.heading || ""}
            required={true}
          />
        </div>

        <div className="addstory-form-field" style={{ padding: "0.6rem 0" }}>
          <label
            htmlFor="description"
            className="addstory-label"
            style={{ alignSelf: "flex-start" }}
          >
            Description:
          </label>
          <textarea
            className="textarea-field"
            name="description"
            id="description"
            cols="30"
            rows="7"
            placeholder="Story Description: between 42 words and 75 words"
            onChange={handleChange}
            value={FormData?.description || ""}
            required={true}
            maxLength={350}
          ></textarea>
        </div>

        <div className="addstory-form-field" style={{ padding: "0.6rem 0" }}>
          <label htmlFor="image" className="addstory-label">
            Image:
          </label>
          <input
            type="text"
            placeholder="Add Image url"
            name="imageUrl"
            id="image"
            className="text-input"
            onChange={handleChange}
            value={FormData?.imageUrl || ""}
            required={true}
          />
        </div>

        <div className="addstory-form-field">
          <label htmlFor="category" className="addstory-label">
            Category:
          </label>
          <select
            name="category"
            id="category"
            className="select-field"
            onChange={handleChange}
            value={FormData?.category || ""}
            required={true}
          >
            <option value="">Select category</option>
            <option value="food">food</option>
            <option value="health and fitness">health and fitness</option>
            <option value="travel">travel</option>
            <option value="movies">movie</option>
            <option value="education">education</option>
          </select>
        </div>
      </div>
      <div
        className="AddStory-Form-Buttons addstory-form-field"
        style={{ padding: "0.6rem 0" }}
      >
        <div
          style={{ display: "flex", gap: "0.4rem", width: "50%" }}
          className="prev-next-btn-container"
        >
          <button
            type="button"
            className="default-remove prev-btn"
            onClick={() => {
              prevStory();
            }}
            disabled={currentSlide <= 0 ? true : false}
          >
            Previous
          </button>
          <button
            type="button"
            className="default-remove next-btn"
            onClick={() => {
              nextStory();
            }}
            disabled={currentSlide >= totalSlide - 1 ? true : false}
          >
            Next
          </button>
        </div>
        <button className="default-remove submit-addstory-btn" type="submit">
          Post
        </button>
      </div>
    </form>
  );
};

export default Form;
