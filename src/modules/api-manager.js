const baseUrl = "https://jsonplaceholder.typicode.com";

const ApiManager = {
  getAllTodos() {
    return fetch(`${baseUrl}/todos/`)
  }
};

export default ApiManager;
