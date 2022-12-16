import Todos from "./components/Todos";

function App() {
  return (
    <div>
      <Todos items={["Learn React", "Learn TS"]}>{7}</Todos>
    </div>
  );
}

export default App;
