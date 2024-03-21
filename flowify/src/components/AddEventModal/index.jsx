import React, { useState } from 'react';
import Datetime from 'react-datetime';
import 'react-datetime/css/react-datetime.css';


const AddEventModal = ({ isOpen, onClose, onEventAdded }) => {
    const [title, setTitle] = useState('');
    const [start, setStart] = useState(new Date());
    const [end, setEnd] = useState(new Date());

    const onSubmit = (event) => {
        event.preventDefault();
        onEventAdded({ title, start, end });
        onClose();
    };

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 z-50 overflow-y-auto">
            <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
                {/* Overlay */}
                <div className="fixed inset-0 transition-opacity" aria-hidden="true">
                    <div className="absolute inset-0 bg-gray-500 opacity-75"></div>
                </div>

                {/* Modal content */}
                <div className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full" style={{ minHeight: '80vh' }}>
                    <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                        <div className="sm:flex sm:items-start">
                            <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left w-full">
                                {/* Modal Header */}
                                <h3 className="text-lg leading-6 font-medium text-gray-900" id="modal-title">Add Event</h3>
                                <div className="mt-2">
                                    {/* Modal Body */}
                                    <form onSubmit={onSubmit}>
                                        <div className="mb-4">
                                            <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
                                            <input type="text" id="name" value={title} onChange={e => setTitle(e.target.value)} className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500" placeholder="Event title" />
                                        </div>
                                        <div className="mb-4">
                                            <label htmlFor="start-date" className="block text-sm font-medium text-gray-700">Start Date</label>
                                            <Datetime value={start} onChange={setStart} />
                                        </div>
                                        <div className="mb-4">
                                            <label htmlFor="end-date" className="block text-sm font-medium text-gray-700">End Date</label>
                                            <Datetime value={end} onChange={setEnd} />
                                        </div>
                                        <div className="px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
                                            <button type="submit" className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-blue-600 text-base font-medium text-white hover:bg-blue-700 focus:outline-none sm:ml-3 sm:w-auto sm:text-sm">Add</button>
                                            <button type="button" className="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm" onClick={onClose}>Cancel</button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AddEventModal;