import React from 'react'
import { FaPhone } from 'react-icons/fa6'

const CompanyInvoice = () => {
  return (
    <div className='w-full col-span-1 border-dashed border-l-2 border-neutral-400 relative'>
        <div className="w-full bg-violet-800 px-4 py-5 rounded-tr-3xl">
            <h1 className="text-2xl-text-neutral-50 font-bold text-center">Bus Ticket</h1>
        </div>

        <div className="w-full px-4 py-7 space-y-2">
            <p className="text-sm text-neutral-600 font-normal">Bill No: 465</p>
             <p className="text-sm text-neutral-600 font-normal">Date: 2025-2-6</p>
              <p className="text-sm text-neutral-600 font-normal">Name: John</p>
               <p className="text-sm text-neutral-600 font-normal">From Terminus <span className='text-xs'>(Oke-Odo)</span></p>
               <p className="text-sm text-neutral-600 font-normal">From Oke-Odo <span className='text-xs'>(Post Office)</span></p>
               <p className="text-sm text-neutral-600 font-normal">Dept. Time: 6:15PM</p>
               <p className="text-sm text-neutral-600 font-normal">Seat No: 1,2,3,4</p>
               <p className="text-sm text-neutral-600 font-normal">Total Passenger: 4</p>
               <p className="text-sm text-neutral-600 font-normal">Total Price: ₦1600</p>

        </div>

        {/* right bottom section */}
         <div className="w-full bg-violet-800 absolute bottom-0 right-0 rounded-br-3xl flex items-center justify-center px-5 py-1.5">
                        <div className="flex items-center gap-x-2">
                            <FaPhone className='w-3 h-3 text-neutral-100'/>
                            <p className="text-sm text-neutral-100 font-light">
                           +234 808 3739 3839
                        </p>
                        </div>
                </div>
    </div>
  )
}

export default CompanyInvoice