import React from 'react'

// <Card key={item.id} email={item.email} grade={item.grade} parentIdUrl={item.parentIdUrl} phoneNumber={item.phoneNumber} schoolAddress={item.schoolAddress} studentIdUrl={item.studentIdUrl} studentPhotoUrl={item.studentPhotoUrl} studentsLastName={item.studentsLastName} studentsName={item.studentsName} />
const DriverCard = ({email, phoneNumber, address, firstName, lastName}) => {
  return (
    <div class="relative flex flex-col mt-6 text-gray-700 bg-white shadow-md bg-clip-border rounded-xl w-96">
  <div class="p-6">
    <h5 class="block mb-2 font-sans text-xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900">
      Drivers Name: {firstName + " " + lastName}
    </h5>
    <p class="block font-sans text-base antialiased font-light leading-relaxed text-inherit">
      Phone Number: {phoneNumber}
    </p>
    <p class="block font-sans text-base antialiased font-light leading-relaxed text-inherit">
      Address: {address}
    </p>
    <p class="block font-sans text-base antialiased font-light leading-relaxed text-inherit">
      Email: {email}
    </p>
  </div>
  <div class="p-6 pt-0">
    <button
      class="align-middle select-none font-sans font-bold text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-3 px-6 rounded-lg bg-orange-400 text-white shadow-md shadow-gray-900/10 hover:shadow-lg hover:shadow-gray-900/20 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none"
      type="button">
      Expand
    </button>
  </div>
</div>
  )
}

export default DriverCard