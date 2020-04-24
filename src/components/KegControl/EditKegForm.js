import React from "react";
import ReusableKegForm from "./ReusableKegForm";

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
        itemNameDefault="Item Name"
        descDefault="this is the greatest beer ever brewed"
        originDefault="Seattle, WA"
        brewerDefault="Elysian Brewing"
        priceDefault="7"
        abvDefault="6.2"
        ibuDefault="30"
        id="sample-id"
        onSubmitFunction=""
        submitButtonText="save edits"
      />
    </>
  );
}

export default EditKegForm;
