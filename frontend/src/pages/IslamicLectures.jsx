import { useEffect, useState } from 'react'
import {
  AlertCircle,
  BookOpen,
  CalendarDays,
  Clock,
  MapPin,
  UserRound,
  Building2,
  ArrowDown,
} from 'lucide-react'
import { useLanguage } from '../i18n/LanguageContext'

const API_URL = 'http://127.0.0.1:5000/api'

const translations = {
  en: {
    eyebrow: 'KNOWLEDGE • FAITH • COMMUNITY',
    title: 'Islamic Lectures & Muhadhara',
    heroText: 'Stay connected with Islamic learning and community Muhadhara gatherings organized by Ansar Welfare Organization.',
    explore: 'Explore latest Muhadhara',
    learn: 'Learn and reflect',
    grow: 'Growing together through Islamic knowledge',
    intro: 'Our Muhadhara gatherings bring the community together to learn from different sheikhs at different mosques. Find the topic, speaker, venue, date and time of each published announcement below.',
    announcements: 'Community announcements',
    announcementTitle: 'Muhadhara announcements',
    announcementIntro: 'Read the event details carefully before attending.',
    loading: 'Loading Muhadhara announcements...',
    networkError: 'Lecture announcements are temporarily unavailable. Please contact the organization for current details.',
    loadError: 'Could not load lecture announcements.',
    stay: 'Stay connected',
    emptyTitle: 'No Muhadhara announcements yet',
    emptyText: 'New Muhadhara announcements will appear here when they are published by Ansar Welfare Organization. Contact us for information about upcoming gatherings.',
    askTime: 'Ask us about event times',
    contact: 'Contact the organization',
    latest: 'Latest Muhadhara',
    topic: 'LECTURE TOPIC',
    speaker: 'SPEAKER / SHEIKH',
    mosque: 'MOSQUE',
    date: 'DATE',
    time: 'TIME',
    announced: 'To be announced',
    dateAnnounced: 'Date to be announced',
    timeAnnounced: 'Time to be announced',
    locationAnnounced: 'Location to be announced',
    organized: 'Organized by Ansar Welfare Organization',
    fromAnnouncements: 'From our announcements',
    previous: 'Previous Muhadhara',
    previousIntro: 'Explore other published Muhadhara announcements.',
    event: 'event',
    events: 'events',
    sheikh: 'Sheikh:',
    mosqueLabel: 'Mosque:',
    bottomTitle: 'Join us in learning and growing together.',
    bottomText: 'Contact Ansar Welfare Organization for information about upcoming Islamic lectures, Muhadhara gatherings and other community programs.',
    call: 'Call us: 0721 133 156',
    email: 'Email the organization',
    defaultTopic: 'Islamic Muhadhara',
  },
  sw: {
    eyebrow: 'ELIMU • IMANI • JAMII',
    title: 'Mihadhara ya Kiislamu',
    heroText: 'Endelea kupata taarifa kuhusu elimu ya Kiislamu na mikusanyiko ya mihadhara inayoandaliwa na Ansar Welfare Organization.',
    explore: 'Tazama mhadhara wa hivi karibuni',
    learn: 'Jifunze na tafakari',
    grow: 'Kukua pamoja kupitia elimu ya Kiislamu',
    intro: 'Mihadhara yetu huleta jamii pamoja ili kujifunza kutoka kwa masheikh mbalimbali katika misikiti tofauti. Hapa utapata mada, mzungumzaji, ukumbi, tarehe na muda wa kila tangazo lililochapishwa.',
    announcements: 'Matangazo ya jamii',
    announcementTitle: 'Matangazo ya mihadhara',
    announcementIntro: 'Soma maelezo ya tukio kwa makini kabla ya kuhudhuria.',
    loading: 'Inapakia matangazo ya mihadhara...',
    networkError: 'Matangazo ya mihadhara hayapatikani kwa sasa. Tafadhali wasiliana na shirika kwa taarifa za sasa.',
    loadError: 'Imeshindikana kupakia matangazo ya mihadhara.',
    stay: 'Endelea kuwasiliana nasi',
    emptyTitle: 'Bado hakuna matangazo ya mihadhara',
    emptyText: 'Matangazo mapya yataonekana hapa yatakapochapishwa na Ansar Welfare Organization. Wasiliana nasi kupata taarifa za mihadhara ijayo.',
    askTime: 'Uliza kuhusu muda wa tukio',
    contact: 'Wasiliana na shirika',
    latest: 'Mhadhara wa hivi karibuni',
    topic: 'MADA YA MHADHARA',
    speaker: 'MZUNGUMZAJI / SHEIKH',
    mosque: 'MSIKITI',
    date: 'TAREHE',
    time: 'MUDA',
    announced: 'Itatangazwa',
    dateAnnounced: 'Tarehe itatangazwa',
    timeAnnounced: 'Muda utatangazwa',
    locationAnnounced: 'Mahali patatangazwa',
    organized: 'Imeandaliwa na Ansar Welfare Organization',
    fromAnnouncements: 'Kutoka kwenye matangazo yetu',
    previous: 'Mihadhara iliyopita',
    previousIntro: 'Tazama matangazo mengine ya mihadhara yaliyochapishwa.',
    event: 'tukio',
    events: 'matukio',
    sheikh: 'Sheikh:',
    mosqueLabel: 'Msikiti:',
    bottomTitle: 'Jiunge nasi kujifunza na kukua pamoja.',
    bottomText: 'Wasiliana na Ansar Welfare Organization kupata taarifa kuhusu mihadhara ya Kiislamu ijayo na programu nyingine za jamii.',
    call: 'Tupigie: 0721 133 156',
    email: 'Tuma barua pepe kwa shirika',
    defaultTopic: 'Mhadhara wa Kiislamu',
  },
  so: {
    eyebrow: 'CILMI • IIMAAN • BULSHO',
    title: 'Muxaadarooyinka Islaamka',
    heroText: 'La soco barashada diinta Islaamka iyo kulamada muxaadarooyinka bulshada ee ay abaabusho Ansar Welfare Organization.',
    explore: 'Eeg muxaadarka ugu dambeeya',
    learn: 'Baro oo ka fiirso',
    grow: 'Wadajir ugu korno aqoonta Islaamka',
    intro: 'Kulamadeenna muxaadarooyinka waxay bulshada isugu keenaan inay wax ka bartaan sheekhyo kala duwan oo jooga masaajidyo kala duwan. Hoos ka eeg mawduuca, qofka hadlaya, goobta, taariikhda iyo waqtiga ogeysiis kasta.',
    announcements: 'Ogeysiisyada bulshada',
    announcementTitle: 'Ogeysiisyada muxaadarooyinka',
    announcementIntro: 'Si taxaddar leh u akhri faahfaahinta munaasabadda ka hor intaadan iman.',
    loading: 'Waxaa la soo rarayaa ogeysiisyada muxaadarooyinka...',
    networkError: 'Ogeysiisyada muxaadarooyinka hadda lama heli karo. Fadlan la xiriir ururka si aad u hesho faahfaahinta hadda jirta.',
    loadError: 'Lama soo rari karin ogeysiisyada muxaadarooyinka.',
    stay: 'La soco wararkeena',
    emptyTitle: 'Weli ma jiraan ogeysiisyo muxaadaro',
    emptyText: 'Ogeysiisyada cusub waxay halkan ka soo muuqan doonaan marka ay daabacdo Ansar Welfare Organization. Nala soo xiriir si aad u ogaato kulamada soo socda.',
    askTime: 'Weydii waqtiga munaasabadda',
    contact: 'La xiriir ururka',
    latest: 'Muxaadarka ugu dambeeya',
    topic: 'MAWDUUCA MUXAADARADA',
    speaker: 'HADLAHA / SHEEKH',
    mosque: 'MASAAJIDKA',
    date: 'TAARIIKHDA',
    time: 'WAQTIGA',
    announced: 'Waa la shaacin doonaa',
    dateAnnounced: 'Taariikhda waa la shaacin doonaa',
    timeAnnounced: 'Waqtiga waa la shaacin doonaa',
    locationAnnounced: 'Goobta waa la shaacin doonaa',
    organized: 'Waxaa abaabushay Ansar Welfare Organization',
    fromAnnouncements: 'Ogeysiisyadeenna',
    previous: 'Muxaadarooyinkii hore',
    previousIntro: 'Eeg ogeysiisyada kale ee muxaadarooyinka la daabacay.',
    event: 'munaasabad',
    events: 'munaasabado',
    sheikh: 'Sheekh:',
    mosqueLabel: 'Masjid:',
    bottomTitle: 'Nagu soo biir si aan u wada baranno una korno.',
    bottomText: 'La xiriir Ansar Welfare Organization si aad u hesho macluumaad ku saabsan muxaadarooyinka soo socda iyo barnaamijyada kale ee bulshada.',
    call: 'Na soo wac: 0721 133 156',
    email: 'Iimayl u dir ururka',
    defaultTopic: 'Muxaadaro Islaami ah',
  },
  ar: {
    eyebrow: 'العلم • الإيمان • المجتمع',
    title: 'المحاضرات الإسلامية',
    heroText: 'تابع دروس العلم الإسلامي ولقاءات المحاضرات المجتمعية التي تنظمها منظمة أنصار للرعاية الاجتماعية.',
    explore: 'استكشف أحدث المحاضرات',
    learn: 'تعلّم وتأمّل',
    grow: 'ننمو معاً من خلال العلم الإسلامي',
    intro: 'تجمع لقاءاتنا المجتمع للتعلم من مشايخ مختلفين في مساجد متعددة. ستجد أدناه موضوع المحاضرة والمتحدث والمكان والتاريخ والوقت لكل إعلان منشور.',
    announcements: 'إعلانات المجتمع',
    announcementTitle: 'إعلانات المحاضرات',
    announcementIntro: 'يرجى قراءة تفاصيل الفعالية بعناية قبل الحضور.',
    loading: 'جارٍ تحميل إعلانات المحاضرات...',
    networkError: 'إعلانات المحاضرات غير متاحة مؤقتاً. يرجى التواصل مع المنظمة للحصول على أحدث التفاصيل.',
    loadError: 'تعذر تحميل إعلانات المحاضرات.',
    stay: 'ابقَ على تواصل',
    emptyTitle: 'لا توجد إعلانات للمحاضرات حتى الآن',
    emptyText: 'ستظهر الإعلانات الجديدة هنا عند نشرها من قبل منظمة أنصار للرعاية الاجتماعية. تواصل معنا لمعرفة اللقاءات القادمة.',
    askTime: 'استفسر عن أوقات الفعاليات',
    contact: 'تواصل مع المنظمة',
    latest: 'أحدث محاضرة',
    topic: 'موضوع المحاضرة',
    speaker: 'المتحدث / الشيخ',
    mosque: 'المسجد',
    date: 'التاريخ',
    time: 'الوقت',
    announced: 'سيتم الإعلان عنه',
    dateAnnounced: 'سيتم الإعلان عن التاريخ',
    timeAnnounced: 'سيتم الإعلان عن الوقت',
    locationAnnounced: 'سيتم الإعلان عن المكان',
    organized: 'تنظيم منظمة أنصار للرعاية الاجتماعية',
    fromAnnouncements: 'من إعلاناتنا',
    previous: 'المحاضرات السابقة',
    previousIntro: 'استكشف إعلانات المحاضرات الأخرى المنشورة.',
    event: 'فعالية',
    events: 'فعاليات',
    sheikh: 'الشيخ:',
    mosqueLabel: 'المسجد:',
    bottomTitle: 'انضم إلينا لنتعلم وننمو معاً.',
    bottomText: 'تواصل مع منظمة أنصار للرعاية الاجتماعية لمعرفة المحاضرات الإسلامية القادمة واللقاءات والبرامج المجتمعية الأخرى.',
    call: 'اتصل بنا: 0721 133 156',
    email: 'راسل المنظمة بالبريد الإلكتروني',
    defaultTopic: 'محاضرة إسلامية',
  },
}

const dateLocales = {
  en: 'en-KE',
  sw: 'sw-KE',
  so: 'so-SO',
  ar: 'ar',
}

function formatDate(dateString, language, fallback) {
  if (!dateString) return fallback

  const date = new Date(`${dateString}T00:00:00`)

  if (Number.isNaN(date.getTime())) return dateString

  try {
    return new Intl.DateTimeFormat(dateLocales[language] || 'en-KE', {
      weekday: 'long',
      day: 'numeric',
      month: 'long',
      year: 'numeric',
    }).format(date)
  } catch {
    return new Intl.DateTimeFormat('en-KE', {
      weekday: 'long',
      day: 'numeric',
      month: 'long',
      year: 'numeric',
    }).format(date)
  }
}

function formatSheikh(name, language, announced) {
  if (!name) return announced
  const cleanedName = name.replace(/^(Sheikh|Sheekh|شيخ)\s+/i, '')
  if (language === 'ar') return `الشيخ ${cleanedName}`
  if (language === 'so') return `Sheekh ${cleanedName}`
  return `Sheikh ${cleanedName}`
}

export default function IslamicLectures() {
  const { language } = useLanguage()
  const text = translations[language] || translations.en

  const [lectures, setLectures] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')

  useEffect(() => {
    let active = true

    async function loadLectures() {
      try {
        const response = await fetch(`${API_URL}/muhadhara`)
        const data = await response.json().catch(() => ({}))

        if (!response.ok) {
          throw new Error(data.message || text.loadError)
        }

        if (active) {
          setLectures(Array.isArray(data.lectures) ? data.lectures : [])
          setError('')
        }
      } catch (err) {
        if (active) {
          setError(
            err instanceof TypeError
              ? text.networkError
              : err.message,
          )
        }
      } finally {
        if (active) setLoading(false)
      }
    }

    loadLectures()

    return () => {
      active = false
    }
  }, [text.loadError, text.networkError])

  const sortedLectures = [...lectures].sort((a, b) => {
    const dateA = a.date || ''
    const dateB = b.date || ''

    if (dateA !== dateB) return dateB.localeCompare(dateA)
    return (b.id || 0) - (a.id || 0)
  })

  const latestLecture = sortedLectures[0]
  const previousLectures = sortedLectures.slice(1)

  return (
    <div className="lectures-page">
      <section className="page-hero lectures-hero">
        <div className="container">
          <span className="section-label">{text.eyebrow}</span>
          <h1>{text.title}</h1>
          <p>{text.heroText}</p>
          <a href="#latest-muhadhara" className="lectures-hero-link">
            {text.explore} <ArrowDown size={18} />
          </a>
        </div>
      </section>

      <section className="section container lectures-content">
        <div className="lectures-intro">
          <div className="lectures-intro-icon">
            <BookOpen size={34} />
          </div>
          <div>
            <span className="section-label">{text.learn}</span>
            <h2>{text.grow}</h2>
            <p>{text.intro}</p>
          </div>
        </div>

        <div className="lecture-list-section" id="latest-muhadhara">
          <div className="lecture-list-heading">
            <span className="section-label">{text.announcements}</span>
            <h2>{text.announcementTitle}</h2>
            <p>{text.announcementIntro}</p>
          </div>

          {loading ? (
            <div className="lecture-state-message" role="status">
              {text.loading}
            </div>
          ) : error ? (
            <div className="lecture-state-message lecture-state-error" role="alert">
              <AlertCircle size={22} />
              <p>{error}</p>
            </div>
          ) : !latestLecture ? (
            <div className="lecture-announcements">
              <div className="lecture-announcements-icon">
                <CalendarDays size={32} />
              </div>
              <div>
                <span className="section-label">{text.stay}</span>
                <h2>{text.emptyTitle}</h2>
                <p>{text.emptyText}</p>

                <div className="lecture-contact-info">
                  <span>
                    <Clock size={17} />
                    {text.askTime}
                  </span>
                  <span>
                    <MapPin size={17} />
                    Iftin, opposite Sada Mosque
                  </span>
                </div>

                <a className="button button-primary" href="tel:0721133156">
                  {text.contact}
                </a>
              </div>
            </div>
          ) : (
            <>
              <article className="latest-muhadhara-card">
                <div className="latest-muhadhara-banner">
                  <div className="latest-muhadhara-book">
                    <BookOpen size={30} />
                  </div>
                  <span className="latest-muhadhara-badge">{text.latest}</span>
                </div>

                <div className="latest-muhadhara-body">
                  <span className="latest-muhadhara-eyebrow">{text.topic}</span>
                  <h2>{latestLecture.topic || text.defaultTopic}</h2>

                  {latestLecture.details && (
                    <p className="latest-muhadhara-description">
                      {latestLecture.details}
                    </p>
                  )}

                  <div className="latest-muhadhara-information">
                    <div className="latest-muhadhara-info-item">
                      <span className="latest-muhadhara-info-icon">
                        <UserRound size={21} />
                      </span>
                      <div>
                        <span className="latest-muhadhara-info-label">{text.speaker}</span>
                        <strong>
                          {formatSheikh(latestLecture.sheikh_name, language, text.announced)}
                        </strong>
                      </div>
                    </div>

                    <div className="latest-muhadhara-info-item">
                      <span className="latest-muhadhara-info-icon">
                        <Building2 size={21} />
                      </span>
                      <div>
                        <span className="latest-muhadhara-info-label">{text.mosque}</span>
                        <strong>{latestLecture.mosque_name || text.announced}</strong>
                        <span className="latest-muhadhara-location">
                          {latestLecture.location || text.locationAnnounced}
                        </span>
                      </div>
                    </div>

                    <div className="latest-muhadhara-info-item">
                      <span className="latest-muhadhara-info-icon">
                        <CalendarDays size={21} />
                      </span>
                      <div>
                        <span className="latest-muhadhara-info-label">{text.date}</span>
                        <strong>{formatDate(latestLecture.date, language, text.dateAnnounced)}</strong>
                      </div>
                    </div>

                    <div className="latest-muhadhara-info-item">
                      <span className="latest-muhadhara-info-icon">
                        <Clock size={21} />
                      </span>
                      <div>
                        <span className="latest-muhadhara-info-label">{text.time}</span>
                        <strong>{latestLecture.time || text.timeAnnounced}</strong>
                      </div>
                    </div>
                  </div>

                  <div className="latest-muhadhara-footer">
                    <BookOpen size={18} />
                    <span>{text.organized}</span>
                  </div>
                </div>
              </article>

              {previousLectures.length > 0 && (
                <section className="previous-muhadhara-section">
                  <div className="previous-muhadhara-heading">
                    <div>
                      <span className="section-label">{text.fromAnnouncements}</span>
                      <h2>{text.previous}</h2>
                      <p>{text.previousIntro}</p>
                    </div>
                    <span className="previous-muhadhara-count">
                      {previousLectures.length}{' '}
                      {previousLectures.length === 1 ? text.event : text.events}
                    </span>
                  </div>

                  <div className="previous-muhadhara-grid">
                    {previousLectures.map((lecture) => (
                      <article className="previous-muhadhara-card" key={lecture.id}>
                        <div className="previous-muhadhara-card-icon">
                          <BookOpen size={22} />
                        </div>
                        <span className="previous-muhadhara-label">{text.title}</span>
                        <h3>{lecture.topic || text.defaultTopic}</h3>

                        <div className="previous-muhadhara-detail">
                          <UserRound size={17} />
                          <span>
                            <strong>{text.sheikh}</strong>{' '}
                            {formatSheikh(lecture.sheikh_name, language, text.announced)}
                          </span>
                        </div>

                        <div className="previous-muhadhara-detail">
                          <Building2 size={17} />
                          <span>
                            <strong>{text.mosqueLabel}</strong>{' '}
                            {lecture.mosque_name || text.announced}
                          </span>
                        </div>

                        <div className="previous-muhadhara-detail">
                          <MapPin size={17} />
                          <span>{lecture.location || text.locationAnnounced}</span>
                        </div>

                        <div className="previous-muhadhara-date">
                          <CalendarDays size={17} />
                          <span>{formatDate(lecture.date, language, text.dateAnnounced)}</span>
                        </div>

                        <div className="previous-muhadhara-time">
                          <Clock size={17} />
                          <span>{lecture.time || text.timeAnnounced}</span>
                        </div>

                        {lecture.details && (
                          <p className="previous-muhadhara-description">
                            {lecture.details}
                          </p>
                        )}
                      </article>
                    ))}
                  </div>
                </section>
              )}
            </>
          )}
        </div>
      </section>

      <section className="section lectures-bottom">
        <div className="container">
          <span className="section-label">{text.stay}</span>
          <h2>{text.bottomTitle}</h2>
          <p>{text.bottomText}</p>

          <div className="lectures-contact-actions">
            <a className="button button-primary" href="tel:0721133156">
              {text.call}
            </a>
            <a
              className="button button-secondary"
              href="mailto:ansarwelfareorganization7@gmail.com"
            >
              {text.email}
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}
