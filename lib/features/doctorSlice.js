import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const createDoctor = createAsyncThunk(
    'doctors/createDoctor',
    async (doctorData) => {
        const response = await axios.post('/api/doctor', doctorData);
        return response.data;
    }
);

const doctorSlice = createSlice({
    name: 'doctor',
    initialState: {
        doctor: [],
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
            .addCase(createDoctor.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(createDoctor.fulfilled, (state, action) => {
                state.status = 'succeeded';
                state.doctor.push(action.payload);
            })
            .addCase(createDoctor.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.error.message;
            });
    },
});

export const { reset } = doctorSlice.actions;
export default doctorSlice.reducer;
