import React from "react";

function TODOs({ todo, index, delTODO }) {
  return (
    <div className="todo">
      <p key={todo}>{todo}</p>
      <div className="actions-container">
        <input type="checkbox" />
        <button
          onClick={() => {
            delTODO(index);
          }}
        >
          Delete
        </button>
      </div>
    </div>
  );
}

export default TODOs;
