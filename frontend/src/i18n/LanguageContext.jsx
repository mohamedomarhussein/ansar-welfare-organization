import { createContext, useContext, useEffect, useState } from 'react'
import { translations } from './translations'

const LanguageContext = createContext(null)

const supportedLanguages = ['en', 'sw', 'so', 'ar']

export function LanguageProvider({ children }) {
  const [language, setLanguage] = useState(() => {
    try {
      const savedLanguage = localStorage.getItem('ansar-language')
      return supportedLanguages.includes(savedLanguage) ? savedLanguage : 'en'
    } catch {
      return 'en'
    }
  })

  useEffect(() => {
    const isArabic = language === 'ar'

    document.documentElement.lang = language
    document.documentElement.dir = isArabic ? 'rtl' : 'ltr'

    try {
      localStorage.setItem('ansar-language', language)
    } catch {
      // The selected language still works if browser storage is unavailable.
    }
  }, [language])

  function changeLanguage(newLanguage) {
    if (supportedLanguages.includes(newLanguage)) {
      setLanguage(newLanguage)
    }
  }

  function t(key) {
    return translations[language]?.[key] ?? translations.en[key] ?? key
  }

  return (
    <LanguageContext.Provider
      value={{
        language,
        changeLanguage,
        t,
        supportedLanguages,
      }}
    >
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  const context = useContext(LanguageContext)

  if (!context) {
    throw new Error('useLanguage must be used inside LanguageProvider')
  }

  return context
}
