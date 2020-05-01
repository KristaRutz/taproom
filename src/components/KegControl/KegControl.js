import React from "react";
import KegDetail from "./KegDetail";
import KegList from "./KegList";
import NewKegForm from "./NewKegForm";
import EditKegForm from "./EditKegForm";
import kegList from "./KegSeedData";

class KegControl extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      masterKegList: kegList,
      selectedKeg: null,
      editing: false,
      addingNew: false,
    };
  }

  /* Adding a new keg */
  handleAddClick = () => {
    this.setState({ addingNew: true });
  };
  handleAddingKeg = (newKeg) => {
    console.log("keg control handleAddingKeg");
    console.log(newKeg);
    const newMasterKegList = this.state.masterKegList.concat(newKeg);
    this.setState({ masterKegList: newMasterKegList, addingNew: false });
  };
  handleLeaveNewFormClick = () => {
    this.setState({ addingNew: false });
  };

  /* View individual keg detail */
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

  /* Edit a keg */
  handleEditClick = (id) => {
    this.setState({ editing: true });
  };
  handlePurchaseClick = (keg) => {
    keg.pintsRemaining--; // consider using Object.assign()
    const editedKegIndex = this.state.masterKegList.indexOf(
      this.state.selectedKeg
    );
    const editedMasterKegList = this.state.masterKegList
      .slice(0, editedKegIndex)
      .concat(keg)
      .concat(this.state.masterKegList.slice(editedKegIndex + 1));
    this.setState({
      masterKegList: editedMasterKegList,
    });
  };
  handleEditingKeg = (editedKeg) => {
    const editedKegIndex = this.state.masterKegList.indexOf(
      this.state.selectedKeg
    );
    const editedMasterKegList = this.state.masterKegList
      .slice(0, editedKegIndex)
      .concat(editedKeg)
      .concat(this.state.masterKegList.slice(editedKegIndex + 1));
    this.setState({
      masterKegList: editedMasterKegList,
      editing: false,
      selectedKeg: null,
    });
  };
  handleLeaveEditFormClick = () => {
    this.setState({ editing: false });
  };

  /* Delete a keg */
  handleDeleteClick = (id) => {
    const newMasterKegList = this.state.masterKegList.filter(
      (keg) => keg.id !== id
    );
    this.setState({
      masterKegList: newMasterKegList,
      selectedKeg: null,
    });
  };

  /* Determine which components should be displayed on render */
  setVisibleScreen = () => {
    if (this.state.editing === true) {
      return {
        component: (
          <EditKegForm
            keg={this.state.selectedKeg}
            onFormSubmit={this.handleEditingKeg}
            onLeaveEditFormClick={this.handleLeaveEditFormClick}
          />
        ),
      };
    } else if (this.state.selectedKeg != null) {
      return {
        component: (
          <KegDetail
            keg={this.state.selectedKeg}
            onEditClick={this.handleEditClick}
            onPurchaseClick={this.handlePurchaseClick}
            onDeleteClick={this.handleDeleteClick}
            onLeaveKegDetailClick={this.handleLeaveKegDetailClick}
          />
        ),
      };
    } else if (this.state.addingNew === true) {
      return {
        component: (
          <NewKegForm
            handleAddingKeg={this.handleAddingKeg}
            onLeaveNewFormClick={this.handleLeaveNewFormClick}
          />
        ),
      };
    } else {
      return {
        component: null,
        // <KegList
        //   kegList={this.state.masterKegList}
        //   onKegDetailClick={this.handleKegDetailClick}
        // />
      };
    }
  };

  render() {
    let visibleScreen = this.setVisibleScreen();
    console.log(this.state.masterKegList);
    return (
      <React.Fragment>
        {visibleScreen.component}
        <hr />
        <h1 className="display-4">
          on tap{" "}
          <span className="btn btn-light" onClick={this.handleAddClick}>
            +
          </span>
        </h1>

        <KegList
          kegList={this.state.masterKegList}
          onKegDetailClick={this.handleKegDetailClick}
        />
        <hr />
      </React.Fragment>
    );
  }
}

export default KegControl;
