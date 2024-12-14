import React from "react";
class UserClass extends React.Component{
    constructor(props){
        super(props);
        this.state ={
            userInfo :{
                 name : "Dummy",
            Location: "Default"
            }
           
        }

    }
    async componentDidMount(){
      const data =  await fetch("https://api.github.com/users/akshaymarch7");
      const json = await data.json();
      this.setState({
        userInfo :json,
      })
    }
render(){
    
    // const{name ,location,contact} = this.props;
    const{name,location,avatar_url} = this.state.userInfo;
  
    return <div className="user-card">
    <h2>Name : {name}</h2>
    <img src={avatar_url} width={200}></img>
    <h3>Location : {location}</h3>
    {/* <h4>Contact : {contact}</h4> */}
</div>
}
}

export default UserClass;