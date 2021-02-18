import React, { useEffect, useState } from "react";
import axios from "axios";

const UserData = (props) => {
  const [user, setUser] = useState();

  useEffect(() => {

    const config = {
      headers: { Authorization: `Bearer ${localStorage.getItem("token")}` }
  };
    const fetchPosts = async () => {
      //setLoading(true);
      const res = await axios.get('https://be.bhyve-app.com:3020/user/profile', {
        headers: { Authorization: `Bearer ${localStorage.getItem("token")}` }
    });
      setUser(res.data);
      //setLoading(false);
      console.log(user);
    };

    fetchPosts();
  });
  

  
  return (
    <div>
      <h4>
    User Information {user.firstName}
      </h4>
    </div>
  );
};

export default UserData;
