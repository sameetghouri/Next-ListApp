
import courses from './dta.json';
import { NextResponse } from 'next/server';
import { v4 as uuidv4 } from 'uuid';

const fs = require('fs');
export async function GET(request) {
   // return new Response(JSON.stringify(courses))
   return NextResponse.json(courses )
  }

  
export async function POST(request) {
   const {title,description,level,link} =await request.json();
   const newCourse = {
      id:uuidv4(),
      title,
      description,
      level,
      link
     }
   courses.push(newCourse)
   
   saveData();   
  
   return NextResponse.json(courses)
}

function saveData(){
   fs.writeFile('./daaata.json',"Edit",()=>console.log("Edited"))
   
}