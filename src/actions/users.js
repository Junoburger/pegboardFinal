const NEW_USER = 'NEW_USER'
const MAKE_REQUEST = 'MAKE_REQUEST'
const MAKE_MATCH = 'MAKE_MATCH'
const SELECT_USER = 'SELECT_USER'

export const newUser = (user) => {
  return {
    type: NEW_USER,
    payload: user
  }
}

export function makeRequest(request) {
  return {
    type: MAKE_REQUEST,
    payload: request
  }
}

export function makeMatch(request) {
  return {
    type: MAKE_MATCH,
    payload: request
  }
}

export function LogUser(request) {
  return {
    type: SELECT_USER,
    payload: request
  }
}
