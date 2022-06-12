import React from "react";
import "../App.css";
function Home() {
  return (
    <div className="row justify-content-center mb-5">
      <div className="col   text-center text-center p-3">
        <p className="top">
            Welcome To User Info , select Any User ID to see User's description.
        </p>
        <div className="temp-card"></div>
      </div>
    </div>
  );
}

export default Home;