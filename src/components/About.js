import User from "./User";
import UserClass from "./UserClass";
import React from "react";

class AboutRoute extends React.Component{
    constructor(props){
super(props);
    }
    render(){
        return <div>
        <h1>This is Namaste React Course.</h1>
        <UserClass name={"Sakshi"} location ={"Meerut"} contact = {"@sakshiTomar"} />
    </div>
    }
}

export default AboutRoute;