import React from "react";

const Welcome = () => {
  return (
    <div className="card" style={{ height: "90vh" }}>
      <h5 className="card-header">Heroes Academy</h5>
      <div className="card-body">
        <div className="text-center">
          <img
            src="logo.jpg"
            className="img-fluid"
            style={{ height: "65vh", width: "50vw", paddingBottom: 50 }}
            alt="Heroes Academy logo"
          />
        </div>
        <p className="text-center">Stworzone przez:</p>
        <h3 className="text-center">Imię i nazwisko</h3>
      </div>
    </div>
  );
};

export default Welcome;
