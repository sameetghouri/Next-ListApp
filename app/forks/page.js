
import Link from "next/link";

// async function getdata() {
//     const res = await fetch('https://jsonplaceholder.typicode.com/users');
//     const data = await res.json();
//     return data 
// }

const  forks = async () => {
    const res = await fetch('https://jsonplaceholder.typicode.com/users');
    const fdata = await res.json();
    
    return ( <div className='flex flex-col items-center'>
        <h1 className='text-2xl pb-4'>Forks</h1>
        {fdata.map(item =>(
            <div className=" p-2 my-2 w-10/12 rounded bg-slate-200  hover:bg-cyan-600 hover:text-gray-100 hover:scale-105 transition duration-200 " key={item.id}>
                  <Link href={'/forks/'+item.id}>
                    <p>{item.name}</p>
                    </Link>
            </div>
        ) )}
    </div> );
}

export default forks;