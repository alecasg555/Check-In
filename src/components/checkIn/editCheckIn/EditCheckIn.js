import { useDispatch, useSelector } from "react-redux";
import {
  Box,
  Button,
  Card,
  Container,
  Grid,
  InputLabel,
  makeStyles,
  Switch,
  TextField,
  Typography,
} from "@material-ui/core";
import { Form, Formik } from "formik";
import * as Yup from "yup";
import { useEffect, useState } from "react";
import { editCheckIn } from "../../../store/actions/checkInActions";
import CompleteCheckIn from "../completeCheckIn/CompleteCheckIn";

const useStyles = makeStyles((theme) => ({
  root: {
    minHeight: "100%",
    paddingTop: theme.spacing(3),
    paddingBottom: theme.spacing(3),
    paddingLeft: theme.spacing(28),
    paddingRight: theme.spacing(28),
  },
  card: {
    padding: theme.spacing(5),
  },
  buttonSave: {
    justifyContent: "center",
  },
  textCenter: {
    textAlign: "center",
  },
}));
const EditCheckIn = (props) => {
  const dispatch = useDispatch();
  const dni = props.match.params.dni;
  const users = useSelector((state) => state.checkIn.users);
  const [user, setUser] = useState(null);
  const [isFinished, setIsFinished] = useState(false);
  const [isCheck, setIsCheck] = useState(false);
  useEffect(() => {
    const isUser = users.find((u) => u.user.dni.toString() == dni);
    if (isUser) return setUser(isUser);
  }, [dni]);
  const handleSubmitFormik = async (values) => {
    values.check = isCheck;
    dispatch(editCheckIn(dni, values));
    setIsFinished(true);
  };

  const classes = useStyles();
  return (
    <Container className={classes.root} maxWidth={false}>
      {!isFinished ? (
        <Box mt={3}>
          <Grid container spacing={2}>
            <Grid item md={12} xs={12}>
              <Card className={classes.card}>
                <Formik
                  enableReinitialize
                  initialValues={{
                    dni: user?.user?.dni ?? "",
                    nombre: user?.user?.nombre ?? "",
                    apellido: user?.user?.apellido ?? "",
                    origen: user?.userFlight?.origen ?? "",
                    destino: user?.userFlight?.destino ?? "",
                    check: user?.userFlight?.check ?? false,
                    fecha: user?.userFlight?.fecha ?? "",
                    hora: user?.userFlight?.hora ?? "",
                  }}
                  validationSchema={Yup.object().shape({
                    nombre: Yup.string().min(1).max(50).required("Requerido"),
                    apellido: Yup.string().min(1).max(50).required("Requerido"),
                    origen:
                      Yup.string()
                      .required("Requerido"),
                      destino:
                      Yup.string()
                      .required("Requerido"),
                      fecha:
                      Yup.date()
                      .required("Requerido"),
                      hora:
                      Yup.string()
                      .required("Requerido"),
                  })}
                  onSubmit={handleSubmitFormik}
                >
                  {({
                    touched,
                    errors,
                    values,
                    handleBlur,
                    handleChange,
                    isSubmitting,
                  }) => (
                    <Form>
                      <Grid container spacing={3}>
                        <Grid item xl={12} md={12} xs={12}>
                          <Typography variant="h4">
                            <Box textAlign="center">Check In</Box>
                          </Typography>
                        </Grid>
                        <Grid item xl={6} md={6} xs={12}>
                          <TextField
                            label={"dni"}
                            variant="outlined"
                            name="dni"
                            value={values.dni}
                            error={Boolean(touched.dni && errors.dni)}
                            helperText={touched.dni && errors.dni}
                            onBlur={handleBlur}
                            onChange={handleChange}
                            fullWidth
                            disabled
                          />
                        </Grid>
                        <Grid item xl={6} md={6} xs={12}>
                          <TextField
                            label={"nombre"}
                            variant="outlined"
                            name="nombre"
                            value={values.nombre}
                            error={Boolean(touched.nombre && errors.nombre)}
                            helperText={touched.nombre && errors.nombre}
                            onBlur={handleBlur}
                            onChange={handleChange}
                            fullWidth
                          />
                        </Grid>
                        <Grid item xl={6} md={6} xs={12}>
                          <TextField
                            label={"apellido"}
                            variant="outlined"
                            name="apellido"
                            value={values.apellido}
                            error={Boolean(touched.apellido && errors.apellido)}
                            helperText={touched.apellido && errors.apellido}
                            onBlur={handleBlur}
                            onChange={handleChange}
                            fullWidth
                          />
                        </Grid>
                        <Grid item xl={6} md={6} xs={12}>
                          <TextField
                            label={"origen"}
                            variant="outlined"
                            name="origen"
                            value={values.origen}
                            error={Boolean(touched.origen && errors.origen)}
                            helperText={touched.origen && errors.origen}
                            onBlur={handleBlur}
                            onChange={handleChange}
                            fullWidth
                          />
                        </Grid>
                        <Grid item xl={6} md={6} xs={12}>
                          <TextField
                            label={"destino"}
                            variant="outlined"
                            name="destino"
                            value={values.destino}
                            error={Boolean(touched.destino && errors.destino)}
                            helperText={touched.destino && errors.destino}
                            onBlur={handleBlur}
                            onChange={handleChange}
                            fullWidth
                          />
                        </Grid>

                        <Grid item xl={6} md={6} xs={12}>
                          <TextField
                            label={"fecha"}
                            variant="outlined"
                            name="fecha"
                            value={values.fecha}
                            error={Boolean(touched.fecha && errors.fecha)}
                            helperText={touched.fecha && errors.fecha}
                            onBlur={handleBlur}
                            onChange={handleChange}
                            type="date"
                            fullWidth
                          />
                        </Grid>
                        <Grid item xl={6} md={6} xs={12}>
                          <TextField
                            label={"hora"}
                            variant="outlined"
                            type="time"
                            name="hora"
                            value={values.hora}
                            error={Boolean(touched.hora && errors.hora)}
                            helperText={touched.hora && errors.hora}
                            onBlur={handleBlur}
                            onChange={handleChange}
                            fullWidth
                          />
                        </Grid>
                        <Grid item xl={12} md={12} xs={12}>
                          <InputLabel label="Check">Check</InputLabel>
                          <Switch
                            label="Check"
                            name="check"
                            checked={isCheck}
                            error={Boolean(touched.check && errors.check)}
                            helperText={touched.check && errors.check}
                            onBlur={handleBlur}
                            onChange={(e) => setIsCheck(e.target.checked)}
                            color="primary"
                          />
                        </Grid>
                      </Grid>

                      <Box mt={3} />
                      <Grid
                        item
                        xl={12}
                        md={12}
                        xs={12}
                        className={classes.textCenter}
                      >
                        <Button
                          type="submit"
                          variant="contained"
                          alignItems="center"
                          color="primary"
                          className={classes.buttonSave}
                        >
                          Editar
                        </Button>
                      </Grid>
                    </Form>
                  )}
                </Formik>
              </Card>
            </Grid>
          </Grid>
        </Box>
      ) : (
        <CompleteCheckIn checkIn={user} />
      )}
    </Container>
  );
};

export default EditCheckIn;
