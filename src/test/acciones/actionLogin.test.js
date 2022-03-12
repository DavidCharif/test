import '@testing-library/jest-dom'
import { loginSincrono, logoutSincrono } from '../../actions/actionLogin'
import { types } from '../../types/types'

describe('Testing en acciones login', () => {
  test('login sincrono', () => {
    //Mesa trabajo
    const id = '999'
    const displayname = 'David'
  
    const loginAction = loginSincrono(id, displayname)
    expect(loginAction).toEqual({
      type: types.login,
      payload: {
        id, displayname
      }
    })
  })
  test('logout sincrono', () => {
    //Mesa trabajo
    const loginAction = logoutSincrono()
    expect(loginAction).toEqual({type: types.logout})
  })
})