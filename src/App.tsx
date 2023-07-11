import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { HomePage } from './components/home'
import PassCard from './components/card'
import { Layout } from './components/layout'
import MyWorksPage from './components/my-works-page'
import TelegramBotPage from './components/bot'

function App() {
  return (
    <div className="App">
      <>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<HomePage />} />
            <Route path="/my-works-page" element={<MyWorksPage />} />
            <Route path="/bot" element={<TelegramBotPage />} />
          </Route>
        </Routes>
      </>
    </div>
  )
}

export default App
