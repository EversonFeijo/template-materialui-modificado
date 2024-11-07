import Header from "./components/header";
import ListarTarefa from "./pages/tarefa/ListarTarefa";
import Menu from "./components/menu"

import './App.css';

function App() {
  return (
    <div className="App">
      <Menu />
      <Header />
      <ListarTarefa />
    </div>
  );
}

export default App;
