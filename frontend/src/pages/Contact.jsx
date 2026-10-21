import { useState } from 'react'
import { Mail, MapPin, Phone, Clock, Send } from 'lucide-react'
import { useLanguage } from '../i18n/LanguageContext'

const API_URL = 'http://127.0.0.1:5000/api'

const translations = {
  en: {
    eyebrow: 'We would love to hear from you',
    title: 'Contact Us',
    intro: 'Reach out with a question, an idea, or a request for information.',
    getInTouch: 'Get in touch',
    conversation: "Let's start a conversation",
    contactIntro: 'Use the contact details below to reach Ansar Welfare Organization.',
    phone: 'Phone',
    email: 'Email',
    location: 'Location',
    address: 'Iftin, opposite Sada Mosque',
    officeHours: 'Office hours',
    availability: 'Please contact us to confirm availability.',
    sendTitle: 'Send us a message',
    sendIntro: 'Complete the form below. Your message will be sent directly to Ansar Welfare Organization.',
    name: 'Your name',
    namePlaceholder: 'Enter your name',
    emailPlaceholder: 'you@example.com',
    subject: 'Subject',
    subjectPlaceholder: 'How can we help?',
    message: 'Message',
    messagePlaceholder: 'Write your message...',
    sending: 'Sending...',
    send: 'Send Message',
    security: "Your message is sent securely through our website's email service.",
    success: 'Your message has been sent successfully. Thank you for contacting us.',
    sendError: 'We could not send your message. Please try again.',
    connectionError: 'We could not connect to the server. Please try again later.',
  },
  sw: {
    eyebrow: 'Tungependa kusikia kutoka kwako',
    title: 'Wasiliana Nasi',
    intro: 'Wasiliana nasi ukiwa na swali, wazo au ombi la taarifa.',
    getInTouch: 'Wasiliana nasi',
    conversation: 'Tuanze mazungumzo',
    contactIntro: 'Tumia maelezo ya mawasiliano hapa chini kuwasiliana na Ansar Welfare Organization.',
    phone: 'Simu',
    email: 'Barua pepe',
    location: 'Mahali',
    address: 'Iftin, mkabala na Msikiti wa Sada',
    officeHours: 'Saa za ofisi',
    availability: 'Tafadhali wasiliana nasi kuthibitisha upatikanaji wetu.',
    sendTitle: 'Tutumie ujumbe',
    sendIntro: 'Jaza fomu iliyo hapa chini. Ujumbe wako utatumwa moja kwa moja kwa Ansar Welfare Organization.',
    name: 'Jina lako',
    namePlaceholder: 'Andika jina lako',
    emailPlaceholder: 'wewe@example.com',
    subject: 'Mada',
    subjectPlaceholder: 'Tunawezaje kukusaidia?',
    message: 'Ujumbe',
    messagePlaceholder: 'Andika ujumbe wako...',
    sending: 'Inatuma...',
    send: 'Tuma Ujumbe',
    security: 'Ujumbe wako unatumiwa kwa usalama kupitia huduma ya barua pepe ya tovuti yetu.',
    success: 'Ujumbe wako umetumwa kwa mafanikio. Asante kwa kuwasiliana nasi.',
    sendError: 'Hatukuweza kutuma ujumbe wako. Tafadhali jaribu tena.',
    connectionError: 'Hatukuweza kuunganishwa na seva. Tafadhali jaribu tena baadaye.',
  },
  so: {
    eyebrow: 'Waxaan jeclaan lahayn inaan kaa maqalno',
    title: 'Nala Soo Xiriir',
    intro: 'Nala soo xiriir haddii aad qabto su’aal, fikrad ama aad u baahan tahay macluumaad.',
    getInTouch: 'Nala soo xiriir',
    conversation: 'Aan wada sheekaysanno',
    contactIntro: 'Isticmaal faahfaahinta xiriirka ee hoose si aad ula xiriirto Ansar Welfare Organization.',
    phone: 'Telefoon',
    email: 'Iimayl',
    location: 'Goobta',
    address: 'Iftin, kasoo horjeedka Masjidka Sada',
    officeHours: 'Saacadaha xafiiska',
    availability: 'Fadlan nala soo xiriir si aad u xaqiijiso inaan diyaar nahay.',
    sendTitle: 'Fariin noo soo dir',
    sendIntro: 'Buuxi foomka hoose. Fariintaadu si toos ah ayay ugu socon doontaa Ansar Welfare Organization.',
    name: 'Magacaaga',
    namePlaceholder: 'Geli magacaaga',
    emailPlaceholder: 'adiga@example.com',
    subject: 'Mawduuca',
    subjectPlaceholder: 'Sideen kuu caawin karnaa?',
    message: 'Fariinta',
    messagePlaceholder: 'Qor fariintaada...',
    sending: 'Waa la dirayaa...',
    send: 'Dir Fariinta',
    security: 'Fariintaada si ammaan ah ayaa loogu diraa adeegga iimaylka ee mareegteena.',
    success: 'Fariintaada si guul leh ayaa loo diray. Waad ku mahadsan tahay inaad nala soo xiriirtay.',
    sendError: 'Ma awoodin inaan dirno fariintaada. Fadlan mar kale isku day.',
    connectionError: 'Ma awoodin inaan ku xirno server-ka. Fadlan mar dambe isku day.',
  },
  ar: {
    eyebrow: 'يسعدنا التواصل معك',
    title: 'اتصل بنا',
    intro: 'تواصل معنا إذا كان لديك سؤال أو فكرة أو طلب للحصول على معلومات.',
    getInTouch: 'تواصل معنا',
    conversation: 'لنبدأ الحوار',
    contactIntro: 'استخدم بيانات الاتصال أدناه للتواصل مع منظمة أنصار للرعاية الاجتماعية.',
    phone: 'الهاتف',
    email: 'البريد الإلكتروني',
    location: 'الموقع',
    address: 'إفتين، مقابل مسجد صدا',
    officeHours: 'ساعات العمل',
    availability: 'يرجى التواصل معنا للتأكد من توفرنا.',
    sendTitle: 'أرسل لنا رسالة',
    sendIntro: 'املأ النموذج أدناه. ستُرسل رسالتك مباشرة إلى منظمة أنصار للرعاية الاجتماعية.',
    name: 'اسمك',
    namePlaceholder: 'أدخل اسمك',
    emailPlaceholder: 'you@example.com',
    subject: 'الموضوع',
    subjectPlaceholder: 'كيف يمكننا مساعدتك؟',
    message: 'الرسالة',
    messagePlaceholder: 'اكتب رسالتك...',
    sending: 'جارٍ الإرسال...',
    send: 'إرسال الرسالة',
    security: 'تُرسل رسالتك بأمان عبر خدمة البريد الإلكتروني الخاصة بموقعنا.',
    success: 'تم إرسال رسالتك بنجاح. شكرًا لتواصلك معنا.',
    sendError: 'تعذر إرسال رسالتك. يرجى المحاولة مرة أخرى.',
    connectionError: 'تعذر الاتصال بالخادم. يرجى المحاولة لاحقًا.',
  },
}

export default function Contact() {
  const { language } = useLanguage()
  const t = translations[language] || translations.en

  const [form, setForm] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  })

  const [status, setStatus] = useState({
    type: '',
    message: '',
  })

  const [sending, setSending] = useState(false)

  function handleChange(event) {
    const { name, value } = event.target

    setForm((previous) => ({
      ...previous,
      [name]: value,
    }))

    if (status.message) {
      setStatus({ type: '', message: '' })
    }
  }

  async function handleSubmit(event) {
    event.preventDefault()
    setSending(true)
    setStatus({ type: '', message: '' })

    try {
      const response = await fetch(`${API_URL}/contact`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(form),
      })

      const result = await response.json()

      if (!response.ok || !result.success) {
        throw new Error('CONTACT_SEND_FAILED')
      }

      setStatus({
        type: 'success',
        message: t.success,
      })

      setForm({
        name: '',
        email: '',
        subject: '',
        message: '',
      })
    } catch (error) {
      setStatus({
        type: 'error',
        message:
          error.message === 'Failed to fetch'
            ? t.connectionError
            : t.sendError,
      })
    } finally {
      setSending(false)
    }
  }

  return (
    <>
      <section className="page-banner">
        <div className="container">
          <span className="eyebrow">{t.eyebrow}</span>
          <h1>{t.title}</h1>
          <p>{t.intro}</p>
        </div>
      </section>

      <section className="section">
        <div className="container contact-grid">
          <div className="contact-information">
            <span className="section-label">{t.getInTouch}</span>
            <h2>{t.conversation}</h2>
            <p>{t.contactIntro}</p>

            <div className="contact-card">
              <span className="contact-icon"><Phone size={22} /></span>
              <div>
                <h3>{t.phone}</h3>
                <a href="tel:0721133156">0721 133 156</a>
                <br />
                <a href="tel:0723003071">0723 003 071</a>
              </div>
            </div>

            <div className="contact-card">
              <span className="contact-icon"><Mail size={22} /></span>
              <div>
                <h3>{t.email}</h3>
                <a href="mailto:ansarwelfareorganization7@gmail.com">
                  ansarwelfareorganization7@gmail.com
                </a>
              </div>
            </div>

            <div className="contact-card">
              <span className="contact-icon"><MapPin size={22} /></span>
              <div>
                <h3>{t.location}</h3>
                <p>{t.address}</p>
              </div>
            </div>

            <div className="contact-card">
              <span className="contact-icon"><Clock size={22} /></span>
              <div>
                <h3>{t.officeHours}</h3>
                <p>{t.availability}</p>
              </div>
            </div>
          </div>

          <div className="contact-form-panel">
            <h2>{t.sendTitle}</h2>
            <p>{t.sendIntro}</p>

            <form onSubmit={handleSubmit}>
              <label htmlFor="contact-name">{t.name}</label>
              <input
                id="contact-name"
                name="name"
                type="text"
                placeholder={t.namePlaceholder}
                autoComplete="name"
                maxLength={120}
                value={form.name}
                onChange={handleChange}
                required
              />

              <label htmlFor="contact-email">{t.email}</label>
              <input
                id="contact-email"
                name="email"
                type="email"
                placeholder={t.emailPlaceholder}
                autoComplete="email"
                maxLength={254}
                value={form.email}
                onChange={handleChange}
                required
              />

              <label htmlFor="contact-subject">{t.subject}</label>
              <input
                id="contact-subject"
                name="subject"
                type="text"
                placeholder={t.subjectPlaceholder}
                maxLength={200}
                value={form.subject}
                onChange={handleChange}
                required
              />

              <label htmlFor="contact-message">{t.message}</label>
              <textarea
                id="contact-message"
                name="message"
                rows="5"
                placeholder={t.messagePlaceholder}
                maxLength={5000}
                value={form.message}
                onChange={handleChange}
                required
              />

              {status.message && (
                <p
                  className="form-note"
                  role="status"
                  aria-live="polite"
                  style={{
                    color: status.type === 'success' ? '#16794b' : '#b42318',
                  }}
                >
                  {status.message}
                </p>
              )}

              <button
                className="button button-primary"
                type="submit"
                disabled={sending}
              >
                {sending ? t.sending : t.send}
                <Send size={17} />
              </button>
            </form>

            <p className="form-note">{t.security}</p>
          </div>
        </div>
      </section>
    </>
  )
}
