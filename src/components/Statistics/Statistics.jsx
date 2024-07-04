import React from "react";
import "./Statistics.css";
import { Chart } from "react-google-charts";

export const data = [
  ["Day", "Hate Speech", "Non-Hate Speech"],
  ["Mon", 10, 90],
  ["Tue", 20, 80],
  ["Wed", 30, 70],
  ["Thu", 40, 60],
  ["Fri", 50, 50],
  ["Sat", 60, 40],
  ["Sun", 70, 30],
];

export const options = {
  backgroundColor: "#222222",
  hAxis: {
    textStyle: { color: '#ffffff' },
    title: "Day of the Week",
    titleTextStyle: { color: '#ffffff' },
    slantedText: true,
    slantedTextAngle: 45,
  },
  vAxis: {
    textStyle: { color: '#ffffff' },
    title: "Number of Tweets",
    titleTextStyle: { color: '#ffffff' },
  },
  series: {
    0: { color: '#8e44ad' },
    1: { color: '#27ae60' },
  },
  legend: { textStyle: { color: '#ffffff' } },
  curveType: 'function',
  chartArea: { backgroundColor: '#222222' }
};

const Statistics = () => {
  
  return (
    <>
      <main id="dashboard" className="container mt-4">
        <div className="row">
          <div className="col-lg-8 mb-4">
            <div className="title mb-4">Tweet Statistics</div>
            <div className="chart-container mb-4">
              <h5 className="text-white mb-3">Activity over the past week</h5>
              <Chart
                chartType="LineChart"
                width="100%"
                height="300px"
                data={data}
                options={options}
              />
            </div>
            <div className="prediction mt-4">
              <h3 className="text-white">Performance</h3>
              <div className="average-prediction">
                <div className="prediction-accuracy">
                  <span>Average prediction accuracy</span>
                  
                  <p className="accuracy-percentage">93%</p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4">
          <div className="title mb-4 hide">Tweet Statistics</div>
            <div className="total-tweets mb-4">
              <div className="tweet-stat mb-3">
                <span>Total tweets analyzed in the past week:</span>
                <span className="stat-value">10</span>
              </div>
              <div className="tweet-stat mb-3">
                <span>Total tweets analyzed:</span>
                <span className="stat-value">100</span>
              </div>
              <div className="tweet-stat mb-3">
                <span>Percentage hate speech:</span>
                <span className="stat-value">20%</span>
              </div>
              <div className="tweet-stat">
                <span>Percentage non-hate speech:</span>
                <span className="stat-value">80%</span>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default Statistics;
