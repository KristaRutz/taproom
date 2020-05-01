import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import KegDetail from "./KegDetail";
import KegList from "./KegList";
import NewKegForm from "./NewKegForm";
import EditKegForm from "./EditKegForm";
import * as a from "../../actions";

class KegControl extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      editing: false,
      addingNew: false,
    };
  }

  /* Adding a new keg */
  handleAddClick = () => {
    this.setState({ addingNew: true });
  };
  handleAddingKeg = (newKeg) => {
    this.props.dispatch(a.addKeg(newKeg));
    this.setState({ addingNew: false });
  };
  handleLeaveNewFormClick = () => {
    this.setState({ addingNew: false });
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
    this.setState({ editing: true });
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
    this.setState({ editing: false });
  };
  handleLeaveEditFormClick = () => {
    this.setState({ editing: false });
  };

  /* Delete a keg */
  handleDeleteClick = (id) => {
    const { dispatch } = this.props;
    dispatch(a.deleteKeg(id));
    dispatch(a.deselectKeg());
  };

  /* Determine which components should be displayed on render */
  setVisibleScreen = () => {
    if (this.state.editing === true) {
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
};

const mapStateToProps = (state) => {
  return {
    masterKegList: state.masterKegList,
    selectedKeg: state.selectedKeg,
  };
};

KegControl = connect(mapStateToProps)(KegControl);

export default KegControl;
