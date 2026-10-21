import { useLanguage } from '../i18n/LanguageContext'

const translations = {
  en: {
    eyebrow: 'Website information',
    title: 'Terms & Conditions',
    subtitle: 'Please read these general terms before using this website.',
    updated: 'Last reviewed: October 2026',
    intro: 'These terms describe general conditions for using the Ansar Welfare Organization website. By using this website, you agree to use it responsibly and in accordance with applicable laws.',
    headings: [
      '1. Website information',
      '2. Appropriate use',
      '3. Donations and payments',
      '4. Intellectual property',
      '5. External links',
      '6. Changes to these terms',
      '7. Contact',
    ],
    paragraphs: [
      'We aim to provide useful and accurate information about the organization. Content may be updated, corrected, or changed over time. Please contact us to confirm important details about activities or services.',
      'You must not misuse this website, attempt to disrupt its operation, introduce malicious code, or use it to publish unlawful, misleading, or harmful material.',
      'If donation or payment details are displayed, please verify the recipient and details directly with the organization before making a transaction. Keep your transaction records. Do not share your M-Pesa PIN or other confidential payment credentials.',
      'Unless otherwise stated, website text, branding, and other materials associated with the organization should not be copied or reused in a way that falsely suggests endorsement or affiliation.',
      'This website may link to external websites. The organization does not control third-party sites and is not responsible for their content or privacy practices.',
      'These terms may be revised as the website develops. The version displayed on this page is the current website version.',
      'If you have questions about these terms, email',
    ],
    draft: 'This is a general draft for the website, not legal advice. Have the organization review it before publication.',
  },
  sw: {
    eyebrow: 'Taarifa za tovuti',
    title: 'Sheria na Masharti',
    subtitle: 'Tafadhali soma masharti haya ya jumla kabla ya kutumia tovuti hii.',
    updated: 'Ilipitiwa mara ya mwisho: Oktoba 2026',
    intro: 'Masharti haya yanaeleza hali za jumla za kutumia tovuti ya Ansar Welfare Organization. Kwa kutumia tovuti hii, unakubali kuitumia kwa uwajibikaji na kwa kufuata sheria zinazotumika.',
    headings: [
      '1. Taarifa za tovuti',
      '2. Matumizi yanayofaa',
      '3. Michango na malipo',
      '4. Haki miliki',
      '5. Viungo vya tovuti za nje',
      '6. Mabadiliko ya masharti haya',
      '7. Mawasiliano',
    ],
    paragraphs: [
      'Tunalenga kutoa taarifa muhimu na sahihi kuhusu shirika. Maudhui yanaweza kusasishwa, kusahihishwa au kubadilishwa kadiri muda unavyopita. Tafadhali wasiliana nasi ili kuthibitisha maelezo muhimu kuhusu shughuli au huduma.',
      'Hupaswi kutumia tovuti hii vibaya, kujaribu kuvuruga utendaji wake, kuingiza programu hasidi, au kuitumia kuchapisha maudhui yasiyo halali, yanayopotosha au yenye madhara.',
      'Ikiwa maelezo ya michango au malipo yanaonyeshwa, tafadhali thibitisha mpokeaji na maelezo moja kwa moja na shirika kabla ya kufanya muamala. Hifadhi kumbukumbu za miamala yako. Usishiriki PIN yako ya M-Pesa au taarifa nyingine za siri za malipo.',
      'Isipokuwa ikiwa imeelezwa vinginevyo, maandishi, utambulisho wa chapa na nyenzo nyingine zinazohusiana na shirika hazipaswi kunakiliwa au kutumiwa tena kwa namna inayodokeza kimakosa uidhinishaji au uhusiano na shirika.',
      'Tovuti hii inaweza kuwa na viungo vya tovuti za nje. Shirika halidhibiti tovuti za wahusika wengine na halihusiki na maudhui yao au taratibu zao za faragha.',
      'Masharti haya yanaweza kurekebishwa kadiri tovuti inavyoendelea. Toleo linaloonyeshwa kwenye ukurasa huu ndilo toleo la sasa la tovuti.',
      'Ikiwa una maswali kuhusu masharti haya, tuma barua pepe kwa',
    ],
    draft: 'Huu ni mfano wa jumla wa masharti ya tovuti, si ushauri wa kisheria. Shirika linapaswa kuupitia kabla ya kuchapishwa.',
  },
  so: {
    eyebrow: 'Macluumaadka bogga internetka',
    title: 'Shuruudaha iyo Xeerarka',
    subtitle: 'Fadlan akhri shuruudahan guud ka hor intaadan isticmaalin boggan.',
    updated: 'Markii ugu dambaysay ee dib loo eegay: Oktoobar 2026',
    intro: 'Shuruudahani waxay sharxayaan xeerarka guud ee isticmaalka bogga internetka ee Ansar Welfare Organization. Markaad isticmaasho boggan, waxaad oggolaanaysaa inaad si masuuliyad leh oo waafaqsan sharciyada khuseeya u isticmaasho.',
    headings: [
      '1. Macluumaadka bogga',
      '2. Isticmaalka habboon',
      '3. Deeqaha iyo lacag-bixinta',
      '4. Xuquuqda lahaanshaha',
      '5. Xiriirrada bogagga kale',
      '6. Isbeddellada shuruudahan',
      '7. Xiriir',
    ],
    paragraphs: [
      'Waxaan ku dadaalnaa inaan bixino macluumaad waxtar leh oo sax ah oo ku saabsan ururka. Waxyaabaha ku jira bogga waa la cusboonaysiin karaa, la sixi karaa ama waa la beddeli karaa. Fadlan nala soo xiriir si aad u xaqiijiso faahfaahinta muhiimka ah ee hawlaha ama adeegyada.',
      'Waa inaadan si khaldan u isticmaalin boggan, isku dayin inaad carqaladayso shaqadiisa, gelin barnaamijyo waxyeello leh, ama ku daabicin waxyaabo sharci-darro ah, marin-habaabin ah ama waxyeello leh.',
      'Haddii faahfaahinta deeqaha ama lacag-bixinta la muujiyo, fadlan si toos ah ula xaqiiji ururka cidda lacagta helaysa iyo faahfaahinta ka hor intaadan wax dirin. Hayso diiwaannada macaamilladaada. Ha wadaagin PIN-kaaga M-Pesa ama xogaha kale ee sirta ah ee lacag-bixinta.',
      'Haddii aan si kale loo sheegin, qoraallada, astaanta iyo agabka kale ee ururka la xiriira waa inaan loo koobiyeeyn ama dib loo adeegsan si si khaldan loo muujiyo oggolaansho ama xiriir ururka lala leeyahay.',
      'Boggan wuxuu yeelan karaa xiriirro bogag kale ah. Ururku ma maamulo bogagga dhinacyada kale, mas’uulna kama aha waxa ku jira ama habraacyadooda asturnaanta.',
      'Shuruudahan waa la beddeli karaa marka boggu horumaro. Nooca boggan lagu soo bandhigay waa nooca hadda jira.',
      'Haddii aad su’aalo ka qabto shuruudahan, iimayl u dir',
    ],
    draft: 'Kani waa qabyo guud oo loogu talagalay bogga internetka, mana aha talo sharci. Ururku waa inuu dib u eego ka hor daabacaadda.',
  },
  ar: {
    eyebrow: 'معلومات الموقع',
    title: 'الشروط والأحكام',
    subtitle: 'يرجى قراءة هذه الشروط العامة قبل استخدام هذا الموقع.',
    updated: 'آخر مراجعة: أكتوبر 2026',
    intro: 'توضح هذه الشروط الأحكام العامة لاستخدام موقع منظمة أنصار للرعاية الاجتماعية. باستخدام هذا الموقع، فإنك توافق على استخدامه بمسؤولية ووفقًا للقوانين المعمول بها.',
    headings: [
      '1. معلومات الموقع',
      '2. الاستخدام المناسب',
      '3. التبرعات والمدفوعات',
      '4. الملكية الفكرية',
      '5. الروابط الخارجية',
      '6. التغييرات على هذه الشروط',
      '7. التواصل',
    ],
    paragraphs: [
      'نسعى إلى تقديم معلومات مفيدة ودقيقة عن المنظمة. قد يتم تحديث المحتوى أو تصحيحه أو تغييره بمرور الوقت. يرجى التواصل معنا لتأكيد التفاصيل المهمة المتعلقة بالأنشطة أو الخدمات.',
      'يُمنع إساءة استخدام هذا الموقع أو محاولة تعطيل عمله أو إدخال رموز ضارة أو استخدامه لنشر مواد غير قانونية أو مضللة أو مؤذية.',
      'إذا عُرضت تفاصيل التبرعات أو المدفوعات، يرجى التحقق مباشرةً من المستفيد والتفاصيل مع المنظمة قبل إجراء أي معاملة. احتفظ بسجلات معاملاتك. لا تشارك الرقم السري لخدمة M-Pesa أو أي بيانات دفع سرية أخرى.',
      'ما لم يُذكر خلاف ذلك، لا يجوز نسخ نصوص الموقع أو العلامة التجارية أو المواد الأخرى المرتبطة بالمنظمة أو إعادة استخدامها بطريقة توحي زورًا بوجود تأييد أو ارتباط بالمنظمة.',
      'قد يحتوي هذا الموقع على روابط لمواقع خارجية. لا تتحكم المنظمة في مواقع الأطراف الأخرى ولا تتحمل مسؤولية محتواها أو ممارسات الخصوصية فيها.',
      'قد تتم مراجعة هذه الشروط مع تطور الموقع. والنسخة المعروضة في هذه الصفحة هي النسخة الحالية للموقع.',
      'إذا كانت لديك أسئلة حول هذه الشروط، يرجى مراسلتنا عبر البريد الإلكتروني',
    ],
    draft: 'هذه مسودة عامة للموقع وليست استشارة قانونية. يرجى مراجعتها من قبل المنظمة قبل نشرها.',
  },
}

export default function Terms() {
  const { language } = useLanguage()
  const t = translations[language] || translations.en

  return (
    <>
      <section className="page-banner">
        <div className="container">
          <span className="eyebrow">{t.eyebrow}</span>
          <h1>{t.title}</h1>
          <p>{t.subtitle}</p>
        </div>
      </section>

      <section className="section">
        <article className="container legal-content">
          <p className="legal-updated">{t.updated}</p>
          <p>{t.intro}</p>

          {t.headings.map((heading, index) => (
            <section key={heading}>
              <h2>{heading}</h2>
              <p>
                {t.paragraphs[index]}
                {index === 6 && (
                  <>
                    {' '}
                    <a href="mailto:ansarwelfareorganization7@gmail.com">
                      ansarwelfareorganization7@gmail.com
                    </a>.
                  </>
                )}
              </p>
            </section>
          ))}

          <p className="draft-note">{t.draft}</p>
        </article>
      </section>
    </>
  )
}
