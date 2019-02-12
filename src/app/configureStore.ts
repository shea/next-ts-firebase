import { applyMiddleware, createStore, Store } from 'redux'
// We'll be using Redux Devtools. We can use the `composeWithDevTools()`
// directive so we can pass our middleware along with it
import { composeWithDevTools } from 'redux-devtools-extension'
import createSagaMiddleware from 'redux-saga'

// Import the state interface and our combined reducers/sagas.
import { ApplicationState, rootReducer, rootSaga } from './store'

interface SagaStore<S> extends Store<S> {
  sagaTask?
}

export default function configureStore(
  initialState: Partial<ApplicationState>
): Store<ApplicationState> {
  // create the composing function for our middlewares
  const composeEnhancers = composeWithDevTools({})
  // create the redux-saga middleware
  const sagaMiddleware = createSagaMiddleware()

  // We'll create our store with the combined reducers/sagas, and the initial Redux state that
  // we'll be passing from our entry point.

  const store: SagaStore<ApplicationState> = createStore(
    rootReducer,
    initialState,
    composeEnhancers(applyMiddleware(sagaMiddleware))
  )

  store.sagaTask = sagaMiddleware.run(rootSaga)
  return store
}
