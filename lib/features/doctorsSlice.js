import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const getDoctors = createAsyncThunk(
    'doctors/getDoctors',
    async () => {
        const response = await axios.get('/api/doctors');
        return response.data.doctor;
    }
);

const doctorsSlice = createSlice({
    name: 'doctors',
    initialState: {
        doctors: [],
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
            .addCase(getDoctors.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(getDoctors.fulfilled, (state, action) => {
                state.status = 'succeeded';
                state.doctors = action.payload;
            })
            .addCase(getDoctors.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.error.message;
            })
    },
});

export const { reset } = doctorsSlice.actions;
export default doctorsSlice.reducer;