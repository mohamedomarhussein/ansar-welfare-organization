import { useLanguage } from '../i18n/LanguageContext'

const translations = {
  en: {
    eyebrow: 'Your information matters',
    title: 'Privacy Policy',
    subtitle: 'Information about privacy when you interact with our website.',
    updated: 'Last reviewed: October 2026',
    intro: 'Ansar Welfare Organization respects the privacy of people who visit this website or contact the organization. This draft explains the general approach intended for this website.',
    headings: [
      '1. Information you provide',
      '2. How information may be used',
      '3. Sharing information',
      '4. Website forms and email',
      '5. Security and retention',
      '6. Your choices',
      '7. Updates and contact',
    ],
    paragraphs: [
      'If you contact us by email or phone, you may provide information such as your name, contact details, and the contents of your message. Please do not send sensitive personal information unless it is necessary.',
      'Information you provide may be used to respond to your inquiry, communicate with you about a request, or coordinate an activity you have asked about.',
      'We do not intend to sell personal information. Information should only be shared when needed to respond to your request, with your consent, or when required by applicable law.',
      'The contact form on this website opens the email application on your device. Your message is sent only if you choose to send it. Your email provider may process the message under its own privacy policy.',
      'Reasonable steps should be taken to protect information and keep it only for as long as needed for its purpose or as required by law. No method of electronic transmission or storage can be guaranteed to be completely secure.',
      'You can choose what information to include when contacting us. You may contact the organization to ask about personal information you have provided.',
      'This policy may be updated as the website and its practices develop. For privacy questions, email',
    ],
    draft: "This is a draft and must be checked against the organization's actual data-handling practices and applicable Kenyan data-protection requirements before publication.",
  },
  sw: {
    eyebrow: 'Taarifa zako ni muhimu',
    title: 'Sera ya Faragha',
    subtitle: 'Maelezo kuhusu faragha unapowasiliana nasi kupitia tovuti yetu.',
    updated: 'Ilipitiwa mara ya mwisho: Oktoba 2026',
    intro: 'Ansar Welfare Organization inaheshimu faragha ya watu wanaotembelea tovuti hii au kuwasiliana na shirika. Rasimu hii inaeleza mwongozo wa jumla unaokusudiwa kwa tovuti hii.',
    headings: [
      '1. Taarifa unazotoa',
      '2. Jinsi taarifa zinavyoweza kutumika',
      '3. Kushiriki taarifa',
      '4. Fomu za tovuti na barua pepe',
      '5. Usalama na uhifadhi wa taarifa',
      '6. Chaguo zako',
      '7. Masasisho na mawasiliano',
    ],
    paragraphs: [
      'Ukiwasiliana nasi kwa barua pepe au simu, unaweza kutoa taarifa kama vile jina lako, maelezo ya mawasiliano na yaliyomo kwenye ujumbe wako. Tafadhali usitume taarifa nyeti za kibinafsi isipokuwa inapohitajika.',
      'Taarifa unazotoa zinaweza kutumiwa kujibu swali lako, kuwasiliana nawe kuhusu ombi lako, au kuratibu shughuli uliyoomba maelezo kuihusu.',
      'Hatuna nia ya kuuza taarifa za kibinafsi. Taarifa zinapaswa kushirikiwa tu inapohitajika kujibu ombi lako, kwa idhini yako, au pale sheria inayotumika inapohitaji.',
      'Fomu ya mawasiliano kwenye tovuti hii hufungua programu ya barua pepe kwenye kifaa chako. Ujumbe wako hutumwa tu ukichagua kuutuma. Mtoa huduma wako wa barua pepe anaweza kuchakata ujumbe kulingana na sera yake ya faragha.',
      'Hatua zinazofaa zinapaswa kuchukuliwa kulinda taarifa na kuzihifadhi kwa muda unaohitajika kwa madhumuni yake au unaotakiwa na sheria. Hakuna njia ya kutuma au kuhifadhi taarifa kielektroniki inayoweza kuhakikishwa kuwa salama kabisa.',
      'Unaweza kuchagua taarifa utakazojumuisha unapowasiliana nasi. Unaweza kuwasiliana na shirika kuuliza kuhusu taarifa za kibinafsi ulizotoa.',
      'Sera hii inaweza kusasishwa kadiri tovuti na taratibu zake zinavyobadilika. Kwa maswali kuhusu faragha, tuma barua pepe kwa',
    ],
    draft: 'Hii ni rasimu na lazima ikaguliwe ili kuhakikisha inaendana na taratibu halisi za shirika za kushughulikia taarifa na mahitaji ya sheria za Kenya za ulinzi wa data kabla ya kuchapishwa.',
  },
  so: {
    eyebrow: 'Macluumaadkaagu waa muhiim',
    title: 'Siyaasadda Asturnaanta',
    subtitle: 'Macluumaad ku saabsan asturnaanta markaad isticmaalayso boggayaga internetka.',
    updated: 'Markii ugu dambaysay ee dib loo eegay: Oktoobar 2026',
    intro: 'Ansar Welfare Organization waxay ixtiraamtaa asturnaanta dadka booqda boggan ama la xiriira ururka. Qabyo-qoraalkani wuxuu sharxayaa habka guud ee loogu talagalay boggan.',
    headings: [
      '1. Macluumaadka aad bixiso',
      '2. Sida macluumaadka loo isticmaali karo',
      '3. Wadaagista macluumaadka',
      '4. Foomamka bogga iyo iimaylka',
      '5. Amniga iyo kaydinta',
      '6. Doorashooyinkaaga',
      '7. Cusboonaysiinta iyo xiriirka',
    ],
    paragraphs: [
      'Haddii aad nagala soo xiriirto iimayl ama telefoon, waxaad bixin kartaa macluumaad sida magacaaga, faahfaahinta xiriirka iyo nuxurka farriintaada. Fadlan ha dirin macluumaad shakhsiyeed oo xasaasi ah haddii aan loo baahnayn.',
      'Macluumaadka aad bixiso waxaa loo isticmaali karaa in looga jawaabo su’aashaada, lagala soo xiriiro codsigaaga, ama lagu abaabulo hawl aad wax ka weydiisay.',
      'Ma doonayno inaan iibinno macluumaadka shakhsiyeed. Macluumaadka waa in lala wadaagaa oo keliya marka loo baahdo in laga jawaabo codsigaaga, markaad oggolaato, ama marka sharcigu dalbado.',
      'Foomka xiriirka ee boggan wuxuu furayaa barnaamijka iimaylka ee qalabkaaga. Farriintaada waxaa la diraa oo keliya haddii aad doorato inaad dirto. Adeeg-bixiyahaaga iimaylka wuxuu farriinta u maamuli karaa sida ku cad siyaasaddiisa asturnaanta.',
      'Waa in la qaadaa tallaabooyin macquul ah oo lagu ilaaliyo macluumaadka laguna hayo oo keliya muddada loogu baahan yahay ujeeddadiisa ama sharcigu dalbado. Ma jiro hab elektaroonig ah oo gudbinta ama kaydinta macluumaadka lagu dammaanad qaadi karo inuu gebi ahaanba ammaan yahay.',
      'Waxaad dooran kartaa macluumaadka aad ku darto markaad nala soo xiriirayso. Waxaad ururka weydiin kartaa macluumaadka shakhsiyeed ee aad hore u bixisay.',
      'Siyaasaddan waa la cusboonaysiin karaa marka bogga iyo habraacyadiisu isbeddelaan. Su’aalaha asturnaanta, iimayl u dir',
    ],
    draft: 'Kani waa qabyo-qoraal waana in la hubiyaa inuu waafaqsan yahay habraacyada dhabta ah ee ururka ee maaraynta xogta iyo shuruudaha sharciyada ilaalinta xogta Kenya ka hor daabacaadda.',
  },
  ar: {
    eyebrow: 'معلوماتك مهمة',
    title: 'سياسة الخصوصية',
    subtitle: 'معلومات حول الخصوصية عند تفاعلك مع موقعنا.',
    updated: 'آخر مراجعة: أكتوبر 2026',
    intro: 'تحترم منظمة أنصار للرعاية الاجتماعية خصوصية الأشخاص الذين يزورون هذا الموقع أو يتواصلون مع المنظمة. توضح هذه المسودة النهج العام المقصود لهذا الموقع.',
    headings: [
      '1. المعلومات التي تقدمها',
      '2. كيفية استخدام المعلومات',
      '3. مشاركة المعلومات',
      '4. نماذج الموقع والبريد الإلكتروني',
      '5. الأمان والاحتفاظ بالمعلومات',
      '6. خياراتك',
      '7. التحديثات والتواصل',
    ],
    paragraphs: [
      'إذا تواصلت معنا عبر البريد الإلكتروني أو الهاتف، فقد تقدم معلومات مثل اسمك وتفاصيل الاتصال ومحتوى رسالتك. يرجى عدم إرسال معلومات شخصية حساسة إلا عند الضرورة.',
      'قد تُستخدم المعلومات التي تقدمها للرد على استفسارك أو التواصل معك بشأن طلبك أو تنسيق نشاط طلبت معلومات عنه.',
      'لا نعتزم بيع المعلومات الشخصية. ينبغي مشاركة المعلومات فقط عند الحاجة للرد على طلبك، أو بموافقتك، أو عندما يقتضي القانون المعمول به ذلك.',
      'يفتح نموذج الاتصال على هذا الموقع تطبيق البريد الإلكتروني على جهازك. لا تُرسل رسالتك إلا إذا اخترت إرسالها. وقد يعالج مزود خدمة البريد الإلكتروني رسالتك وفقًا لسياسة الخصوصية الخاصة به.',
      'ينبغي اتخاذ خطوات معقولة لحماية المعلومات والاحتفاظ بها للمدة اللازمة للغرض منها أو وفقًا لما يقتضيه القانون. ولا يمكن ضمان الأمان الكامل لأي وسيلة إلكترونية لنقل المعلومات أو تخزينها.',
      'يمكنك اختيار المعلومات التي تدرجها عند التواصل معنا. ويمكنك الاتصال بالمنظمة للاستفسار عن المعلومات الشخصية التي قدمتها.',
      'قد يتم تحديث هذه السياسة مع تطور الموقع وممارساته. للاستفسارات المتعلقة بالخصوصية، يرجى مراسلتنا عبر البريد الإلكتروني',
    ],
    draft: 'هذه مسودة ويجب مراجعتها للتأكد من توافقها مع ممارسات المنظمة الفعلية في التعامل مع البيانات ومتطلبات قوانين حماية البيانات المعمول بها في كينيا قبل نشرها.',
  },
}

export default function Privacy() {
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
