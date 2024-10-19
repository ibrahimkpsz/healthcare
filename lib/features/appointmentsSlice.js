import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const getAppointments = createAsyncThunk(
    'appointments/getAppointments',
    async (status = null) => {
        const url = status ? `/api/appointments?status=${status}` : "/api/appointments"
        const response = await axios.get(url, {
            headers: {
              'Cache-Control': 'no-store',
            },
          });
        return response.data.appointments;
    }
);

export const deleteAppointment = createAsyncThunk(
    'appointments/deleteAppointment',
    async (id, { rejectWithValue }) => {
        try {
            const response = await fetch(`/api/appointments/${id}`, {
                method: 'DELETE',
            });

            if (!response.ok) {
                throw new Error('Failed to delete appointment');
            }

            return id;
        } catch (error) {
            return rejectWithValue(error.message);
        }
    }
);

const appointmentsSlice = createSlice({
    name: 'appointments',
    initialState: {
        appointments: [],
        status: "idle",
        error: null,
    },
    reducers: {
        reset: (state, action) => {
            state.list = action.payload;
            state.error = null;
            state.status = null;
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(getAppointments.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(getAppointments.fulfilled, (state, action) => {
                state.status = 'succeeded';
                state.appointments = action.payload;
            })
            .addCase(getAppointments.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.error.message;
            })
            .addCase(deleteAppointment.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(deleteAppointment.fulfilled, (state, action) => {
                state.status = 'succeeded';
                state.appointments = state.appointments.filter((appointment) => appointment._id !== action.payload);
            })
            .addCase(deleteAppointment.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.payload;
            });
    },
});

export const { reset } = appointmentsSlice.actions;
export default appointmentsSlice.reducer;
