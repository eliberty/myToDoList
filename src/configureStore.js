import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './redux/reducers/index';

const reduxDevTools =
  window.__REDUX_DEVTOOLS_EXTENSION__ &&
  window.__REDUX_DEVTOOLS_EXTENSION__({
    serialize: true,
    trace: true,
    traceLimit: 25,
  });

export default function configureStore() {
  return createStore(
    rootReducer,
    compose(applyMiddleware(thunk), reduxDevTools)
  );
}
