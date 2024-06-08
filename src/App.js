import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Pages/HomePage.jsx';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
    </Routes>
  );
}

export default App;



// import React from 'react';
// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import Home from './Pages/HomePage.jsx';
// import Layout from './Layout';

// function App() {
//   return (
//     <Router>
//       <Layout>
//         <Routes>
//           <Route path="/" element={<Home />} />
//           {/* Add more routes here as needed */}
//         </Routes>
//       </Layout>
//     </Router>
//   );
// }

// export default App;
// Layout.jsx
// import React from 'react';
// import Header from './components/Header';
// import Footer from './components/Footer';

// const Layout = ({ children }) => {
//   return (
//     <div>
//       <Header />
//       <main>{children}</main>
//       <Footer />
//     </div>
//   );
// };

// export default Layout;
