import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import LandingPage from './pages/LandingPage'
import Dashboard from './pages/Dashboard'
import FeaturesPage from './pages/FeaturesPage'
import HowItWorksPage from './pages/HowItWorksPage'
import SecurityPage from './pages/SecurityPage'

const App = () => {
  return (
    <div>
      <Router>
        <Routes>
          <Route path='/'  element={<LandingPage />} />
          <Route path='*'  element={<LandingPage />} />
          <Route path='/dashboard' element={<Dashboard />} />
          <Route path='/features' element={<FeaturesPage />} />
          <Route path='/how-it-works' element={<HowItWorksPage />} />
          <Route path='/security' element={<SecurityPage />} />
        </Routes>
      </Router>
    </div>
  )
}

export default App

