// eslint-disable-next-line no-unused-vars
import logo from './logo.svg';
import './App.css';
import ToDos from "./components/ToDos"
import AddTodos from "./components/AddTodo"

function App() {
  return (
    <div className="App">
      <AddTodos />
      <ToDos />
    </div>
  );
}

export default App;
