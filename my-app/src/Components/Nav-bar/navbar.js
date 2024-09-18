import React from 'react';

function Nav() {
  return (
    <nav className="bg-gray-800 text-white py-4 fixed w-full top-0 z-50">
    <div className="container mx-auto flex justify-between items-center px-4">
        <div className="text-2xl font-bold">Health Systems Science Portfolio</div>
        <ul className="flex space-x-6">
        <li>
            <a href="#home" className="hover:text-gray-400">Home</a>
        </li>
        <li>
            <a href="#hss" className="hover:text-gray-400">Health Systems Science</a>
        </li>
        <li>
            <a href="#about" className="hover:text-gray-400">About Me</a>
        </li>
        <li>
            <a href="#evidence" className="hover:text-gray-400">Evidence of Learning</a>
        </li>
        <li>
            <a href="#reflections" className="hover:text-gray-400">Weekly Reflections</a>
        </li>
        <li>
            <a href="#journal" className="hover:text-gray-400">Writing Journal</a>
        </li>
        </ul>
    </div>
    </nav>
  );
};
export default Nav;