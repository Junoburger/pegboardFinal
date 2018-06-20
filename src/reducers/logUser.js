const reducer = (state = null, action = {}) => {
  switch (action.type) {
  case 'SELECT_USER':
    return action.payload
  case 'LOG_OUT':
    return null

  default:
    return state
  }
}

export default reducer
