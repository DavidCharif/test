import "@testing-library/jest-dom";
import { types, typesEmpleoyees } from "../../types/types";

describe("Test de tipos", () => {
  test("Comparar los tipos", () => {
    expect(types).toEqual({
      login: 'login',
      logout: 'logout',
      register: 'register'
    });
  });
  test("Comparar los tipos Employee", () => {
    expect(typesEmpleoyees).toEqual({
    register: 'Register',
    list: 'List',
    delete: 'Delete',
    search:'search'
    });
  });
});
