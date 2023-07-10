import React from 'react'
import './Layout.css'
import { Outlet } from 'react-router-dom'
import MyAppBar from '../app-bar'

export const Layout = () => {
  return (
    <>
      <div className="header">
        <MyAppBar />
        <main className="main">
          <Outlet />
        </main>
      </div>
    </>
  )
}
