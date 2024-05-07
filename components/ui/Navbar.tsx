import Link from 'next/link';
import React from 'react';

const Navbar = () => {
  return(
    <div className="navbar absolute top-0 right-[90px] p-4 bg-transparent text-white space-x-20">
       <Link href="" className="mr-4 hover:bg-gradient-to-r from-blue-500 to-indigo-500 p-2 rounded-lg duration-500">Home</Link>
      <Link href="#" className="mr-4 hover:bg-gradient-to-r from-blue-500 to-indigo-500 p-2 rounded-lg duration-500">About</Link>
      <Link href="#" className="mr-4 hover:bg-gradient-to-r from-blue-500 to-indigo-500 p-2 rounded-lg duration-500">Contact</Link>
    </div>
  );
}
export default Navbar;