import React from "react";
import "./Feedback.css";

const myStyle = {
  color: "rgb(255, 255, 255)",
  fontSize: "32px",
  width: "32px",
  height: "32px",
  cursor: "pointer",
  fill: "rgb(255, 255, 255)",
};
const Feedback = () => {
  return (
    <>
  
      <section id="home" className="home">
        <div className="container">
          <div className="d-flex flex-column justify-content-center text-lg-center">
            <h2>Analysis &amp; Evaluation</h2>
          </div>
        </div>
      </section>
      <section id="sentiment" className="sentiment">
        <div className="container ">
          <div className="mt-5 mt-lg-0 d-flex align-items-center justify-content-center">
            <form className="sentiment-form">
              <div className="row">
                <h2>Rate the tweet's sentiment</h2>
                <div className="emoji d-flex ">
                  <div className="poop ">
                    <svg viewBox="0 0 512 512" style={myStyle}>
                      <path d="M451.4 369.1C468.8 356 480 335.4 480 312c0-39.75-32.25-72-72-72h-14.12C407.3 228.2 416 211.2 416 191.1c0-35.25-28.75-63.1-64-63.1h-5.875C349.8 117.9 352 107.2 352 95.1c0-53-43-96-96-96c-5.25 0-10.25 .75-15.12 1.5C250.3 14.62 256 30.62 256 47.1c0 44.25-35.75 80-80 80H160c-35.25 0-64 28.75-64 63.1c0 19.25 8.75 36.25 22.12 48H104C64.25 239.1 32 272.3 32 312c0 23.38 11.25 44 28.62 57.13C26.25 374.6 0 404.1 0 440C0 479.8 32.25 512 72 512h368c39.75 0 72-32.25 72-72C512 404.1 485.8 374.6 451.4 369.1zM192 256c17.75 0 32 14.25 32 32s-14.25 32-32 32S160 305.8 160 288S174.3 256 192 256zM351.5 395C340.1 422.9 292.1 448 256 448c-36.99 0-84.98-25.12-95.48-53C158.5 389.8 162.5 384 168.3 384h175.5C349.5 384 353.5 389.8 351.5 395zM320 320c-17.75 0-32-14.25-32-32s14.25-32 32-32s32 14.25 32 32S337.8 320 320 320z"></path>
                    </svg>
                  </div>
                  <div className="neutral">
                    <svg viewBox="0 0 512 512" style={myStyle}>
                      <path d="M512 256C512 397.4 397.4 512 256 512C114.6 512 0 397.4 0 256C0 114.6 114.6 0 256 0C397.4 0 512 114.6 512 256zM176.4 176C158.7 176 144.4 190.3 144.4 208C144.4 225.7 158.7 240 176.4 240C194 240 208.4 225.7 208.4 208C208.4 190.3 194 176 176.4 176zM336.4 240C354 240 368.4 225.7 368.4 208C368.4 190.3 354 176 336.4 176C318.7 176 304.4 190.3 304.4 208C304.4 225.7 318.7 240 336.4 240z"></path>
                    </svg>
                  </div>
                  <div className="huh">
                    <svg viewBox="0 0 512 512" style={myStyle}>
                      <path d="M0 256C0 114.6 114.6 0 256 0C397.4 0 512 114.6 512 256C512 397.4 397.4 512 256 512C114.6 512 0 397.4 0 256zM176.4 240C194 240 208.4 225.7 208.4 208C208.4 190.3 194 176 176.4 176C158.7 176 144.4 190.3 144.4 208C144.4 225.7 158.7 240 176.4 240zM336.4 176C318.7 176 304.4 190.3 304.4 208C304.4 225.7 318.7 240 336.4 240C354 240 368.4 225.7 368.4 208C368.4 190.3 354 176 336.4 176zM259.9 369.4C288.8 369.4 316.2 375.2 340.6 385.5C352.9 390.7 366.7 381.3 361.4 369.1C344.8 330.9 305.6 303.1 259.9 303.1C214.3 303.1 175.1 330.8 158.4 369.1C153.1 381.3 166.1 390.6 179.3 385.4C203.7 375.1 231 369.4 259.9 369.4L259.9 369.4z"></path>
                    </svg>
                  </div>
                  <div className="mad">
                    <svg viewBox="0 0 512 512" style={myStyle}>
                      <path d="M512 256C512 397.4 397.4 512 256 512C114.6 512 0 397.4 0 256C0 114.6 114.6 0 256 0C397.4 0 512 114.6 512 256zM339.9 373.3C323.8 355.4 295.7 336 256 336C216.3 336 188.2 355.4 172.1 373.3C166.2 379.9 166.7 389.1 173.3 395.9C179.9 401.8 189.1 401.3 195.9 394.7C207.6 381.7 227.5 368 255.1 368C284.5 368 304.4 381.7 316.1 394.7C322 401.3 332.1 401.8 338.7 395.9C345.3 389.1 345.8 379.9 339.9 373.3H339.9zM176.4 272C194 272 208.4 257.7 208.4 240C208.4 238.5 208.3 237 208.1 235.6L218.9 239.2C227.3 241.1 236.4 237.4 239.2 229.1C241.1 220.7 237.4 211.6 229.1 208.8L133.1 176.8C124.7 174 115.6 178.6 112.8 186.9C110 195.3 114.6 204.4 122.9 207.2L153.7 217.4C147.9 223.2 144.4 231.2 144.4 240C144.4 257.7 158.7 272 176.4 272zM358.9 217.2L389.1 207.2C397.4 204.4 401.1 195.3 399.2 186.9C396.4 178.6 387.3 174 378.9 176.8L282.9 208.8C274.6 211.6 270 220.7 272.8 229.1C275.6 237.4 284.7 241.1 293.1 239.2L304.7 235.3C304.5 236.8 304.4 238.4 304.4 240C304.4 257.7 318.7 272 336.4 272C354 272 368.4 257.7 368.4 240C368.4 231.1 364.7 223 358.9 217.2H358.9z"></path>
                    </svg>
                  </div>
                  <div className="heart">
                    <svg viewBox="0 0 512 512" style={myStyle}>
                      <path d="M0 190.9V185.1C0 115.2 50.52 55.58 119.4 44.1C164.1 36.51 211.4 51.37 244 84.02L256 96L267.1 84.02C300.6 51.37 347 36.51 392.6 44.1C461.5 55.58 512 115.2 512 185.1V190.9C512 232.4 494.8 272.1 464.4 300.4L283.7 469.1C276.2 476.1 266.3 480 256 480C245.7 480 235.8 476.1 228.3 469.1L47.59 300.4C17.23 272.1 .0003 232.4 .0003 190.9L0 190.9z"></path>
                    </svg>
                  </div>
                </div>
                <div className="form-group">
                  <label for="write">Write your analysis</label>
                  <input
                    type="text"
                    name="write"
                    className="form-control-write"
                    id="write"
                    required=""
                    placeholder="What is the sentiment of the tweet? Provide detailed feedback."
                  />
                </div>
              </div>
              <div className="form-group ">
                <label for="title">Title of your analysis</label>
                <input
                  type="text"
                  className="form-control-title"
                  name="title"
                  id="title"
                  required=""
                  placeholder="Enter keywords or hashtags"
                />
              </div>
              <div className="text-start">
                <button type="submit" className="sub-btn">
                  Submit analysis
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>
    </>
  );
};

export default Feedback;
