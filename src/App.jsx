import { useState } from 'react'
import './App.css'
import { Routes, Route } from "react-router-dom";

import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";

import theme from "assets/theme";
import Navigation from 'components/layout/Navigation'
import Footer from './components/sections/Footer'
import MKBox from "components/MKBox";
import Landing from 'pages/Landing';
import Contact from 'pages/Contact';
import Cookies from 'pages/Cookies';
import { SwapModalProvider } from "contexts/SwapModalContext";
import Privacy from 'pages/Privacy';
import Disclaimer from 'pages/Disclaimer';
import Terms from 'pages/Terms';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <SwapModalProvider>
          <Navigation />
          <Routes>
            <Route path="/" element={<Landing />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/cookies" element={<Cookies />} />
            <Route path="/privacy" element={<Privacy />} />
            <Route path="/disclaimer" element={<Disclaimer />} />
            <Route path="/terms" element={<Terms />} />
          </Routes>
          <MKBox px={1}>
            <Footer />
          </MKBox>
        </SwapModalProvider>
      </ThemeProvider>
    </>
  )
}

export default App
