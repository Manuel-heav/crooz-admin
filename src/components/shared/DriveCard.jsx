import React, { useState } from 'react'
import { Link } from 'react-router-dom';

// <Card key={item.id} email={item.email} grade={item.grade} parentIdUrl={item.parentIdUrl} phoneNumber={item.phoneNumber} schoolAddress={item.schoolAddress} studentIdUrl={item.studentIdUrl} studentPhotoUrl={item.studentPhotoUrl} studentsLastName={item.studentsLastName} studentsName={item.studentsName} />

const SimpleModal = ({ isOpen, onClose, email, firstName, lastName, schoolAddress, vehicleCapacity, phoneNumber, address, libreUrl, businessUrl, liscence, photoUrl, idUrl, vehicleUrl, telegram }) => {
    if (!isOpen) {
      return null;
    }
    let telegramUrl = `https://t.me/${telegram.slice(1)}`;
    console.log(telegramUrl);
  
    return (
      <div className="fixed top-0 right-0 bottom-0 left-0 z-50 flex items-center justify-center bg-orange-400 bg-opacity-30 overflow-auto">
        <div className="h-full absolute bg-white p-6 rounded-md w-full max-w-screen-md overflow-hidden">
          <div className="flex justify-end">
            <button
              className="text-gray-600 hover:text-gray-800 focus:outline-none"
              onClick={onClose}
            >
              <span className="text-2xl">&times;</span>
            </button>
          </div>
          <div className="overflow-auto max-h-[80vh]"> {/* Adjust max height as needed */}
            <h3 className="text-xl font-semibold mb-4">{firstName + lastName}</h3>
            {/* make the font bolder */}
            <p className="text-orange-500">Email: <span className='text-black'>{email}</span></p>
            <p className="text-orange-500">Telegram Handle: <span className='text-black'>{telegram  }</span></p>
            <p className="text-orange-500">First Name: <span className='text-black'>{firstName}</span></p>
            <p className="text-orange-500">Last Name: <span className='text-black'>{lastName}</span></p>
            <p className="text-orange-500">School Address: <span className='text-black'>{schoolAddress}</span></p>
            <p className="text-orange-500">Vehicle Capacity: <span className='text-black'>{vehicleCapacity}</span></p>
            <p className="text-orange-500">Phone Number: <span className='text-black'>{phoneNumber}</span></p>
            <p className="text-orange-500">Address: <span className='text-black'>{address}</span></p>
  
            {/* Images with max width to prevent overflow */}
            <p className="text-orange-500 text-center text-lg">Libre Image</p>
            <img className="max-w-full h-auto mb-5 mt-5" src={libreUrl} alt="" />
            <p className="text-orange-500 text-center text-lg mb-5 mt-5">Business Liscence: </p>
            <img className="max-w-full h-auto" src={businessUrl} alt="" />
            <p className="text-orange-500 text-center text-lg mb-5 mt-5">Liscence Image: </p>
            <img className="max-w-full h-auto" src={liscence} alt="" />
            <p className="text-orange-500 text-center text-lg mb-5 mt-5">Photo Image: </p>
            <img className="max-w-full h-auto" src={photoUrl} alt="" />
            <p className="text-orange-500 text-center text-lg mb-5 mt-5">ID Image: </p>
            <img className="max-w-full h-auto" src={idUrl} alt="" />
            <p className="text-orange-500 text-center text-lg mb-5 mt-5">Vehicle Image: </p>
            <img className="max-w-full h-auto" src={vehicleUrl} alt="" />
          <div className="flex space-x-4 mt-5">
          <a
        href={telegramUrl}
        target="_blank"
        rel="noopener noreferrer"
      >
        <button className="bg-orange-500 hover:bg-orange-600 text-white py-2 px-4 rounded">
          Accept
        </button>
      </a>
      <button   onClick={onClose} className="bg-black hover:bg-gray-800 text-white py-2 px-4 rounded">
        Reject
      </button>
    </div>
    <div className="mt-3 flex items-center">
      <div className="mt-3 text-sm text-orange-500">
      If you accept the user please click the link down below and the take the time to send it to user, Click "Accept" to navigate to the user's profile:
      <br />
      <a
        className="underline hover:text-orange-600 cursor-pointer"
      >
        https://t.me/+vlwHUPb5j4g2ODU0 
      </a>
    </div>
    </div>
          </div>
        </div>
      </div>
    );
  };
  

const DriverCard = ({key, email, lastName,firstName,businessUrl,idUrl,libreUrl,liscence,photoUrl, schoolAddress,vehicleCapacity,vehicleUrl, phoneNumber, address,telegram }) => {
    const [isModalVisible, setModalVisibility] = useState(false);

    const toggleModal = () => {
      setModalVisibility(!isModalVisible);
    };

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
      type="button" onClick={toggleModal}>
      Expand
    </button>
  </div>
  <SimpleModal isOpen={isModalVisible} onClose={toggleModal} 
                key={key}
                email={email}
                lastName={lastName}
                firstName={firstName}
                phoneNumber={phoneNumber}
                businessUrl={businessUrl}
                idUrl={idUrl}
                libreUrl={libreUrl}
                liscence={liscence}
                photoUrl={photoUrl}
                schoolAddress= {schoolAddress}
                vehicleCapacity= {vehicleCapacity}
                vehicleUrl={vehicleUrl}
                address={address}
                telegram={telegram}/>
</div>
  )
}

export default DriverCard

// {isModalVisible && (
//     <div id="static-modal" data-modal-backdrop="static" tabindex="-1" aria-hidden="true" class="hidden overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full">
//         <div class="relative p-4 w-full max-w-2xl max-h-full">
//             <div class="relative bg-white rounded-lg shadow dark:bg-gray-700">
//                 <div class="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600">
//                     <h3 class="text-xl font-semibold text-gray-900 dark:text-white">
//                         Static modal
//                     </h3>
//                     <button type="button" class="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white" data-modal-hide="static-modal">
//                         <svg class="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
//                             <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"/>
//                         </svg>
//                         <span class="sr-only" onClick={toggleModal}>Close modal</span>
//                     </button>
//                 </div>
//                 <div class="p-4 md:p-5 space-y-4">
//                     <p class="text-base leading-relaxed text-gray-500 dark:text-gray-400">
//                         With less than a month to go before the European Union enacts new consumer privacy laws for its citizens, companies around the world are updating their terms of service agreements to comply.
//                     </p>
//                     <p class="text-base leading-relaxed text-gray-500 dark:text-gray-400">
//                         The European Union’s General Data Protection Regulation (G.D.P.R.) goes into effect on May 25 and is meant to ensure a common set of data rights in the European Union. It requires organizations to notify users as soon as possible of high-risk data breaches that could personally affect them.
//                     </p>
//                 </div>
//                 <div class="flex items-center p-4 md:p-5 border-t border-gray-200 rounded-b dark:border-gray-600">
//                     <button data-modal-hide="static-modal" type="button" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">I accept</button>
//                     <button data-modal-hide="static-modal" type="button" class="ms-3 text-gray-500 bg-white hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-lg border border-gray-200 text-sm font-medium px-5 py-2.5 hover:text-gray-900 focus:z-10 dark:bg-gray-700 dark:text-gray-300 dark:border-gray-500 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-600">Decline</button>
//                 </div>
//             </div>
//         </div>
//     </div>
//     )}