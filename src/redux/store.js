// store.js

import { createStore, combineReducers, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import rootSaga from './reducer/sagas'; // assuming you have your sagas in sagas.js
import rootReducer from './reducer/index'; // assuming you have your reducers in reducers.js

// Combine reducers if you have multiple reducers
// const rootReducer = combineReducers({
//   reducer1,
//   reducer2,
// });

// Create the saga middleware
// You can add more middleware as needed

// Create the Redux store
const store = createStore(rootReducer);

// Run the root saga

export default store;
