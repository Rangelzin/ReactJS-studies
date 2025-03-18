import AddTaks from "./components/AddTasks";
import Taks from "./components/Tasks";

function App() {
  return (
    <div>
      <h1 className="text-red-500 text-2xl">Gerenciador de Tarefas</h1>
      <Taks />
      <AddTaks />
    </div>
  );
}

export default App;
