import { BookOpen, Utensils, HandHeart, Users, ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import { useLanguage } from '../i18n/LanguageContext'

const translations = {
  en: {
    eyebrow: 'How we help',
    title: 'Our Services',
    intro: 'Community-focused initiatives built around compassion, dignity, and cooperation.',
    focus: 'Our areas of focus',
    focusTitle: 'Support that starts with community',
    focusDescription: 'Our welfare activities can evolve in response to local needs and available resources.',
    services: [
      {
        title: 'Community Welfare',
        text: 'Encouraging community-led support for individuals and families experiencing hardship.',
      },
      {
        title: 'Food and Essential Support',
        text: 'Supporting initiatives that help address basic needs, including food and essential items.',
      },
      {
        title: 'Education and Youth',
        text: 'Encouraging educational opportunities, youth participation, and positive community development.',
      },
      {
        title: 'Community Engagement',
        text: 'Bringing people together to identify needs, share ideas, and participate in welfare activities.',
      },
    ],
    draftNote: 'These are suggested website descriptions. Please confirm which services are currently offered by the organization before publishing.',
    questions: 'Questions or partnership ideas?',
    calloutTitle: "Let's work together to support our community.",
    calloutText: 'Get in touch to ask about our activities and current initiatives.',
    contact: 'Contact Us',
  },
  sw: {
    eyebrow: 'Jinsi tunavyosaidia',
    title: 'Huduma Zetu',
    intro: 'Mipango inayolenga jamii, inayojengwa juu ya huruma, utu na ushirikiano.',
    focus: 'Maeneo tunayozingatia',
    focusTitle: 'Msaada unaoanzia katika jamii',
    focusDescription: 'Shughuli zetu za ustawi zinaweza kubadilika kulingana na mahitaji ya eneo na rasilimali zilizopo.',
    services: [
      {
        title: 'Ustawi wa Jamii',
        text: 'Kuhimiza jamii kusaidia watu binafsi na familia zinazokabiliwa na changamoto.',
      },
      {
        title: 'Chakula na Mahitaji Muhimu',
        text: 'Kusaidia mipango inayokidhi mahitaji ya msingi, yakiwemo chakula na vitu muhimu.',
      },
      {
        title: 'Elimu na Vijana',
        text: 'Kuhimiza fursa za elimu, ushiriki wa vijana na maendeleo chanya ya jamii.',
      },
      {
        title: 'Ushiriki wa Jamii',
        text: 'Kuwaunganisha watu ili kutambua mahitaji, kubadilishana mawazo na kushiriki katika shughuli za ustawi.',
      },
    ],
    draftNote: 'Haya ni maelezo yaliyopendekezwa kwa tovuti. Tafadhali thibitisha huduma zinazotolewa na shirika kwa sasa kabla ya kuchapisha.',
    questions: 'Maswali au mawazo ya ushirikiano?',
    calloutTitle: 'Tushirikiane kusaidia jamii yetu.',
    calloutText: 'Wasiliana nasi ili kuuliza kuhusu shughuli na mipango yetu ya sasa.',
    contact: 'Wasiliana Nasi',
  },
  so: {
    eyebrow: 'Sida aan u caawinno',
    title: 'Adeegyadeenna',
    intro: 'Hindisayaal bulshada diiradda saaraya oo ku dhisan naxariis, sharaf iyo iskaashi.',
    focus: 'Meelaha aan diiradda saarno',
    focusTitle: 'Taageero ka bilaabata bulshada',
    focusDescription: 'Hawlaha samafalkayagu waxay la jaanqaadi karaan baahiyaha deegaanka iyo agabka la heli karo.',
    services: [
      {
        title: 'Daryeelka Bulshada',
        text: 'Dhiirrigelinta taageerada bulshada ee dadka iyo qoysaska dhibaatooyinka wajahaya.',
      },
      {
        title: 'Cunto iyo Agabka Aasaasiga ah',
        text: 'Taageeridda hindisayaasha daboolaya baahiyaha aasaasiga ah, sida cuntada iyo agabka muhiimka ah.',
      },
      {
        title: 'Waxbarashada iyo Dhallinyarada',
        text: 'Dhiirrigelinta fursadaha waxbarasho, ka-qaybgalka dhallinyarada iyo horumarinta bulshada.',
      },
      {
        title: 'Ka-qaybgalka Bulshada',
        text: 'Dadka oo la isu keeno si loo ogaado baahiyaha, fikradaha loo wadaago, loogana qayb qaato hawlaha samafalka.',
      },
    ],
    draftNote: 'Kuwani waa sharaxaado loo soo jeediyay bogga internetka. Fadlan xaqiiji adeegyada uu ururku hadda bixiyo ka hor inta aan la daabicin.',
    questions: 'Su’aalo ama fikrado iskaashi?',
    calloutTitle: 'Aan iska kaashanno taageeridda bulshadeenna.',
    calloutText: 'Nala soo xiriir si aad wax uga ogaato hawlaheenna iyo barnaamijyada hadda socda.',
    contact: 'Nala Soo Xiriir',
  },
  ar: {
    eyebrow: 'كيف نساعد',
    title: 'خدماتنا',
    intro: 'مبادرات تركز على المجتمع وتقوم على الرحمة والكرامة والتعاون.',
    focus: 'مجالات اهتمامنا',
    focusTitle: 'دعم يبدأ من المجتمع',
    focusDescription: 'يمكن تطوير أنشطتنا الاجتماعية وفقًا للاحتياجات المحلية والموارد المتاحة.',
    services: [
      {
        title: 'رعاية المجتمع',
        text: 'تشجيع المجتمع على دعم الأفراد والأسر الذين يواجهون صعوبات.',
      },
      {
        title: 'الغذاء والاحتياجات الأساسية',
        text: 'دعم المبادرات التي تساعد على تلبية الاحتياجات الأساسية، بما في ذلك الغذاء والمواد الضرورية.',
      },
      {
        title: 'التعليم والشباب',
        text: 'تشجيع الفرص التعليمية ومشاركة الشباب والتنمية الإيجابية للمجتمع.',
      },
      {
        title: 'مشاركة المجتمع',
        text: 'جمع الناس لتحديد الاحتياجات وتبادل الأفكار والمشاركة في أنشطة الرعاية الاجتماعية.',
      },
    ],
    draftNote: 'هذه أوصاف مقترحة للموقع. يرجى التأكد من الخدمات التي تقدمها المنظمة حاليًا قبل نشرها.',
    questions: 'هل لديكم أسئلة أو أفكار للشراكة؟',
    calloutTitle: 'لنعمل معًا لدعم مجتمعنا.',
    calloutText: 'تواصلوا معنا للاستفسار عن أنشطتنا ومبادراتنا الحالية.',
    contact: 'اتصل بنا',
  },
}

const serviceIcons = [HandHeart, Utensils, BookOpen, Users]

export default function Services() {
  const { language } = useLanguage()
  const t = translations[language] || translations.en

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
        <div className="container">
          <div className="section-heading">
            <span className="section-label">{t.focus}</span>
            <h2>{t.focusTitle}</h2>
            <p>{t.focusDescription}</p>
          </div>

          <div className="cards-grid services-grid">
            {t.services.map((service, index) => {
              const Icon = serviceIcons[index]

              return (
                <article className="feature-card service-card" key={service.title}>
                  <div className="feature-icon">
                    <Icon size={30} />
                  </div>
                  <h3>{service.title}</h3>
                  <p>{service.text}</p>
                </article>
              )
            })}
          </div>

          <p className="draft-note">{t.draftNote}</p>
        </div>
      </section>

      <section className="callout-section">
        <div className="container callout-content">
          <div>
            <span className="section-label section-label-light">{t.questions}</span>
            <h2>{t.calloutTitle}</h2>
            <p>{t.calloutText}</p>
          </div>
          <Link to="/contact" className="button button-light">
            {t.contact}
            <ArrowRight size={18} />
          </Link>
        </div>
      </section>
    </>
  )
}
