import React from 'react'
import { Route, Routes} from 'react-router-dom';
import { Box } from '@mui/material'

import "./App.css"
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import ExcerciseDetail from './pages/ExcerciseDetail';

const App = () => {
  return (
    <Box width="400px" sx={{ width: { xl: '1488px'}}} m="auto">
        <Navbar />
        <Routes>
            <Route path='/' element={<Home />}/>
            <Route path='/exercise/:id' element={<ExcerciseDetail />}/>
        </Routes>
        <Footer />
    </Box>
  )
}

export default App