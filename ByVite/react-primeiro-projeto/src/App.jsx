import AddTaks from "./components/AddTasks";
import Taks from "./components/Tasks";

function App() {
  return (
    <div>
      <h1>Gerenciador de Tarefas</h1>
      <Taks />
      <AddTaks />
    </div>
  );
}

export default App;
