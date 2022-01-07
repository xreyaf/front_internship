import { combineReducers } from 'redux';

import dogReducer from './dogsReducer';

const reducers = combineReducers({
  dogs: dogReducer
});

export default reducers;
export type RootState = ReturnType<typeof reducers>;
