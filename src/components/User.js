import { useState } from "react";

const User = (props) => {
  const [count] = useState(0);
  const [count2,setCount2] = useState(1);

  const { name, location } = props;
  return (
    <div className="user-card">
      <h1>Count: {count}</h1>
      <h1>Count2: {count2}</h1>
      <h2>Name: {name}</h2>
      <h2>Location: {location}</h2>
      <h3>Contact:aman@1234</h3>
    </div>
  );
};

export default User;

// if we donot destructure the props
// {props.name}
// {props.location}

//MOUNTING OR INVOKING A FUNCTIONal Component
// basically on your webpage if there is a functional component it loads 
// so, that means mounting that functional component , loading that function on to that webpage
