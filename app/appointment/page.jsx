"use client"

import React, { useEffect } from 'react';
import AppointmentForm from './components/AppointmentForm';
import { useDispatch, useSelector } from 'react-redux';
import { getDoctors } from '@/lib/features/doctorsSlice';


const Appointment = () => {
    const dispatch = useDispatch();
    const { doctors } = useSelector((state) => state.doctors);

    useEffect(() => {
        dispatch(getDoctors());
    }, [dispatch]);
    
    return (
        <div className='grid grid-cols-1 pt-[76px] lg:grid-cols-2'>
            <div className='h-[calc(100vh-76px)] w-full bg-cover bg-[url("/images/appointment.jpg")]' />
            <div className='flex flex-col gap-10 p-10'>
                <div className="flex flex-col gap-1">
                    <h1 className='text-2xl font-semibold'>Appointment</h1>
                    <p className='text-base text-zinc-600'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore ipsa suscipit nam quas vel eum incidunt beatae? Reiciendis, recusandae porro.</p>
                </div>
                <AppointmentForm dispatch={dispatch} doctors={doctors} />
            </div>
        </div>
    );
};

export default Appointment;
