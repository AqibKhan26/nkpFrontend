import { useState } from 'react'
import './App.css'

import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";

// Material Kit 2 PRO React themes
import theme from "assets/theme";
import Navigation from 'components/layout/Navigation'
import Hero from './components/sections/Hero'
import Footer from './components/sections/Footer'
import MKBox from "components/MKBox";
import Landing from 'components/sections/Landing';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Navigation />
        <Landing />
        <MKBox px={1}>
          <Footer />
        </MKBox>
      </ThemeProvider>
    </>
  )
}

export default App
