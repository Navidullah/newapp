import React from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import Footer from "./components/Footer";
import MainContent from "./components/MainContent";
import SignIn from "./pages/SignIn"; // Example SignIn Page
import SignUp from "./pages/SignUp"; // Example SignUp Page
import About from "./pages/About"; // Example About Page
import Contact from "./pages/Contact"; // Example Contact Page

const App = () => {
  const location = useLocation(); // Use location hook to get current route

  // List of routes where you don't want the sidebar
  const noSidebarRoutes = ["/signin", "/signup", "/about", "/contact"];

  // Check if the current route is in the noSidebarRoutes list
  const showSidebar = !noSidebarRoutes.includes(location.pathname);

  return (
    <div className="min-h-screen flex flex-col">
      {/* Header Section */}
      <Header />

      {/* Main Content Section */}
      <div className="flex flex-1">
        {/* Sidebar (conditionally rendered) */}
        {showSidebar && <Sidebar />}

        {/* Main Content */}
        <main className="flex-1 p-4 bg-gray-100">
          <Routes>
            <Route path="/" element={<MainContent />} />
            <Route path="/signin" element={<SignIn />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
      </div>

      {/* Footer Section */}
      <Footer />
    </div>
  );
};

export default App;
