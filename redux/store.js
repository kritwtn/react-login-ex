import {combineReducers, configureStore} from '@reduxjs/toolkit';
import loginSlice from './login/loginSlice';

const rootReducer = combineReducers({
  login: loginSlice,
});

export type RootState = ReturnType<typeof rootReducer>;

const store = configureStore({
  reducer: rootReducer,
});

export default store;