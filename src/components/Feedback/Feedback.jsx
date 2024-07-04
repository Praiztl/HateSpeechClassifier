import React from "react";
import "./Feedback.css";

const Feedback = () => {
  return (
    <>
      <section id="review" className="review mt-4">
        <div className="container feed">
          <div className="text-center">
            <h2>Review a prediction</h2>
          </div>
          <form className="review-form">
            <div className="form-group">
              <label htmlFor="tweetText">Enter tweet text</label>
              <input
                type="text"
                name="tweetText"
                className="form-control"
                id="tweetText"
                required=""
                placeholder="Enter tweet text"
              />
            </div>
            <div className="form-group">
              <label htmlFor="classification">What do you think about the prediction's accuracy?</label>
              <input
                type="text"
                name="classification"
                className="form-control"
                id="classification"
                required=""
                placeholder="Enter your opinion on the prediction's accuracy"
              />
            </div>
            <div className="form-group">
              <label htmlFor="speechType">Select speech type</label>
              <select
                name="speechType"
                className="form-control select-control"
                id="speechType"
                required=""
              >
                <option value="">Choose an option</option>
                <option value="speech">Hate Speech</option>
                <option value="non-hate-speech">Non-hate Speech</option>
              </select>
            </div>
            <div className="text-center">
              <button type="submit" className="submit-btn">
                Submit review
              </button>
            </div>
          </form>
        </div>
      </section>
    </>
  );
};

export default Feedback;
