import React from 'react'
import PassengerInvoice from './passengerinvoice/PassengerInvoice'
import CompanyInvoice from './company/CompanyInvoice'



const Invoice = () => {
  return (
    <div className="space-y-12 w-full pb-16 bg-white h-[700px] ">
    <div className="space-y-12 w-full pb-16">
        <div className="w-full flex items-center justify-center">

        {/* invoice card */}
        <div className='w-[90%] grid grid-cols-5 bg-white rounded-3xl border border-neutral-200 shadow-sm relative mt-48'>

            {/* left side for Passenger */}
            <PassengerInvoice/>
            {/* right side for company */}
            <CompanyInvoice/>

            {/* cut circle */}
            <div className="absolute -top-3 right-[18.8%] h-6 w-6 rounded-full bg-neutral-50 border border-neutral-50"/>

 <div className="absolute -bottom-3 right-[18.8%] h-6 w-6 rounded-full bg-neutral-50 border border-neutral-50"/>
        </div>
       
</div>
 {/* download invoice card button  */}
        <div className="w-full flex justify-center items-center">
            <button className='w-fit px-8 h-14 bg-violet-800 text-neutral-50 font-bold text-lg rounded-lg'>
              Download Invoice
            </button>
        </div>

    </div>
     </div>
  )
}

export default Invoice