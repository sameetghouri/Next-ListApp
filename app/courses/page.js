"use client"
import { useState,useEffect } from "react";
import Link from "next/link";
import Courses from "@/components/Courses";
import CourseSearch from "@/components/courseSearch";

const courses =() => {
    const [cores, setcores]= useState([]);
    
        useEffect ( ()=>{
        const fetchCourse = async () =>{
        const res = await fetch('/api/courses')
        const data = await res.json()
        setcores(data)
        }
        fetchCourse();
        },[])

    return ( 
        
        <div className="flex flex-col  items-center">
            <h1>Welcome To The Courses</h1>
        <CourseSearch getSearchResults={(result)=> setcores(result)}/> // This is a callback Funtion 
        <Courses dta={cores}/>
        </div>
     );
}
 
export default courses ;