import { useState } from "react";
const User = (props)=>{
    const[count,setCount] = useState(0);
    const increment=()=>{
        setCount(count+1);
    }
    const[count2] = useState(1);
    const{name,location,contact} = props;
    return (
        
        <div className="user-card">
            <h2>Name : {name}</h2>
            <h1>Count : {count}</h1>
            <button onClick={increment}>Increment</button>
            <h1>Count : {count2}</h1>
            <h3>Location : {location}</h3>
            <h4>Contact : {contact}</h4>
        </div>
    )
}

export default User;