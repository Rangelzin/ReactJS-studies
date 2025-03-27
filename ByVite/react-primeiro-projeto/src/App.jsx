import AddTaks from "./components/AddTasks";
import Taks from "./components/Tasks";

function App() {
  return (
    <div className="w-screen h-screen bg-slate-500 flex justify-center p-6">
      <h1 className="text-red-500 text-2xl">Gerenciador de Tarefas</h1>
      <Taks />
      <AddTaks />
    </div>
  );
}

export default App;
