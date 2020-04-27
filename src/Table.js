import React, { Component } from "react";

class Table extends Component {
  constructor() {
    super();
  }

  render() {
    const { employees } = this.props;

    return (
      <div className="tableBox">
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
                    <td className="cell4 btnCell">{employee.title}
                    <button className="rowBtn" id="editBtn">Edit</button>
                    <button className="rowBtn" id="deleteBtn">Delete</button>
                    </td>
                  </tr>
                ))}
          </tbody>
        </table>
      </div>
    );
  }
}

export default Table;

