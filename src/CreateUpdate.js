import React, { Component } from "react";

class CreateUpdate extends Component {
  constructor() {
    super();
    this.state = {
      id: 500,
      firstName: "",
      lastName: "",
      email: "",
      title: ""
    };
    this.handleCancel = this.handleCancel.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleCancel() {
    console.log("handle cancel!");
    this.setState({
      id: "",
      firstName: "",
      lastName: "",
      email: "",
      title: ""
    });
  }

  async handleSubmit(ev) {
    ev.preventDefault();
    const newEmployee = {
      id: this.state.id,
      firstName: this.state.firstName,
      lastName: this.state.lastName,
      email: this.state.email,
      title: this.state.title
    };
    console.log("handle submit!", newEmployee);

    try {
      await this.props.handlePost(newEmployee);
    } catch (ex) {
      console.log("error", ex.response.data.message);
    }
    // this.setState({
    //     firstName: "",
    //     lastName: "",
    //     email: "",
    //     title: ""
    // });
  }

  render() {
    const { handleClose } = this.props;
    const { firstName, lastName, email, title } = this.state;
    const { handleCancel, handleSubmit } = this;
    return (
      <div className="createBox">
        <form className="createForm" onSubmit={handleSubmit}>
          <div className="formRow1">
            <input
              className="formInput cell1"
              placeholder="First Name"
              value={firstName}
              onChange={ev => this.setState({ firstName: ev.target.value })}
            ></input>
            <input
              className="formInput cell2"
              placeholder="Last Name"
              value={lastName}
              onChange={ev => this.setState({ lastName: ev.target.value })}
            ></input>
            <input
              className="formInput cell3"
              placeholder="Email"
              value={email}
              onChange={ev => this.setState({ email: ev.target.value })}
            ></input>
            <input
              type="text"
              className="formInput cell4"
              placeholder="Title"
              value={title}
              onChange={ev => this.setState({ title: ev.target.value })}
            ></input>
          </div>
          <div className="formRow2">
            <button className="formBtn" id="cancelBtn" onClick={handleCancel}>
              Cancel
            </button>
            <button type="submit" className="formBtn" id="submitBtn">
              Submit
            </button>
            <button className="formBtn" id="closeBtn" onClick={handleClose}>
              Close
            </button>
          </div>
        </form>
      </div>
    );
  }
}

export default CreateUpdate;
