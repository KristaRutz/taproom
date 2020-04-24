import React from "react";
import KegDetail from "./KegDetail";
import KegList from "./KegList";
import NewKegForm from "./NewKegForm";
import EditKegForm from "./EditKegForm";
import kegList from "./KegSeedData";

class KegControl extends React.Component {
  constructor(props) {
    super(props);
    this.state = { masterKegList: kegList, selectedKeg: null };
  }

  handleAddKeg = (newKeg) => {
    console.log("keg control handleAddKeg");
    console.log(newKeg);
    const newMasterKegList = this.state.masterKegList.concat(newKeg);
    this.setState({ masterKegList: newMasterKegList });
  };

  handleKegDetailClick = (id) => {
    const selectedKeg = this.state.masterKegList.filter(
      (keg) => keg.id === id
    )[0];
    console.log(selectedKeg);
    this.setState({ selectedKeg: selectedKeg });
  };

  handleLeaveKegDetailClick = () => {
    this.setState({ selectedKeg: null });
  };

  handleDeleteClick = (id) => {
    const newMasterKegList = this.state.masterKegList.filter(
      (keg) => keg.id !== id
    );
    this.setState({
      masterKegList: newMasterKegList,
      selectedKeg: null,
    });
  };

  setVisibleScreen = () => {
    if (this.state.selectedKeg != null) {
      return {
        component: (
          <KegDetail
            keg={this.state.selectedKeg}
            onEditClick={this.handleEditClick}
            onDeleteClick={this.handleDeleteClick}
            onLeaveKegDetailClick={this.handleLeaveKegDetailClick}
          />
        ),
      };
    } else {
      return {
        component: <hr />,
      };
    }
  };

  render() {
    let visibleScreen = this.setVisibleScreen();
    return (
      <React.Fragment>
        {visibleScreen.component}
        <hr />
        <KegList
          kegList={this.state.masterKegList}
          onKegDetailClick={this.handleKegDetailClick}
        />
        <hr />
        <h2>Forms </h2>
        <NewKegForm handleAddKeg={this.handleAddKeg} />
        <hr />
        <EditKegForm />
        <hr />
      </React.Fragment>
    );
  }
}

export default KegControl;
