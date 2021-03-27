import "./styles.css";
import { useState } from "react";

import Alert from '@material-ui/lab/Alert';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';

import ApiManager from "./modules/api-manager";
import ItemList from "./components/item-list";

const App = () => {
  const [todos, setTodos] = useState([]);
  const [hasError, setHasError] = useState(false);
  const [errorText, setErrorText] = useState("");

  const handleError = response => {
    const message = response.statusText ? response.statusText : `${response.status} Response`
    setHasError(true);
    setErrorText(message);
  }

  const fetchTodos = () => {
    return ApiManager.getAllTodos()
    .then(response => {
      console.log(response);
      if (response.ok) {
        return response.json();
      } else {
        handleError(response);
      }
    }).catch(() => {
      setHasError(true);
      setErrorText("Failed to fetch");
    });
  }

  const getTodos = () => {
    fetchTodos()
      .then(response => {
        if(response) {
          setTodos(response)
        }
      })
  };

  return (
    <div className="App">
      <h1>TODO List Code Challenge</h1>
      <Grid 
        container
        direction="column"
        alignItems="center"
        justify="center"
        spacing={2}
      >
        {todos.length > 0 
          ? <ItemList items={todos} />
          : (
            <Button 
            variant="contained" 
            color="primary"
            onClick={getTodos}
            >
              Get List
            </Button>
          )
        }
        <Grid item xs={3}>
          {hasError 
            ? <Alert severity="error">{errorText}</Alert>
            : null
          }
        </Grid>
      </Grid>
    </div>
  );
};

export default App;
