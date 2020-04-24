import React from "react";
import PropTypes from "prop-types";

function KegListTile(props) {
  const { keg } = props;

  return (
    <>
      <div onClick={() => props.onClick(keg.id)}>
        <h3>{keg.itemName}</h3>
        <p>{keg.desc}</p>
      </div>
    </>
  );
}

KegListTile.propTypes = {
  keg: PropTypes.object,
  onClick: PropTypes.func,
};

export default KegListTile;
