import React, { useEffect } from 'react'
import './home.css'
import { AppBar } from '@mui/material'
import MyAppBar from '../app-bar'

export const HomePage = () => {
  useEffect(() => {
    const handleScroll = () => {
      if (typeof window !== 'undefined') {
        document.body.style.cssText = `--scrollTop: ${window.scrollY}px`
      }
    }

    if (typeof window !== 'undefined') {
      window.addEventListener('scroll', handleScroll)
    }

    return () => {
      if (typeof window !== 'undefined') {
        window.removeEventListener('scroll', handleScroll)
      }
    }
  }, [])
  return (
    <>
      <MyAppBar />
      <header className="header">
        <div className="layers">
          <div className="layer__header">
            <div className="layer__title">im eric</div>
          </div>
          <img className="layer layers__base" src="./../images/fon-back.png" />
          <img
            className="layer layers__base-2"
            src="./../images/fon-back-2.png"
          />
          <img
            className="layer layers__base-3"
            src="./../images/fon-back-3.png"
          />
          <img
            className="layer layers__front "
            src="./../images/fon-back-4.png"
          />
        </div>
      </header>

      <section className="main">uuu</section>
    </>
  )
}
