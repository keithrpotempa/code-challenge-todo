import "./styles.css";
import "./modules/api-manager";
import { useEffect, useState } from "react";
import ApiManager from "./modules/api-manager";
import ItemTypeGroup from "./components/item-type-group";

const App = () => {
  const [todos, setTodos] = useState([]);

  const getTodos = () => {
    return ApiManager.getAllTodos();
  };

  useEffect(() => {
    getTodos().then((response) => setTodos(response));
  }, []);

  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
      <ItemTypeGroup items={todos} />
    </div>
  );
};

export default App;
