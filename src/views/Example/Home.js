import React, { Component } from "react";
import { useNavigate } from "react-router-dom";

// phải dùng Function Component
function Home() {
    const navigate = useNavigate();

    const handleNavigate = () => {
      // Sử dụng hàm navigate để chuyển hướng đến route khác
    navigate('/todo');
    };

    return (
    <div>
        <p>This is my component</p>
        <button onClick={handleNavigate}>Chuyển hướng</button>
    </div>
    );
}

export default Home;