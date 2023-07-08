import React from 'react'
import './PassCard.css'

interface PassCardProps {
  avatar: string
  corporationName: string
  fullName: string
  nickname: string
  serialNumber: string
  qrCode: string
}

const PassCard: React.FC<PassCardProps> = ({
  avatar,
  corporationName,
  fullName,
  nickname,
  serialNumber,
  qrCode,
}) => {
  return (
    <div className="pass-card">
      <div className="pass-card-header"></div>
      <div className="pass-card-body">
        <div className="left-column">
          <img className="avatar" src={avatar} alt="Avatar" />
          <p className="serial-number">{serialNumber}</p>
        </div>
        <div className="right-column">
          <img className="qr-code" src={qrCode} alt="qrCode" />
          <h2 className="corporation-name">{corporationName}</h2>
          <div className="corporation-line" />
          <h1 className="full-name">{fullName}</h1>
          <p className="nickname">"{nickname}"</p>
        </div>
      </div>
    </div>
  )
}

export default PassCard
