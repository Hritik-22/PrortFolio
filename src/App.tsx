import React from 'react'
// import { useEffect } from 'react'
import { Footer } from './components/Footer/Footer'
import { Header } from './components/Header/Header'
import { Main } from './components/Main/Main'
import { GlobalStyle } from './styles/global'
import { Analytics } from "@vercel/analytics/react"
import { ToastContainer } from "react-toastify";

import 'react-toastify/dist/ReactToastify.css'
function App() {
  return (
    <>
      <ToastContainer position="bottom-center" />
      <GlobalStyle />
      <Header />
      <Main />
      <Analytics />
      <Footer />
    </>
  )
}

export default App
