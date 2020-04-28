import React, { Component } from "react";
import CreateUpdate from "./CreateUpdate";
import RowButtuns from "./RowButtuns";

class Table extends Component {
  constructor() {
    super();
    this.state = {
      showForm: false
    };

    this.handleCreate = this.handleCreate.bind(this);
    this.handleEdit = this.handleEdit.bind(this);
    this.handleClose = this.handleClose.bind(this);
  }

  handleCreate() {
    console.log("handle create!");
    this.setState({ showForm: true });
  }

  handleEdit() {
    console.log("handle edit!");
    this.setState({ showForm: true });
  }

  

  handleClose() {
    console.log("handle close!");
    this.setState({ showForm: false });
  }

  render() {
    const { employees } = this.props;
    const { showForm } = this.state;
    const { handleCreate, handleEdit, handleClose } = this;

    return (
      <div className="tableBox">
        {showForm ? <CreateUpdate handleClose={handleClose} /> : null}
        <table>
          <thead>
            <tr>
              <th className="cell1">First Name</th>
              <th className="cell2">Last Name</th>
              <th className="cell3">Email</th>
              <th className="cell4">Title</th>
            </tr>
          </thead>
          <tbody>
            {!employees.length
              ? "loading"
              : employees.map((employee, id) => (
                  <tr className={id % 2 === 0 ? "row oddRow" : "row evenRow"}>
                    <td className="cell1">{employee.firstName}</td>
                    <td className="cell2">{employee.lastName}</td>
                    <td className="cell3">{employee.email}</td>
                    <td className="cell4 btnCell">{employee.title}</td>
                    {!showForm ? (
                      <RowButtuns
                        handleCreate={handleCreate}
                        handleEdit={handleEdit}
                      />
                    ) : null}
                  </tr>
                ))}
          </tbody>
        </table>
      </div>
    );
  }
}

export default Table;
