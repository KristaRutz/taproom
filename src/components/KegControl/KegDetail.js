import React from "react";
import PropTypes from "prop-types";

function KegDetail(props) {
  const { keg } = props;
  return (
    <>
      <button onClick={props.onLeaveKegDetailClick}>x</button>
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
      <button onClick={() => props.onEditClick(keg.id)}>update</button>
      <button onClick={() => props.onDeleteClick(keg.id)}>delete</button>
    </>
  );
}

KegDetail.propTypes = {
  keg: PropTypes.object,
  onLeaveKegDetailClick: PropTypes.func,
  onEditClick: PropTypes.func,
  onDeleteClick: PropTypes.func,
};

export default KegDetail;
