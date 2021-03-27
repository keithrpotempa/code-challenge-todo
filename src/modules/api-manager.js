const baseUrl = "https://jsonplaceholder.typicode.com";

const handleErrors = (response) => {
  if (!response.ok) {
    throw new Error(response.statusText);
  }
  return response;
};

const ApiManager = {
  getAllTodos() {
    return fetch(`${baseUrl}/todos/`)
      .then(handleErrors)
      .then((response) => response.json())
      .catch((error) => {
        throw new Error(error);
      });
  }
};

export default ApiManager;
