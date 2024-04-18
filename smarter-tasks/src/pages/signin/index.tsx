import React from 'react';
import SigninForm from "./SigninForm"

const Signin: React.FC = () => {

  const responsemsg = localStorage.getItem('responsemsg');
  localStorage.removeItem('responsemsg');

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="max-w-md w-full px-6 py-8 bg-white rounded-lg shadow-md">
        <h1 className="text-3xl font-bold text-center text-gray-800 mb-8">Sign in</h1>
        <SigninForm />
        <h4 className="mt-6 text-center">{responsemsg && <span className="text-red-500">{responsemsg}</span>}</h4>
      </div>
    </div>
  );
}
export default Signin;