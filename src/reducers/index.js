import { combineReducers } from '@reduxjs/toolkit';
import DentistReducer from './DentistReducer';
import ClinicReducer from './ClientReducer';
import localStorage from 'redux-persist/es/storage';
import persistReducer from 'redux-persist/es/persistReducer';
import { setEndDate, setStartDate } from '../action/dentist';

export const patientPersistConfig = {
  key: 'patient',
  storage: localStorage,
  whitelist: [
    'setStartDate',
    'setEndDate',
    'dayLength',
    'statusDisplay',
  ],
};

const rootReducer = combineReducers({
  dentist: persistReducer(patientPersistConfig, DentistReducer),
  client: persistReducer(patientPersistConfig, ClinicReducer),
});

export default rootReducer;
