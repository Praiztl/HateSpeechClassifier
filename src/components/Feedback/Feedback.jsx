import React, { useState } from "react";
import axios from "axios";
import Modal from "react-modal";
import "./Feedback.css";

Modal.setAppElement("#root");

const Feedback = () => {
  const [tweetText, setTweetText] = useState("");
  const [classification, setClassification] = useState("");
  const [speechType, setSpeechType] = useState("");
  const [remarks, setRemarks] = useState("");
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();

    const reviewData = {
      tweet_text: tweetText,
      classification: classification,
      speech_type: speechType,
      remarks: remarks
    };

    axios
      .post("https://tweet-classifier-7268d8ee92c2.herokuapp.com/api/reviews/post/", reviewData)
      .then((response) => {
        setModalIsOpen(true);
      })
      .catch((error) => {
        if (error.response) {
          // Server responded with a status other than 200 range
          console.error("Error response:", error.response.data);
        } else if (error.request) {
          // Request was made but no response was received
          console.error("Error request:", error.request);
        } else {
          // Something happened in setting up the request
          console.error("Error message:", error.message);
        }
      });
  };

  return (
    <>
      <section id="review" className="review mt-4">
        <div className="container feed">
          <div className="text-center">
            <h2>Review a prediction</h2>
          </div>
          <form className="review-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="tweetText">Enter tweet text</label>
              <input
                type="text"
                name="tweetText"
                className="form-control"
                id="tweetText"
                required
                placeholder="Enter tweet text"
                value={tweetText}
                onChange={(e) => setTweetText(e.target.value)}
              />
            </div>
            <div className="form-group">
              <label htmlFor="classification">What do you think about the prediction's accuracy?</label>
              <input
                type="text"
                name="classification"
                className="form-control"
                id="classification"
                required
                placeholder="Enter your opinion on the prediction's accuracy"
                value={classification}
                onChange={(e) => setClassification(e.target.value)}
              />
            </div>
            <div className="form-group">
              <label htmlFor="speechType">Select speech type</label>
              <select
                name="speechType"
                className="form-control select-control"
                id="speechType"
                required
                value={speechType}
                onChange={(e) => setSpeechType(e.target.value)}
              >
                <option value="">Choose an option</option>
                <option value="hate-speech">Hate Speech</option>
                <option value="non-hate-speech">Non-hate Speech</option>
              </select>
            </div>
            <div className="form-group">
              <label htmlFor="remarks">Additional Remarks</label>
              <textarea
                name="remarks"
                className="form-control"
                id="remarks"
                required
                placeholder="Enter any additional remarks"
                value={remarks}
                onChange={(e) => setRemarks(e.target.value)}
              />
            </div>
            <div className="text-center">
              <button type="submit" className="submit-btn">
                Submit review
              </button>
            </div>
          </form>
        </div>
      </section>

      <Modal
        isOpen={modalIsOpen}
        onRequestClose={() => setModalIsOpen(false)}
        contentLabel="Review Submitted"
        className="modal-content"
        overlayClassName="modal-overlay"
      >
        <h2>Review Submitted</h2>
        <p>Thank you for your feedback!</p>
        <button onClick={() => setModalIsOpen(false)}>Close</button>
      </Modal>
    </>
  );
};

export default Feedback;
