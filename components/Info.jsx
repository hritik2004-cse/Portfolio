import React from 'react'
import {HiOutlineMail, HiOutlinePhone, HiOutlineUser, HiOutlineLocationMarker} from 'react-icons/hi'


const Info = () => {
    return (
        <div className='flex flex-col gap-6 md:gap-10'>
            <div className='flex flex-col md:flex-row gap-4'>
                <div className='w-[280px] flex items-start gap-4'>
                    <HiOutlineUser className='text-3xl mt-1 text-accent'/>
                    <div>
                        <p className='text-lg text-accent'>Date of Birth:</p>
                        <p className='text-lg text-center'>14 Oct 2004</p>
                    </div>
                </div>
                <div className='w-[280px] flex items-start gap-4'>
                    <HiOutlineMail className='text-3xl mt-1 text-accent'/>
                    <div>
                        <p className='text-lg text-accent'>Email:</p>
                        <a href="mailto:hritiksharma08725@gmail.com">Click Here</a>
                    </div>
                </div>
            </div>
            <div className='flex flex-col md:flex-row gap-4'>
                <div className='w-[280px] flex items-start gap-4'>
                    <HiOutlinePhone className='text-3xl mt-1 text-accent'/>
                    <div>
                        <p className='text-lg text-accent'>Phone No:</p>
                        <p className='text-lg text-center'>+91 95484 74709</p>
                    </div>
                </div>
                <div className='w-[280px] flex items-start gap-4'>
                    <HiOutlineLocationMarker className='text-3xl mt-1 text-accent'/>
                    <div>
                        <p className='text-lg text-accent'>Location:</p>
                        <a href="mailto:hritiksharma08725@gmail.com">Chandigarh</a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Info
