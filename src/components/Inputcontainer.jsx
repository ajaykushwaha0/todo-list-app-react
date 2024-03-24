import React, { useState } from "react";

function Inputcontainer({ inputValue, writeTOTO , addTODO}) {
  return (
    <div className="input-container">
      <input type="text" value={inputValue} onChange={writeTOTO} />
      <button onClick={addTODO}>+</button>
    </div>
  );
}

export default Inputcontainer;
