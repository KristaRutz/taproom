import React from "react";
import PropTypes from "prop-types";

function KegDetail(props) {
  return (
    <>
      <button onClick={props.onLeaveKegDetailClick()}>x</button>
      <h1>Keg n</h1>
      <h4>Some details</h4>
      <button>update</button>
      <button>delete</button>
    </>
  );
}

KegDetail.propTypes = {
  keg: PropTypes.object,
  onLeaveKegDetailClick: PropTypes.func,
};

export default KegDetail;
