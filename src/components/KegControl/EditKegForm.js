import React from "react";
//import ReusableKegForm from "./ReusableKegForm";
import PropTypes from "prop-types";

function EditKegForm(props) {
  const handleClick = (event) => {
    event.preventDefault();
    console.log("clicked");
  };

  const keg = {
    itemName: "Superfuzz",
    desc:
      "Is a mind-bending whirl of the aromas and flavors of blood orange and Northwest hops. Orange peel added to the whirlpool, and Blood Orange in the fermenter",
    origin: "Seattle, WA, USA",
    brewer: "Elysian Brewing",
    price: 180,
    abv: 6.4,
    ibu: 45,
    id: "sample-id",
  };

  return (
    <div className="container">
      <h3>Edit Keg</h3>
      <h2>Keg {props.id}</h2>
      <p className="lead">{props.formDescription}</p>
      <form>
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
          <input
            type="number"
            min="0"
            name="ibu"
            defaultValue={keg.ibu}
            className="form-control"
          />
        </div>
        <button type="submit" onClick={handleClick}>
          save changes
        </button>
      </form>
    </div>
  );
}

EditKegForm.propTypes = {
  id: PropTypes.string,
  formDescription: PropTypes.string,
  //potentially put lines 80-87 as a single object and destructure
  keg: PropTypes.object,
  onSubmitFunction: PropTypes.func,
  submitButtonText: PropTypes.string,
};

EditKegForm.propTypes = {
  id: PropTypes.string,
  formDescription: PropTypes.string,
  //potentially put lines 80-87 as a single object and destructure
  itemNameDefault: PropTypes.string,
  descDefault: PropTypes.string,
  originDefault: PropTypes.string,
  brewerDefault: PropTypes.string,
  priceDefault: PropTypes.number,
  abvDefault: PropTypes.number,
  ibuDefault: PropTypes.number,
  id: PropTypes.string,
  keg: PropTypes.object,
  onSubmitFunction: PropTypes.func,
  submitButtonText: PropTypes.string,
};

export default EditKegForm;
