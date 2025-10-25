import Notes from "./Notes";
import Hello from "./Props";
import UseState from "./UseState";
import Task from "./components/Task";

function App() {
  const now = new Date();
  const name = "jhon";
  const age = 15;
  return (
    <div>
      <div>
        <h3>hello world</h3>
        <p>the time rn is {now.toString()}</p>

        <Hello name={name} age={age + 20} />
      </div>
      <div className="usestate">
        <UseState />
        <Notes />
        <Task />
      </div>
    </div>
  );
}

export default App;
