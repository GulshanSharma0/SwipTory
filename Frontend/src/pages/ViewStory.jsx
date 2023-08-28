import React,{useRef,useState,useEffect} from "react";
import "../styles/ViewStory.css";
import { MdArrowForwardIos, MdArrowBackIos,MdFavoriteBorder } from "react-icons/md";
import { BsFillBookmarkFill } from "react-icons/bs";
import { BsSend } from "react-icons/bs";
import { AiOutlineClose } from "react-icons/ai";
import Food from "../assets/images/Food.png";
import { fetchUserStories } from "../services/Stories/fetchUserStories";




const ViewStory = () => {
  
  const [userCreatedStories, setUserCreatedStories] = useState([]);
  const [index,setIndex] = useState(0);
  const [prevIndex,setPrevIndex] = useState(0);


  useEffect(() => {
    fetchUserStories()
      .then((data) => {
        console.log(data.data);
        setUserCreatedStories(data.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);


  useEffect(() => {
    const interval = setInterval(() => {
      setPrevIndex(() => (index < userCreatedStories.length - 1 ? index : 0));
      setIndex((prev) => (prev < userCreatedStories.length - 1 ? prev + 1 : 1));
      
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, [index,prevIndex,userCreatedStories]);


  return (
    <div className="ViewStory-Container">
        <div className="ViewStory-Wrapper">
      <div className="backArrowBtnWrapper">
        <button className="backArrowBtn">
          <MdArrowBackIos />
        </button>
      </div>
      {/* start */}
      <div style={{position:'relative'}}>
        <div className="progressCard-Container" style={{
          position:'absolute',
          left:'2rem',
          top:'1.8rem',
          zIndex:'1',
          display:'flex',
          gap:'0.8rem',
          justifyContent:'space-around',
          flexWrap:'wrap'
        }}>
          {
            userCreatedStories.map((item,index)=>(
              <span className="ProgressCard" style={{
                height: '4px',
                width: '40px',
                display: 'inline-block',
                background: '#D9D9D980'
              }} key={item._id}></span>
            ))
          }
        </div>
      {
        userCreatedStories.slice(prevIndex,index).map((item,index)=>(
          <div
          style={{
            backgroundImage: `url(${item.imageUrl})`,
            position: "relative",
          }}
          className="StoryCard"
          key={index}
        > 
         <div
         style={{
          position:'absolute',
          display:'flex',
          justifyContent:'space-between',
          padding:'1rem',
          width:'100%',
          top:'1rem'
         }}
         >
          <button
          style={{
            border:'none',
            outline:'none',
            backgroundColor:'transparent',
          }}
          >
              <AiOutlineClose
              style={{
                fontSize:'1.4rem',
                color:'#fff'
              }}/>
          </button>
          <button
          style={{
            border:'none',
            outline:'none',
            backgroundColor:'transparent',
          }}
          >
              <BsSend
              style={{
                fontSize:'1.2rem',
                color:'#fff'
              }}
              />
          </button>
         </div>
          <div className="Story-Header-Description-Container">
            <h2 className="Story-Header">{item.heading}</h2>
            <p className="Story-Description">
              {item.description}
            </p>
            <div
          style={{
            display:'flex',
            justifyContent:'space-between',
            width:'100%',
            alignItems:'center'
           }}
          >
            <button style={{
            border:'none',
            outline:'none',
            backgroundColor:'transparent',
          }}>
              <BsFillBookmarkFill style={{
                fontSize:'1.4rem',
                color:'#fff'
              }}/>
            </button>
            <button style={{
            border:'none',
            outline:'none',
            backgroundColor:'transparent',
          }}>
                <MdFavoriteBorder style={{
                fontSize:'1.9rem',
                color:'#fff'
              }}/>
            </button>
          </div>
          </div>
          
        </div>
        ))
      }
      </div>
      {/* end */}
      <div className="forwardArrowBtn">
        <button className="forwardArrowBtn">
          <MdArrowForwardIos />
        </button>
      </div>
      </div>
    </div>
  );
};

export default ViewStory;
