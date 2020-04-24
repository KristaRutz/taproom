import React from "react";
import ReusableKegForm from "./ReusableKegForm";
import PropTypes from "prop-types";

function EditKegForm(props) {
  return (
    <>
      <h3>Edit Keg</h3>
      <ReusableKegForm
        //  formTitle={props.}
        //  formDescription={props.}
        //  itemNameDefault={props.}
        //  descDefault={props.}
        //  originDefault={props.}
        //  brewerDefault={props.}
        //  priceDefault={props.}
        //  abvDefault={props.}
        //  ibuDefault={props.}
        //  id={props.}
        //  onSubmitFunction={props.}
        //  submitButtonText={props.}

        formTitle="Edit mee"
        formDescription="Example description of how to edit the keg"
        // itemNameDefault="Item Name"
        // descDefault="this is the greatest beer ever brewed"
        // originDefault="Seattle, WA"
        // brewerDefault="Elysian Brewing"
        // priceDefault="7"
        // abvDefault="6.2"
        // ibuDefault="30"
        // id="sample-id"
        keg={sampleKeg}
        //onSubmitFunction=""
        submitButtonText="save edits"
      />
    </>
  );
}

const sampleKeg = {
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

ReusableKegForm.propTypes = {
  formTitle: PropTypes.string,
  formDescription: PropTypes.string,
  //potentially put lines 80-87 as a single object and destructure
  keg: PropTypes.object,
  onSubmitFunction: PropTypes.func,
  submitButtonText: PropTypes.string,
};

export default EditKegForm;
