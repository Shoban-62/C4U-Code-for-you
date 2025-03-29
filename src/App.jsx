import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import HomePage from '/src/HomePage/homepage'
import Tests from '/src/Tests/Tests'
import './App.css'

function App() {
  return (
    <div>
      <Router>
        <div>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/tests" element={<Tests />} />
          </Routes>
        </div>
      </Router>
    </div>
  )
}

export default App
