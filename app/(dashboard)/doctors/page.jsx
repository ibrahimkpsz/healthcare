"use client"

import { Button } from '@/components/ui/button'
import React, { useEffect } from 'react'
import AddDoctor from './components/AddDoctor'
import { useDispatch, useSelector } from 'react-redux'
import { getDoctors } from '@/lib/features/doctorsSlice'

const Doctors = () => {
    const dispatch = useDispatch();
    const { doctors, status, error } = useSelector((state) => state.doctors);
    useEffect(() => {
        dispatch(getDoctors());
    }, [dispatch])

    return (
        <div className='flex flex-col gap-10'>
            <div className='flex items-center justify-between'>
                <div className='flex flex-col gap-1'>
                    <h1 className='text-2xl font-semibold'>Doctors</h1>
                    <p className='text-sm text-zinc-600'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Similique, nulla.</p>
                </div>
                <AddDoctor dispatch={dispatch} />
            </div>
            <div className='grid grid-cols-1 gap-5 2xl:grid-cols-5 xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-2'>
                {doctors.map((doctor) => (
                    <div className='border rounded-lg shadow-sm border-zinc-200' key={doctor._id}>
                        {!doctor.photo ? (
                            <div className='p-5 mx-auto rounded-t-lg'>
                                <div className='w-32 h-32 mx-auto rounded-full bg-zinc-200' />
                            </div>
                        ) : (
                            <div className='p-5 mx-auto rounded-t-lg'>
                                <img className='object-cover w-32 h-32 mx-auto rounded-full' src={doctor.photo} />
                            </div>
                        )}
                        <div className='flex flex-col gap-5 pb-5'>
                            <div className='flex flex-col items-center'>
                                <span className='font-semibold 2xl:text-lg xl:text-base'>{doctor.name} {doctor.surname}</span>
                                <span className='text-sm text-zinc-600'>{doctor.department}</span>
                            </div>
                            <Button variant="outline" className="mx-auto w-fit">Edit Doctor</Button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Doctors