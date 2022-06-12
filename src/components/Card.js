import React from "react";

function Card({ data }) {
  return (
    
    <div className="main justify-content-center mb-5 mt-5 ">
      <h2> User Details</h2>
      <div>
        <div>
          <img src={data.avatar} alt="Profile Picture " />
          <div className="textSize">
              <h2>
              Name: {data.first_name} {data.last_name}
              </h2>
            
            <h4 >Email Id: {data.email}</h4>
           
            <h4 >User Id: {data.id}</h4>
          </div>
        </div>
      </div>
    </div>
    
  );
}

export default Card;