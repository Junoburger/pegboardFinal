const reducer = (state = 1, action = {}) => {
  switch (action.type) {
  case 'SELECT_USER':
    return action.payload
  default:
    return state
  }
}

export default reducer
