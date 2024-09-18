import React from 'react';

function Nav() {
  return (
    <nav className="bg-green-180 text-purple py-4 fixed w-full top-0 z-50 shadow-md"> {/* Light blue background and fixed */}
      <div className="container mx-auto flex justify-between items-center px-4">
        {/* Left-aligned title */}
        <div className="text-2xl font-bold">
          <span className="block">Health Systems</span>
          <span className="block">Science Portfolio</span>
        </div>

        {/* Right-aligned navigation links */}
        <ul className="flex space-x-6">
          <li>
            <a href="#home" className="hover:text-gray-200">Home</a>
          </li>
          <li>
            <a href="#about" className="hover:text-gray-200">About Me</a>
          </li>
          <li>
            <a href="#evidence" className="hover:text-gray-200">Evidence of Learning</a>
          </li>
          <li>
            <a href="#reflections" className="hover:text-gray-200">Weekly Reflections</a>
          </li>
          <li>
            <a href="#journal" className="hover:text-gray-200">Writing Journal</a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Nav;
