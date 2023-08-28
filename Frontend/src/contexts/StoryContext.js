import { createContext, useState } from "react";
import toast from "react-hot-toast";
import { checkFormIsNotEmpty } from "../helper/checkFormIsNotEmpty";

export const StoryContext = createContext();

const MINIMUM_STORY = 3;

export const StoryProvider = ({ children }) => {
  const [currentSlide, setSlide] = useState(0);
  const [totalSlide, setTotalSlide] = useState(MINIMUM_STORY);
  const [FormData, setFormData] = useState({
    heading: "",
    description: "",
    imageUrl: "",
    category: "",
  });

  const [FinalData, setFinalData] = useState([]);

  const nextStory = () => {
    if (
      checkFormIsNotEmpty(FormData) &&
      FinalData[currentSlide] === undefined
    ) {
      setSlide((prev) => prev + 1);
      setFinalData((prev) => [...prev, FormData]);
      setFormData({
        heading: "",
        description: "",
        imageUrl: "",
        category: "",
      });
    } else if (
      checkFormIsNotEmpty(FormData) &&
      FinalData.length >= currentSlide
    ) {
      if (FinalData[currentSlide + 1] === undefined) {
        setFormData({
          heading: "",
          description: "",
          imageUrl: "",
          category: "",
        });
      } else {
        setFormData(FinalData[currentSlide + 1]);
      }
      setSlide((prev) => prev + 1);
    } else {
      toast.error("please fill the details");
    }
  };

  const prevStory = () => {
    setFormData(FinalData[currentSlide - 1]);
    setSlide((prev) => prev - 1);
  };

  const slideValue = (currSlide) => {
    if (checkFormIsNotEmpty(FormData) && FinalData[currSlide] === undefined) {
      if (FinalData.length >= currSlide) {
        setFormData({
          heading: "",
          description: "",
          imageUrl: "",
          category: "",
        });
      } else {
        setFinalData((prev) => [...prev, FormData]);
        setFormData({
          heading: "",
          description: "",
          imageUrl: "",
          category: "",
        });
      }
      setSlide(currSlide);
    } else if (FinalData[currSlide] !== undefined) {
      setFormData(FinalData[currSlide]);
      setSlide(currSlide);
    } else {
      toast.error("please fill the details");
    }
  };

  return (
    <StoryContext.Provider
      value={{
        currentSlide,
        setSlide,
        totalSlide,
        setTotalSlide,
        nextStory,
        prevStory,
        FormData,
        setFormData,
        FinalData,
        setFinalData,
        slideValue,
      }}
    >
      {children}
    </StoryContext.Provider>
  );
};
