import React from "react";
import PropTypes from "prop-types";
import { v4 } from "uuid";

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
  justifyContent: "center safe",
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

function NewKegForm(props) {
  const handleClick = (event) => {
    event.preventDefault();
    const newKeg = {
      itemName: event.target.itemname.value,
      beerType: event.target.beerType.value,
      desc: event.target.desc.value,
      origin: event.target.origin.value,
      brewer: event.target.brewer.value,
      price: parseFloat(event.target.price.value),
      pintsRemaining: 124,
      abv: parseFloat(event.target.abv.value),
      ibu: parseInt(event.target.ibu.value),
      created: new Date(),
      lastUpdated: new Date(),
      id: v4(),
    };
    props.handleAddingKeg(newKeg);
  };
  return (
    <div style={OverlayBackgroundStyles}>
      <div style={OverlayContentStyles}>
        <div style={CloseButton}>
          <button className="btn btn-light" onClick={props.onLeaveNewFormClick}>
            x
          </button>
        </div>
        <h3>Add new keg</h3>
        <p className="lead">Add information about the new keg</p>
        <form onSubmit={handleClick}>
          <div className="form-group">
            <input
              type="text"
              name="itemname"
              placeholder="Item name"
              className="form-control"
            />
          </div>
          <div className="form-group">
            <input
              type="text"
              name="beerType"
              placeholder="Type (i.e. IPA, Kolsch)"
              className="form-control"
            />
          </div>
          <div className="form-group">
            <textarea
              name="desc"
              placeholder="Example description of a beer, including tasting notes or ingredient description"
              className="form-control"
            />
          </div>
          <div className="form-group">
            <input
              type="text"
              name="origin"
              placeholder='Brew origin ("City, STATE, Country")'
              className="form-control"
            />
          </div>
          <div className="form-group">
            <input
              type="text"
              name="brewer"
              placeholder="Brewer name"
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
              placeholder="0"
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
              placeholder="5.0"
              className="form-control"
            />
          </div>
          <div className="form-group">
            <label htmlFor="ibu">International Bitterness Units (IBU)</label>
            <input
              type="number"
              min="0"
              name="ibu"
              placeholder="0"
              className="form-control"
            />
          </div>
          <button className="btn btn-secondary" type="submit">
            add keg
          </button>
        </form>
      </div>
    </div>
  );
}

NewKegForm.propTypes = {
  handleAddingKeg: PropTypes.func,
  onLeaveNewFormClick: PropTypes.func,
};

export default NewKegForm;
