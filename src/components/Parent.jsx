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
    <div className='overflow-hidden'>
      <SideBar />
      <div className="w-2/3 mt-20 p-4 sm:ml-64">
        <div className="grid grid-cols-1 sm:grid-cols-2">
          {data.length === 0 ? (
            <p>There's no data to show</p>
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
