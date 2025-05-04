export default async function ProductInfo({params}){
    const {id} = await params;
     return (
        <div>
            <h1>{id}</h1>
        </div>
     )
}