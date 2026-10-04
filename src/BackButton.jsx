import { useLocation, useNavigate } from 'react-router-dom'
import { playSelectSound } from './utils/audio.js'

export default function BackButton() {
  const location = useLocation()
  const navigate = useNavigate()

  if (location.pathname === '/') return null

  return (
    <button
      className="back-button"
      type="button"
      aria-label="Back to menu"
      onClick={(event) => {
        playSelectSound()
        navigate('/')
        event.currentTarget.blur()
      }}
    >
      BACK
    </button>
  )
}