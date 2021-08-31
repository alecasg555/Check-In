export const SET_DNI = "@checkIn/set-dni";
export const SET_CHECK_IN_LIST = "@checkIn/set-check-in-list";

export const setDni = (dni) => {
  return {
    type: SET_DNI,
    payload: dni,
  };
};
export function editCheckIn(dni, checkIn) {
  return async (dispatch, getState) => {
    try {
      const users = getState().checkIn.users;
      users?.map((user) => {
        if (user.user.dni == dni) {
          user.user.dni = checkIn.dni;
          user.user.nombre = checkIn.nombre;
          user.user.apellido = checkIn.apellido;
          user.userFlight.origen = checkIn.origen;
          user.userFlight.destino = checkIn.destino;
          user.userFlight.check = checkIn.check;
          user.userFlight.fecha = checkIn.fecha;
          user.userFlight.hora = checkIn.hora;
        }
      });

      dispatch(setCheckInList(users));
    } catch (e) {
      dispatch(setCheckInList([]));
    }
  };
}
export const setCheckInList = (checkInList) => {
  return {
    type: SET_CHECK_IN_LIST,
    payload: checkInList,
  };
};
