import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import KegDetail from "./KegDetail";
import KegList from "./KegList";
import NewKegForm from "./NewKegForm";
import EditKegForm from "./EditKegForm";
import * as a from "../../actions";

class KegControl extends React.Component {
  // constructor(props) {
  //   super(props);
  //   this.state = {};
  // }

  /* Adding a new keg */
  handleAddClick = () => {
    this.props.dispatch(a.setAddKegFormOn(true));
  };
  handleAddingKeg = (newKeg) => {
    const { dispatch } = this.props;
    dispatch(a.addKeg(newKeg));
    dispatch(a.setAddKegFormOn(false));
  };
  handleLeaveNewFormClick = () => {
    this.props.dispatch(a.setAddKegFormOn(false));
  };

  /* View individual keg detail */
  handleKegDetailClick = (id) => {
    const kegToSelect = this.props.masterKegList[id];
    this.props.dispatch(a.selectKeg(kegToSelect));
  };
  handleLeaveKegDetailClick = () => {
    this.props.dispatch(a.deselectKeg());
  };

  /* Edit a keg */
  handleEditClick = (id) => {
    this.props.dispatch(a.setEditKegFormOn(true));
  };
  handlePurchaseClick = (keg) => {
    const kegToPurchase = Object.assign({}, this.props.masterKegList[keg.id], {
      pintsRemaining: keg.pintsRemaining - 1,
    });
    const { dispatch } = this.props;
    dispatch(a.editKeg(kegToPurchase));
    dispatch(a.selectKeg(kegToPurchase));
  };
  handleEditingKeg = (editedKeg) => {
    const { dispatch } = this.props;
    dispatch(a.editKeg(editedKeg));
    dispatch(a.deselectKeg());
    dispatch(a.setEditKegFormOn(false));
  };
  handleLeaveEditFormClick = () => {
    this.props.dispatch(a.setEditKegFormOn(false));
  };

  /* Delete a keg */
  handleDeleteClick = (id) => {
    const { dispatch } = this.props;
    dispatch(a.deleteKeg(id));
    dispatch(a.deselectKeg());
  };

  /* Determine which components should be displayed on render */
  setVisibleScreen = () => {
    if (this.props.editKegFormOn === true) {
      return {
        component: (
          <EditKegForm
            keg={this.props.selectedKeg}
            onFormSubmit={this.handleEditingKeg}
            onLeaveEditFormClick={this.handleLeaveEditFormClick}
          />
        ),
      };
    } else if (this.props.selectedKeg != null) {
      return {
        component: (
          <KegDetail
            keg={this.props.selectedKeg}
            onEditClick={this.handleEditClick}
            onPurchaseClick={this.handlePurchaseClick}
            onDeleteClick={this.handleDeleteClick}
            onLeaveKegDetailClick={this.handleLeaveKegDetailClick}
          />
        ),
      };
    } else if (this.props.addKegFormOn === true) {
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
      };
    }
  };

  render() {
    let visibleScreen = this.setVisibleScreen();
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
          kegList={this.props.masterKegList}
          onKegDetailClick={this.handleKegDetailClick}
        />
        <hr />
      </React.Fragment>
    );
  }
}

KegControl.propTypes = {
  masterKegList: PropTypes.object,
  selectedKeg: PropTypes.object,
  addKegFormOn: PropTypes.bool,
  editKegFormOn: PropTypes.bool,
};

const mapStateToProps = (state) => {
  return {
    masterKegList: state.masterKegList,
    selectedKeg: state.selectedKeg,
    addKegFormOn: state.addKegFormOn,
    editKegFormOn: state.editKegFormOn,
  };
};

KegControl = connect(mapStateToProps)(KegControl);

export default KegControl;
