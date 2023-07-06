import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { HomePage } from './components/home'

function App() {
  return (
    <div className="App">
      <>
        <Routes>
          <Route index element={<HomePage />} />
        </Routes>
      </>
    </div>
  )
}

export default App
