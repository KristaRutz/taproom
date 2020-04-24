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
      price: event.target.price.value,
      abv: event.target.abv.value,
      ibu: event.target.ibu.value,
      created: new Date(),
      lastUpdated: new Date(),
      id: v4(),
    };
    props.handleAddKeg(newKeg);
  };
  return (
    <>
      <h3>Add new keg</h3>
      <h2>Keg information</h2>
      <p className="lead">Add information about the new keg.</p>
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
            name="price"
            placeholder="0"
            className="form-control"
          />
        </div>
        <div className="form-group">
          <label htmlFor="abv">Alcohol by Volume (ABV)</label>
          <input
            type="number"
            name="abv"
            placeholder="5.0"
            className="form-control"
          />
        </div>
        <div className="form-group">
          <label htmlFor="ibu">International Bitterness Units (IBU)</label>
          <input
            type="number"
            name="ibu"
            placeholder="0"
            className="form-control"
          />
        </div>
        <button type="submit">add keg</button>
      </form>
    </>
  );
}

NewKegForm.propTypes = {
  handleAddKeg: PropTypes.func,
};

export default NewKegForm;
