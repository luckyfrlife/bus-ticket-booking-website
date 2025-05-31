import React from 'react'
import { FaCircleCheck, FaPhone } from 'react-icons/fa6'
import QrImg from "../../../assets/qrcode.jpg"

const PassengerInvoice = () => {
  return (
    <div className='w-full col-span-4 rounded-3xl relative'>

        {/* Top Bus Detail */}
        <div className="w-full flex items-center justify-between bg-violet-800 px-6 py-3 rounded-tl-3xl">
            <div className="flex items-center gap-x-3">
                
                <h1 className='text-xl text-neutral-50 font-bold uppercase tracking-wider pt-1'>
                    Shuttle
                </h1>
            </div>

            <div className="flex items-center gap-x-2">
                <p className='text-3xl text-neutral-50 font-bold'>
                    <span className="text-lg">(Shuttle No.)</span>
                </p>
            </div>
        </div>

        <div className="w-full grid grid-cols-5 gap-8 items-center px-5 py-7 mb-7">
            <div className="col-span-4 space-y-3.5">
                {/* bill no, per seat and date */}
            <div className="w-full flex items-center justify-between border-dashed border-b-2 border-neutral-200 pb-3">
                <p className="text-base text-neutral-500 font-normal">Bill No: 465</p>
                <p className="text-base text-neutral-500 font-normal">₦1600 <span className='text-xs'>seats</span></p>
                <p className="text-base text-neutral-500 font-normal">Date: 2025-2-6</p>
            </div>

            {/* passenger details */}
            <div className="w-full flex items-center justify-between">
                <div className="space-y-1.5">
                    <p className="text-base text-neutral-600 font-normal">Name of Passenger: <span className='font-medium'>John Doe</span></p>
                       <p className="text-base text-neutral-600 font-normal">Total Seat No: <span className='font-medium'>1,2,3,4</span></p>
                       <p className="text-base text-neutral-600 font-normal">Total No of Passengers: <span className='font-medium'>4</span></p>
                       <p className="text-base text-neutral-600 font-normal">Pickup Station: <span className='font-medium'>Terminus</span></p>
                </div>

                <div className="space-y-4 flex items-center justify-center flex-col">
                    <div className="space-y-1 text-center">
                         <p className="text-base text-neutral-600 font-normal">Total Price: <h1 className="text-xl text-neutaral-600 font-bold">₦1600</h1> </p>
                    </div>
                    <div className="w-fit px-3 py-1 rounded-full bg-green-500/5 border border-green-600 text-green-600 text-sm font-medium flex items-center justify-center gap-2">
                    <FaCircleCheck size={16}/>
                    <span> Bill Paid </span>
                    </div>
                </div>
            </div>

            {/* route detail */}
                        <div className="w-full flex items-center justify-between border-dashed border-t-2 border-neutral-200 pt-3">
                            <p className='text-base text-neutral-500 font-normal'>Terminus <span className='text-neutral-400'>------</span> Oke-Odo</p>
                              <p className='text-base text-neutral-500 font-normal'>Arrive at 02:45PM</p>
                              <p className='text-base text-neutral-500 font-normal'>Depature at 03:50PM</p>
                        </div>
            </div>

            <div className="col-span-1 border border-neutral-200 rounded-xl shadow-sm p-1">
                <img src={QrImg} alt="QrImg" className='w-full aspect-square object-cover object-center rounded-xl' />
            </div>
            
        </div>

        {/* left bottom section */}
        <div className="w-full bg-violet-800 absolute bottom-0 left-0 rounded-bl-3xl flex items-center justify-between px-5 py-1.5">
           
                <p className="text-xs text-neutral-100 font-light">
                    Note: 40% charge for cancellation price 24 hours of programme.
                </p>
                <div className="flex items-center gap-x-2">
                    <FaPhone className='w-3 h-3'/>
                    <p className="text-sm text-neutral-100 font-light">
                   +234 808 3739 3839 +234 808 4733 8593
                </p>
                </div>
        </div>

    </div>
  )
}

export default PassengerInvoice