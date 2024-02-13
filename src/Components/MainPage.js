import React from 'react';

function MainPage() {
    const data = {
        topic: 'Add Account',
        input_1: 'Enter Name',
        input_2: 'Enter Dept',
        input_3: 'Enter Batch',
        b1: 'Update',
        b2: 'Cancel'
    };

    return (
        <div className='h-screen container-fluid m-4 bg-gray-300'>
            <div className='shadow bg-white  '>
                <h1 className='p-3 rounded-lg  text-black text-3xl font-semibold text-center bg-blue-400'> User Management</h1>
            </div>
            <div className='m-2 bg-white shadow rounded-md flex justify-evenly align-center p-10'>
                <button className='px-7 py-3 shadow-lg rounded-lg border-black text-white rounded-2 hover:bg-green-700 bg-green-500 m-2   '>Add</button>
                <button className='px-7 py-3 shadow-lg rounded-lg border-black text-white rounded-2 hover:bg-red-700 bg-red-500 m-2   '>Delete</button>
                <button className='px-7 py-3 shadow-lg rounded-lg border-black text-white rounded-2 hover:bg-yellow-500 bg-yellow-400 m-2   '>Update</button>
            </div>
            <div className='bg-white'>

            </div>
        </div>
    );
}

export default MainPage;
