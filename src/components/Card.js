
import React from "react";
import "./Card.css";

import {FcLike,FcLikePlaceholder} from "react-icons/fc"
import { toast } from "react-toastify";

const Card = (props) => {
    let course = props.course;
    let likedCourses = props.likedCourses;
    let setLikedCourses = props.setLikedCourses;

    function clickHandler(){
        if(likedCourses.includes(course.id)){
            // pehle se liked hai ab dislike kiya
            setLikedCourses((prev) => prev.filter((cid) => (cid !== course.id)));
            toast.warning("Liked Removed")
        }
        else{
            if (likedCourses.length === 0) {
                setLikedCourses([course.id])
            }
            else{
                setLikedCourses((prev) => [...prev,course.id])
            }
            toast.success("Liked Succesfully");
        }
    }

  return (
    <div className="mb-4">
        
        {/* <div>
            <img src={course.image.url} alt={course.image.alt} loading='lazy' />
        </div> 
        
        <div>
            <button>
                <FcLike fontSize="1.75rem"></FcLike>
            </button>
        </div>

        <div>
            <p>{course.title}</p>
            <p>{course.description}</p>
        </div> */}

        <div className="card">
            <div className="content">
                <div className="back">
                    <div className="back-content flex flex-col justify-between">
                        <img src={course.image.url} alt={course.image.alt} loading="lazy" className="flex absolute top-0 border-transparent
                        rounded-lg" />
                        <div className="absolute bottom-9 flex flex-col items-center gap-2">
                            <p className="font-bold text-white pl-2">{course.title}</p>
                            <p className="text-blue-500 pl-2">See details...</p>
                        </div>
                    </div>
                </div>
                <div className="front">
                
                <div className="img">
                    <div class="circle">
                    </div>
                    <div class="circle" id="right">
                    </div>
                    <div class="circle" id="bottom">
                    </div>
                </div>

                <div className="front-content">
                    <small className="badge">{course.title}</small>
                    <div className="description">
                    <div className="title">
                        <p className="title">
                        <span>{course.description}</span>
                        </p>
                        <button onClick={clickHandler}>
                            {likedCourses.includes(course.id) ? (<FcLike fontSize="1.75rem" ></FcLike>) :
                            (<FcLikePlaceholder fontSize="1.75rem"></FcLikePlaceholder>)}
                        </button>
                    </div>
                    <p className="card-footer">
                        3 Months &nbsp; | &nbsp; 1 Instructor
                    </p>
                    </div>
                </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Card