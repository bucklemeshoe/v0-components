import Image from "next/image"
import QRCode from 'qrcode'
import { useEffect, useState, useMemo } from 'react'

interface TournamentPlayerCardProps {
  playerName?: string
  clubName?: string
  playerId?: string
  profileImageUrl?: string
}

export default function TournamentPlayerCard({
  playerName = 'Player Name',
  clubName = 'Club Name',
  playerId = 'player-id-123',
  profileImageUrl = '/placeholder-user.jpg'
}: TournamentPlayerCardProps) {
  const [qrCodeUrl, setQrCodeUrl] = useState('')

  // Memoize the player ID to prevent unnecessary re-renders
  const stablePlayerId = useMemo(() => playerId, [playerId])

  useEffect(() => {
    let isMounted = true
    
    QRCode.toDataURL(stablePlayerId, {
      width: 96,
      margin: 1,
      color: {
        dark: '#000000',
        light: '#FFFFFF'
      }
    }).then(url => {
      if (isMounted) {
        setQrCodeUrl(url)
      }
    }).catch(err => {
      if (isMounted) {
        console.error('QR Code generation error:', err)
      }
    })

    return () => {
      isMounted = false
    }
  }, [stablePlayerId])

  return (
    <div className="flex justify-center min-h-screen bg-gray-100 p-4">
      {/* ID Card */}
      <div className="w-[382px] h-[646px] bg-white rounded-lg shadow-lg overflow-hidden relative player-card-shadow">
        {/* Lanyard hole - wider and 2px lower */}
        <div className="absolute top-6 left-1/2 transform -translate-x-1/2 w-12 h-4 bg-gray-100 rounded-sm border-2 border-gray-300 z-10"></div>

        {/* Red sidebar with repeated "OVER" text */}
        <div className="absolute left-8 top-0 bottom-0 w-6 bg-red-500 flex flex-col justify-center items-center">
          <div className="text-[#1a1a1a] text-xs font-bold transform -rotate-90 whitespace-nowrap">
            {'OVER '.repeat(25)}
          </div>
        </div>

        {/* Main content with left margin for sidebar */}
        <div className="h-full flex flex-col">
          {/* Purple header */}
          <div className="bg-gradient-to-r from-blue-500 to-purple-600 text-white pt-12 pb-6 w-full">
            <div className="ml-6 text-center px-4">
              <h1 className="text-sm font-bold tracking-wide">TOURNAMENT PLAYER</h1>
              <p className="text-xs opacity-90 mt-1">Rematch Padel</p>
            </div>
          </div>

          {/* Player profile section */}
          <div className="flex flex-col items-center py-12 px-4 flex-1 justify-center ml-6">
            {/* Profile image */}
            <div className="w-20 h-20 rounded-full overflow-hidden mb-6 border-2 border-gray-200">
              {profileImageUrl ? (
                <Image
                  src={profileImageUrl}
                  alt={`${playerName} profile`}
                  width={80}
                  height={80}
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    // Fallback to placeholder if image fails to load
                    (e.target as HTMLImageElement).src = '/placeholder-user.jpg'
                  }}
                />
              ) : (
                <div className="w-full h-full bg-gradient-to-br from-blue-400 to-blue-600 flex items-center justify-center">
                  <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>
                  </svg>
                </div>
              )}
            </div>

            {/* Player name */}
            <h2 className="text-2xl font-bold text-gray-900 mb-2">{playerName}</h2>
            
            {/* Location/Club */}
            <p className="text-gray-600 mb-8 text-sm">{clubName}</p>

            {/* QR Code */}
            <div className="bg-white border border-gray-200 rounded p-3 shadow-sm mb-6">
              <div className="w-24 h-24 bg-white flex items-center justify-center relative">
                {qrCodeUrl ? (
                  <img 
                    src={qrCodeUrl} 
                    alt="Player QR Code" 
                    className="w-full h-full transition-opacity duration-200"
                    style={{ opacity: qrCodeUrl ? 1 : 0 }}
                  />
                ) : (
                  <div className="w-full h-full bg-gray-200 flex items-center justify-center rounded">
                    <div className="w-4 h-4 border-2 border-gray-400 border-t-transparent rounded-full animate-spin"></div>
                  </div>
                )}
              </div>
              <p className="text-center text-xs text-gray-500 mt-2">Player ID</p>
            </div>

            {/* Player ID section */}
            <div className="text-center mb-6">
              <p className="text-xs text-gray-500 mb-2">PLAYER ID</p>
              <p className="text-sm font-mono text-gray-800">{playerId}</p>
            </div>

            {/* Verification text */}
            <p className="text-xs text-gray-500 text-center px-2">
              Scan QR code for player verification
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}