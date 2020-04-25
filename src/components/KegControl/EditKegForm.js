import React from "react";
import PropTypes from "prop-types";

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
    <div className="container">
      <button
        className="btn btn-secondary"
        onClick={props.onLeaveEditFormClick}
      >
        x
      </button>
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
  );
}

EditKegForm.propTypes = {
  keg: PropTypes.object,
  onFormSubmit: PropTypes.func,
  onLeaveEditFormClick: PropTypes.func,
};

export default EditKegForm;
