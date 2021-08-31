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
  Switch,
} from "@material-ui/core";
import { CheckCircleOutline as CheckCircleOutlineIcon } from "@material-ui/icons";

import { useHistory } from "react-router";
const useStyles = makeStyles({
  root: {
    width: 800,
    margin: "0px auto",
  },

  pos: {
    marginBottom: 12,
  },
  textCenter: {
    textAlign: "center",
  },
  buttonSearch: {
    minHeight: "56px",
  },
});

const CompleteCheckIn = ({ checkIn }) => {
  const classes = useStyles();
  const history = useHistory();
  const handleFinish = () => {
    history.push("/");
  };

  return (
    <Box mt={5}>
      <Card className={classes.root}>
        <CardContent className={classes.textCenter}>
          <Grid container>
            <Grid container>
              <Grid item xs={12} md={12} xl={12}>
                <CheckCircleOutlineIcon
                  style={{ color: "#00e676", fontSize: 70 }}
                />
              </Grid>
              <Grid container xs={12} md={12} xl={12}>
                <Grid item xs={12} md={12} xl={12}>
                  <Typography variant="h4">
                    Check in realizado correctamente :
                  </Typography>
                </Grid>
                <Box mt={10} />
                <Grid container xs={12} md={12} xl={12}>
                  <Grid container xs={12} md={12} xl={12}>
                    <Grid item xs={6} md={6} xl={6}>
                      <Typography variant="body2">
                        <Box fontWeight="fontWeightBold">Dni :</Box>
                      </Typography>
                    </Grid>
                    <Grid item xs={6} md={6} xl={6}>
                      <Typography alignt variant="body2">
                        <Box textAlign="center">{checkIn?.user?.dni ?? ""}</Box>
                      </Typography>
                    </Grid>
                  </Grid>
                  <Grid item xs={6} md={6} xl={6}>
                    <Typography variant="body2">
                      <Box fontWeight="fontWeightBold">Nombre :</Box>
                    </Typography>
                  </Grid>
                  <Grid item xs={6} md={6} xl={6}>
                    <Typography alignt variant="body2">
                      <Box textAlign="center">
                        {checkIn?.user?.nombre ?? ""}
                      </Box>
                    </Typography>
                  </Grid>
                </Grid>
                <Grid container xs={12} md={12} xl={12}>
                  <Grid item xs={6} md={6} xl={6}>
                    <Typography variant="body2">
                      <Box fontWeight="fontWeightBold">Apellido :</Box>
                    </Typography>
                  </Grid>
                  <Grid item xs={6} md={6} xl={6}>
                    <Typography alignt variant="body2">
                      <Box textAlign="center">
                        {checkIn?.user?.apellido ?? ""}
                      </Box>
                    </Typography>
                  </Grid>
                </Grid>
                <Grid container xs={12} md={12} xl={12}>
                  <Grid item xs={6} md={6} xl={6}>
                    <Typography variant="body2">
                      <Box fontWeight="fontWeightBold">Origen :</Box>
                    </Typography>
                  </Grid>
                  <Grid item xs={6} md={6} xl={6}>
                    <Typography alignt variant="body2">
                      <Box textAlign="center">
                        {checkIn?.userFlight?.origen ?? ""}
                      </Box>
                    </Typography>
                  </Grid>
                </Grid>
                <Grid container xs={12} md={12} xl={12}>
                  <Grid item xs={6} md={6} xl={6}>
                    <Typography variant="body2">
                      <Box fontWeight="fontWeightBold">Destino :</Box>
                    </Typography>
                  </Grid>
                  <Grid item xs={6} md={6} xl={6}>
                    <Typography alignt variant="body2">
                      <Box textAlign="center">
                        {checkIn?.userFlight?.destino ?? ""}
                      </Box>
                    </Typography>
                  </Grid>
                </Grid>
                <Grid container xs={12} md={12} xl={12}>
                  <Grid item xs={6} md={6} xl={6}>
                    <Typography variant="body2">
                      <Box fontWeight="fontWeightBold">Check :</Box>
                    </Typography>
                  </Grid>
                  <Grid item xs={6} md={6} xl={6}>
                    <Typography alignt variant="body2">
                      <Box textAlign="center">
                        {checkIn?.userFlight?.check ? "Si" : "No"}
                      </Box>
                    </Typography>
                  </Grid>
                </Grid>
                <Grid container xs={12} md={12} xl={12}>
                  <Grid item xs={6} md={6} xl={6}>
                    <Typography variant="body2">
                      <Box fontWeight="fontWeightBold">Fecha :</Box>
                    </Typography>
                  </Grid>
                  <Grid item xs={6} md={6} xl={6}>
                    <Typography alignt variant="body2">
                      <Box textAlign="center">
                        {checkIn?.userFlight?.fecha ?? ""}
                      </Box>
                    </Typography>
                  </Grid>
                </Grid>
                <Grid container xs={12} md={12} xl={12}>
                  <Grid item xs={6} md={6} xl={6}>
                    <Typography variant="body2">
                      <Box fontWeight="fontWeightBold">Hora :</Box>
                    </Typography>
                  </Grid>
                  <Grid item xs={6} md={6} xl={6}>
                    <Typography alignt variant="body2">
                      <Box textAlign="center">
                        {checkIn?.userFlight?.hora ?? ""}
                      </Box>
                    </Typography>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
            <Grid item xs={12} md={12} xl={12}>
              <Box mt={5} />
              <Button
                variant="contained"
                color="primary"
                onClick={handleFinish}
              >
                Finalizar!
              </Button>
            </Grid>
          </Grid>
        </CardContent>
      </Card>
    </Box>
  );
};

export default CompleteCheckIn;
