import {
  Card,
  CardContent,
  Typography,
  makeStyles,
  Box,
  TextField,
  Tooltip,
  Button,
  Grid,
} from "@material-ui/core";
import { Search as SearchIcon } from "@material-ui/icons";
import { useDispatch, useSelector } from "react-redux";
import { setDni } from "../../../store/actions/checkInActions";
import { useHistory } from "react-router";

const useStyles = makeStyles((theme) => {
  return {
    root: {
      width: 800,
      margin: "0px auto",
      padding: theme.spacing(3),
    },

  
    textCenter: {
      textAlign: "center",
    },
    buttonSearch: {
      minHeight: "56px",
    },
  };
});

const SearchClient = (props) => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const dni = useSelector((state) => state.checkIn.dniToSearch);
  const users = useSelector((state) => state.checkIn.users);
  const history = useHistory();

  const handleSearchButtonClick = (e) => {
    const isUser = users.find((u) => u.user.dni.toString() === dni);
    if (isUser) {
      history.push(`/checkIn/edit/${dni}`);
    } else {
      alert("Usuario no encontrado");
    }
  };
  const handleDniChange = (e) => {
    const dni = e.target.value;
    dispatch(setDni(dni));
  };
  return (
    <Box>
      <Card className={classes.root}>
        <CardContent className={classes.textCenter}>
          <Grid container>
            <Grid item xs={12} md={12} xl={12}>
              <Typography variant="h4" color="textPrimary" gutterBottom>
                Search Check In
              </Typography>
            </Grid>
            <Grid container>
              <Grid item xs={12} md={12} xl={12}>
                <Box mt={3} />
                <TextField
                  id="outlined-basic"
                  label="Dni"
                  variant="outlined"
                  onChange={handleDniChange}
                  value={dni}
                />
                <Tooltip title={"Search"}>
                  <Button
                    aria-label="search-customers"
                    variant="contained"
                    color="primary"
                    className={classes.buttonSearch}
                    onClick={handleSearchButtonClick}
                  >
                    <SearchIcon />
                  </Button>
                </Tooltip>
              </Grid>
            </Grid>
          </Grid>
        </CardContent>
      </Card>
    </Box>
  );
};

export default SearchClient;
