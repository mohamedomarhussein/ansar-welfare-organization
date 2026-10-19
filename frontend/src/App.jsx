import { BrowserRouter, Route, Routes, Link } from 'react-router-dom'

import Navbar from './components/Navbar'
import Footer from './components/Footer'

import Home from './pages/Home'
import About from './pages/About'
import Services from './pages/Services'
import Donations from './pages/Donations'
import IslamicLectures from './pages/IslamicLectures'
import Contact from './pages/Contact'
import Terms from './pages/Terms'
import Privacy from './pages/Privacy'

import './App.css'

function NotFound() {
  return (
    <main className="not-found container">
      <span className="section-label">404 — Page not found</span>

      <h1>We couldn't find that page.</h1>

      <p>
        The page may have moved, or the address may be incorrect.
        Please return to the homepage and continue exploring our work.
      </p>

      <Link to="/" className="button button-primary">
        Return Home
      </Link>
    </main>
  )
}

export default function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <div className="app-shell" style={{ paddingTop: '86px' }}>
        <main className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/donations" element={<Donations />} />
            <Route path="/lectures" element={<IslamicLectures />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/terms" element={<Terms />} />
            <Route path="/privacy" element={<Privacy />} />

            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>

        <Footer />
      </div>
    </BrowserRouter>
  )
}
