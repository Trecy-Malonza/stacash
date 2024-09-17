import React from 'react';
import { Link, useParams } from 'react-router-dom';
import './index.css';

const Navbar = () => {
  // Get the "page" parameter from the URL (if it exists)
  const { page } = useParams(); 

  // Format the page title based on the current URL parameter
  const pageTitle = page ? page.charAt(0).toUpperCase() + page.slice(1) : 'Home';

  return (
    <div>
      <nav>
        <ul>
          <li><Link to="/home">Home</Link></li>
          <li><Link to="/deposit">Deposit</Link></li>
          <li><Link to="/withdraw">Withdraw</Link></li>
          <li><Link to="/daily-work">Daily Work</Link></li>
          <li><Link to="/transaction">Transaction</Link></li>
          <li><Link to="/referral">Referral</Link></li>
          <li><Link to="/account">Account</Link></li>
          <li><Link to="/logout">Logout</Link></li>
        </ul>
      </nav>

      {/* Display the formatted page title */}
      <h2>{pageTitle}</h2>
    </div>
  );
};

export default Navbar;
