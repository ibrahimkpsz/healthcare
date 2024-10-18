import React, { useState } from 'react'
import {
    Sheet,
    SheetContent,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet"
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { FileUploaderRegular } from '@uploadcare/react-uploader'
import '@uploadcare/react-uploader/core.css';
import { PhoneInput } from '@/components/ui/phone-input'
import { createDoctor } from '@/lib/features/doctorSlice'

const AddDoctor = ({ dispatch }) => {
    const [name, setName] = useState('');
    const [surname, setSurname] = useState('');
    const [department, setDepartment] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [photo, setPhoto] = useState('');

    const handleFileUpload = (fileInfo) => {
        if (fileInfo.allEntries.length > 0) {
            const url = fileInfo.allEntries[0].cdnUrl;
            setPhoto(url);
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        const doctorData = {
            name,
            surname,
            department,
            email,
            phone,
            photo
        };

        dispatch(createDoctor(doctorData));

        setName('');
        setSurname('');
        setDepartment('');
        setEmail('');
        setPhone('');
        setPhoto('');

        console.log('Doctor Data:', doctorData);
    };

    return (
        <Sheet>
            <SheetTrigger asChild>
                <Button>Add Doctor</Button>
            </SheetTrigger>
            <SheetContent>
                <SheetHeader className="pb-5">
                    <SheetTitle>Add Doctor</SheetTitle>
                </SheetHeader>
                <form className='flex flex-col justify-between h-[calc(100%-40px)]' onSubmit={handleSubmit}>
                    <div className='flex flex-col gap-4'>
                        <div className='flex items-center gap-3'>
                            <div className='flex flex-col gap-2'>
                                <Label>Name</Label>
                                <Input type="text" value={name} onChange={(e) => setName(e.target.value)} />
                            </div>
                            <div className='flex flex-col gap-2'>
                                <Label>Surname</Label>
                                <Input type="text" value={surname} onChange={(e) => setSurname(e.target.value)} />
                            </div>
                        </div>
                        <div className='flex flex-col gap-2'>
                            <Label>Department</Label>
                            <Input type="text" value={department} onChange={(e) => setDepartment(e.target.value)} />
                        </div>

                        <div className='flex flex-col gap-2'>
                            <Label>Email</Label>
                            <Input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
                        </div>
                        <div className='flex flex-col gap-2'>
                            <Label>Phone</Label>
                            <PhoneInput
                                name="phone"
                                defaultCountry="TR"
                                value={phone}
                                onChange={(e) => setPhone(e)}
                            />
                        </div>
                        <div className='flex flex-col gap-2'>
                            <Label>Photo</Label>
                            <FileUploaderRegular
                                multiple={false}
                                className="w-full file-uploader"
                                sourceList="local, url, camera, dropbox"
                                classNameUploader="uc-light"
                                pubkey={process.env.NEXT_PUBLIC_UPLOADCARE_PUBLIC_KEY}
                                onChange={handleFileUpload}
                            />
                        </div>
                    </div>
                    <Button type="submit">Add Doctor</Button>
                </form>
            </SheetContent>
        </Sheet>
    )
}

export default AddDoctor
