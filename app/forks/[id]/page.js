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
const Details = async (contex) => {
    const id = contex.params.id;
    const res = await fetch('https://jsonplaceholder.typicode.com/users'+id);
    const udata = await res.json();
    return ( <div>
        <h1>{udata.name}</h1>
        <p>{udata.email}</p>
        <p>{udata.website}</p>
    </div> );
}
 
export default Details;