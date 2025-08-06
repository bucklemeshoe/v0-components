'use client'

import TournamentPlayerCard from '../../../components/TournamentPlayerCard'

export default function TournamentCardPage() {
  return (
    <div>
      <TournamentPlayerCard 
        playerName="Pieter"
        clubName="Epicentre"
        playerId="56d7f243...0be9f5e34c11"
        profileImageUrl="/placeholder-user.jpg"
      />
    </div>
  )
}
