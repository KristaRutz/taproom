import React from "react";
import KegListTile from "./KegListTile";
import PropTypes from "prop-types";

function KegList(props) {
  return (
    <div className="container-fluid">
      <h2>List of all Kegs</h2>
      {props.kegList.map((keg) => (
        <KegListTile keg={keg} onClick={props.onKegDetailClick} key={keg.id} />
      ))}
    </div>
  );
}

KegList.propTypes = {
  kegList: PropTypes.array,
  onKegDetailClick: PropTypes.func,
};

export default KegList;
