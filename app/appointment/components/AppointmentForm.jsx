"use client"

import React, { useState } from 'react'
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { PhoneInput } from '@/components/ui/phone-input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { DatePicker } from '@/components/ui/date-picker';
import { Button } from '@/components/ui/button';
import { createAppointment } from '@/lib/features/appointmentSlice';

const AppointmentForm = ({ doctors, dispatch }) => {
    const [patientName, setPatientName] = useState('');
    const [phone, setPhone] = useState('');
    const [doctorName, setDoctorName] = useState('');
    const [date, setDate] = useState(null);
    const [time, setTime] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();

        const formData = new FormData();
        formData.append('patient_name', patientName);
        formData.append('phone', phone);
        formData.append('doctor_name', doctorName);
        formData.append('date', date.toISOString().split('T')[0]);
        formData.append('time', time);

        dispatch(createAppointment(formData));

        setPatientName("");
        setPhone("");
        setDoctorName("");
        setDate(null);
        setTime("");
    }

    return (
        <form className='flex flex-col gap-5' onSubmit={handleSubmit}>
            <div className='flex flex-col items-center gap-5 md:flex-row'>
                <div className='flex flex-col w-full gap-2'>
                    <Label>Name & Surname</Label>
                    <Input name="patient_name" value={patientName} onChange={(e) => setPatientName(e.target.value)} type="text" required />
                </div>
                <div className='flex flex-col w-full gap-2'>
                    <Label>Phone</Label>
                    <PhoneInput name="phone" defaultCountry="TR" value={phone} onChange={(e) => { setPhone(e) }} required />
                </div>
            </div>
            <div className='flex flex-col items-center gap-5 lg:flex-row'>
                <div className='flex flex-col w-full gap-2 fle-col'>
                    <Label>Doctor</Label>
                    <Select name='doctor_name' value={doctorName} onValueChange={setDoctorName} required>
                        <SelectTrigger>
                            <SelectValue placeholder="Select Doctor" />
                        </SelectTrigger>
                        <SelectContent>
                            {doctors?.map((dr) => (
                                <SelectItem key={dr._id} value={dr.name + " " + dr.surname}>{dr.name + " " + dr.surname}</SelectItem>
                            ))}
                        </SelectContent>
                    </Select>
                </div>
                <div className='flex items-center w-full gap-3'>
                    <div className='flex flex-col w-full gap-2'>
                        <Label>Date</Label>
                        <DatePicker date={date} setDate={setDate} required />
                    </div>
                    <div className='flex flex-col w-full gap-2'>
                        <Label>Time</Label>
                        <Select name="time" value={time} onValueChange={setTime} required>
                            <SelectTrigger>
                                <SelectValue placeholder="Select Time" />
                            </SelectTrigger>
                            <SelectContent>
                                {Array.from({ length: 9 }, (_, i) => {
                                    const hour = 8 + i;
                                    const time = `${hour.toString().padStart(2, '0')}:00`;
                                    return (
                                        <SelectItem key={time} value={time}>
                                            {time}
                                        </SelectItem>
                                    );
                                })}
                            </SelectContent>
                        </Select>
                    </div>
                </div>
            </div>
            <Button type="submit" className="w-full lg:w-fit lg:ms-auto">Apply</Button>
        </form>
    )
}

export default AppointmentForm