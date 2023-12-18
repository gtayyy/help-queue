import React, { useState } from "react"; 	           // add useState
import NewTicketForm from "./NewTicketForm";
import TicketList from "./TicketList";
import TicketDetail from "./TicketDetail";
import EditTicketForm from "./EditTicketForm";

// import { connect } from "react-redux";           removed in refactor to using hooks
// import PropTypes from "prop-types";
// import * as a from './../actions';

// class TicketControl extends React.Component {
function TicketControl() {

  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     selectedTicket: null,
  //     editing: false
  //   };
	// }

	const [formVisibleOnPage, setFormVisibleOnPage] = useState(false);
	
  const handleClick = () => {
		if (this.state.selectedTicket != null) {
			setFormVisibleOnPage(false);
			this.setState({
				formVisibleOnPage: false,
				selectedTicket: null,
        // editing: false
      });
		} else {
			setFormVisibleOnPage(!formVisibleOnPage);
      // const { dispatch } = this.props;
      // const action = a.toggleForm();
      // dispatch(action);
    }
	}
	
	const handleDeletingTicket = (id) => {
    const { dispatch } = this.props;
    const action = a.deleteTicket(id);
    dispatch(action);
    this.setState({selectedTicket: null});
	}
	
	const handleEditClick = () => {
    this.setState({editing: true});
	}
	
  const handleEditingTicketInList = (ticketToEdit) => {
    const { dispatch } = this.props;
    const action = a.addTicket(ticketToEdit);
    dispatch(action);
    this.setState({
      editing: false,
      selectedTicket: null
    });
	}
	
  const handleAddingNewTicketToList = (newTicket) => {
    // const { dispatch } = this.props;
    // const action = a.addTicket(newTicket);
    // dispatch(action);
    // const action2 = a.toggleForm();
		// dispatch(action2);
		const newMainTicketList = this.state.mainTicketList.concat(newTicket);
    this.setState({mainTicketList: newMainTicketList});
    setFormVisibleOnPage(false)
	} 
	
  const handleChangingSelectedTicket = (id) => {
    const selectedTicket = this.props.mainTicketList[id];
    this.setState({ selectedTicket: selectedTicket });
  }

	// render() {
  //   let currentlyVisibleState = null;
  //   let buttonText = null;
	let currentlyVisibleState = null;
	let buttonText = null;

    if (this.state.editing) {
      currentlyVisibleState = <EditTicketForm ticket = {this.state.selectedTicket} onEditTicket = {this.handleEditingTicketInList} />
      buttonText= "Return to Ticket List";
    } else if (this.state.selectedTicket != null) {
      // currentlyVisibleState = <TicketDetail ticket={this.state.selectedTicket} onClickingDelete = {this.handleDeletingTicket} onClickingEdit = {this.handleEditClick} />
      // buttonText = "Return to Ticket List";
    } else if (this.state.formVisibleOnPage) {
      // else if (this.props.formVisibleOnPage) {  
      currentlyVisibleState = <NewTicketForm onNewTicketCreation={this.handleAddingNewTicketToList} />; //passing handle() down to NewtickForm as prop called onNewTicketCreation
      buttonText = "Return to Ticket List";
    } else {
      currentlyVisibleState = <TicketList 
      ticketList={this.state.mainTicketList} onTicketSelection={this.handleChangingSelectedTicket} />; //passing down prop and new method as prop to TicketList child
      buttonText = "Add Ticket";
		}
	
    return (
      <React.Fragment>
        {currentlyVisibleState}
        <button onClick={this.handleClick}>{buttonText}</button>
      </React.Fragment>
    );
  }


// TicketControl.propTypes = {
//   mainTicketList: PropTypes.object,
//   formVisibleOnPage: PropTypes.bool
// };

// const mapStateToProps = state => {
//   return {
//     mainTicketList: state.mainTicketList,
//     formVisibleOnPage: state.formVisibleOnPage
//   }
// }

// TicketControl = connect(mapStateToProps)(TicketControl);

export default TicketControl;