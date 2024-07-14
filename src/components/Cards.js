import React, { useState } from 'react'
import Card from './Card';

const Cards = (props) => {
    let courses = props.courses;
    let category = props.category;
    const [likedCourses,setLikedCourses] = useState([]);


    let allCourse = [];

    // returns the list of all courses
    function getCourses() {
        if (category === "All") {
            Object.values(courses).forEach( array =>{
                array.forEach((courseAttribute)=>{
                    allCourse.push(courseAttribute);
                })
            })
            return allCourse;
        }
        else{
            // sirf usi category ka data pass krunga
            return courses[category];
        }
    }


  return (
    <div className="flex gap-6 flex-wrap lg:w-[980px] w-[90%] cardcss justify-center  mx-auto mt-10 ">
        {getCourses().map((course)=>{
            return(
                <Card key={course.id} course = {course} likedCourses = {likedCourses} setLikedCourses = {setLikedCourses} />
            );
        })}
    </div>
  )
}

export default Cards;