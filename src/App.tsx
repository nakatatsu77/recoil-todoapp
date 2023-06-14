import { RecoilRoot } from "recoil";
import "./App.css";
import AddTask from "./conponents/AddTask";
import InputTask from "./conponents/InputTask";

function App() {
  return (
    <RecoilRoot>
      <div className="Task">
        <InputTask />
        <AddTask />
      </div>
    </RecoilRoot>
  );
}

export default App;
