import React from "react";

const App = () => {
  const handleredirect = () => {
    window.open(
      "https://docs.google.com/forms/d/e/1FAIpQLSfLUr-bYV21wrbrxL77NU7zXmknplCMnhuoAH1muJQf-2Ozww/viewform?usp=sharing"
    );
  };
  return (
    <div className="container">
      <nav className="navbar">
        <h2 className="logo">
          <img className="logo-1" src="src\assets\cv-logo-2.png" alt="CV" />
        </h2>
        <button onClick={handleredirect} className="nav-button">Sign Up</button>
      </nav>
      <div className="content-wrapper">
        <div className="text-content">
          <h1>
            Connect, Learn, and Grow with Students Worldwide - Join CampusVerse!
          </h1>
          <p>
            A global edtech platform for students to collaborate, find events,
            internships, and build networks across colleges.
          </p>
          <div className="input-container">
            {/* <button onClick={handleredirect} className="signup-button">Sign Up</button> */}
          </div>
        </div>
        <div className="image-container">
          <img
            src="src\assets\campus-illustration.png"
            alt="CampusVerse Illustration"
          />
        </div>
      </div>
      <div className="waitlist-section">
        <h2>Join the Waitlist for Early Access</h2>
        <p>
          Get exclusive benefits and updates by joining our early access
          waitlist.
        </p>
        <button onClick={handleredirect} className="join-now-button">
          Join Now
        </button>
      </div>
    </div>
  );
};

export default App;
