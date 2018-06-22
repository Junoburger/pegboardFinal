import { createStore, applyMiddleware, compose } from 'redux'
import reducer from './reducers'
import ReduxThunk from 'redux-thunk'


const devTools = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()

const enhancer = compose(
  applyMiddleware(ReduxThunk),
  devTools
)


const persistedState = sessionStorage.getItem('reduxState') ? JSON.parse(sessionStorage.getItem('reduxState')) : {}

const store = createStore(reducer, persistedState, enhancers)


store.subscribe(()=>{
  sessionStorage.setItem('reduxState', JSON.stringify(store.getState()))
})

export default store
