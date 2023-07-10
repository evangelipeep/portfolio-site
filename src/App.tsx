import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { HomePage } from './components/home'
import PassCard from './components/card'
import { Layout } from './components/layout'

function App() {
  return (
    <div className="App">
      <>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<HomePage />} />
          </Route>
        </Routes>
      </>
    </div>
  )
}

export default App
