import React from "react";
import PropTypes from "prop-types";

const ListTileStyle = {
  paddingTop: 30,
  paddingBottom: 20,
  paddingLeft: "15%",
  paddingRight: "15%",
};
const ListTileTextStyles = {
  textAlign: "left",
};

function KegListTile(props) {
  const { keg } = props;

  return (
    <>
      <div
        style={ListTileStyle}
        className="container-fluid"
        onClick={() => props.onClick(keg.id)}
      >
        <h3>{keg.itemName}</h3>
        <p style={ListTileTextStyles}>{keg.desc}</p>
      </div>
    </>
  );
}

KegListTile.propTypes = {
  keg: PropTypes.object,
  onClick: PropTypes.func,
};

export default KegListTile;
