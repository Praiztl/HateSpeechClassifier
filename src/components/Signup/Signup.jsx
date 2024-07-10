import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Signup.css";
import analyse from "../../assets/img/analyse.svg";

const Signup = () => {
  const [tweet, setTweet] = useState("");
  const navigate = useNavigate();

  const handleTweetChange = (e) => {
    setTweet(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Tweet submitted:", tweet); // Debugging line
    try {
      const response = await fetch("https://tweet-classifier-7268d8ee92c2.herokuapp.com/api/predict/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ tweet }),
      });
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const data = await response.json();
      navigate("/home", { state: data });
    } catch (error) {
      console.error("Error fetching the prediction:", error);
    }
  };

  return (
    <section id="search" className="search">
      <div className="container">
        <div className="row">
          <div className="col-lg-4 tweets ps-lg-10">
            <h3>Analyze Tweets</h3>
            <p>Discover hate speech with precision.</p>
            <img src={analyse} alt="" />
            <h6 className="mt-4">Analyze tweets with ease.</h6>
          </div>
          <div className="col-lg-4 ps-lg-5">
            <div className="content-sign">
              <form onSubmit={handleSubmit}>
                <h3>Get Started Now</h3>
                <p className="subtitlee">
                  Experience accurate hate speech detection.
                </p>
                <input
                  type="text"
                  placeholder="Enter a sample tweet"
                  className="type"
                  value={tweet}
                  onChange={handleTweetChange}
                />
                <div className="button-container">
                  <button type="submit" className="btn-custom">
                    Classify
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Signup;
