 import { useRouteError } from "react-router";
 const Error = ()=>{
    const err = useRouteError();
    console.log(err);
return (
    <div>
        <h1>Oopsssssssssssssssss</h1>
        <h1>Something went wrong</h1>
        <h3>{err.status}:  {err.statusText} : {err.data}</h3>
    </div>
)
 }

 export default Error;