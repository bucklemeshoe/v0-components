import type { Meta, StoryObj } from '@storybook/react'
import TournamentPlayerCard from '../components/TournamentPlayerCard'

const meta: Meta<typeof TournamentPlayerCard> = {
  title: 'Rematch/TournamentPlayerCard',
  component: TournamentPlayerCard,
  parameters: {
    layout: 'centered',
    backgrounds: {
      default: 'padel-court',
    },
  },
  tags: ['autodocs'],
  argTypes: {
    playerName: {
      control: 'text',
      description: 'The name of the player',
    },
    clubName: {
      control: 'text',
      description: 'The club or location',
    },
    playerId: {
      control: 'text',
      description: 'Unique player identifier',
    },
    profileImageUrl: {
      control: 'text',
      description: 'URL to player profile image',
    },
  },
}

export default meta
type Story = StoryObj<typeof meta>

// Default story
export const Default: Story = {
  args: {
    playerName: 'Pieter',
    clubName: 'Epicentre',
    playerId: '56d7f243...0be9f5e34c11',
    profileImageUrl: '/images/padel-court.png',
  },
}

// Different player
export const AlternativePlayer: Story = {
  args: {
    playerName: 'Maria',
    clubName: 'Padel Pro Club',
    playerId: 'a1b2c3d4...x9y8z7w6',
    profileImageUrl: '/placeholder-user.jpg',
  },
}

// Long name
export const LongPlayerName: Story = {
  args: {
    playerName: 'Juan Carlos Rodriguez',
    clubName: 'Club Deportivo Internacional',
    playerId: 'def456...ghi789',
    profileImageUrl: '/placeholder-user.jpg',
  },
}

// No profile image
export const NoProfileImage: Story = {
  args: {
    playerName: 'Alex',
    clubName: 'Local Club',
    playerId: 'xyz123...abc789',
    profileImageUrl: '',
  },
}

// Tournament context
export const TournamentReady: Story = {
  args: {
    playerName: 'Sofia',
    clubName: 'Champions Padel',
    playerId: 'tour001...champ99',
    profileImageUrl: '/placeholder-user.jpg',
  },
  parameters: {
    docs: {
      description: {
        story: 'Player card ready for tournament use with QR code for verification.',
      },
    },
  },
}
