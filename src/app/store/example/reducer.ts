import { Reducer } from 'redux'
import { ExampleActionTypes, ExampleState } from './types'

// Type-safe initialState!
const initialState: ExampleState = {
  data: [],
  errors: undefined,
  loading: false,
}

// Thanks to Redux 4's much simpler typings, we can take away a lot of typings on the reducer side,
// everything will remain type-safe.
const reducer: Reducer<ExampleState> = (state = initialState, action) => {
  switch (action.type) {
    case ExampleActionTypes.FETCH_REQUEST: {
      return { ...state, loading: true }
    }
    case ExampleActionTypes.FETCH_SUCCESS: {
      return { ...state, loading: false, data: action.payload }
    }
    case ExampleActionTypes.FETCH_ERROR: {
      return { ...state, loading: false, errors: action.payload }
    }
    default: {
      return state
    }
  }
}

// Instead of using default export, we use named exports. That way we can group these exports
// inside the `index.js` folder.
export { reducer as exampleReducer }
