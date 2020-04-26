import React, { Component } from "react";
import { Link } from "react-router-dom";

class Pager extends Component {
  constructor() {
    super();
  }

  render() {
    const { count, loadPage, currentPage } = this.props;
    const pages = [];

    if (count) {
      for (let i = 1; i <= Math.ceil(count / 50); i++) {
        pages.push(i);
      }
    }

    return (
      <div className="pagerBox">
        <ul className="pagesList">
          <li
            className="pageListItem"
            onClick={() => {
              loadPage(currentPage - 1);
            }}
          >
            Prev
          </li>
          {pages.map(page => (
            <li
              className="pageListItem"
              onClick={() => {
                loadPage(page);
              }}
              className={
                page === currentPage
                  ? "pageListItem active-page-link"
                  : "pageListItem"
              }
            >
              <Link to={"/" + `${page - 1}`}>{page}</Link>
            </li>
          ))}
          <li
            className="pageListItem"
            onClick={() => {
              loadPage(currentPage + 1);
            }}
          >
            Next
          </li>
        </ul>
      </div>
    );
  }
}

export default Pager;
