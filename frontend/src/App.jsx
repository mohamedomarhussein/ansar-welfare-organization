import { BrowserRouter, Route, Routes, Link } from 'react-router-dom'

import Navbar from './components/Navbar'
import Footer from './components/Footer'
import ScrollToTop from './components/ScrollToTop'

import Home from './pages/Home'
import About from './pages/About'
import Services from './pages/Services'
import Donations from './pages/Donations'
import IslamicLectures from './pages/IslamicLectures'
import Contact from './pages/Contact'
import Terms from './pages/Terms'
import Privacy from './pages/Privacy'
import AdminLogin from './pages/admin/AdminLogin'
import AdminDashboard from './pages/admin/AdminDashboard'

import { LanguageProvider, useLanguage } from './i18n/LanguageContext'

import './App.css'

const notFoundTranslations = {
  en: {
    label: '404 — Page not found',
    title: "We couldn't find that page.",
    description:
      'The page may have moved, or the address may be incorrect. Please return to the homepage and continue exploring our work.',
    button: 'Return Home',
  },
  sw: {
    label: '404 — Ukurasa haujapatikana',
    title: 'Hatukuweza kupata ukurasa huo.',
    description:
      'Huenda ukurasa umehamishwa au anwani si sahihi. Tafadhali rudi kwenye ukurasa wa mwanzo ili uendelee kujifunza kuhusu kazi yetu.',
    button: 'Rudi Mwanzo',
  },
  so: {
    label: '404 — Bogga lama helin',
    title: 'Ma aanan heli karin boggaas.',
    description:
      'Bogga waxaa laga yaabaa in la raray ama cinwaanku khaldan yahay. Fadlan ku noqo bogga hore si aad u sii ogaato hawlaheenna.',
    button: 'Ku Noqo Bogga Hore',
  },
  ar: {
    label: '404 — الصفحة غير موجودة',
    title: 'لم نتمكن من العثور على هذه الصفحة.',
    description:
      'ربما تم نقل الصفحة أو أن العنوان غير صحيح. يرجى العودة إلى الصفحة الرئيسية لمواصلة التعرف على أعمالنا.',
    button: 'العودة إلى الرئيسية',
  },
}

function NotFound() {
  const { language } = useLanguage()
  const content = notFoundTranslations[language] || notFoundTranslations.en

  return (
    <main className="not-found container">
      <span className="section-label">{content.label}</span>

      <h1>{content.title}</h1>

      <p>{content.description}</p>

      <Link to="/" className="button button-primary">
        {content.button}
      </Link>
    </main>
  )
}

function PublicWebsite() {
  return (
    <LanguageProvider>
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
        <ScrollToTop />
      </div>
    </LanguageProvider>
  )
}

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/admin/login" element={<AdminLogin />} />
        <Route path="/admin/dashboard" element={<AdminDashboard />} />
        <Route path="/*" element={<PublicWebsite />} />
      </Routes>
    </BrowserRouter>
  )
}
