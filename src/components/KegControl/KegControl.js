import React from "react";
import KegDetail from "./KegDetail";
import KegList from "./KegList";
import NewKegForm from "./NewKegForm";
import EditKegForm from "./EditKegForm";

class KegControl extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <>
        <KegDetail />
        <hr />
        <KegList />
        <hr />
        <h2>Forms </h2>
        <NewKegForm />
        <hr />
        <EditKegForm />
        <hr />
      </>
    );
  }
}

export default KegControl;
