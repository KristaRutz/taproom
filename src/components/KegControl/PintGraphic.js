import React from "react";
import PropTypes from "prop-types";

function PintGraphic(props) {
  const pintGraphicContainerStyle = {
    gridTemplateRows: 4,
  };
  const backgroundColorStyles = {
    backgroundColor: props.pintColor,
  };

  const generatePintGraphic = (pintsRemaining) => {
    let pintGraphicHTML = [];
    for (let i = 0; i < pintsRemaining; i++) {
      pintGraphicHTML.push(
        <div className="container">
          <div style={backgroundColorStyles} className="pintSmall"></div>
          <div className="pintSmall-after"></div>
        </div>
      );
    }
    return pintGraphicHTML;
  };

  return (
    // <div className="container">
    //   <div style={backgroundColorStyles} className="pintSmall"></div>
    //   <div style={backgroundColorStyles} className="pintSmall-after"></div>
    // </div>
    <div style={pintGraphicContainerStyle}>{generatePintGraphic(124)}</div>
  );
}

PintGraphic.propTypes = {
  pintColor: PropTypes.string,
};
export default PintGraphic;
