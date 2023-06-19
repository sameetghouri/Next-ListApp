import Link from "next/link";

const  Courses = ({dta}) => {
    
    return ( 
    <>
    {dta.map((item) => (
        <div  key={item.id} className="p-2 my-2 w-10/12 rounded bg-slate-200  hover:bg-cyan-600 hover:text-gray-100 hover:scale-105 transition duration-300">
            <h2>{item.title}</h2>
            <small>Level:{item.level}</small>
            <p >{item.description}</p>
            <Link className="font-bold" href={item.link}>
                Go to Course
            </Link>
        </div>
    ))}
    </> );
}

export default Courses;