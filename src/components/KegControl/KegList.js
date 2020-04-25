import React from "react";
import KegListTile from "./KegListTile";
import PropTypes from "prop-types";

function KegList(props) {
  return (
    <>
      <h2>List of all Kegs</h2>
      {props.kegList.map((keg) => {
        //console.log(keg);
        return (
          <KegListTile
            keg={keg}
            onClick={props.onKegDetailClick}
            key={keg.id}
          />
        );
      })}
    </>
  );
}

KegList.propTypes = {
  kegList: PropTypes.array,
  onKegDetailClick: PropTypes.func,
};

export default KegList;
