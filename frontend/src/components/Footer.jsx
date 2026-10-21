import { Link } from 'react-router-dom'
import {
  HeartHandshake,
  MapPin,
  Phone,
  Mail,
  Smartphone,
} from 'lucide-react'
import { useLanguage } from '../i18n/LanguageContext'

const footerTranslations = {
  en: {
    organization: 'Organization',
    description: 'Working together to support people, strengthen our community, and build a better future.',
    support: 'Support our work',
    quickLinks: 'Quick Links',
    home: 'Home',
    about: 'About Us',
    services: 'Our Services',
    donations: 'Donations',
    lectures: 'Islamic Lectures',
    contact: 'Contact',
    contactUs: 'Contact Us',
    emailOrganization: 'Email the organization',
    supportWork: 'Support Our Work',
    paybill: 'M-Pesa Paybill:',
    account: 'Account:',
    paymentNote: 'Please verify payment details before sending a contribution.',
    donationInstructions: 'View donation instructions',
    rights: 'All rights reserved.',
    terms: 'Terms & Conditions',
    privacy: 'Privacy Policy',
    location: 'Iftin, opposite Sada Mosque',
  },
  sw: {
    organization: 'Shirika',
    description: 'Tukishirikiana, tunasaidia watu wenye uhitaji, kuimarisha jamii yetu na kujenga mustakabali bora.',
    support: 'Saidia kazi yetu',
    quickLinks: 'Viungo vya Haraka',
    home: 'Nyumbani',
    about: 'Kuhusu Sisi',
    services: 'Huduma Zetu',
    donations: 'Michango',
    lectures: 'Mihadhara ya Kiislamu',
    contact: 'Wasiliana Nasi',
    contactUs: 'Wasiliana Nasi',
    emailOrganization: 'Tuma barua pepe kwa shirika',
    supportWork: 'Saidia Kazi Yetu',
    paybill: 'Nambari ya M-Pesa Paybill:',
    account: 'Akaunti:',
    paymentNote: 'Tafadhali hakikisha maelezo ya malipo kabla ya kutuma mchango.',
    donationInstructions: 'Angalia maelekezo ya kuchangia',
    rights: 'Haki zote zimehifadhiwa.',
    terms: 'Sheria na Masharti',
    privacy: 'Sera ya Faragha',
    location: 'Iftin, mkabala na Msikiti wa Sada',
  },
  so: {
    organization: 'Ururka',
    description: 'Waxaan iska kaashannaa taageeridda dadka baahan, xoojinta bulshadeenna iyo dhisidda mustaqbal wanaagsan.',
    support: 'Taageer shaqadeenna',
    quickLinks: 'Xiriirro Degdeg ah',
    home: 'Bogga Hore',
    about: 'Nagu Saabsan',
    services: 'Adeegyadeenna',
    donations: 'Deeqaha',
    lectures: 'Muxaadarooyinka Islaamka',
    contact: 'Nala Soo Xiriir',
    contactUs: 'Nala Soo Xiriir',
    emailOrganization: 'Iimayl u dir ururka',
    supportWork: 'Taageer Shaqadeenna',
    paybill: 'M-Pesa Paybill:',
    account: 'Akoon:',
    paymentNote: 'Fadlan xaqiiji faahfaahinta lacag-bixinta ka hor intaadan deeq dirin.',
    donationInstructions: 'Eeg tilmaamaha deeq-bixinta',
    rights: 'Dhammaan xuquuqdu way dhowran tahay.',
    terms: 'Shuruudaha iyo Xeerarka',
    privacy: 'Siyaasadda Asturnaanta',
    location: 'Iftin, ka soo horjeedka Masjidka Sada',
  },
  ar: {
    organization: 'المنظمة',
    description: 'نعمل معًا لدعم المحتاجين وتعزيز مجتمعنا وبناء مستقبل أفضل.',
    support: 'ادعموا أعمالنا',
    quickLinks: 'روابط سريعة',
    home: 'الرئيسية',
    about: 'من نحن',
    services: 'خدماتنا',
    donations: 'التبرعات',
    lectures: 'المحاضرات الإسلامية',
    contact: 'اتصل بنا',
    contactUs: 'اتصل بنا',
    emailOrganization: 'راسلوا المنظمة بالبريد الإلكتروني',
    supportWork: 'ادعموا أعمالنا',
    paybill: 'رقم الدفع عبر M-Pesa:',
    account: 'رقم الحساب:',
    paymentNote: 'يرجى التأكد من تفاصيل الدفع قبل إرسال التبرع.',
    donationInstructions: 'عرض تعليمات التبرع',
    rights: 'جميع الحقوق محفوظة.',
    terms: 'الشروط والأحكام',
    privacy: 'سياسة الخصوصية',
    location: 'إفتين، مقابل مسجد صدى',
  },
}

export default function Footer() {
  const { language } = useLanguage()
  const t = footerTranslations[language] || footerTranslations.en

  return (
    <footer className="site-footer">
      <div className="container footer-grid">
        <div className="footer-about">
          <Link to="/" className="brand footer-brand">
            <span className="brand-icon">
              <HeartHandshake size={25} />
            </span>

            <span className="brand-name">
              <strong>Ansar Welfare</strong>
              <small>{t.organization}</small>
            </span>
          </Link>

          <p>{t.description}</p>

          <Link to="/donations" className="footer-donate-link">
            {t.support} →
          </Link>
        </div>

        <div>
          <h3>{t.quickLinks}</h3>
          <ul className="footer-links">
            <li><Link to="/">{t.home}</Link></li>
            <li><Link to="/about">{t.about}</Link></li>
            <li><Link to="/services">{t.services}</Link></li>
            <li><Link to="/donations">{t.donations}</Link></li>
            <li><Link to="/lectures">{t.lectures}</Link></li>
            <li><Link to="/contact">{t.contact}</Link></li>
          </ul>
        </div>

        <div>
          <h3>{t.contactUs}</h3>
          <ul className="contact-list footer-contact">
            <li>
              <MapPin size={17} />
              <span>{t.location}</span>
            </li>
            <li>
              <Phone size={17} />
              <a href="tel:0721133156">0721 133 156</a>
            </li>
            <li>
              <Phone size={17} />
              <a href="tel:0723003071">0723 003 071</a>
            </li>
            <li>
              <Mail size={17} />
              <a href="mailto:ansarwelfareorganization7@gmail.com">
                {t.emailOrganization}
              </a>
            </li>
          </ul>
        </div>

        <div className="footer-donation-info">
          <h3>{t.supportWork}</h3>
          <ul className="contact-list footer-contact">
            <li>
              <Smartphone size={17} />
              <span>{t.paybill} <strong>4133187</strong></span>
            </li>
            <li>
              <Smartphone size={17} />
              <span>{t.account} <strong>01100611210001</strong></span>
            </li>
          </ul>

          <p className="footer-payment-note">{t.paymentNote}</p>

          <Link to="/donations" className="footer-donate-link">
            {t.donationInstructions} →
          </Link>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="container footer-bottom-content">
          <p>
            © {new Date().getFullYear()} Ansar Welfare Organization.
            {' '}{t.rights}
          </p>

          <div>
            <Link to="/terms">{t.terms}</Link>
            <Link to="/privacy">{t.privacy}</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
