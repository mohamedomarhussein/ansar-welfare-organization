import { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import { ArrowUp } from 'lucide-react'

export default function ScrollToTop() {
  const [visible, setVisible] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const updateVisibility = () => {
      setVisible(window.scrollY > 300)
    }

    updateVisibility()
    window.addEventListener('scroll', updateVisibility, { passive: true })

    return () => {
      window.removeEventListener('scroll', updateVisibility)
    }
  }, [])

  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth',
    })
  }, [location.pathname])

  if (!visible) return null

  return (
    <button
      type="button"
      className="scroll-to-top"
      aria-label="Scroll to top"
      title="Back to top"
      onClick={() => {
        window.scrollTo({
          top: 0,
          left: 0,
          behavior: 'smooth',
        })
      }}
    >
      <ArrowUp size={23} strokeWidth={2.5} />
    </button>
  )
}
