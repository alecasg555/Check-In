 import {SET_DNI,SET_CHECK_IN_LIST} from '../actions/checkInActions';

const initialState = {
  users: [
    {
      user: {
        dni: 1,
        nombre: "Juan",
        apellido: "López",
      },
      userFlight: {
        origen: "Buenos Aires",
        destino: "Miami",
        check: true,
        fecha: "2021-04-08",
        hora: "10:00",
      }
    },
    
  ],
  dniToSearch:''
};
export const checkInReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_DNI:{
      return{
        ...state,
        dniToSearch:action.payload
      }
    }
    case SET_CHECK_IN_LIST:{
      return{
        ...state,
        users:action.payload
      }
    }
    
    default:
      return state;
  }
};
