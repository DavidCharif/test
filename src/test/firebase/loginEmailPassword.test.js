import "@testing-library/jest-dom";
import { initializeApp } from "firebase/app";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { listEmployeeAsync } from "../../actions/actionEmployees";
import { firebaseConfig } from "../../firebase/firebaseConfig";
import configureStore from "redux-mock-store";
import thunk from "redux-thunk";
const middlewares = [thunk];
const mockStore = configureStore(middlewares);
const initState = {
  employees : []
 };
let store = mockStore(initState)

describe("Probar funciones asyncronas con el Firebase", () => {
  beforeEach(() => {
    store = mockStore(initState)
  })
  test("Enviar un usuario inexitente y esperar un error", async () => {
    //mesa de trabajo
    const email = "abc@abc.com";
    const password = "123456";
    // test
    const app = initializeApp(firebaseConfig);
    const auth = getAuth();
    const respuesta = await signInWithEmailAndPassword(auth, email, password);
  
    expect(respuesta).toBe('FirebaseError: ')
  });
  jest.setTimeout()
  test("recibir los usuarios del firebase",async () => {
    const lista = store.dispatch(listEmployeeAsync())
    const listaSyn = await lista
    const state = store.getState()
    console.log('state', state)
    console.log('lista', listaSyn)
  })  
});
