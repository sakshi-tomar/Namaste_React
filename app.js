
import React from "react";
import ReactDOM from "react-dom/client";

// const jsxHeading = <h1>Hello world from JSX❤️</h1>;
const Title=()=>(
    <h1 className="heading" tabIndex="5">Namaste React using JSX❤️</h1>
)
const Footer = ()=>{
    return <h1>I'm footer</h1>
}

const HeadingComponent =()=>(
    <div id="container">
    <Title/>
    <h1 className="heading">Namaste React Functional Component</h1>
    <Footer/>
    </div>
)
const root  = ReactDOM.createRoot(document.getElementById("root"));
root.render(<HeadingComponent/>);