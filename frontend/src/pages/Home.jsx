import { Link } from 'react-router-dom'
import {
  HeartHandshake,
  BookOpen,
  Utensils,
  HandHeart,
  ArrowRight,
  MoonStar,
  Users,
  Heart,
  ShieldCheck,
} from 'lucide-react'
import { useLanguage } from '../i18n/LanguageContext'
import heroImage from '../assets/hero.png'

const homeTranslations = {
  en: {
    eyebrow: 'Serving our community since 2019',
    heroTitle: 'Together, we can make a',
    heroHighlight: ' meaningful difference.',
    heroDescription:
      'Welcome to Ansar Welfare Organization. We bring people together to support those in need, share Islamic knowledge through Muhadhara, and provide free Iftar meals during Ramadan. Every act of generosity can bring hope to someone in need.',
    contribute: 'Make a Contribution',
    about: 'About Our Organization',
    trust: 'Compassion, faith, and service to our community.',
    imageAlt: 'Community members coming together to support charitable work',
    captionTitle: 'Every contribution matters',
    captionText: 'Your generosity helps us support people in need.',
    welcome: 'Welcome to Ansar',
    introTitle: 'A community united by compassion, faith, and service.',
    introOne:
      "Established in 2019, Ansar Welfare Organization is dedicated to supporting needy people and encouraging charitable giving within our community. We believe that by working together, sharing what we have, and caring for one another, we can make a meaningful difference in people's lives.",
    introTwo:
      'Our activities are supported by voluntary contributions from fellow Muslims and community supporters. Their generosity enables us to continue our charitable work, organize Islamic lectures, and provide free Iftar meals during Ramadan.',
    learnMission: 'Learn more about our mission',
    activitiesLabel: 'Our activities',
    activitiesTitle: 'Working together to make a difference',
    activitiesDescription:
      'Our work focuses on charitable assistance, Islamic learning, and sharing the blessings of Ramadan with our community.',
    activity1Title: 'Supporting People in Need',
    activity1Description:
      'We bring our community together through charitable contributions to support needy people and families facing hardship.',
    activity1Link: 'Support our work',
    activity2Title: 'Friday-Night Muhadhara',
    activity2Description:
      'We organize Islamic lectures at different mosques, welcoming different sheikhs to share beneficial knowledge and religious reminders.',
    activity2Link: 'Explore Muhadhara',
    activity3Title: 'Free Ramadan Iftar',
    activity3Description:
      'During Ramadan, we work to provide free Iftar meals with the help and generosity of fellow Muslims and charitable supporters.',
    activity3Link: 'Help provide Iftar',
    faithLabel: 'Faith and learning',
    faithTitle: 'Growing together through Muhadhara',
    faithDescription:
      'Every Friday night, we organize Islamic lectures at different mosques, with different sheikhs sharing beneficial religious knowledge and reminders. These gatherings encourage learning, reflection, and stronger connections within our community.',
    lecturesButton: 'Explore Islamic Lectures',
    ramadanLabel: 'Ramadan charity',
    iftarTitle: 'Sharing the blessings of Iftar',
    iftarDescription:
      'During the blessed month of Ramadan, Ansar Welfare Organization works to provide free Iftar meals. This programme is made possible through contributions from fellow Muslims and generous supporters who want to help others share in the blessings of Ramadan.',
    iftarDescription2:
      'Your contribution can help sustain these community efforts. Get in touch with us to learn more about supporting our charitable activities.',
    iftarButton: 'Support Our Iftar Programme',
    goodLabel: 'Be part of the good',
    donationTitle: 'Together, we can help those in need.',
    donationDescription:
      'Our charitable activities depend on the generosity of fellow Muslims and community supporters. Contributions of money, food, and other suitable items can help us continue serving people in need. Every contribution, big or small, is an opportunity to make a positive difference.',
    donationButton: 'Discover Ways to Donate',
    contactButton: 'Contact Us',
    donationTrust: 'Every contribution helps sustain our community activities.',
  },
  sw: {
    eyebrow: 'Tunahudumia jamii yetu tangu 2019',
    heroTitle: 'Tukiungana, tunaweza kuleta',
    heroHighlight: ' mabadiliko yenye maana.',
    heroDescription:
      'Karibu Ansar Welfare Organization. Tunaunganisha watu ili kuwasaidia wenye mahitaji, kushiriki maarifa ya Kiislamu kupitia Muhadhara, na kutoa futari bila malipo wakati wa Ramadhani. Kila tendo la ukarimu linaweza kuleta matumaini kwa mtu mwenye uhitaji.',
    contribute: 'Toa Mchango',
    about: 'Kuhusu Shirika Letu',
    trust: 'Huruma, imani na huduma kwa jamii yetu.',
    imageAlt: 'Wanajamii wakiungana kusaidia shughuli za hisani',
    captionTitle: 'Kila mchango una umuhimu',
    captionText: 'Ukarimu wako hutusaidia kuwasaidia wenye mahitaji.',
    welcome: 'Karibu Ansar',
    introTitle: 'Jamii iliyounganishwa na huruma, imani na huduma.',
    introOne:
      'Ansar Welfare Organization ilianzishwa mwaka 2019 kwa lengo la kuwasaidia wenye mahitaji na kuhimiza utoaji wa misaada katika jamii yetu. Tunaamini kwamba tukifanya kazi pamoja, tukishiriki tulicho nacho na kujali wengine, tunaweza kuleta mabadiliko yenye maana katika maisha ya watu.',
    introTwo:
      'Shughuli zetu zinafadhiliwa na michango ya hiari kutoka kwa Waislamu wenzetu na wadau wa jamii. Ukarimu wao hutuwezesha kuendelea na kazi za hisani, kuandaa mihadhara ya Kiislamu na kutoa futari bila malipo wakati wa Ramadhani.',
    learnMission: 'Jifunze zaidi kuhusu dhamira yetu',
    activitiesLabel: 'Shughuli zetu',
    activitiesTitle: 'Tushirikiane kuleta mabadiliko',
    activitiesDescription:
      'Kazi yetu inalenga kusaidia wenye mahitaji, kujifunza Uislamu na kushiriki baraka za Ramadhani na jamii yetu.',
    activity1Title: 'Kuwasaidia Wenye Mahitaji',
    activity1Description:
      'Tunaiunganisha jamii kupitia michango ya hisani ili kusaidia watu na familia zinazokabiliwa na changamoto.',
    activity1Link: 'Saidia kazi yetu',
    activity2Title: 'Muhadhara wa Ijumaa Usiku',
    activity2Description:
      'Tunaandaa mihadhara ya Kiislamu katika misikiti mbalimbali, ambapo masheikh tofauti hushiriki elimu yenye manufaa na mawaidha ya dini.',
    activity2Link: 'Angalia Mihadhara',
    activity3Title: 'Futari ya Bure ya Ramadhani',
    activity3Description:
      'Wakati wa Ramadhani, tunajitahidi kutoa futari bila malipo kwa msaada na ukarimu wa Waislamu wenzetu na wafadhili.',
    activity3Link: 'Saidia Kutoa Futari',
    faithLabel: 'Imani na elimu',
    faithTitle: 'Kukua pamoja kupitia Muhadhara',
    faithDescription:
      'Kila Ijumaa usiku, tunaandaa mihadhara ya Kiislamu katika misikiti tofauti, ambapo masheikh hushiriki elimu na mawaidha yenye manufaa. Mikusanyiko hii huchochea kujifunza, kutafakari na kuimarisha uhusiano katika jamii yetu.',
    lecturesButton: 'Angalia Mihadhara ya Kiislamu',
    ramadanLabel: 'Hisani za Ramadhani',
    iftarTitle: 'Kushiriki baraka za futari',
    iftarDescription:
      'Katika mwezi mtukufu wa Ramadhani, Ansar Welfare Organization hujitahidi kutoa futari bila malipo. Mpango huu unawezekana kupitia michango ya Waislamu wenzetu na wafadhili wanaotaka wengine washiriki baraka za Ramadhani.',
    iftarDescription2:
      'Mchango wako unaweza kusaidia kuendeleza juhudi hizi za jamii. Wasiliana nasi ili kujua zaidi kuhusu kusaidia shughuli zetu za hisani.',
    iftarButton: 'Saidia Mpango wa Futari',
    goodLabel: 'Kuwa sehemu ya wema',
    donationTitle: 'Tukiungana, tunaweza kuwasaidia wenye mahitaji.',
    donationDescription:
      'Shughuli zetu za hisani hutegemea ukarimu wa Waislamu wenzetu na wadau wa jamii. Michango ya fedha, chakula na vitu vingine vinavyofaa hutusaidia kuendelea kuwahudumia wenye mahitaji. Kila mchango, mkubwa au mdogo, unaweza kuleta mabadiliko chanya.',
    donationButton: 'Jifunze Jinsi ya Kuchangia',
    contactButton: 'Wasiliana Nasi',
    donationTrust: 'Kila mchango husaidia kuendeleza shughuli zetu za jamii.',
  },
  so: {
    eyebrow: 'Waxaan bulshadeenna u adeegaynay tan iyo 2019',
    heroTitle: 'Markaan mideysanno, waxaan keeni karnaa',
    heroHighlight: ' isbeddel macno leh.',
    heroDescription:
      'Ku soo dhawoow Ansar Welfare Organization. Waxaan dadka isu keennaa si aan u caawinno dadka baahan, u wadaagno aqoonta Islaamka annagoo qabanayna muxaadarooyin, una bixinno afur bilaash ah bisha Ramadaan. Deeqsinimo kasta waxay rajo u keeni kartaa qof baahan.',
    contribute: 'Bixi Deeq',
    about: 'Ku Saabsan Ururkayaga',
    trust: 'Naxariis, iimaan iyo adeegga bulshadeenna.',
    imageAlt: 'Xubnaha bulshada oo isu kaashanaya hawlaha samafalka',
    captionTitle: 'Deeq kasta waa muhiim',
    captionText: 'Deeqsinimadaadu waxay naga caawisaa dadka baahan.',
    welcome: 'Ku soo dhawoow Ansar',
    introTitle: 'Bulsho ay mideeyaan naxariis, iimaan iyo adeeg.',
    introOne:
      'Ansar Welfare Organization waxaa la aasaasay 2019 si ay u taageerto dadka baahan una dhiirrigeliso wax-bixinta samafalka ee bulshadeenna. Waxaan aaminsanahay in wada shaqaynta, wax wadaagista iyo is-daryeelku ay isbeddel wanaagsan ku keeni karaan nolosha dadka.',
    introTwo:
      'Hawlaha ururka waxaa taageera tabarucaad ikhtiyaari ah oo ka yimaada Muslimiinta kale iyo taageerayaasha bulshada. Deeqsinimadoodu waxay noo suuragelisaa inaan sii wadno samafalka, qabanno muxaadarooyin Islaami ah, isla markaana bixinno afur bilaash ah bisha Ramadaan.',
    learnMission: 'Wax badan ka baro himiladeenna',
    activitiesLabel: 'Hawlaha aan qabanno',
    activitiesTitle: 'Aan wada shaqayno si aan isbeddel u keenno',
    activitiesDescription:
      'Waxaan xoogga saarnaa caawinta dadka baahan, barashada Islaamka iyo wadaagista barakada Ramadaanka.',
    activity1Title: 'Caawinta Dadka Baahan',
    activity1Description:
      'Waxaan bulshada isu keennaa annagoo ururinayna deeqo lagu taageerayo dadka iyo qoysaska dhibaatooyinka wajahaya.',
    activity1Link: 'Taageer hawshayada',
    activity2Title: 'Muxaadarooyinka Habeenka Jimcaha',
    activity2Description:
      'Waxaan muxaadarooyin Islaami ah ku qabannaa masaajidyo kala duwan, iyadoo culimo kala duwan ay wadaagaan aqoon waxtar leh iyo waano diini ah.',
    activity2Link: 'Eeg Muxaadarooyinka',
    activity3Title: 'Afur Bilaash ah oo Ramadaan',
    activity3Description:
      'Bisha Ramadaan waxaan dadaalnaa inaan bixino afur bilaash ah annagoo kaashanayna deeqsinimada Muslimiinta iyo taageerayaasha samafalka.',
    activity3Link: 'Ka qayb qaado Afurka',
    faithLabel: 'Iimaan iyo waxbarasho',
    faithTitle: 'Aan ku wada kobocno muxaadarooyinka',
    faithDescription:
      'Habeen kasta oo Jimce ah waxaan masaajidyo kala duwan ku qabannaa muxaadarooyin Islaami ah oo ay culimadu ku wadaagaan aqoon iyo waano waxtar leh. Kulamadan waxay dhiirrigeliyaan waxbarashada, fikirka iyo xoojinta xiriirka bulshada.',
    lecturesButton: 'Eeg Muxaadarooyinka Islaamka',
    ramadanLabel: 'Samafalka Ramadaanka',
    iftarTitle: 'Wadaagista barakada afurka',
    iftarDescription:
      'Bisha barakaysan ee Ramadaan, Ansar Welfare Organization waxay dadaal u gashaa bixinta afur bilaash ah. Barnaamijkan waxaa suurageliya tabarucaadka Muslimiinta iyo taageerayaasha doonaya inay dadka kale la wadaagaan barakada Ramadaanka.',
    iftarDescription2:
      'Deeqdaadu waxay gacan ka geysan kartaa sii wadista dadaalladan bulshada. Nala soo xiriir si aad wax badan uga ogaato taageeridda hawlaheenna samafalka.',
    iftarButton: 'Taageer Barnaamijka Afurka',
    goodLabel: 'Ka mid noqo wanaagga',
    donationTitle: 'Wadajir ayaan u caawin karnaa dadka baahan.',
    donationDescription:
      'Hawlaha samafalkayagu waxay ku tiirsan yihiin deeqsinimada Muslimiinta iyo taageerayaasha bulshada. Lacag, cunto iyo agab kale oo ku habboon ayaa naga caawin kara inaan sii adeegno dadka baahan. Deeq kasta, yar ama weyn, waxay keeni kartaa isbeddel wanaagsan.',
    donationButton: 'Baro Sida Deeq Loo Bixiyo',
    contactButton: 'Nala Soo Xiriir',
    donationTrust: 'Deeq kasta waxay taageertaa hawlaha bulshadeenna.',
  },
  ar: {
    eyebrow: 'نخدم مجتمعنا منذ عام 2019',
    heroTitle: 'معًا يمكننا إحداث',
    heroHighlight: ' فرق حقيقي.',
    heroDescription:
      'مرحبًا بكم في منظمة أنصار للرعاية الاجتماعية. نجمع أفراد المجتمع لمساعدة المحتاجين، ونشر المعرفة الإسلامية من خلال المحاضرات، وتقديم وجبات إفطار مجانية خلال شهر رمضان. يمكن لكل عمل من أعمال الكرم أن يمنح الأمل لشخص محتاج.',
    contribute: 'قدّم مساهمة',
    about: 'عن منظمتنا',
    trust: 'الرحمة والإيمان وخدمة مجتمعنا.',
    imageAlt: 'أفراد المجتمع يتعاونون لدعم الأعمال الخيرية',
    captionTitle: 'كل مساهمة مهمة',
    captionText: 'كرمكم يساعدنا على دعم المحتاجين.',
    welcome: 'مرحبًا بكم في أنصار',
    introTitle: 'مجتمع توحّده الرحمة والإيمان والخدمة.',
    introOne:
      'تأسست منظمة أنصار للرعاية الاجتماعية عام 2019 لدعم المحتاجين وتشجيع العطاء الخيري داخل مجتمعنا. نؤمن بأن العمل معًا ومشاركة ما نملك والاهتمام ببعضنا يمكن أن يحدث فرقًا حقيقيًا في حياة الناس.',
    introTwo:
      'تعتمد أنشطتنا على التبرعات الطوعية من إخواننا المسلمين وداعمي المجتمع. ويساعدنا كرمهم على مواصلة أعمالنا الخيرية وتنظيم المحاضرات الإسلامية وتقديم وجبات إفطار مجانية خلال شهر رمضان.',
    learnMission: 'تعرّف على رسالتنا',
    activitiesLabel: 'أنشطتنا',
    activitiesTitle: 'نعمل معًا لإحداث فرق',
    activitiesDescription:
      'تركز أعمالنا على مساعدة المحتاجين والتعلم الإسلامي ومشاركة بركات رمضان مع مجتمعنا.',
    activity1Title: 'دعم المحتاجين',
    activity1Description:
      'نجمع أفراد المجتمع من خلال التبرعات الخيرية لدعم المحتاجين والأسر التي تواجه صعوبات.',
    activity1Link: 'ادعم أعمالنا',
    activity2Title: 'محاضرات ليلة الجمعة',
    activity2Description:
      'ننظم محاضرات إسلامية في مساجد مختلفة، ويشارك فيها مشايخ متعددون لتقديم العلم النافع والتذكير الديني.',
    activity2Link: 'استكشف المحاضرات',
    activity3Title: 'إفطار رمضاني مجاني',
    activity3Description:
      'نسعى خلال شهر رمضان إلى تقديم وجبات إفطار مجانية بمساعدة وكرم المسلمين والداعمين للأعمال الخيرية.',
    activity3Link: 'ساهم في توفير الإفطار',
    faithLabel: 'الإيمان والتعلم',
    faithTitle: 'ننمو معًا من خلال المحاضرات',
    faithDescription:
      'ننظم كل ليلة جمعة محاضرات إسلامية في مساجد مختلفة، يقدم فيها مشايخ متنوعون المعرفة الدينية النافعة والتذكير. وتشجع هذه اللقاءات على التعلم والتأمل وتعزيز الروابط داخل مجتمعنا.',
    lecturesButton: 'استكشف المحاضرات الإسلامية',
    ramadanLabel: 'العمل الخيري في رمضان',
    iftarTitle: 'مشاركة بركات الإفطار',
    iftarDescription:
      'خلال شهر رمضان المبارك، تعمل منظمة أنصار للرعاية الاجتماعية على توفير وجبات إفطار مجانية. ويصبح هذا البرنامج ممكنًا بفضل مساهمات المسلمين والداعمين الكرماء الذين يرغبون في مشاركة بركات رمضان مع الآخرين.',
    iftarDescription2:
      'يمكن لمساهمتكم أن تساعد في استمرار هذه الجهود المجتمعية. تواصلوا معنا لمعرفة المزيد عن دعم أنشطتنا الخيرية.',
    iftarButton: 'ادعم برنامج الإفطار',
    goodLabel: 'كن جزءًا من الخير',
    donationTitle: 'معًا يمكننا مساعدة المحتاجين.',
    donationDescription:
      'تعتمد أنشطتنا الخيرية على كرم المسلمين وداعمي المجتمع. تساعدنا المساهمات المالية والغذائية وغيرها من المواد المناسبة على مواصلة خدمة المحتاجين. كل مساهمة، كبيرة كانت أم صغيرة، فرصة لإحداث أثر إيجابي.',
    donationButton: 'تعرّف على طرق التبرع',
    contactButton: 'اتصل بنا',
    donationTrust: 'كل مساهمة تساعد على استمرار أنشطتنا المجتمعية.',
  },
}

const activityIcons = [HeartHandshake, BookOpen, Utensils]
const activityLinks = ['/donations', '/lectures', '/donations']

export default function Home() {
  const { language } = useLanguage()
  const t = homeTranslations[language] || homeTranslations.en

  const activities = [
    {
      icon: activityIcons[0],
      title: t.activity1Title,
      description: t.activity1Description,
      link: activityLinks[0],
      linkText: t.activity1Link,
    },
    {
      icon: activityIcons[1],
      title: t.activity2Title,
      description: t.activity2Description,
      link: activityLinks[1],
      linkText: t.activity2Link,
    },
    {
      icon: activityIcons[2],
      title: t.activity3Title,
      description: t.activity3Description,
      link: activityLinks[2],
      linkText: t.activity3Link,
    },
  ]

  return (
    <main className="home-page">
      <section className="home-hero">
        <div className="container home-hero-grid">
          <div className="home-hero-content">
            <span className="home-eyebrow">
              <Heart size={16} />
              {t.eyebrow}
            </span>

            <h1>
              {t.heroTitle}
              <span>{t.heroHighlight}</span>
            </h1>

            <p className="home-hero-description">{t.heroDescription}</p>

            <div className="home-hero-actions">
              <Link to="/donations" className="button button-primary">
                {t.contribute}
                <ArrowRight size={18} />
              </Link>

              <Link to="/about" className="button button-secondary">
                {t.about}
              </Link>
            </div>

            <p className="home-hero-trust">
              <HeartHandshake size={18} />
              {t.trust}
            </p>
          </div>

          <div className="home-hero-image-wrap">
            <img
              src={heroImage}
              alt={t.imageAlt}
              className="home-hero-image"
            />

            <div className="home-image-caption">
              <span className="home-caption-icon">
                <HandHeart size={23} />
              </span>
              <div>
                <strong>{t.captionTitle}</strong>
                <p>{t.captionText}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="home-introduction section">
        <div className="container home-introduction-inner">
          <span className="section-label">{t.welcome}</span>
          <h2>{t.introTitle}</h2>
          <p>{t.introOne}</p>
          <p>{t.introTwo}</p>
          <Link to="/about" className="text-link">
            {t.learnMission}
            <ArrowRight size={18} />
          </Link>
        </div>
      </section>

      <section className="home-activities section">
        <div className="container">
          <div className="section-heading home-section-heading">
            <span className="section-label">{t.activitiesLabel}</span>
            <h2>{t.activitiesTitle}</h2>
            <p>{t.activitiesDescription}</p>
          </div>

          <div className="home-activity-grid">
            {activities.map(
              ({ icon: Icon, title, description, link, linkText }) => (
                <article className="home-activity-card" key={title}>
                  <div className="home-activity-icon">
                    <Icon size={29} />
                  </div>
                  <h3>{title}</h3>
                  <p>{description}</p>
                  <Link to={link} className="text-link">
                    {linkText}
                    <ArrowRight size={17} />
                  </Link>
                </article>
              ),
            )}
          </div>
        </div>
      </section>

      <section className="home-muhadhara-section section">
        <div className="container home-feature-grid">
          <div className="home-feature-icon">
            <MoonStar size={54} />
          </div>
          <div className="home-feature-content">
            <span className="section-label">{t.faithLabel}</span>
            <h2>{t.faithTitle}</h2>
            <p>{t.faithDescription}</p>
            <Link to="/lectures" className="button button-secondary">
              {t.lecturesButton}
              <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>

      <section className="home-iftar-section section">
        <div className="container home-feature-grid home-iftar-grid">
          <div className="home-feature-icon">
            <Utensils size={50} />
          </div>
          <div className="home-feature-content">
            <span className="section-label">{t.ramadanLabel}</span>
            <h2>{t.iftarTitle}</h2>
            <p>{t.iftarDescription}</p>
            <p>{t.iftarDescription2}</p>
            <Link to="/donations" className="button button-primary">
              {t.iftarButton}
              <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>

      <section className="home-donation-section section">
        <div className="container home-donation-inner">
          <div className="home-donation-icon">
            <Users size={34} />
          </div>
          <span className="section-label">{t.goodLabel}</span>
          <h2>{t.donationTitle}</h2>
          <p>{t.donationDescription}</p>

          <div className="home-donation-actions">
            <Link to="/donations" className="button button-primary">
              {t.donationButton}
              <ArrowRight size={18} />
            </Link>
            <Link to="/contact" className="button button-secondary">
              {t.contactButton}
            </Link>
          </div>

          <p className="home-hero-trust">
            <ShieldCheck size={18} />
            {t.donationTrust}
          </p>
        </div>
      </section>
    </main>
  )
}
