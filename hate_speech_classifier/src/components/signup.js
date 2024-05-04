import React from 'react';

const styles = {
  Text: {
    color: '#ffffff',
    fontSize: '20px',
    fontFamily: 'Source Sans Pro',
    fontWeight: 800,
    lineHeight: '26px',
  },
};

const defaultProps = {
  text: 'Tweet Classifier',
};

const Text = (props) => {
  return (
    <div style={styles.Text}>
      {props.text ?? defaultProps.text}
    </div>
  );
};

export default Text;