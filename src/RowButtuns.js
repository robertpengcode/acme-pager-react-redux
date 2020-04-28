import React, { Component } from "react";

const RowButtuns = ({handleCreate, handleEdit, handleDelete, email}) => {
 
  return (
    <React.Fragment>
      <button className="rowBtn" id="createBtn" onClick={handleCreate}>
        Create
      </button>
      <button className="rowBtn" id="editBtn" onClick={handleEdit}>
        Edit
      </button>
      <button className="rowBtn" id="deleteBtn" onClick={()=>handleDelete(email)}>
        Delete
      </button>
    </React.Fragment>
  );
};

export default RowButtuns;
