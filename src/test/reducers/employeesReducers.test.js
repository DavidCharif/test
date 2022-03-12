import configureStore from "redux-mock-store";
import thunk from "redux-thunk";
import { registerSincrono } from "../../actions/actionRegister";
import { typesEmpleoyees } from "../../types/types";

const middlewares = [thunk];
const mockStore = configureStore(middlewares);

const initState = {
  employees: [],
};

let store = mockStore(initState);
describe("Test en employess Reducer", () => {
  beforeEach(() => {
    store = mockStore(initState);
  });
  test("Registramos usuario y lo recibimos en la lista", async () => {
    // Mesa de trabajo
    const email = "abc@abc.com";
    const password = "965823";
    const name = "David";

    const accionRegistar = () => {
      return {
        type: typesEmpleoyees.register,
        payload: {
          email,
          password,
          name,
        },
      };
    };
    await store.dispatch(accionRegistar());
    const state = store.getState();

    expect(state).toEqual({
      employees: [],
    });
  });
  test("En caso de error devuelve el default", async () => {
    //Base trabajo
    const accionDefault = () => {
      return {
        type: typesEmpleoyees.aguacate,
      };
    };
    await store.dispatch(accionDefault);
    const state = store.getState();
    expect(state).toEqual({
      employees: [],
    });
  });
});
