import React from 'react';
import { Link } from 'react-router-dom';
import UserInfo from './UserInfo';

const Dashboard: React.FC = () => {

    return (
        <div>
            <div className="flex justify-end bg-blue-400 py-4 px-6">
                <button
          type="button"
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          <Link
            id='logout-link'
            to="/signin"
            onClick={() => {
              localStorage.removeItem("authToken");
              localStorage.removeItem("userData");
              localStorage.setItem("responsemsg", "Successfully logged out!");
            }}
          >
            SignOut
          </Link>
        </button>
      </div>
      <div className="flex items-center justify-center bg-gray-100 h-screen">
        <div className="px-10 py-10 bg-white rounded-lg shadow-lg">
          <h1 className="text-3xl font-bold text-center text-gray-800 mb-10">
            Dashboard
          </h1>
          <UserInfo />
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
