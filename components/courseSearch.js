"use client"
import { useState } from "react";
const CourseSearch = ({getSearchResults}) => {
    const [query,setquery]=useState('')
    const handleSubmit = async(e)=>{
        e.preventDefault();
        const res =await fetch(`api/courses/search?query=${query}`)
        const course = await res.json();
        getSearchResults(course);
    }
    return ( <div>
        <form onSubmit={handleSubmit} className="flex flex-col items-center my-3">
        <input type="text" className="my-2 p-2 rounded" 
        placeholder="Search Course"
        value={query} onChange={(e)=>setquery(e.target.value)}/>
        <button type="submit" className="mt-1 py-1 px-2 bg-cyan-500 rounded">Submit</button>
        </form>
    </div> );
}
 
export default CourseSearch;