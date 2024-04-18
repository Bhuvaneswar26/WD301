import React from "react";

const UserInfo: React.FC = () => {

    const userData = JSON.parse(localStorage.getItem('userData') as string);

    const name = userData.name;

    const email = userData.email;

  return (
    <div className="items-center justify-center bg-gray-200 md">
      <h1 className="text-xl font-bold text-center text-gray-800 mb-4">
        User Information
      </h1>
      <p className="text-center">
        Your Name: {name}
        <br />
        Your Email: {email}
      </p>
    </div>
  );
};

export default UserInfo;