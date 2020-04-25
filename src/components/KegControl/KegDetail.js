import React from "react";
import PropTypes from "prop-types";
import { findByLabelText } from "@testing-library/react";

const OverlayBackgroundStyles = {
  position: "fixed",
  display: "flex",
  top: 0,
  left: 0,
  width: "100%",
  height: "100%",
  //background: "white",
  backgroundColor: "rgba(0,0,0,0.3)",
  justifyContent: "center",
  alignItems: "center",
};

const OverlayContentStyles = {
  width: "60%",
  borderRadius: 10,
  backgroundColor: "white",
  paddingTop: 15,
  paddingBottom: 45,
  paddingLeft: 15,
  paddingRight: 15,
};

const CloseButton = {
  display: "flex",
  flexDirection: "row-reverse",
  marginBottom: 10,
};

function KegDetail(props) {
  const { keg } = props;
  return (
    <div style={OverlayBackgroundStyles}>
      <div style={OverlayContentStyles}>
        <div style={CloseButton}>
          <button
            className="btn btn-secondary"
            onClick={props.onLeaveKegDetailClick}
          >
            x
          </button>
        </div>
        <h1>
          {keg.itemName} <small>{keg.type}</small>
        </h1>
        <p className="lead">
          Brewed by {keg.brewer} in {keg.origin}.
        </p>
        <p>{keg.desc}</p>
        <p>{keg.abv}% ABV</p>
        <p>{keg.ibu} IBU</p>
        <p>${keg.price} / keg</p>
        <div className="btn-group">
          <button
            className="btn btn-secondary"
            onClick={() => props.onEditClick(keg.id)}
          >
            update
          </button>
          <button
            className="btn btn-secondary"
            onClick={() => props.onDeleteClick(keg.id)}
          >
            delete
          </button>
        </div>
      </div>
    </div>
  );
}

KegDetail.propTypes = {
  keg: PropTypes.object,
  onLeaveKegDetailClick: PropTypes.func,
  onEditClick: PropTypes.func,
  onDeleteClick: PropTypes.func,
};

export default KegDetail;
