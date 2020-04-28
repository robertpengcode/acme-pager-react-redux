import React, { Component } from "react";

class CreateUpdate extends Component {
  constructor() {
    super();
    this.state = {
      firstName: "",
      lastName: "",
      email: "",
      title: ""
    };
  }

  render() {
    const { handleClose } = this.props;
    return (
      <div className="createBox">
        <form className="createForm">
          <div className="formRow1">
            <input className="formInput cell1" placeholder="First Name"></input>
            <input className="formInput cell2" placeholder="Last Name"></input>
            <input className="formInput cell3" placeholder="Email"></input>
            <input className="formInput cell4" placeholder="Title"></input>
          </div>
          <div className="formRow2">
            <button className="formBtn" id="cancelBtn">
              Cancel
            </button>
            <button className="formBtn" id="submitBtn">
              Submit
            </button>
            <button
              className="formBtn"
              id="closeBtn"
              onClick={handleClose}
            >
              Close
            </button>
          </div>
        </form>
      </div>
    );
  }
}

export default CreateUpdate;
