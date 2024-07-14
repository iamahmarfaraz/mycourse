import React,{useState,useEffect} from "react";
import Navbar from "./components/Navbar";
import {apiUrl,filterData} from "./data"
import Filter from "./components/Filter";
import Cards from "./components/Cards";
import { toast } from "react-toastify";
import Spinner from "./components/Spinner";


const App = () => {

  const [courses, setcourses] = useState([]);
  const [Loading, setLoading] = useState(true);
  const [category, setCategory] = useState(filterData[0].title);

  async function callingAPI(){
    setLoading(true)
    try {
      let apiCall = await fetch(apiUrl);
      let output = await apiCall.json();
      console.log("API Call Successfull");

      setcourses(output.data);
    } 

    catch (error) {
      console.log("API Call Failed");
      toast.error("Something Went Wrong");
    }
    setLoading(false);
  }

  useEffect(() => {

    callingAPI();

  }, []);

  return(
    <div className="flex flex-col min-h-screen min-w-full ">
      <div>
        <Navbar></Navbar>
      </div>
      <div>
        <Filter filterData ={filterData} category={category} setCategory={setCategory}></Filter>
      </div>
      <div>
        {
          Loading ? (<Spinner/>) : (<Cards courses = {courses} category = {category} ></Cards>)
        } 
      </div> 
    </div>
  );
};

export default App;
