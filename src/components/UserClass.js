import React from "react";

class UserClass extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      userInfo: {
        name: "Dunny",
        location: "default",
      }
    };
    //console.log("Child Constructor");
  }

  async componentDidMount() {
   // console.log("Child Component Did Mount");
   //API call

   const data = await fetch("https://api.github.com/users/ydvaaman");
   const json = await data.json();

   this.setState({
    userInfo:json,
   })

   console.log(json);
  }

  render() {
    const { name, location, avatar_url } = this.state.userInfo;
    //console.log("Child Render");

    return (
      <div className="user-card">
        <img src={avatar_url}/>
        <h2>Name: {name}</h2>
        <h2>Location: {location}</h2>
        <h3>Contact:aman@1234</h3>
      </div>
    );
  }
}

export default UserClass;

// if we donot destructure the props
// {this.props.name}
// {this.props.location}

// CREATING INSTANCE OF THAT CLASS
// loading class based component on our web page  that means I am creating
// a instance of that class and giving it some props and whenever you create a
// instance of class a constructor is called
