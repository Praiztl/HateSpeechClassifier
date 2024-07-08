import React, { useEffect, useState } from "react";
import axios from "axios";
import "./Statistics.css";
import { Chart } from "react-google-charts";

const Statistics = () => {
  const [chartData, setChartData] = useState([
    ["Day", "Hate Speech", "Non-Hate Speech"]
  ]);
  const [statsData, setStatsData] = useState({
    total_predictions: 0,
    last_week_predictions: 0,
    hate_speech_percentage: 0,
    non_hate_speech_percentage: 0,
    accuracy: "0%",
  });

  useEffect(() => {
    // Fetch chart data
    axios
      .get("http://127.0.0.1:8000/api/stats/graph/")
      .then((response) => {
        const apiData = response.data;
        console.log("Chart API Data:", apiData); // Log the fetched data

        const daysMapping = {
          Sunday: "Sun",
          Monday: "Mon",
          Tuesday: "Tue",
          Wednesday: "Wed",
          Thursday: "Thu",
          Friday: "Fri",
          Saturday: "Sat",
        };

        const newData = [["Day", "Hate Speech", "Non-Hate Speech"]];

        apiData.labels.forEach((label, index) => {
          newData.push([
            daysMapping[label],
            apiData.datasets[0].data[index],
            apiData.datasets[1].data[index]
          ]);
        });

        setChartData(newData);
      })
      .catch((error) => {
        console.error("Error fetching the chart data: ", error);
      });

    // Fetch stats data
    axios
      .get("http://127.0.0.1:8000/api/stats/")
      .then((response) => {
        const stats = response.data;
        console.log("Stats API Data:", stats); // Log the fetched data
        setStatsData(stats);
      })
      .catch((error) => {
        console.error("Error fetching the stats data: ", error);
      });
  }, []);

  const options = {
    backgroundColor: "#222222",
    hAxis: {
      textStyle: { color: "#ffffff" },
      title: "Day of the Week",
      titleTextStyle: { color: "#ffffff" },
      slantedText: true,
      slantedTextAngle: 45,
    },
    vAxis: {
      textStyle: { color: "#ffffff" },
      title: "Number of Tweets",
      titleTextStyle: { color: "#ffffff" },
    },
    series: {
      0: { color: "#8e44ad" },
      1: { color: "#27ae60" },
    },
    legend: { textStyle: { color: "#ffffff" } },
    curveType: "function",
    chartArea: { backgroundColor: "#222222" },
  };

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
                data={chartData}
                options={options}
              />
            </div>
            <div className="prediction mt-4">
              <h3 className="text-white">Performance</h3>
              <div className="average-prediction">
                <div className="prediction-accuracy">
                  <span>Average prediction accuracy</span>
                  <p className="accuracy-percentage">{statsData.accuracy}</p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="title mb-4 hide">Tweet Statistics</div>
            <div className="total-tweets mb-4">
              <div className="tweet-stat mb-3">
                <span>Total tweets analyzed in the past week:</span>
                <span className="stat-value">{statsData.last_week_predictions}</span>
              </div>
              <div className="tweet-stat mb-3">
                <span>Total tweets analyzed:</span>
                <span className="stat-value">{statsData.total_predictions}</span>
              </div>
              <div className="tweet-stat mb-3">
                <span> hate speech:</span>
                <span className="stat-value">{statsData.hate_speech_percentage.toFixed(2)}%</span>
              </div>
              <div className="tweet-stat">
                <span> non-hate speech:</span>
                <span className="stat-value">{statsData.non_hate_speech_percentage.toFixed(2)}%</span>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default Statistics;
