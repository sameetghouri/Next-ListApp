import Link from "next/link";

async function getdata() {
    const res = await fetch('https://jsonplaceholder.typicode.com/users');
    const data = await res.json();
    return data 
}

const  forks = async () => {
    const fdata = await getdata();
    
    return ( <div>
        <h1 className='text-2xl pb-4'>Forks</h1>
        {fdata.map(item =>(
            <div className=" p-2 m-2 rounded bg-slate-200 border-l-8 hover:border-l-cyan-700 " key={item.id}>
                  <Link href=''>
                    <p>{item.name}</p>
                    </Link>
            </div>
        ) )}
    </div> );
}

export default forks;