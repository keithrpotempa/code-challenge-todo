const baseUrl = "http://worldtimeapi.org/api/timezone";

const ApiManager = {
  getTimezones(region) {
    return fetch(`${baseUrl}/${region}/`)
  }
};

export default ApiManager;
