import React from "react";
import "./Home.css";
import { Link } from "react-router-dom";
import tweet from "../../assets/img/tweet.png";
import trend from "../../assets/img/trend.png";

const styles = {
  Icon: {
    color: "#ffffff",
    fill: "#ffffff",
    fontSize: "24px",
    top: "92px",
    left: "24px",
    width: "24px",
    height: "24px",
  },
};

const Home = () => {
  return (
    <>
      <aside id="side" className="side">
        <ul className="sidebar-nav" id="sidebar-nav">
          <li className="nav-item">
            <Link className="nav-link" to="#">
              <svg viewBox="0 0 24 24" style={styles.Icon}>
                <path d="M0 0h24v24H0z" fill="none"></path>
                <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z"></path>
              </svg>
              <span>Home</span>
            </Link>
          </li>
          <li className="nav-heading">classification</li>
          <li className="nav-item">
            <Link
              className="nav-link collapsed"
              data-bs-target="#components-nav"
              data-bs-toggle="collapse"
              to="#"
            >
              <svg viewBox="0 0 640 512" style={styles.Icon}>
                <path d="M416 176C416 78.8 322.9 0 208 0S0 78.8 0 176c0 39.57 15.62 75.96 41.67 105.4c-16.39 32.76-39.23 57.32-39.59 57.68c-2.1 2.205-2.67 5.475-1.441 8.354C1.9 350.3 4.602 352 7.66 352c38.35 0 70.76-11.12 95.74-24.04C134.2 343.1 169.8 352 208 352C322.9 352 416 273.2 416 176zM599.6 443.7C624.8 413.9 640 376.6 640 336C640 238.8 554 160 448 160c-.3145 0-.6191 .041-.9336 .043C447.5 165.3 448 170.6 448 176c0 98.62-79.68 181.2-186.1 202.5C282.7 455.1 357.1 512 448 512c33.69 0 65.32-8.008 92.85-21.98C565.2 502 596.1 512 632.3 512c3.059 0 5.76-1.725 7.02-4.605c1.229-2.879 .6582-6.148-1.441-8.354C637.6 498.7 615.9 475.3 599.6 443.7z"></path>
              </svg>
              <span>Result</span>
            </Link>
          </li>
          <li className="nav-item">
            <Link
              className="nav-link collapsed"
              data-bs-target="#forms-nav"
              data-bs-toggle="collapse"
              to="#"
            >
              <svg viewBox="0 0 24 24" style={styles.Icon}>
                <path d="M0 0h24v24H0z" fill="none"></path>
                <path d="M20 12c0-1.1.9-2 2-2V6c0-1.1-.9-2-2-2H4c-1.1 0-1.99.9-1.99 2v4c1.1 0 1.99.9 1.99 2s-.89 2-2 2v4c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2v-4c-1.1 0-2-.9-2-2zm-4.42 4.8L12 14.5l-3.58 2.3 1.08-4.12-3.29-2.69 4.24-.25L12 5.8l1.54 3.95 4.24.25-3.29 2.69 1.09 4.11z"></path>
              </svg>
              <span>Statistics</span>
            </Link>
          </li>
          <li className="nav-item">
            <Link
              className="nav-link collapsed"
              data-bs-target="#tables-nav"
              data-bs-toggle="collapse"
              to="#"
            >
              <svg viewBox="0 0 24 24" style={styles.Icon}>
                <path fill="none" d="M0 0h24v24H0z"></path>
                <path d="M12 3c-.46 0-.93.04-1.4.14-2.76.53-4.96 2.76-5.48 5.52-.48 2.61.48 5.01 2.22 6.56.43.38.66.91.66 1.47V19c0 1.1.9 2 2 2h.28a1.98 1.98 0 0 0 3.44 0H14c1.1 0 2-.9 2-2v-2.31c0-.55.22-1.09.64-1.46A6.956 6.956 0 0 0 19 10c0-3.87-3.13-7-7-7zm2 16h-4v-1h4v1zm0-2h-4v-1h4v1zm-1.5-5.59V14h-1v-2.59L9.67 9.59l.71-.71L12 10.5l1.62-1.62.71.71-1.83 1.82z"></path>
              </svg>
              <span>Accuracy</span>
            </Link>
          </li>
          <li className="nav-heading">Sample Tweets</li>
          <li className="nav-item">
            <Link
              className="nav-link collapsed"
              data-bs-target="#charts-nav"
              data-bs-toggle="collapse"
              to="#"
            >
              <img src={tweet} alt="" />
              <span>Tweets Analysis</span>
            </Link>
          </li>
          <li className="nav-item">
            <Link
              className="nav-link collapsed"
              data-bs-target="#icons-nav"
              data-bs-toggle="collapse"
              to="#"
            >
              <svg viewBox="0 0 24 24" style={styles.Icon}>
                <path d="M0 0h24v24H0z" fill="none"></path>
                <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z"></path>
              </svg>
              <span>Tweets insights</span>
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link collapsed" to="#">
              <img src={trend} alt="" />
              <span>Tweet Trends</span>
            </Link>
          </li>
        </ul>
      </aside>

      <main id="Search" className="Search ps-lg-5">
        <div className="container ps-lg-5">
          <div className="mt-5 mt-lg-0 d-flex align-items-stretch ps-lg-5">
            <form className="search-form ps-lg-5">
              <div className="row">
                <div className="form-group col-md-12">
                  <label htmlFor="tweet">Tweet Text</label>
                  <span className="form-control" id="tweet">
                    This tweet contains hate speech
                  </span>
                </div>
              </div>
              <div className="row">
                <div className="form-group col-md-6">
                  <label htmlFor="classification">Tweet Classification</label>
                  <span
                    className="form-control"
                    name="classification"
                    id="classification"
                  >
                    Hate speech
                  </span>
                </div>
                <div className="form-group col-md-6">
                  <label htmlFor="sample">Sample Tweet</label>
                  <span className="form-control" name="sample" id="sample">
                    This is a sample tweet
                  </span>
                </div>
              </div>
              <div className="row">
                <div className="form-group col-md-6">
                  <label htmlFor="result">Evaluation Result</label>
                  <span className="form-control" name="result" id="result">
                    Hate Speech Detected
                  </span>
                </div>
                <div className="form-group col-md-6">
                  <label htmlFor="statistics">Classification Statistics</label>
                  <span
                    className="form-control"
                    name="statistics"
                    id="statistics"
                  >
                    Accuracy: 85%
                  </span>
                </div>
              </div>
              <div className="text-center">
                <button className="btn-sub" type="submit">
                  View Statistics
                </button>
              </div>
            </form>
          </div>
        </div>
      </main>
    </>
  );
};

export default Home;
