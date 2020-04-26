import React, { Component } from "react";
import { Redirect, Switch, HashRouter, Route, Link } from "react-router-dom";
import axios from "axios";
import Table from "./Table";
import Pager from "./Pager";

class App extends Component {
  constructor() {
    super();
    this.state = {
      employees: [],
      count: "",
      currentPage: 1
    };
    this.loadPage = this.loadPage.bind(this);
  }

  async componentDidMount() {
    const response = (await axios.get("/api/employees/")).data;
    this.setState({ employees: response.rows, count: response.count });
  }

  async loadPage(page) {
    if (page < 1) {
      page = 1;
    } else if (page > 7) {
      page = 7;
    }
    const response = (await axios.get("/api/employees/" + `${page - 1}`)).data;
    this.setState({
      employees: response.rows,
      count: response.count,
      currentPage: page
    });
  }

  render() {
    const { employees, count, currentPage } = this.state;
    const { loadPage } = this;
    return (
      <HashRouter>
        <div className="appBox">
          <h1>ACME Pager</h1>
          <Table employees={employees} />
          <Pager count={count} loadPage={loadPage} currentPage={currentPage} />
        </div>
      </HashRouter>
    );
  }
}

export default App;
