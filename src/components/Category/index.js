import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Navbar from '../Navbar';
import './index.css';

import deposit from '../../Images/deposit.png'; 
import withdraw from '../../Images/withdraw.png';
import transaction from '../../Images/transaction.png'; 
import refer from '../../Images/refer.png'; 
import helpline from '../../Images/helpline.png'; 
import task from '../../Images/task.png';

const App = () => {
  const [isHelplineHovered, setIsHelplineHovered] = useState(false);

 
  const serviceIcons = [
    { path: '/home', icon: task, alt: 'Task Icon' },
    { path: '/deposit', icon: deposit, alt: 'Deposit Icon' },
    { path: '/withdraw', icon: withdraw, alt: 'Withdraw Icon' },
    { path: '/transaction', icon: transaction, alt: 'Transaction Icon' },
    { path: '/referral', icon: refer, alt: 'Referral Icon' },
  ];

  return (
    <Router>
      <div className="App">
        {/* Helpline image container with hover effect */}
        <div
          className={`image-container ${isHelplineHovered ? 'colored' : 'normal'}`}
          onMouseEnter={() => setIsHelplineHovered(true)}
          onMouseLeave={() => setIsHelplineHovered(false)}
        >
          <img src={helpline} alt="Helpline" />
        </div>

        {/* Service icons */}
        <div className="service-icons">
          {serviceIcons.map(({ path, icon, alt }) => (
            <Link key={path} to={path}>
              <img src={icon} alt={alt} onError={(e) => e.target.src = 'https://via.placeholder.com/150'} />
            </Link>
          ))}
        </div>

        {/* Routes for different pages */}
        <Routes>
          {['/home', '/deposit', '/withdraw', '/transaction', '/referral', '/'].map((path) => (
            <Route key={path} path={path} element={<Navbar />} />
          ))}
        </Routes>
      </div>
    </Router>
  );
};

export default App;
// import React, { useState, useEffect } from 'react';

// const ColorChangingImage = () => {
//   const [hue, setHue] = useState(0);

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setHue((prevHue) => (prevHue + 1) % 360);
//     }, 50);

//     return () => clearInterval(interval);
//   }, []);

//   return (
//     <div className="relative w-full max-w-md mx-auto">
//       <div 
//         className="absolute inset-0 rounded-lg"
//         style={{
//           backgroundColor: `hsl(${hue}, 100%, 50%)`,
//           mixBlendMode: 'color',
//         }}
//       />
//       <img
//         src="/api/placeholder/400/300"
//         alt="Colorful items"
//         className="w-full h-auto rounded-lg"
//       />
//       <div className="absolute top-2 left-2 bg-cyan-200 text-black px-2 py-1 rounded">
//         Tk. 50 Off Voucher
//       </div>
//       <div className="absolute top-2 right-2 bg-purple-700 text-white px-2 py-1 rounded">
//         Tk. 235
//       </div>
//       <button className="absolute bottom-2 left-2 bg-red-500 text-white px-4 py-2 rounded">
//         Shop Now
//       </button>
//     </div>
//   );
// };

// export default ColorChangingImage;