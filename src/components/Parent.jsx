import React, { useState, useEffect } from 'react';
import SideBar from './Sidebar';
import Card from './shared/Card';
import { db } from '../util/Firebase'; // Import the firestore instance
import { collection, getDocs } from 'firebase/firestore';

const Parent = () => {
  const [data, setData] = useState([]);

  const fetchPost = async () => {
    try {
      const querySnapshot = await getDocs(collection(db, "parentsForm"));
      const newData = querySnapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id }));
      setData(newData);
      console.log(newData);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  useEffect(() => {
    fetchPost();
  }, []);

  return (
    <div className='bg-orange-300 h-[100vh] overflow-scroll'>
      <SideBar />
      <div className="w-2/3 mt-20 p-4 sm:ml-64">
        <div className="grid grid-cols-1 sm:grid-cols-2">
          {data.length === 0 ? (
            <div className="flex items-center justify-center">
            <div className="animate-spin rounded-full h-12 w-12 border-t-4 border-b-4 border-orange-500"></div>
          </div>
          ) : (
            data.map((item) => (
              <Card
                key={item.id}
                email={item.email}
                grade={item.grade}
                parentIdUrl={item.parentIdUrl}
                phoneNumber={item.phoneNumber}
                schoolAddress={item.schoolAddress}
                studentIdUrl={item.studentIdUrl}
                studentPhotoUrl={item.studentPhotoUrl}
                studentsLastName={item.studentsLastName}
                telegram={item.telegram}
                studentsName={item.studentsName}
              />
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default Parent;
