import React from "react";
import TODOs from "./TODOs";

function TODOContainer({ todos, delTODO }) {
  return (
    <div className="container">
      {todos.map((todo, index) => {
        return (
          <TODOs key={index} todo={todo} index={index} delTODO={delTODO} />
        );
      })}
    </div>
  );
}

export default TODOContainer;
