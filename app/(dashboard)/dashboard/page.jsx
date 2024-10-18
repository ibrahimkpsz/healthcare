"use client"

import React, { useEffect } from 'react'
import AppointmentTable from './components/AppointmentTable'
import Statistic from './components/Statistic'
import { useDispatch, useSelector } from 'react-redux'
import { getAppointments } from '@/lib/features/appointmentsSlice'

const Dashboard = () => {
    const dispatch = useDispatch();
    const { appointments } = useSelector((state) => state.appointments);

    useEffect(() => {
        dispatch(getAppointments());
    }, [dispatch]);

    return (
        <div className='flex flex-col gap-10'>
            <div className='flex flex-col gap-1'>
                <h1 className='text-2xl font-semibold'>Welcome, Healthcare.</h1>
                <p className='text-sm text-zinc-600'>Stay on top of your appointments and manage doctors effortlessly.</p>
            </div>
            <Statistic appointments={appointments} />
            <AppointmentTable dispatch={dispatch} appointments={appointments} />
        </div>
    )
}

export default Dashboard