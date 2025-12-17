import React from "react";
import ReactDOM from "react-dom/client";
// import './index.css';
// import App from './App';
import StarRating from "./StarRating";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    {/* <App /> */}
    <StarRating
      maxRating={6}
      messages={["Terrible", "Bad", "Ok", "Good", "Excellent"]}
    />
    <StarRating
      maxRating={24}
      size={36}
      color="green"
      className="test"
      defaultRating={3}
    />
  </React.StrictMode>
);
