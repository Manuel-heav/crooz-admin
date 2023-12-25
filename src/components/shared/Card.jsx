import React, { useState } from 'react'


const SimpleModal = ({ isOpen, onClose, email, grade, parentIdUrl, phoneNumber, schoolAddress, studentIdUrl, studentPhotoUrl, studentsLastName, studentsName }) => {
  if (!isOpen) {
    return null;
  }

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
          <h3 className="text-xl font-semibold mb-4">{studentsName + studentsLastName}</h3>
          {/* make the font bolder */}
          <p className="text-orange-500">Email: <span className='text-black'>{email}</span></p>
          <p className="text-orange-500">Grade: <span className='text-black'>{grade}</span></p>
          <p className="text-orange-500">Student's Name: <span className='text-black'>{studentsName + studentsLastName}</span></p>
          <p className="text-orange-500">Phone Number: <span className='text-black'>{phoneNumber}</span></p>
          <p className="text-orange-500">School Address: <span className='text-black'>{schoolAddress}</span></p>
          {/* Images with max width to prevent overflow */}
          <p className="text-orange-500 text-center text-lg">Parent ID</p>
          <img className="max-w-full h-auto mb-5 mt-5" src={parentIdUrl} alt="" />
          <p className="text-orange-500 text-center text-lg mb-5 mt-5">Student ID </p>
          <img className="max-w-full h-auto" src={studentIdUrl} alt="" />
          <p className="text-orange-500 text-center text-lg mb-5 mt-5">Student Photo: </p>
          <img className="max-w-full h-auto" src={studentPhotoUrl} alt="" />
        </div>
      </div>
    </div>
  );
};

const Card = ({email, grade, phoneNumber, schoolAddress, studentsName, studentsLastName, parentIdUrl, studentIdUrl, studentPhotoUrl}) => {
  const [isModalVisible, setModalVisibility] = useState(false);

    const toggleModal = () => {
      setModalVisibility(!isModalVisible);
    };

  return (
    <div class="relative flex flex-col mt-6 text-gray-700 bg-white shadow-md bg-clip-border rounded-xl w-96">
  <div class="p-6">
    <h5 class="block mb-2 font-sans text-xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900">
      Students Name: {studentsName + " " + studentsLastName}
    </h5>
    <p class="block font-sans text-base antialiased font-light leading-relaxed text-inherit">
      Phone Number: {phoneNumber}
    </p>
    <p class="block font-sans text-base antialiased font-light leading-relaxed text-inherit">
      School Address: {schoolAddress}
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
                email={email}
                grade={grade}
                parentIdUrl={parentIdUrl}
                phoneNumber={phoneNumber}
                schoolAddress={schoolAddress}
                studentIdUrl={studentIdUrl}
                studentPhotoUrl={studentPhotoUrl}
                studentsLastName={studentsLastName}
                studentsName={studentsName}/>
</div>
  )
}

export default Card