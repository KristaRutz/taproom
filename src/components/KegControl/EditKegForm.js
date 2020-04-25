import React from "react";
import PropTypes from "prop-types";
import "../App.css";

const OverlayBackgroundStyles = {
  position: "fixed",
  display: "flex",
  top: 0,
  left: 0,
  width: "100%",
  height: "100%",
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

function EditKegForm(props) {
  const { keg } = props;
  const handleClick = (event) => {
    event.preventDefault();
    const editedKeg = {
      itemName: event.target.itemName.value,
      desc: event.target.desc.value,
      origin: event.target.origin.value,
      brewer: event.target.brewer.value,
      price: parseFloat(event.target.price.value),
      abv: parseFloat(event.target.abv.value),
      ibu: parseInt(event.target.ibu.value),
      created: keg.created,
      lastUpdated: new Date(),
      id: keg.id,
    };
    props.onFormSubmit(editedKeg);
  };

  return (
    <div style={OverlayBackgroundStyles}>
      <div style={OverlayContentStyles}>
        <div style={CloseButton}>
          <button
            className="btn btn-light"
            onClick={props.onLeaveEditFormClick}
          >
            x
          </button>
        </div>
        <h3>Edit Keg #{keg.id}</h3>
        <p className="lead">{props.formDescription}</p>
        <form onSubmit={handleClick}>
          <div className="form-group">
            <input
              type="text"
              name="itemName"
              defaultValue={keg.itemName}
              className="form-control"
            />
          </div>
          <div className="form-group">
            <textarea
              name="desc"
              defaultValue={keg.desc}
              className="form-control"
            />
          </div>
          <div className="form-group">
            <input
              type="text"
              name="origin"
              defaultValue={keg.origin}
              className="form-control"
            />
          </div>
          <div className="form-group">
            <input
              type="text"
              name="brewer"
              defaultValue={keg.brewer}
              className="form-control"
            />
          </div>
          <div className="form-group">
            <label htmlFor="price">Price</label>
            <input
              type="number"
              step="0.01"
              min="0"
              name="price"
              defaultValue={keg.price}
              className="form-control"
            />
          </div>
          <div className="form-group">
            <label htmlFor="abv">Alcohol by Volume (ABV)</label>
            <input
              type="number"
              step="0.01"
              min="0"
              max="100"
              name="abv"
              defaultValue={keg.abv}
              className="form-control"
            />
          </div>
          <div className="form-group">
            <label htmlFor="ibu">International Bitterness Units (IBU)</label>
            <input
              type="number"
              min="0"
              name="ibu"
              defaultValue={keg.ibu}
              className="form-control"
            />
          </div>
          <button className="btn btn-secondary" type="submit">
            save changes
          </button>
        </form>
      </div>
    </div>
  );
}

EditKegForm.propTypes = {
  keg: PropTypes.object,
  onFormSubmit: PropTypes.func,
  onLeaveEditFormClick: PropTypes.func,
};

export default EditKegForm;
