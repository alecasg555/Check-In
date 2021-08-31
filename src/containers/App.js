import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import EditCheckIn from "../components/checkIn/editCheckIn/EditCheckIn";
import SearchClient from "../components/checkIn/searchCheckIn/SearchClient";
import { createBrowserHistory } from "history";
import CompleteCheckIn from "../components/checkIn/completeCheckIn/CompleteCheckIn";
import { makeStyles, Paper } from "@material-ui/core";
import MainImage from "../assets/img/mainImage.jpg";

const history = createBrowserHistory();
const useStyles = makeStyles((theme) => {
  return {

    paperContainer: {
      height: "1000px",
      backgroundImage: `url(${MainImage})`,
      backgroundSize: "Cover",
      paddingTop:theme.spacing(10)
    },
  };
});
function App() {
  const classes = useStyles();
  return (
    <Router history={history} forceRefresh={true}>
      <Paper className={classes.paperContainer}>
        <Switch>
          <Route exact path="/" component={SearchClient} />
          <Route exact path="/checkIn/edit/:dni" component={EditCheckIn} />
          <Route exact path="/checkIn/complete" component={CompleteCheckIn} />
        </Switch>
      </Paper>
    </Router>
  );
}

export default App;
