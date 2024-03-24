import { useState } from "react";
import "./App.css";
import Inputcontainer from "./components/Inputcontainer";
import TODOContainer from "./components/TODOContainer";

function App() {
  const [inputVal, setInputVal] = useState("");

  const [todos, setTODOs] = useState([]);

  function writeTODO(event) {
    setInputVal(event.target.value);
  }

  function addTODO() {
    if (inputVal !== "") {
      setTODOs((prevTODOs) => [...prevTODOs, inputVal]);
      setInputVal("");
    }
  }

  function delTODO(todoIndex) {
    setTODOs((prevTODOs) =>
      prevTODOs.filter((prevTODOs, prevTODOsIndex) => {
        return prevTODOsIndex != todoIndex;
      })
    );
  }

  return (
    <main>
      <h1>TODO: List</h1>
      <Inputcontainer
        inputValue={inputVal}
        writeTOTO={writeTODO}
        addTODO={addTODO}
      />
      <TODOContainer todos={todos} delTODO={delTODO} />
    </main>
  );
}

export default App;
