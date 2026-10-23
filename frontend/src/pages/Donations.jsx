import { useState } from 'react'
import {
  Heart,
  Smartphone,
  Banknote,
  FileText,
  Utensils,
  HandHeart,
  Copy,
} from 'lucide-react'
import { useLanguage } from '../i18n/LanguageContext'

const donationMethods = [
  { name: 'M-Pesa', icon: Smartphone },
  { name: 'Cash', icon: Banknote },
  { name: 'Cheque', icon: FileText },
  { name: 'Food', icon: Utensils },
  { name: 'Others', icon: HandHeart },
]

const translations = {
  en: {
    label: 'Give with compassion',
    heroTitle: 'Your generosity can change a life.',
    heroText: 'Ansar Welfare Organization brings Muslims together to support needy people, organize Islamic lectures, and provide Iftar programmes during Ramadan. Your contribution helps sustain this community work.',
    difference: 'Make a difference',
    contributionTitle: 'Every contribution matters.',
    contributionText: 'Established in 2019, Ansar Welfare Organization depends on charitable contributions from fellow Muslims and supporters. We have no other source of income, so your generosity is important to the continuation of our activities.',
    giveAbility: 'Give according to your ability',
    abilityText: 'Your support can help us assist needy Muslims, organize Friday-night Muhadhara at different mosques, and provide free Iftar meals during Ramadan.',
    chooseMethod: 'Choose a donation method',
    selectMethod: 'Select how you would like to contribute.',
    methods: { 'M-Pesa': 'M-Pesa', Cash: 'Cash', Cheque: 'Cheque', Food: 'Food', Others: 'Other items' },
    mpesaTitle: 'M-Pesa Paybill',
    paymentIntro: 'Use these details in your M-Pesa menu. Each value has its own copy button.',
    paybillLabel: 'Business number (Paybill)',
    accountLabel: 'Account number',
    donorNameLabel: 'Your full name',
    donorNamePlaceholder: 'Enter your full name',
    copyName: 'Copy Name',
    copyPaybill: 'Copy Paybill',
    copyAccount: 'Copy Account',
    copied: 'Copied!',
    howMpesa: 'How to donate using M-Pesa',
    mpesaSteps: [
      'Open M-Pesa on your phone.',
      'Select Lipa na M-Pesa, then Pay Bill.',
      'Enter the Paybill number shown above.',
      'Enter the account number shown above.',
      'Enter your donation amount and confirm the details.',
      'Keep your M-Pesa confirmation message.',
    ],
    verifyDetails: 'Please verify the Paybill and account details before sending money.',
    paymentStatus: 'Online payment status',
    paymentStatusText: 'Automated STK Push payments are not yet enabled. These are manual Paybill instructions only. Never share your M-Pesa PIN with anyone.',
    cashTitle: 'Cash donations',
    cashText: 'Contact or visit our office to arrange a cash contribution and ask how your donation will be acknowledged.',
    office: 'Office:',
    contactOffice: 'Contact our office',
    chequeTitle: 'Cheque donations',
    chequeText: 'Contact our office for cheque payee details and instructions before preparing your cheque.',
    chequeButton: 'Request cheque details',
    foodTitle: 'Food contributions',
    foodText: 'Contact us first to coordinate suitable food items, quantities, and delivery arrangements for community support or Ramadan Iftar.',
    foodButton: 'Arrange a contribution',
    otherTitle: 'Other contributions',
    otherText: 'For other forms of support or partnership, contact our team to discuss suitable arrangements.',
    emailButton: 'Contact us by email',
    assistance: 'Need assistance?',
    helpTitle: 'We are happy to help.',
    helpText: 'Contact Ansar Welfare Organization if you have questions about contributing or supporting our work.',
    copyPrompt: 'Copy this',
  },
  sw: {
    label: 'Toa kwa huruma',
    heroTitle: 'Ukarimu wako unaweza kubadilisha maisha.',
    heroText: 'Ansar Welfare Organization huwaunganisha Waislamu kuwasaidia wenye uhitaji, kuandaa mihadhara ya Kiislamu na kutoa futari wakati wa Ramadhani. Mchango wako husaidia kuendeleza kazi hii ya jamii.',
    difference: 'Leta mabadiliko',
    contributionTitle: 'Kila mchango una umuhimu.',
    contributionText: 'Ansar Welfare Organization ilianzishwa mwaka 2019 na hutegemea michango ya hisani kutoka kwa Waislamu na wafadhili. Hatuna chanzo kingine cha mapato, hivyo ukarimu wako ni muhimu katika kuendeleza shughuli zetu.',
    giveAbility: 'Toa kulingana na uwezo wako',
    abilityText: 'Msaada wako unaweza kutuwezesha kuwasaidia Waislamu wenye uhitaji, kuandaa mihadhara ya Ijumaa usiku katika misikiti mbalimbali na kutoa futari ya bure wakati wa Ramadhani.',
    chooseMethod: 'Chagua njia ya kutoa mchango',
    selectMethod: 'Chagua jinsi ungependa kuchangia.',
    methods: { 'M-Pesa': 'M-Pesa', Cash: 'Pesa taslimu', Cheque: 'Hundi', Food: 'Chakula', Others: 'Vitu vingine' },
    mpesaTitle: 'Lipa kwa M-Pesa Paybill',
    paymentIntro: 'Tumia maelezo haya kwenye menyu ya M-Pesa. Kila namba ina kitufe chake cha kunakili.',
    paybillLabel: 'Nambari ya biashara (Paybill)',
    accountLabel: 'Nambari ya akaunti',
    donorNameLabel: 'Jina lako kamili',
    donorNamePlaceholder: 'Weka jina lako kamili',
    copyName: 'Nakili jina',
    copyPaybill: 'Nakili Paybill',
    copyAccount: 'Nakili akaunti',
    copied: 'Imenakiliwa!',
    howMpesa: 'Jinsi ya kuchangia kupitia M-Pesa',
    mpesaSteps: [
      'Fungua M-Pesa kwenye simu yako.',
      'Chagua Lipa na M-Pesa, kisha Pay Bill.',
      'Weka nambari ya Paybill iliyoonyeshwa hapo juu.',
      'Weka nambari ya akaunti iliyoonyeshwa hapo juu.',
      'Weka kiasi cha mchango na uthibitishe maelezo.',
      'Hifadhi ujumbe wa uthibitisho wa M-Pesa.',
    ],
    verifyDetails: 'Tafadhali hakikisha nambari za Paybill na akaunti ni sahihi kabla ya kutuma pesa.',
    paymentStatus: 'Hali ya malipo ya mtandaoni',
    paymentStatusText: 'Malipo ya kiotomatiki ya STK Push bado hayajawezeshwa. Haya ni maelekezo ya kawaida ya Paybill pekee. Usimpe mtu yeyote PIN yako ya M-Pesa.',
    cashTitle: 'Michango ya pesa taslimu',
    cashText: 'Wasiliana nasi au tembelea ofisi yetu kupanga mchango wa pesa taslimu na kuuliza jinsi mchango wako utakavyothibitishwa.',
    office: 'Ofisi:',
    contactOffice: 'Wasiliana na ofisi yetu',
    chequeTitle: 'Michango ya hundi',
    chequeText: 'Wasiliana na ofisi yetu kupata maelezo ya mlipwaji wa hundi na maelekezo kabla ya kuandika hundi.',
    chequeButton: 'Omba maelezo ya hundi',
    foodTitle: 'Michango ya chakula',
    foodText: 'Wasiliana nasi kwanza kupanga aina na kiasi cha chakula pamoja na utaratibu wa kukifikisha kwa ajili ya msaada wa jamii au futari ya Ramadhani.',
    foodButton: 'Panga mchango',
    otherTitle: 'Michango mingine',
    otherText: 'Kwa aina nyingine za msaada au ushirikiano, wasiliana na timu yetu ili kujadili utaratibu unaofaa.',
    emailButton: 'Wasiliana nasi kwa barua pepe',
    assistance: 'Unahitaji msaada?',
    helpTitle: 'Tuko tayari kukusaidia.',
    helpText: 'Wasiliana na Ansar Welfare Organization ikiwa una maswali kuhusu kutoa mchango au kusaidia kazi yetu.',
    copyPrompt: 'Nakili hii',
  },
  so: {
    label: 'Wax ku bixi naxariis',
    heroTitle: 'Deeqsinimadaadu waxay beddeli kartaa nolol.',
    heroText: 'Ansar Welfare Organization waxay Muslimiinta isu keentaa si ay u caawiyaan dadka baahan, u abaabulaan muxaadarooyin Islaami ah, una bixiyaan afur bisha Ramadaan. Wax ku biirintaadu waxay taageertaa hawlahan bulshada.',
    difference: 'Samee isbeddel',
    contributionTitle: 'Wax ku biirin kastaa waa muhiim.',
    contributionText: 'Ansar Welfare Organization waxaa la aasaasay 2019, waxayna ku tiirsan tahay tabarucaadka Muslimiinta iyo taageerayaasha. Ma lihin ilo kale oo dakhli ah, sidaas darteed deeqsinimadaadu waxay muhiim u tahay sii socoshada hawlaheenna.',
    giveAbility: 'Ku bixi inta aad awooddo',
    abilityText: 'Taageeradaadu waxay naga caawin kartaa inaan caawinno Muslimiinta baahan, abaabulno muxaadarooyinka habeenka Jimcaha ee masaajidyo kala duwan, isla markaana bixinno afur bilaash ah bisha Ramadaan.',
    chooseMethod: 'Dooro habka tabarucaadka',
    selectMethod: 'Dooro sida aad jeclaan lahayd inaad wax ugu tabarucdo.',
    methods: { 'M-Pesa': 'M-Pesa', Cash: 'Lacag caddaan ah', Cheque: 'Jeeg', Food: 'Cunto', Others: 'Alaabo kale' },
    mpesaTitle: 'M-Pesa Paybill',
    paymentIntro: 'Faahfaahintan ku isticmaal menu-ga M-Pesa. Nambar kasta wuxuu leeyahay badhan lagu koobiyeeyo.',
    paybillLabel: 'Lambarka ganacsiga (Paybill)',
    accountLabel: 'Lambarka akoonka',
    donorNameLabel: 'Magacaaga oo buuxa',
    donorNamePlaceholder: 'Geli magacaaga oo buuxa',
    copyName: 'Koobi magaca',
    copyPaybill: 'Koobi Paybill',
    copyAccount: 'Koobi akoonka',
    copied: 'Waa la koobiyeeyay!',
    howMpesa: 'Sida M-Pesa wax loogu tabarucdo',
    mpesaSteps: [
      'Fur M-Pesa taleefankaaga.',
      'Dooro Lipa na M-Pesa, kadib Pay Bill.',
      'Geli lambarka Paybill ee kor ku qoran.',
      'Geli lambarka akoonka ee kor ku qoran.',
      'Geli lacagta aad bixinayso oo xaqiiji faahfaahinta.',
      'Hayso farriinta xaqiijinta M-Pesa.',
    ],
    verifyDetails: 'Fadlan xaqiiji lambarrada Paybill iyo akoonka ka hor intaadan lacag dirin.',
    paymentStatus: 'Xaaladda lacag-bixinta internetka',
    paymentStatusText: 'Lacag-bixinta tooska ah ee STK Push weli lama hawlgelin. Kuwani waa tilmaamaha Paybill ee gacanta. Qofna ha la wadaagin PIN-kaaga M-Pesa.',
    cashTitle: 'Tabarucaadka lacagta caddaanka ah',
    cashText: 'Nala soo xiriir ama booqo xafiiskayaga si aad u qorshayso tabarucaad lacageed oo aad u ogaato sida loo xaqiijinayo.',
    office: 'Xafiiska:',
    contactOffice: 'La xiriir xafiiskayaga',
    chequeTitle: 'Tabarucaadka jeegga',
    chequeText: 'La xiriir xafiiskayaga si aad u hesho magaca qofka jeegga loo qorayo iyo tilmaamaha ka hor diyaarinta jeegga.',
    chequeButton: 'Codso faahfaahinta jeegga',
    foodTitle: 'Tabarucaadka cuntada',
    foodText: 'Marka hore nala soo xiriir si aan u qorshayno nooca cuntada, tirada iyo gaarsiinta loogu talagalay taageerada bulshada ama afurka Ramadaanka.',
    foodButton: 'Qorshee tabarucaad',
    otherTitle: 'Tabarucaadyo kale',
    otherText: 'Taageero ama iskaashi nooc kale ah, la xiriir kooxdayada si aad uga wada hadashaan hab ku habboon.',
    emailButton: 'Nagula soo xiriir iimayl',
    assistance: 'Ma u baahan tahay caawimaad?',
    helpTitle: 'Waan ku faraxsanahay inaan ku caawinno.',
    helpText: 'La xiriir Ansar Welfare Organization haddii aad su’aalo ka qabto tabarucaadka ama taageeridda hawlaheenna.',
    copyPrompt: 'Koobi tan',
  },
  ar: {
    label: 'العطاء برحمة',
    heroTitle: 'كرمك يمكن أن يغيّر حياة.',
    heroText: 'تجمع منظمة أنصار للرعاية الاجتماعية المسلمين لمساعدة المحتاجين وتنظيم المحاضرات الإسلامية وتقديم الإفطار خلال شهر رمضان. تساهم تبرعاتكم في استمرار هذه الأعمال المجتمعية.',
    difference: 'ساهم في إحداث فرق',
    contributionTitle: 'كل مساهمة مهمة.',
    contributionText: 'تأسست منظمة أنصار للرعاية الاجتماعية عام 2019، وتعتمد على التبرعات الخيرية من المسلمين والداعمين. ليس لدينا مصدر دخل آخر، لذلك فإن كرمكم مهم لاستمرار أنشطتنا.',
    giveAbility: 'تبرع حسب استطاعتك',
    abilityText: 'يمكن أن تساعدنا مساهمتكم في دعم المسلمين المحتاجين وتنظيم محاضرات ليلة الجمعة في مساجد مختلفة وتقديم وجبات إفطار مجانية خلال رمضان.',
    chooseMethod: 'اختر طريقة التبرع',
    selectMethod: 'اختر الطريقة التي تود المساهمة بها.',
    methods: { 'M-Pesa': 'إم-بيسا', Cash: 'نقداً', Cheque: 'شيك', Food: 'طعام', Others: 'مواد أخرى' },
    mpesaTitle: 'الدفع عبر إم-بيسا Paybill',
    paymentIntro: 'استخدم هذه التفاصيل في قائمة إم-بيسا. لكل رقم زر خاص للنسخ.',
    paybillLabel: 'رقم النشاط التجاري (Paybill)',
    accountLabel: 'رقم الحساب',
    donorNameLabel: 'اسمك الكامل',
    donorNamePlaceholder: 'أدخل اسمك الكامل',
    copyName: 'نسخ الاسم',
    copyPaybill: 'نسخ Paybill',
    copyAccount: 'نسخ الحساب',
    copied: 'تم النسخ!',
    howMpesa: 'كيفية التبرع عبر إم-بيسا',
    mpesaSteps: [
      'افتح إم-بيسا على هاتفك.',
      'اختر Lipa na M-Pesa ثم Pay Bill.',
      'أدخل رقم Paybill الموضح أعلاه.',
      'أدخل رقم الحساب الموضح أعلاه.',
      'أدخل مبلغ التبرع وتأكد من التفاصيل.',
      'احتفظ برسالة تأكيد إم-بيسا.',
    ],
    verifyDetails: 'يرجى التأكد من رقم Paybill ورقم الحساب قبل إرسال الأموال.',
    paymentStatus: 'حالة الدفع الإلكتروني',
    paymentStatusText: 'لم يتم تفعيل الدفع الآلي عبر STK Push بعد. هذه تعليمات دفع Paybill يدوية فقط. لا تشارك رقم PIN الخاص بإم-بيسا مع أي شخص.',
    cashTitle: 'التبرعات النقدية',
    cashText: 'اتصل بمكتبنا أو قم بزيارته لترتيب التبرع النقدي والاستفسار عن كيفية تأكيد استلام تبرعك.',
    office: 'المكتب:',
    contactOffice: 'اتصل بمكتبنا',
    chequeTitle: 'التبرعات بالشيكات',
    chequeText: 'اتصل بمكتبنا للحصول على بيانات المستفيد وتعليمات الشيك قبل إعداده.',
    chequeButton: 'اطلب بيانات الشيك',
    foodTitle: 'التبرع بالطعام',
    foodText: 'يرجى التواصل معنا أولاً لتنسيق أنواع الطعام والكميات وطريقة التسليم لدعم المجتمع أو وجبات إفطار رمضان.',
    foodButton: 'رتب مساهمتك',
    otherTitle: 'مساهمات أخرى',
    otherText: 'لأشكال الدعم أو الشراكة الأخرى، تواصل مع فريقنا لمناقشة الترتيبات المناسبة.',
    emailButton: 'تواصل معنا عبر البريد الإلكتروني',
    assistance: 'هل تحتاج إلى مساعدة؟',
    helpTitle: 'يسعدنا مساعدتك.',
    helpText: 'تواصل مع منظمة أنصار للرعاية الاجتماعية إذا كانت لديك أسئلة حول التبرع أو دعم أنشطتنا.',
    copyPrompt: 'انسخ هذا',
  },
}

export default function Donations() {
  const { language } = useLanguage()
  const text = translations[language] || translations.en
  const [method, setMethod] = useState('M-Pesa')
  const [donorName, setDonorName] = useState('')
  const [copiedField, setCopiedField] = useState('')

  async function copyValue(value, fieldName) {
    let copied = false

    try {
      if (navigator.clipboard && window.isSecureContext) {
        await navigator.clipboard.writeText(value)
        copied = true
      }
    } catch {
      // Use the compatibility fallback below.
    }

    if (!copied) {
      const textArea = document.createElement('textarea')
      textArea.value = value
      textArea.setAttribute('readonly', '')
      textArea.style.position = 'fixed'
      textArea.style.left = '-9999px'
      textArea.style.top = '0'
      document.body.appendChild(textArea)
      textArea.select()
      textArea.setSelectionRange(0, textArea.value.length)

      try {
        copied = document.execCommand('copy')
      } catch {
        copied = false
      }

      textArea.remove()
    }

    if (copied) {
      setCopiedField(fieldName)
      window.setTimeout(() => setCopiedField(''), 2200)
    } else {
      window.prompt(`${text.copyPrompt} ${fieldName}:`, value)
    }
  }

  const methodDetails = {
    'M-Pesa': { icon: Smartphone, title: text.mpesaTitle },
    Cash: { icon: Banknote, title: text.cashTitle },
    Cheque: { icon: FileText, title: text.chequeTitle },
    Food: { icon: Utensils, title: text.foodTitle },
    Others: { icon: HandHeart, title: text.otherTitle },
  }

  return (
    <div className="donations-page">
      <section className="page-hero">
        <div className="container">
          <span className="section-label">{text.label}</span>
          <h1>{text.heroTitle}</h1>
          <p>{text.heroText}</p>
        </div>
      </section>

      <section className="section container">
        <div className="donation-layout">
          <div className="donation-intro">
            <span className="section-label">{text.difference}</span>
            <h2>{text.contributionTitle}</h2>
            <p>{text.contributionText}</p>

            <div className="donation-note">
              <Heart size={23} />
              <div>
                <h3>{text.giveAbility}</h3>
                <p>{text.abilityText}</p>
              </div>
            </div>
          </div>

          <div className="donation-card">
            <h2>{text.chooseMethod}</h2>
            <p className="donation-card-description">{text.selectMethod}</p>

            <div className="donation-methods">
              {donationMethods.map(({ name, icon: Icon }) => (
                <button
                  type="button"
                  key={name}
                  className={`donation-method ${method === name ? 'active' : ''}`}
                  onClick={() => setMethod(name)}
                  aria-pressed={method === name}
                >
                  <Icon size={21} />
                  <span>{text.methods[name]}</span>
                </button>
              ))}
            </div>

            {method === 'M-Pesa' && (
              <div className="payment-details">
                <div className="payment-heading">
                  <Smartphone size={24} />
                  <h3>{text.mpesaTitle}</h3>
                </div>
                <p>{text.paymentIntro}</p>

                <div className="payment-row">
                  <div className="payment-row-text">
                    <span>{text.paybillLabel}</span>
                    <strong>4133187</strong>
                  </div>
                  <button
                    type="button"
                    className="payment-copy-button"
                    onClick={() => copyValue('4133187', 'Paybill number')}
                  >
                    {copiedField === 'Paybill number' ? '✓' : <Copy size={17} />}
                    {copiedField === 'Paybill number' ? text.copied : text.copyPaybill}
                  </button>
                </div>

                <div className="payment-row">
                  <div className="payment-row-text">
                    <label htmlFor="donor-full-name">{text.donorNameLabel}</label>
                    <input
                      id="donor-full-name"
                      className="donor-name-input"
                      type="text"
                      autoComplete="name"
                      value={donorName}
                      onChange={(event) => setDonorName(event.target.value)}
                      placeholder={text.donorNamePlaceholder}
                      maxLength={100}
                    />
                  </div>
                  <button
                    type="button"
                    className="payment-copy-button"
                    disabled={!donorName.trim()}
                    onClick={() => copyValue(donorName.trim(), 'donor name')}
                  >
                    {copiedField === 'donor name' ? '✓' : <Copy size={17} />}
                    {copiedField === 'donor name' ? text.copied : text.copyName}
                  </button>
                </div>

                <div className="mpesa-instructions">
                  <h4>{text.howMpesa}</h4>
                  <ol>
                    {text.mpesaSteps.map((step) => <li key={step}>{step}</li>)}
                  </ol>
                </div>

                <p className="payment-disclaimer">{text.verifyDetails}</p>

                <div className="payment-status-note">
                  <strong>{text.paymentStatus}</strong>
                  <p>{text.paymentStatusText}</p>
                </div>
              </div>
            )}

            {method === 'Cash' && (
              <div className="payment-details">
                <div className="payment-heading">
                  <Banknote size={24} />
                  <h3>{text.cashTitle}</h3>
                </div>
                <p>{text.cashText}</p>
                <p className="office-detail">
                  <strong>{text.office}</strong> Iftin, opposite Sada Mosque
                </p>
                <a className="button button-primary" href="tel:0721133156">{text.contactOffice}</a>
              </div>
            )}

            {method === 'Cheque' && (
              <div className="payment-details">
                <div className="payment-heading">
                  <FileText size={24} />
                  <h3>{text.chequeTitle}</h3>
                </div>
                <p>{text.chequeText}</p>
                <a className="button button-primary" href="tel:0721133156">{text.chequeButton}</a>
              </div>
            )}

            {method === 'Food' && (
              <div className="payment-details">
                <div className="payment-heading">
                  <Utensils size={24} />
                  <h3>{text.foodTitle}</h3>
                </div>
                <p>{text.foodText}</p>
                <a className="button button-primary" href="tel:0721133156">{text.foodButton}</a>
              </div>
            )}

            {method === 'Others' && (
              <div className="payment-details">
                <div className="payment-heading">
                  <HandHeart size={24} />
                  <h3>{text.otherTitle}</h3>
                </div>
                <p>{text.otherText}</p>
                <a className="button button-primary" href="mailto:ansarwelfareorganization7@gmail.com">
                  {text.emailButton}
                </a>
              </div>
            )}
          </div>
        </div>
      </section>

      <section className="section donation-contact-section">
        <div className="container donation-contact">
          <div>
            <span className="section-label">{text.assistance}</span>
            <h2>{text.helpTitle}</h2>
            <p>{text.helpText}</p>
          </div>

          <div className="donation-contact-details">
            <a href="tel:0721133156">0721 133 156</a>
            <a href="tel:0723003071">0723 003 071</a>
            <a href="mailto:ansarwelfareorganization7@gmail.com">
              ansarwelfareorganization7@gmail.com
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}
