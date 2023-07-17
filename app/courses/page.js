"use client"
import { useState, useEffect } from "react";
import Courses from "@/components/Courses";
import CourseSearch from "@/components/courseSearch";

const courses = () => {
    const [cores, setcores] = useState([]);
    const [loading, setloading] = useState(true)

    useEffect(() => {
        const fetchCourse = async () => {
            const res = await fetch('/api/courses')
            const data = await res.json()
            setcores(data)
            setloading(false)
        }
        fetchCourse();
    }, [])

    return (
        <div className="flex flex-col  items-center">
            <h1>Welcome To The Courses</h1>
            <CourseSearch getSearchResults={(result) => setcores(result)} /> {/*getSearchResults is a callback Funtion */}

            {loading && <div className="py-6 flex justify-center">
                <div className="h-8 w-8 animate-spin rounded-lg border-4 border-blue-600" role="status"></div> </div>}
            {!loading && <Courses dta={cores} />}
        </div>
    );
}

export default courses;