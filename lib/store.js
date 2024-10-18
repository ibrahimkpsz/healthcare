import { configureStore } from '@reduxjs/toolkit';
import doctorsReducer from './features/doctorsSlice';
import appointmentReducer from './features/appointmentSlice.js';
import appointmentsReducer from './features/appointmentsSlice.js';

export const store = configureStore({
    reducer: {
        doctors: doctorsReducer,
        appointment: appointmentReducer,
        appointments: appointmentsReducer,
    },
});
