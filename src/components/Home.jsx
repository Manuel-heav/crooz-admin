import React from 'react';
import SideBar from './Sidebar';
import { AiFillCrown } from 'react-icons/ai';

const Home = () => {
  return (
    <div className="overflow-hidden bg-orange-300">
      <SideBar />
      <div className="w-full h-screen flex items-center justify-center">
        <div className="text-center max-w-lg mx-auto"> {/* Set max width for paragraph on desktop */}
          <AiFillCrown className="text-6xl text-white mx-auto mb-4" />
          <h2 className="text-4xl font-bold mb-2">Welcome, Admins!</h2>
          <p className="text-white">
            Congratulations on joining the Admin Dashboard. Here, you have the power to manage and oversee the
            operations of our system efficiently. Explore the various features and tools available to streamline your
            tasks and make data-driven decisions. If you have any questions or need assistance, feel free to reach out.
            Thank you for being an essential part of our team!
          </p>
        </div>
      </div>
    </div>
  );
};

export default Home;
