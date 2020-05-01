import React from "react";
import KegListTile from "./KegListTile";
import PropTypes from "prop-types";

function KegList(props) {
  return (
    <div className="container-fluid">
      {/* <h1 className="display-4">on tap</h1> */}
      {Object.values(props.kegList).map((keg) => {
        return (
          <KegListTile
            keg={keg}
            onClick={props.onKegDetailClick}
            key={keg.id}
          />
        );
      })}
    </div>
  );
}

KegList.propTypes = {
  kegList: PropTypes.object,
  onKegDetailClick: PropTypes.func,
};

export default KegList;
