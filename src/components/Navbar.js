import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
    return (
        <nav className="bg-gray-800 p-4 text-white">
            <ul className="flex space-x-4 justify-center">
                <li><Link to="/" className="hover:text-gray-300">Avaleht</Link></li>
                <li><Link to="/prices" className="hover:text-gray-300">Hinnakiri</Link></li>
                <li><Link to="/bookings" className="hover:text-gray-300">Broneerimine</Link></li>
                <li><Link to="/works" className="hover:text-gray-300">Tehtud tööd</Link></li>
            </ul>
        </nav>
    );
}

export default Navbar;
