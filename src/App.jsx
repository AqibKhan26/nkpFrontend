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
import ChacoVivo from 'pages/ChacoVivo';
import SFMWastePlant from 'pages/SFMWastePlant';
import Whitepaper from 'pages/Whitepaper';
import NotFound404 from 'pages/NotFound404';

function App() {

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
            <Route path="/chaco-vivo" element={<ChacoVivo />} />
            <Route path="/sfm-waste" element={<SFMWastePlant />} />
            <Route path="/whitepaper" element={<Whitepaper/>} />
            <Route path="/404" element={<NotFound404/>} />
            <Route path="*" element={<NotFound404/>} />
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
