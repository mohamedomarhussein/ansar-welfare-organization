import { Link } from 'react-router-dom'
import {
  HeartHandshake,
  HandHeart,
  BookOpen,
  Utensils,
  Users,
  ShieldCheck,
  ArrowRight,
  Compass,
  Eye,
} from 'lucide-react'
import { useLanguage } from '../i18n/LanguageContext'

const translations = {
  en: {
    label: 'About our organization',
    title: 'Faith expressed through compassion and service.',
    intro: 'Since 2019, Ansar Welfare Organization has worked to bring Muslims together to support people in need, encourage Islamic learning, and share the blessings of Ramadan.',
    support: 'Support our work',
    story: 'Our story',
    storyTitle: 'Established in 2019 to serve the community',
    story1: 'Ansar Welfare Organization was established in 2019 with a commitment to helping needy Muslims and encouraging a spirit of generosity within the community.',
    story2: 'We believe that supporting people facing hardship is a shared responsibility. By bringing together contributions from compassionate Muslims and supporters, we seek to direct generosity towards charitable activities that benefit the community.',
    story3: 'Our activities include assisting needy people, organizing Friday-night Muhadhara at different mosques with different sheikhs, and providing free Iftar programmes during Ramadan.',
    story4: 'We are sustained by charitable contributions from fellow Muslims and supporters. The organization does not have another source of income, making the generosity of the community essential to continuing this work.',
    mission: 'Our mission',
    missionTitle: 'Serve with compassion',
    missionText: 'To bring people together through charitable assistance, Islamic learning and community support, while helping people facing hardship with dignity and kindness.',
    vision: 'Our vision',
    visionTitle: 'A caring and supportive community',
    visionText: 'To encourage a community where generosity, faith and shared responsibility help those in need and strengthen the bonds between people.',
    activities: 'Our activities',
    activitiesTitle: 'How we serve',
    activitiesText: 'Our work brings together charitable support, Islamic education and community care.',
    activity1: 'Charitable Assistance',
    activity1Text: 'Helping needy Muslims and families through voluntary contributions and community support.',
    activity2: 'Islamic Lectures',
    activity2Text: 'Organizing Friday-night Muhadhara at different mosques, featuring different sheikhs.',
    activity3: 'Ramadan Iftar',
    activity3Text: 'Providing free Iftar meals during Ramadan with the support of charitable donors.',
    principles: 'What guides us',
    principlesTitle: 'Principles behind our work',
    compassion: 'Compassion',
    compassionText: 'Treating people experiencing hardship with kindness, dignity and respect.',
    participation: 'Community participation',
    participationText: 'Encouraging Muslims and supporters to contribute towards charitable work according to their ability.',
    stewardship: 'Responsible stewardship',
    stewardshipText: 'Recognizing that charitable contributions are a trust and should be handled responsibly for their intended purpose.',
    continue: 'Help us continue',
    supportTitle: 'Community generosity makes our work possible.',
    supportText: 'Your contribution can support charitable assistance, Muhadhara activities and Ramadan Iftar programmes. We welcome people who want to learn more, contribute, or work with us to support the community.',
    donateOptions: 'Explore donation options',
    contact: 'Contact us',
  },
  sw: {
    label: 'Kuhusu shirika letu',
    title: 'Imani inayoonekana kupitia huruma na huduma.',
    intro: 'Tangu mwaka 2019, Ansar Welfare Organization imekuwa ikiwaunganisha Waislamu ili kuwasaidia wenye mahitaji, kuhimiza elimu ya Kiislamu na kushiriki baraka za Ramadhani.',
    support: 'Saidia kazi yetu',
    story: 'Historia yetu',
    storyTitle: 'Lililoanzishwa mwaka 2019 kuhudumia jamii',
    story1: 'Ansar Welfare Organization ilianzishwa mwaka 2019 kwa dhamira ya kuwasaidia Waislamu wenye mahitaji na kuhimiza moyo wa ukarimu katika jamii.',
    story2: 'Tunaamini kuwasaidia watu wanaokabiliwa na changamoto ni wajibu wa pamoja. Kwa kuunganisha michango kutoka kwa Waislamu wenye huruma na wafadhili, tunalenga kuelekeza ukarimu katika shughuli za hisani zinazoinufaisha jamii.',
    story3: 'Shughuli zetu zinajumuisha kuwasaidia wenye mahitaji, kuandaa mihadhara ya Ijumaa usiku katika misikiti mbalimbali na masheikh tofauti, pamoja na kutoa futari bila malipo wakati wa Ramadhani.',
    story4: 'Tunaendelezwa na michango ya hisani kutoka kwa Waislamu wenzetu na wafadhili. Shirika halina chanzo kingine cha mapato, hivyo ukarimu wa jamii ni muhimu ili kuendeleza kazi hii.',
    mission: 'Dhamira yetu',
    missionTitle: 'Kuhudumia kwa huruma',
    missionText: 'Kuwaunganisha watu kupitia msaada wa hisani, elimu ya Kiislamu na usaidizi wa jamii, huku tukiwasaidia wanaokabiliwa na changamoto kwa heshima na wema.',
    vision: 'Maono yetu',
    visionTitle: 'Jamii inayojali na kusaidiana',
    visionText: 'Kuhamasisha jamii ambamo ukarimu, imani na wajibu wa pamoja huwasaidia wenye mahitaji na kuimarisha uhusiano kati ya watu.',
    activities: 'Shughuli zetu',
    activitiesTitle: 'Jinsi tunavyohudumia',
    activitiesText: 'Kazi yetu inaunganisha msaada wa hisani, elimu ya Kiislamu na utunzaji wa jamii.',
    activity1: 'Msaada wa Hisani',
    activity1Text: 'Kuwasaidia Waislamu na familia zenye mahitaji kupitia michango ya hiari na usaidizi wa jamii.',
    activity2: 'Mihadhara ya Kiislamu',
    activity2Text: 'Kuandaa mihadhara ya Ijumaa usiku katika misikiti mbalimbali, ikihusisha masheikh tofauti.',
    activity3: 'Futari ya Ramadhani',
    activity3Text: 'Kutoa futari bila malipo wakati wa Ramadhani kwa msaada wa wafadhili.',
    principles: 'Misingi inayotuongoza',
    principlesTitle: 'Kanuni zinazoongoza kazi yetu',
    compassion: 'Huruma',
    compassionText: 'Kuwatendea watu wanaopitia changamoto kwa wema, heshima na utu.',
    participation: 'Ushiriki wa jamii',
    participationText: 'Kuwahimiza Waislamu na wafadhili kuchangia kazi za hisani kulingana na uwezo wao.',
    stewardship: 'Usimamizi wenye uwajibikaji',
    stewardshipText: 'Kutambua kwamba michango ya hisani ni amana na inapaswa kusimamiwa kwa uwajibikaji kwa madhumuni yaliyokusudiwa.',
    continue: 'Tusaidie kuendelea',
    supportTitle: 'Ukarimu wa jamii huwezesha kazi yetu.',
    supportText: 'Mchango wako unaweza kusaidia shughuli za hisani, mihadhara na futari za Ramadhani. Tunawakaribisha wanaotaka kujifunza zaidi, kuchangia au kushirikiana nasi kuhudumia jamii.',
    donateOptions: 'Angalia njia za kuchangia',
    contact: 'Wasiliana nasi',
  },
  so: {
    label: 'Ku saabsan ururkayaga',
    title: 'Iimaanka oo lagu muujiyo naxariis iyo adeeg.',
    intro: 'Tan iyo 2019, Ansar Welfare Organization waxay Muslimiinta isu keentay si ay u caawiyaan dadka baahan, u dhiirrigeliyaan barashada Islaamka, una wadaagaan barakada Ramadaanka.',
    support: 'Taageer hawshayada',
    story: 'Taariikhdeenna',
    storyTitle: 'Waxaa la aasaasay 2019 si loogu adeego bulshada',
    story1: 'Ansar Welfare Organization waxaa la aasaasay 2019 iyadoo ay ka go’an tahay caawinta Muslimiinta baahan iyo dhiirrigelinta deeqsinimada bulshada dhexdeeda.',
    story2: 'Waxaan aaminsanahay in caawinta dadka dhibaatooyinka wajahaya ay tahay mas’uuliyad wadajir ah. Annagoo isu keenayna deeqaha Muslimiinta naxariista leh iyo taageerayaasha, waxaan doonaynaa in deeqsinimada lagu taageero hawlo samafal oo bulshada anfaca.',
    story3: 'Hawlaha ururka waxaa ka mid ah caawinta dadka baahan, qabashada muxaadarooyinka habeenka Jimcaha ee masaajidyo kala duwan oo ay jeediyaan culimo kala duwan, iyo bixinta afur bilaash ah bisha Ramadaan.',
    story4: 'Hawlaheenna waxaa lagu taageeraa deeqaha Muslimiinta iyo taageerayaasha. Ururku ma laha ilo kale oo dakhli ah, sidaas darteed deeqsinimada bulshadu waxay muhiim u tahay sii wadista shaqadan.',
    mission: 'Himiladeenna',
    missionTitle: 'Inaan ugu adeegno naxariis',
    missionText: 'In dadka la isu keeno iyadoo loo marayo caawinta samafalka, barashada Islaamka iyo taageerada bulshada, lana caawiyo dadka dhibaatooyinka wajahaya si sharaf iyo naxariis leh.',
    vision: 'Aragtideenna',
    visionTitle: 'Bulsho is daryeesha oo is taageerta',
    visionText: 'In la dhiirrigeliyo bulsho ay deeqsinimada, iimaanka iyo mas’uuliyadda wadajirka ahi ku caawiyaan dadka baahan kuna xoojiyaan xiriirka dadka.',
    activities: 'Hawlaha aan qabanno',
    activitiesTitle: 'Sida aan u adeegno',
    activitiesText: 'Shaqadeennu waxay isku keentaa taageerada samafalka, waxbarashada Islaamka iyo daryeelka bulshada.',
    activity1: 'Caawinta Samafalka',
    activity1Text: 'Caawinta Muslimiinta iyo qoysaska baahan iyadoo la adeegsanayo tabarucaad iyo taageerada bulshada.',
    activity2: 'Muxaadarooyinka Islaamka',
    activity2Text: 'Qabashada muxaadarooyinka habeenka Jimcaha ee masaajidyo kala duwan oo ay jeediyaan culimo kala duwan.',
    activity3: 'Afurka Ramadaanka',
    activity3Text: 'Bixinta afur bilaash ah bisha Ramadaan iyadoo ay taageerayaan deeq-bixiyeyaasha.',
    principles: 'Waxyaabaha na haga',
    principlesTitle: 'Mabaadi’da hagta shaqadeenna',
    compassion: 'Naxariis',
    compassionText: 'In dadka dhibaatooyinka wajahaya loola dhaqmo naxariis, sharaf iyo ixtiraam.',
    participation: 'Ka-qaybgalka bulshada',
    participationText: 'In Muslimiinta iyo taageerayaasha lagu dhiirrigeliyo inay wax ku darsadaan samafalka intii ay awoodaan.',
    stewardship: 'Maamul masuuliyad leh',
    stewardshipText: 'In la aqoonsado in deeqaha samafalku yihiin amaano oo si masuuliyad leh loogu isticmaalo ujeeddadii loogu talagalay.',
    continue: 'Naga caawi inaan sii wadno',
    supportTitle: 'Deeqsinimada bulshadu waxay suuragelisaa shaqadeenna.',
    supportText: 'Deeqdaadu waxay taageeri kartaa samafalka, muxaadarooyinka iyo barnaamijyada afurka Ramadaanka. Waxaan soo dhoweyneynaa dadka doonaya inay wax badan bartaan, wax ku darsadaan ama nala shaqeeyaan si bulshada loo taageero.',
    donateOptions: 'Eeg siyaabaha deeq loo bixiyo',
    contact: 'Nala soo xiriir',
  },
  ar: {
    label: 'عن منظمتنا',
    title: 'الإيمان الذي يظهر من خلال الرحمة والخدمة.',
    intro: 'منذ عام 2019، تعمل منظمة أنصار للرعاية الاجتماعية على جمع المسلمين لمساعدة المحتاجين وتشجيع التعلم الإسلامي ومشاركة بركات رمضان.',
    support: 'ادعم أعمالنا',
    story: 'قصتنا',
    storyTitle: 'تأسست عام 2019 لخدمة المجتمع',
    story1: 'تأسست منظمة أنصار للرعاية الاجتماعية عام 2019 بهدف مساعدة المسلمين المحتاجين وتشجيع روح الكرم داخل المجتمع.',
    story2: 'نؤمن بأن مساعدة الأشخاص الذين يواجهون الصعوبات مسؤولية مشتركة. ومن خلال جمع مساهمات المسلمين المتعاطفين والداعمين، نسعى إلى توجيه العطاء نحو الأنشطة الخيرية التي تفيد المجتمع.',
    story3: 'تشمل أنشطتنا مساعدة المحتاجين وتنظيم محاضرات ليلة الجمعة في مساجد مختلفة يقدمها مشايخ متنوعون، وتوفير برامج إفطار مجانية خلال شهر رمضان.',
    story4: 'تعتمد أنشطتنا على التبرعات الخيرية من إخواننا المسلمين والداعمين. ولا تملك المنظمة مصدر دخل آخر، ولذلك فإن كرم المجتمع ضروري لاستمرار هذا العمل.',
    mission: 'رسالتنا',
    missionTitle: 'الخدمة برحمة',
    missionText: 'جمع الناس من خلال المساعدة الخيرية والتعلم الإسلامي ودعم المجتمع، مع مساعدة من يواجهون الصعوبات بكرامة ولطف.',
    vision: 'رؤيتنا',
    visionTitle: 'مجتمع متعاون ومهتم بالآخرين',
    visionText: 'تشجيع مجتمع يساعد فيه الكرم والإيمان والمسؤولية المشتركة المحتاجين ويعزز الروابط بين الناس.',
    activities: 'أنشطتنا',
    activitiesTitle: 'كيف نخدم المجتمع',
    activitiesText: 'تجمع أعمالنا بين الدعم الخيري والتعليم الإسلامي ورعاية المجتمع.',
    activity1: 'المساعدة الخيرية',
    activity1Text: 'مساعدة المسلمين والأسر المحتاجة من خلال المساهمات الطوعية ودعم المجتمع.',
    activity2: 'المحاضرات الإسلامية',
    activity2Text: 'تنظيم محاضرات ليلة الجمعة في مساجد مختلفة يقدمها مشايخ متنوعون.',
    activity3: 'إفطار رمضان',
    activity3Text: 'تقديم وجبات إفطار مجانية خلال رمضان بدعم من المتبرعين.',
    principles: 'ما يوجّهنا',
    principlesTitle: 'المبادئ التي تقوم عليها أعمالنا',
    compassion: 'الرحمة',
    compassionText: 'معاملة الأشخاص الذين يواجهون الصعوبات بلطف وكرامة واحترام.',
    participation: 'مشاركة المجتمع',
    participationText: 'تشجيع المسلمين والداعمين على المساهمة في الأعمال الخيرية حسب استطاعتهم.',
    stewardship: 'الأمانة والمسؤولية',
    stewardshipText: 'الإقرار بأن التبرعات الخيرية أمانة يجب إدارتها بمسؤولية واستخدامها للغرض المخصص لها.',
    continue: 'ساعدونا على الاستمرار',
    supportTitle: 'كرم المجتمع يجعل أعمالنا ممكنة.',
    supportText: 'يمكن لمساهمتكم دعم المساعدات الخيرية والمحاضرات وبرامج إفطار رمضان. نرحب بكل من يرغب في معرفة المزيد أو التبرع أو العمل معنا لخدمة المجتمع.',
    donateOptions: 'استكشف طرق التبرع',
    contact: 'اتصل بنا',
  },
}

export default function About() {
  const { language } = useLanguage()
  const t = translations[language] || translations.en

  const activities = [
    { icon: HandHeart, title: t.activity1, description: t.activity1Text },
    { icon: BookOpen, title: t.activity2, description: t.activity2Text },
    { icon: Utensils, title: t.activity3, description: t.activity3Text },
  ]

  return (
    <div className="about-page">
      <section className="page-hero about-hero">
        <div className="container">
          <span className="section-label">{t.label}</span>
          <h1>{t.title}</h1>
          <p>{t.intro}</p>
          <Link to="/donations" className="button button-primary">
            {t.support}
            <ArrowRight size={18} />
          </Link>
        </div>
      </section>

      <section className="section container about-story-section">
        <div className="about-story-icon">
          <HeartHandshake size={43} />
        </div>
        <div className="about-story-content">
          <span className="section-label">{t.story}</span>
          <h2>{t.storyTitle}</h2>
          <p>{t.story1}</p>
          <p>{t.story2}</p>
          <p>{t.story3}</p>
          <p>{t.story4}</p>
        </div>
      </section>

      <section className="about-mission-vision section">
        <div className="container about-mission-grid">
          <article className="about-mission-card">
            <div className="about-mission-icon">
              <Compass size={28} />
            </div>
            <span className="section-label">{t.mission}</span>
            <h2>{t.missionTitle}</h2>
            <p>{t.missionText}</p>
          </article>

          <article className="about-mission-card about-vision-card">
            <div className="about-mission-icon">
              <Eye size={28} />
            </div>
            <span className="section-label">{t.vision}</span>
            <h2>{t.visionTitle}</h2>
            <p>{t.visionText}</p>
          </article>
        </div>
      </section>

      <section className="about-activities-section section">
        <div className="container">
          <div className="section-heading">
            <span className="section-label">{t.activities}</span>
            <h2>{t.activitiesTitle}</h2>
            <p>{t.activitiesText}</p>
          </div>
          <div className="about-activity-grid">
            {activities.map(({ icon: Icon, title, description }) => (
              <article className="about-activity-card" key={title}>
                <div className="about-activity-icon">
                  <Icon size={29} />
                </div>
                <h3>{title}</h3>
                <p>{description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section container about-principles-section">
        <div className="about-principles-heading">
          <span className="section-label">{t.principles}</span>
          <h2>{t.principlesTitle}</h2>
        </div>

        <div className="about-principle">
          <HandHeart size={25} />
          <div>
            <h3>{t.compassion}</h3>
            <p>{t.compassionText}</p>
          </div>
        </div>

        <div className="about-principle">
          <Users size={25} />
          <div>
            <h3>{t.participation}</h3>
            <p>{t.participationText}</p>
          </div>
        </div>

        <div className="about-principle">
          <ShieldCheck size={25} />
          <div>
            <h3>{t.stewardship}</h3>
            <p>{t.stewardshipText}</p>
          </div>
        </div>
      </section>

      <section className="about-support-section section">
        <div className="container about-support-inner">
          <span className="section-label">{t.continue}</span>
          <h2>{t.supportTitle}</h2>
          <p>{t.supportText}</p>
          <div className="about-support-actions">
            <Link to="/donations" className="button button-primary">
              {t.donateOptions}
              <ArrowRight size={18} />
            </Link>
            <Link to="/contact" className="button button-secondary">
              {t.contact}
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
