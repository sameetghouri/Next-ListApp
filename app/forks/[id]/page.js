export const getStaticPaths = async () => {
    const res = await fetch('https://jsonplaceholder.typicode.com/users');
    const fdata = await res.json();
    const paths = fdata.map(item => {
        return {
            params: {id: item.id.toString()}
        }
    })
    return {
        paths,
        fallback: false
    }
}

const Details = async(props) => {
    const id = props.params.id;
          const res = await fetch("https://jsonplaceholder.typicode.com/users/"+id);
          const udata = await res.json();
    
    return ( 
         <div className="flex flex-col gap-4 items-center ">
        <div className="bg-gray-400 rounded py-20 px-12 hover:scale-105 transition duration-200">
        <h1 className="text-xl font-semibold">{udata?.name }</h1>
        <p className="text-lg">{`Email: ${udata?.email}` }</p>
        <p className="text-lg">{`Website: ${udata?.website}` }</p>
        <p className="text-lg">{`City: ${udata?.address.city}` }</p>
        

        
        
        </div>
    </div> );
}
 
export default Details;
