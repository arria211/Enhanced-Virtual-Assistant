import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Import semua halaman
import Home from './pages/Home';
import Login from './pages/Login';
import Signup from './pages/Signup';
import ThankYou from './pages/ThankYou';
import EnterCode from './pages/EnterCode';
import ForgotPassword from './pages/ForgotPassword';
import LoginWithNewPassword from './pages/LoginWithNewPassword';
import DiscussWithEva from './pages/DiscussWithEva';
import DescribeCode from './pages/DescribeCode';
import GenerateToNLP from './pages/GenerateToNLP';
import GenerateToPseudocode from './pages/GenerateToPseudocode';
import GenerateToCode from './pages/GenerateToCode';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/thankyou" element={<ThankYou />} />
        <Route path="/entercode" element={<EnterCode />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/login-with-new-password" element={<LoginWithNewPassword />} />
        <Route path="/discuss-with-eva" element={<DiscussWithEva />} />
        <Route path="/describe-code" element={<DescribeCode />} />
        <Route path="/generate-to-nlp" element={<GenerateToNLP />} />
        <Route path="/generate-to-pseudocode" element={<GenerateToPseudocode />} />
        <Route path="/generate-to-code" element={<GenerateToCode />} />
      </Routes>
    </Router>
  );
}

export default App;