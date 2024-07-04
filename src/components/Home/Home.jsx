import React from "react";
import "./Home.css";

const Home = () => {
  return (
    <>
      <main id="Search" className="container mt-3 home">
        <div className="Search">
          <div className="">
            <form className="search-form">
              <div className="row">
                <div className="form-group col-md-12">
                  <label htmlFor="tweet">Tweet Text</label>
                  <span className="form-control inc" id="tweet">
                    This tweet contains hate speech
                  </span>
                </div>
              </div>
              <div className="row">
                <div className="form-group col-md-6">
                  <label htmlFor="result">Tweet Classification</label>
                  <span className="form-control" name="result" id="result">
                    Hate Speech
                  </span>
                </div>
                <div className="form-group col-md-6">
                  <label htmlFor="statistics">Evaluation Result</label>
                  <span
                    className="form-control"
                    name="statistics"
                    id="statistics"
                  >
                    Hate Speech Detected
                  </span>
                </div>
              </div>
              <div className="row">
                <div className="form-group col-md-12">
                  <label htmlFor="classification">Accuracy</label>
                  <span
                    className="form-control"
                    name="classification"
                    id="classification"
                  >
                    85%
                  </span>
                </div>
              </div>
              <div className="row">
                <div className="text-center col-md-6">
                  <button className="btn-sub" type="submit">
                    Review Prediction
                  </button>
                </div>
                <div className="text-center col-md-6">
                  <button className="btn-sub" type="submit">
                    View Statistics
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </main>
    </>
  );
};

export default Home;
