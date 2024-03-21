import React, { useState } from 'react';

const SignUp = () => {
  // State to control the visibility of the modal
  const [showModal, setShowModal] = useState(false);
  
  // Form data state initialization
  const [formData, setFormData] = useState({
    email: '',
    firstName: '',
    lastName: '',
    password: ''
  });

  // Handles input changes to update state
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Handles the form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  return (
    <div>
      {/* Sign-up invitation */}
      <p className="text-center py-16 text-heroBackground-color font-semibold text-5xl mt-6">Want more flow in your life?</p>
      
      {/* Sign-up button */}
      <div className="flex justify-center mt-4">
        <button
          className="bg-second-color hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          style={{ margin: '20px' }}
          onClick={() => setShowModal(true)}
        >
          Sign Up
        </button>
      </div>
      
      {/* Modal for sign-up form */}
      {showModal && (
        <div className="fixed inset-0 z-10 flex items-center justify-center overflow-x-hidden overflow-y-auto outline-none focus:outline-none">
          <div className="relative w-auto max-w-md mx-auto my-6">
            <div className="bg-white rounded-lg shadow-lg outline-none focus:outline-none">
              
              {/* Modal header */}
              <div className="flex justify-between items-center p-5 border-b border-solid border-blueGray-200 rounded-t">
                <h3 className="text-lg font-semibold">Sign Up</h3>
                <button
                  className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                  onClick={() => setShowModal(false)}
                >
                  <span className="text-black opacity-5">×</span>
                </button>
              </div>
              
              {/* Form within the modal */}
              <div className="relative p-6 flex-auto">
                <form onSubmit={handleSubmit}>
                  {/* Email input field */}
                  <div className="mb-4">
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                      Email
                    </label>
                    <input
                      type="email"
                      name="email"
                      id="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className="mt-1 p-2 block w-full border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                      placeholder="Enter your email address"
                      required
                    />
                  </div>
                  
                  {/* First name input field */}
                  <div className="mb-4">
                    <label htmlFor="firstName" className="block text-sm font-medium text-gray-700">
                      First Name
                    </label>
                    <input
                      type="text"
                      name="firstName"
                      id="firstName"
                      value={formData.firstName}
                      onChange={handleInputChange}
                      className="mt-1 p-2 block w-full border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                      placeholder="Enter your first name"
                      required
                    />
                  </div>
                  
                  {/* Last name input field */}
                  <div className="mb-4">
                    <label htmlFor="lastName" className="block text-sm font-medium text-gray-700">
                      Last Name
                    </label>
                    <input
                      type="text"
                      name="lastName"
                      id="lastName"
                      value={formData.lastName}
                      onChange={handleInputChange}
                      className="mt-1 p-2 block w-full border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                      placeholder="Enter your last name"
                      required
                    />
                  </div>
                  
                  {/* Password input field */}
                  <div className="mb-4">
                    <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                      Password
                    </label>
                    <input
                      type="password"
                      name="password"
                      id="password"
                      value={formData.password}
                      onChange={handleInputChange}
                      className="mt-1 p-2 block w-full border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                      placeholder="Enter your password"
                      required
                    />
                  </div>

                  {/* Form submission buttons */}
                  <div className="flex items-center justify-end pt-6 border-t border-solid border-blueGray-200 rounded-b">
                    {/* Cancel button: closes the modal */}
                    <button
                      type="button"
                      className="px-4 py-2 text-sm bg-blue-500 text-white rounded transition duration-300 hover:bg-blue-600"
                      onClick={() => setShowModal(false)}
                    >
                      Cancel
                    </button>
                    {/* Submit button: submits the form */}
                    <button
                      type="submit"
                      className="ml-4 px-4 py-2 text-sm bg-green-500 text-white rounded transition duration-300 hover:bg-green-600"
                    >
                      Sign Up
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default SignUp;