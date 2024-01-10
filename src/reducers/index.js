import { combineReducers } from '@reduxjs/toolkit';
import DentistReducer from './DentistReducer';
import ClinicReducer from './ClientReducer';
import localStorage from 'redux-persist/es/storage';

const rootReducer = combineReducers({
  dentist: DentistReducer,
  client: ClinicReducer,
});

export default rootReducer;
