// import React from 'react';
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import Navbar from './components/Navbar';
// import category from './components/category';


// const App = () => {
//   return (
//     <Router>
//       <Routes>
//         {/* Define routes */}
//         <Route path="/" element={<Navbar />} />
//         <Route path="/:page" element={<Navbar />} />
//         <Route path="/" element={<category />} />
//         <Route path="/:page" element={<category />} />
//       </Routes>
//     </Router>
//   );
// };

// export default App;
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Category from './components/Category'; // Capitalized 'Category'

const App = () => {
  return (
    <Router>
      <Routes>
        {/* Navbar routes */}
        <Route path="/" element={<Navbar />} />
        <Route path="/:page" element={<Navbar />} />

        {/* Category routes */}
        <Route path="/category/:categoryName" element={<Category />} />
        <Route path="/category/:categoryName/:page" element={<Category />} />
      </Routes>
    </Router>
  );
};

export default App;
