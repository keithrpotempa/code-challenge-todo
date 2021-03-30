import "./styles.css";
import { useState } from "react";

import Alert from '@material-ui/lab/Alert';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';

import ApiManager from "./modules/api-manager";
import ItemList from "./components/item-list";

const App = () => {
  const [timezones, setTimezones] = useState({});
  const [hasError, setHasError] = useState(false);
  const [errorText, setErrorText] = useState("");

  const handleError = response => {
    const message = response.statusText ? response.statusText : `${response.status} Response`
    setHasError(true);
    setErrorText(message);
  }

  const fetchTimezones = (region) => {
    return ApiManager.getTimezones(region)
      .then(response => {
        if (response.ok) {
          return response.json();
        } else {
          handleError(response);
        }
      }).catch(() => {
        setHasError(true);
        setErrorText("Failed to fetch");
      })
  }

  const getTimezone = region => {
    return fetchTimezones(region)
      .then(response => {
        if(response) {
          const formattedTimezones = response.map(timezone => timezone.split("/")[1]);
          setTimezones(prevState => ({
            ...prevState, 
            [region]: formattedTimezones
          }))
          return response;
        }
      }
    );
  }

  // TODO: utilize promise.all
  const getAllTimezones = () => {
    const regions = ["Europe", "Asia"];
    regions.forEach(region => {
      getTimezone(region);
    });
  }

  return (
    <div className="App">
      <h1>Timezones Code Challenge</h1>
      <Grid 
        container
        direction="column"
        alignItems="center"
        justify="center"
        spacing={2}
      >
        {Object.keys(timezones).length > 0 
          ? Object.keys(timezones).map((region, index) => (
            <ItemList key={index} items={timezones[region]} region={region} />
          ))
          : (
            <Button 
              variant="contained" 
              color="primary"
              onClick={getAllTimezones}
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
