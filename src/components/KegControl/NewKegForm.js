import React from "react";
import PropTypes from "prop-types";
import { v4 } from "uuid";

function NewKegForm(props) {
  const handleClick = (event) => {
    event.preventDefault();
    const newKeg = {
      itemName: event.target.itemname.value,
      desc: event.target.desc.value,
      origin: event.target.origin.value,
      brewer: event.target.brewer.value,
      price: parseFloat(event.target.price.value),
      abv: parseFloat(event.target.abv.value),
      ibu: parseInt(event.target.ibu.value),
      created: new Date(),
      lastUpdated: new Date(),
      id: v4(),
    };
    props.handleAddingKeg(newKeg);
  };
  return (
    <div className="container">
      <button className="btn btn-secondary" onClick={props.onLeaveNewFormClick}>
        x
      </button>
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
  );
}

NewKegForm.propTypes = {
  handleAddingKeg: PropTypes.func,
  onLeaveNewFormClick: PropTypes.func,
};

export default NewKegForm;
