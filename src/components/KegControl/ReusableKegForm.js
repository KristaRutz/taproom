import React from "react";
import PropTypes from "prop-types";

function ReusableKegForm(props) {
  const handleClick = (event) => {
    event.preventDefault();
    console.log("clicked");
  };

  return (
    <>
      <h2>{props.formTitle}</h2>
      <p className="lead">{props.formDescription}</p>
      <form>
        <div className="form-group">
          <input
            type="text"
            name="itemName"
            defaultValue={props.itemNameDefault}
            className="form-control"
          />
        </div>
        <div className="form-group">
          <textarea
            name="desc"
            defaultValue={props.descDefault}
            className="form-control"
          />
        </div>
        <div className="form-group">
          <input
            type="text"
            name="origin"
            defaultValue={props.originDefault}
            className="form-control"
          />
        </div>
        <div className="form-group">
          <input
            type="text"
            name="brewer"
            defaultValue={props.brewerDefault}
            className="form-control"
          />
        </div>
        <div className="form-group">
          <input
            type="number"
            name="price"
            defaultValue={props.priceDefault}
            className="form-control"
          />
        </div>
        <div className="form-group">
          <input
            type="number"
            name="abv"
            defaultValue={props.abvDefault}
            className="form-control"
          />
        </div>
        <div className="form-group">
          <input
            type="number"
            name="ibu"
            defaultValue={props.ibuDefault}
            className="form-control"
          />
        </div>
        <button type="submit" onClick={handleClick}>
          {props.submitButtonText}
        </button>
      </form>
    </>
  );
}

ReusableKegForm.propTypes = {
  formTitle: PropTypes.string,
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
  onSubmitFunction: PropTypes.func,
  submitButtonText: PropTypes.string,
};

export default ReusableKegForm;
