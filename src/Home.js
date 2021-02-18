import React, { useEffect, useState } from "react";
import axios from "axios";
import wave from "./images/wave.png"
import bg from "./images/bg.svg"
import userData from "./Components/UserData"
const Home = (props) => {
  const [user, setUser] = useState();

  const getUser = async () => {
    
    const res = await axios.get('https://be.bhyve-app.com:3020/user/profile', {
      headers: {
        'Authorization':  `Bearer ${localStorage.getItem("token")}`,
      }
    }
   
    );
    setUser(res);
  }
  useEffect(() => {
    getUser();
  },[]);
  //console.log(user.data.firstName);

  const logout = () => {
    localStorage.removeItem("token");
    props.history.push("/login");
  };

  if (!localStorage.getItem("token")) {
    props.history.push("/login");
  }
  return (
    <div className="m-5">
      <img className="wave" src={wave}/>
      <div className="jumbotron">
        <p className="lead">Welcome Home page</p>
        <p className="lead">Welcome </p>
        <h4>Check user data</h4>
         <userData/>
        <button className="btn" style={{width:"40%",margin:"60px"}} onClick={logout}>
          Logout
        </button>
      </div>
    </div>
  );
};

export default Home;
