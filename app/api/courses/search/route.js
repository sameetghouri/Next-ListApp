
import courses from '../dta.json';
import { NextResponse } from 'next/server';
export async function GET(request) {

    const {searchParams} = new URL(request.url)
    //console.log(searchParams)
    //console.log(searchParams.get('query'))
    //console.log(searchParams.get('name'))
    const query = searchParams.get('query')
    const filteredCourses = courses.filter((course) =>  
    course.title.toLowerCase().includes(query.toLowerCase())) //shows the only course which matches the query  
   return NextResponse.json(filteredCourses)
  }