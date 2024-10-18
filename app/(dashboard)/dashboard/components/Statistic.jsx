import { User } from 'lucide-react'
import React from 'react'

const Statistic = ({ appointments }) => {
    const activeAppointments = appointments.filter(appt => appt.status === 'active').length;
    const pastAppointments = appointments.filter(appt => new Date(appt.date) < new Date()).length;
    const totalAppointments = appointments.length;
    const canceledAppointments = appointments.filter(appt => appt.status === 'canceled').length;

    return (
        <div className='grid grid-cols-1 gap-5 lg:grid-cols-4 md:grid-cols-2'>
            <div className='flex items-center gap-3 p-5 border border-zinc-200 rounded-xl'>
                <div className='p-3 border rounded-lg bg-zinc-50 border-zinc-200 w-fit text-cyan-700'>
                    <User />
                </div>
                <div className='flex flex-col'>
                    <span className='text-sm font-medium text-zinc-600'>Active Appointments</span>
                    <span className='text-xl font-semibold'>{activeAppointments}</span>
                </div>
            </div>
            <div className='flex items-center gap-2 p-5 border border-zinc-200 rounded-xl'>
                <div className='p-3 border rounded-lg bg-zinc-50 border-zinc-200 w-fit text-cyan-700'>
                    <User />
                </div>
                <div className='flex flex-col'>
                    <span className='text-sm font-medium text-zinc-600'>Past Appointments</span>
                    <span className='text-xl font-semibold'>{pastAppointments}</span>
                </div>
            </div>
            <div className='flex items-center gap-2 p-5 border border-zinc-200 rounded-xl'>
                <div className='p-3 border rounded-lg bg-zinc-50 border-zinc-200 w-fit text-cyan-700'>
                    <User />
                </div>
                <div className='flex flex-col'>
                    <span className='text-sm font-medium text-zinc-600'>Total Appointments</span>
                    <span className='text-xl font-semibold'>{totalAppointments}</span>
                </div>
            </div>
            <div className='flex items-center gap-2 p-5 border border-zinc-200 rounded-xl'>
                <div className='p-3 border rounded-lg bg-zinc-50 border-zinc-200 w-fit text-cyan-700'>
                    <User />
                </div>
                <div className='flex flex-col'>
                    <span className='text-sm font-medium text-zinc-600'>Canceled Appointments</span>
                    <span className='text-xl font-semibold'>{canceledAppointments}</span>
                </div>
            </div>
        </div>
    )
}

export default Statistic