import React, { useEffect, useState } from "react";
import axios from "axios";
// import { key } from "localforage";
import { useNavigate } from "react-router-dom";



function ListUser() {
  // const data = async() =>{
  //     let list = await axios.get('https://reqres.in/api/users?page=2')
  //     console.log('my list >>>>>',list);
  // }
  const [userData, setUserData] = useState(null);
  const fetchData = async () => {
    const response = await axios.get("https://reqres.in/api/users?page=1");
    if (response.data && response.data.data) {
      setUserData(response.data.data);
    }
  };

  useEffect(() => {
    fetchData();
    // console.log("my list >>>>>", props);
  }, []);
  const navigate = useNavigate();

  const handleViewDetail = (user) => {
    // console.log(user);
    navigate(`/list-user/${user.id}`);
  };
  return (
    <div>
      <h1>Danh sách người dùng</h1>
      <div>
        {userData?.map((item, index) => {
          return (
            <div key={item.id} onClick={() => handleViewDetail(item)}>
              {index + 1}-{item.first_name}
            </div>
          );
        })}
      </div>
    </div>
  );
}
export default ListUser;
