import React from 'react';
import { Link } from 'react-router-dom';

const NotFound: React.FC = () => {
    return ( 
        <div>
            <h1 className='text-6xl font-bold text-center mt-16 text-red-500'>
                404 Not Found
            </h1>
            <div className='flex justify-center mt-8'>
                <button className='bg-blue-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded' id="backToHomeButton">
                    <Link to='/home'>Go Back 2 Home</Link>
                </button>
            </div>
        </div>
    );
};

export default NotFound;