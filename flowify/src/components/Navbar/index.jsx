import React from 'react';


const Navbar = () => {
    return (
      <nav class="bg-gray-800 text-white p-4 fixed top-0 left-0 right-0">
        <div className="container mx-auto flex justify-between items-center">
          <div className="flex items-center">
            {/* <img src={logo} alt="Logo" className="h-8 mr-2" /> Logo ekleniyor */}
            <span className="text-xl">Flowify</span>
          </div>
          <div> {} </div>
        </div>
      </nav>
    );
  };
export default Navbar;