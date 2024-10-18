"use client"

import React, { useEffect } from 'react'
import AppointmentTable from './components/AppointmentTable'
import { useDispatch, useSelector } from 'react-redux';
import { getAppointments } from '@/lib/features/appointmentsSlice';

const Appointments = () => {
  const dispatch = useDispatch();
  const { appointments } = useSelector((state) => state.appointments);

  useEffect(() => {
    dispatch(getAppointments());
  }, [dispatch]);

  return (
    <div>
      <AppointmentTable dispatch={dispatch} appointments={appointments} />
    </div>
  )
}

export default Appointments