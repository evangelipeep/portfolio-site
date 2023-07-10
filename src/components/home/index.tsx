import React, { useEffect } from 'react'
import './home.css'
import PassCard from '../card'

export const HomePage = () => {
  const avatarUrl = './../images/ava-portfolio.png'
  const corporationName = 'Frontend-developer'
  const fullName = 'Eric Sharipov'
  const nickname = 'evangelipeep'
  const serialNumber = '0002-225-09'
  const qrCode = './../images/qr.png'

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
      <header className="header">
        <div className="layers">
          <div className="layer__header">
            <PassCard
              avatar={avatarUrl}
              corporationName={corporationName}
              fullName={fullName}
              nickname={nickname}
              serialNumber={serialNumber}
              qrCode={qrCode}
            />
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
