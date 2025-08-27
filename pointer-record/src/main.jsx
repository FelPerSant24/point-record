import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './index.css'
import Home from "../src/pages/home"
import Reports from './pages/reports'
import Layout from './components/Layout'
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout><Home/></Layout>} />
        <Route path="reports" element={<Layout><Reports/></Layout>}/>
      </Routes>
    </BrowserRouter>
    <ToastContainer />
  </StrictMode>
)
