import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const createAppointment = createAsyncThunk(
    'appointment/createAppointment',
    async (appointmentData) => {
        const response = await axios.post('/api/appointment', appointmentData, {
            headers: {
                'Content-Type': 'multipart/form-data',
            },
        });
        return response.data;
    }
);

const appointmentSlice = createSlice({
    name: 'appointment',
    initialState: {
        appointment: [],
        status: null,
        error: null,
    },
    reducers: {
        reset: (state) => {
            state.error = null;
            state.status = null;
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(createAppointment.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(createAppointment.fulfilled, (state, action) => {
                state.status = 'succeeded';
                state.appointment.push(action.payload);
            })
            .addCase(createAppointment.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.error.message;
            });
    },
});

export const { reset } = appointmentSlice.actions;
export default appointmentSlice.reducer;
