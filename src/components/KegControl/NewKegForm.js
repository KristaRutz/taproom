import React from "react";
//import ReusableKegForm from "./ReusableKegForm";

function NewKegForm(props) {
  const handleClick = (event) => {
    event.preventDefault();
    console.log("clicked");
  };
  return (
    <>
      <h3>Add new keg</h3>
      <h2>Keg information</h2>
      <p className="lead">Add information about the new keg.</p>
      <form>
        <div className="form-group">
          <input
            type="text"
            name="itemName"
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
        <button type="submit" onClick={handleClick}>
          add keg
        </button>
      </form>
    </>
  );
}

export default NewKegForm;
