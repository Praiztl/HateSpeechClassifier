import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import "./Home.css";
import { Link } from "react-router-dom";

const Home = () => {
  const location = useLocation();
  const [predictionData, setPredictionData] = useState({
    tweet: "",
    prediction: "",
    accuracy: ""
  });

  useEffect(() => {
    if (location.state) {
      console.log("Location state:", location.state); // Debugging line
      setPredictionData(location.state);
    } else {
      console.log("No state passed to Home component."); // Debugging line
    }
  }, [location.state]);

  return (
    <main id="Search" className="container home">
      <div className="Search">
        <form className="search-form">
          <div className="row">
            <div className="form-group col-md-12">
              <label htmlFor="tweet">Tweet Text</label>
              <span className="form-control inc" id="tweet">
                {predictionData.text?.tweet || "No tweet text available"}
              </span>
            </div>
          </div>
          <div className="row">
            <div className="form-group col-md-6">
              <label htmlFor="result">Tweet Classification</label>
              <span className="form-control" name="result" id="result">
                {predictionData.prediction || "No prediction available"}
              </span>
            </div>
            <div className="form-group col-md-6">
              <label htmlFor="statistics">Accuracy</label>
              <span className="form-control" name="statistics" id="statistics">
                {predictionData.accuracy || "No accuracy available"}
              </span>
            </div>
          </div>
          <div className="row">
            <div className="text-center col-md-6">
              <Link to="/feedback">
                <button className="btn-sub" type="button">
                  Review Prediction
                </button>
              </Link>
            </div>
            <div className="text-center col-md-6">
              <Link to="/statistics">
                <button className="btn-sub" type="button">
                  View Statistics
                </button>
              </Link>
            </div>
          </div>
        </form>
      </div>
    </main>
  );
};

export default Home;
