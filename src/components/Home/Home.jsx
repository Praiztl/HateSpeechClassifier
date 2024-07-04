import React from "react";
import "./Home.css";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <>
      <main id="Search" className="container home">
        <div className="Search">
          
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
                  <label htmlFor="statistics">Acuuracy</label>
                  <span
                    className="form-control"
                    name="statistics"
                    id="statistics"
                  >
                   90%
                  </span>
                </div>
              </div>
             
              <div className="row">
                <div className="text-center col-md-6">
                  <Link to="/feedback">
                  <button className="btn-sub" type="submit">
                    Review Prediction
                  </button>
                  </Link>
                  
                </div>
                <div className="text-center col-md-6">
                  <Link to="/statistics"><button className="btn-sub" type="submit">
                    View Statistics
                  </button>
                  </Link>
                  
                </div>
              </div>
            </form>
          
        </div>
      </main>
    </>
  );
};

export default Home;
