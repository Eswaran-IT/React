import React from 'react';

function Delete() {
    const data = {
        topic: 'Delete Account',
        input_1: 'Enter RollNo',
        b1: 'Delete',
        b2: 'Cancel'
    };

    return (
        <div className="fixed top-0 h-screen w-screen left-0 flex items-center justify-center bg-gray-900 bg-opacity-50 z-50">
            <div className=" bg-white rounded-lg max-w-xl p-8">
                <h1 className=" text-2xl font-semibold text-center text-red-700 mb-6">{data.topic}</h1>
                <div className="flex flex-col space-y-4">
                    <label htmlFor="name" className="text-xl">{data.input_1}</label>
                    <input id="name" type="text" className="border p-2 rounded-lg" placeholder="Enter" />
                     </div>
                <div className="flex justify-center mt-6">
                    <button className="text-white bg-green-700 hover:bg-green-800 font-medium rounded-full py-2 px-6 mr-4">{data.b1}</button>
                    <button className="text-white bg-red-400 hover:bg-red-500 font-medium rounded-full py-2 px-6">{data.b2}</button>
                </div>
            </div>
        </div>
    );
}

export default Delete;
