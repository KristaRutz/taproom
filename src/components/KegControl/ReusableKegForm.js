import React from "react";
import PropTypes from "prop-types";

function ReusableKegForm(props) {
  const { formTitle, formDescription, keg, submitButtonText } = props;

  const handleClick = (event) => {
    event.preventDefault();
    console.log("clicked");
  };

  const keg2 = {
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
    <>
      <h2>{props.formTitle}</h2>
      <p className="lead">{props.formDescription}</p>
      {/* <form>
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
      </form> */}
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
            name="price"
            defaultValue={keg.price}
            className="form-control"
          />
        </div>
        <div className="form-group">
          <input
            type="number"
            name="abv"
            defaultValue={keg.abv}
            className="form-control"
          />
        </div>
        <div className="form-group">
          <input
            type="number"
            name="ibu"
            defaultValue={keg.ibu}
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
  // itemNameDefault: PropTypes.string,
  // descDefault: PropTypes.string,
  // originDefault: PropTypes.string,
  // brewerDefault: PropTypes.string,
  // priceDefault: PropTypes.number,
  // abvDefault: PropTypes.number,
  // ibuDefault: PropTypes.number,
  // id: PropTypes.string,
  keg: PropTypes.object,
  // onSubmitFunction: PropTypes.func,
  submitButtonText: PropTypes.string,
};

export default ReusableKegForm;
