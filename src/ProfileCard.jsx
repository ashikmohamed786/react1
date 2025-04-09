import React from "react";
import reactlogo from "./assets/react.svg";

const Profilecard = ({profilelist}) => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
      }}
    >
       <div
        style={{
          position: "relative",
          border: "2px solid #ccc",
          borderRadius: "8px",
          width: "300px",
          height: "350px",
          backgroundColor: "white",
          boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
          backgroundColor: "#fcfbb4",
          paddingRight: "300px",
          marginLeft: "300px",
          fontSize: "16px",
        }}
      >
        <div
          style={{
            position: "absolute",
            bottom: "20px",
            left: "20px", 
            textAlign: "left",
          }}
        >
             <img
            src={reactlogo}
            alt="Profille"
            style={{
                position: "absolute",
                bottom: "200px",
                left: "480px",
                width: "80px",
                height: "80px",
                borderRadius: "50%",
                
            }}></img>
        <h3>Name: {profilelist.name}</h3>
        <h3>Department: {profilelist.department}</h3>
        <h3>Year: {profilelist.year}</h3>
        <h3>Mobile: {profilelist.mobile}</h3>
        <h3>Address: {profilelist.address}</h3>
        <a href="" target="_blank">
        <h3>Linkedin Profile</h3>
        </a>
      </div>
    </div>
    </div>
  );
}
export default Profilecard;