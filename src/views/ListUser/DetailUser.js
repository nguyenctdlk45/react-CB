import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
const DetailUser = () => {
  const [detailData, setdetailData] = useState(null);
  const { id } = useParams();

  const fetchDataDetail = async () => {
    const response = await axios.get(`https://reqres.in/api/users/${id}`);
    if (response.data && response.data.data) {
      setdetailData(response.data.data);
    }
  };

  useEffect(() => {
    fetchDataDetail();
  }, [id]);
  // console.log("my list >>>>>", detailData);
  return (
    <div>
      <h2>Detail User</h2>
      {detailData ? ( // nào có dữ liệu sẽ in ra
        <div>
          <p>ID: {detailData.id}</p>
          <p>Email: {detailData.email}</p>
          <p>First Name: {detailData.first_name}</p>
          <p>Last Name: {detailData.last_name}</p>
          <img src={detailData.avatar} alt={detailData.first_name} />
        </div>
      ) : (
        "Loading..."
      )}
    </div>
  );
};

export default DetailUser;
