import Navbar from "@/components/Navbar";
import FooterSection from "@/components/FooterSection";

const sections = [
  {
    title: "I. Information Collection and Use",
    content: [
      "We collect several different types of information for various purposes to provide and improve our Service to you.",
      "If you do not use (log in to) the service for two years all your personal data will be deleted.",
    ],
    subsections: [
      {
        title: "1. Personal Data",
        content:
          'While using our Service, we may ask you to provide us with certain personally identifiable information that can be used to contact or identify you ("Personal Data"). Personally identifiable information may include, but is not limited to: Email address, Cookies and Usage Data.',
      },
      {
        title: "2. Usage Data",
        content:
          'We may also collect information that your browser sends whenever you visit our Service or when you access the Service by or through a mobile device ("Usage Data"). This Usage Data may include information such as your computer\'s Internet Protocol address (e.g. IP address), browser type, browser version, the pages of our Service that you visit, the time and date of your visit, the time spent on those pages, unique device identifiers and other diagnostic data. When you access the Service by or through a mobile device, this Usage Data may include information such as the type of mobile device you use, your mobile device unique ID, the IP address of your mobile device, your mobile operating system, the type of mobile Internet browser you use, unique device identifiers and other diagnostic data.',
      },
      {
        title: "3. Tracking Cookies Data",
        content:
          "We use cookies and similar tracking technologies to track the activity on our Service and hold certain information. Cookies are files with small amount of data which may include an anonymous unique identifier. Cookies are sent to your browser from a website and stored on your device. Tracking technologies also used are beacons, tags, and scripts to collect and track information and to improve and analyze our Service. You can instruct your browser to refuse all cookies or to indicate when a cookie is being sent. However, if you do not accept cookies, you may not be able to use some portions of our Service.",
      },
    ],
    list: [
      "Session Cookies — We use Session Cookies to operate our Service.",
      "Preference Cookies — We use Preference Cookies to remember your preferences and various settings.",
      "Security Cookies — We use Security Cookies for security purposes.",
    ],
  },
  {
    title: "II. Use of Data",
    content: [
      "Climax Jockey Club uses the collected data for various purposes including but not limited to the following:",
    ],
    list: [
      "To provide and maintain the Service;",
      "To notify you about changes to our Service;",
      "To allow you to participate in interactive features of our Service when you choose to do so;",
      "To provide customer care and support;",
      "To provide analysis or valuable information so that we can improve the Service;",
      "To monitor the usage of the Service;",
      "To detect, prevent and address technical issues.",
    ],
  },
  {
    title: "III. Transfer of Data",
    content: [
      "Your information, including Personal Data, may be transferred to and maintained on computers located outside of your state, province, country or other governmental jurisdiction where the data protection laws may differ than those from your jurisdiction.",
      "If you are located outside the United Arab Emirates and choose to provide information to us, please note that we transfer the data, including Personal Data, to the United Arab Emirates and process it there.",
      "Your consent to this Privacy Policy followed by your submission of such information represents your agreement to that transfer.",
      "Climax Jockey Club will take all steps reasonably necessary to ensure that your data is treated securely and in accordance with this Privacy Policy and no transfer of your Personal Data will take place to an organization or a country unless there are adequate controls in place including the security of your data and other personal information.",
    ],
  },
  {
    title: "IV. Disclosure of Data",
    content: [
      "Climax Jockey Club may disclose your Personal Data in the good faith belief that such action is necessary for following purposes including but not limited to:",
    ],
    list: [
      "To comply with a legal obligation;",
      "To protect and defend the rights or property of CJC Race;",
      "To prevent or investigate possible wrongdoing in connection with the Service;",
      "To protect the personal safety of users of the Service or the public;",
      "To protect against legal liability.",
    ],
  },
  {
    title: "V. Security of Data",
    content: [
      "The security of your data is important to us, but remember that no method of transmission over the Internet, or method of electronic storage is 100% secure. While we strive to use commercially acceptable means to protect your Personal Data, we cannot guarantee its absolute security.",
    ],
  },
  {
    title: "VI. Service Providers",
    content: [
      'We may employ third party companies and individuals to facilitate our Service ("Service Providers"), to provide the Service on our behalf, to perform Service-related services or to assist us in analyzing how our Service is used.',
      "These third parties have access to your Personal Data only to perform these tasks on our behalf and are obligated not to disclose or use it for any other purpose.",
      "We may use third-party Service Providers to monitor and analyze the use of our Service.",
    ],
  },
  {
    title: "VII. Links to Other Sites",
    content: [
      "Our Service may contain links to other sites that are not operated by us. If you click on a third party link, you will be directed to that third party's site. We strongly advise you to review the Privacy Policy of every site you visit.",
      "We have no control over and assume no responsibility for the content, privacy policies or practices of any third party sites or services.",
    ],
  },
  {
    title: "VIII. Children's Privacy",
    content: [
      'Our Service does not address anyone under the age of 18 ("Children").',
      "We do not knowingly collect personally identifiable information from anyone under the age of 18. If you are a parent or guardian and you are aware that your Children have provided us with Personal Data, please contact us. If we become aware that we have collected Personal Data from Children without verification of parental consent, we take steps to remove that information from our servers.",
    ],
  },
  {
    title: "IX. Retention of Data",
    content: [
      "Data provided by you is retained if the purpose for which the Personal Data was collected still exists, it is so required by law, statute or regulation, or it is in the public interest. Personal Data will be destroyed once its requirement is ended or in accordance with the terms of this Policy.",
    ],
  },
  {
    title: "X. Changes to This Privacy Policy",
    content: [
      "We may update our Privacy Policy from time to time. You are advised to review this Privacy Policy periodically for any changes. Changes to this Privacy Policy are effective when they are posted on this page.",
    ],
  },
  {
    title: "XI. Contact Us",
    content: [
      "You may at any time request access to or update/correct your Personal Data held by us. You may also ask us to delete you or your Data from any active mailing or distribution list. If you would like to exercise any of your rights above or have any questions about this Privacy Policy, please contact us:",
    ],
    contact: "service@cjcrace.io",
    footer:
      "Nothing in this Privacy Policy shall limit the rights of our Service under the laws.",
  },
];

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />

      <main className="container py-24 md:py-32 max-w-4xl">
        {/* Header */}
        <div className="text-center mb-12">
          <span className="font-display text-xs tracking-[0.3em] text-primary uppercase mb-4 block">
            Legal
          </span>
          <h1 className="font-display text-4xl md:text-6xl font-bold text-gradient-gold mb-6">
            Privacy Policy
          </h1>
        </div>

        {/* Intro */}
        <div className="mb-12 space-y-4">
          <p className="text-foreground/70 text-sm leading-relaxed">
            Climax Jockey Club ("CJC Race", "us", "we", or "our") operates the
            website. This page informs you of our policies regarding the
            collection, use, and disclosure of personal data when you use our
            Service and the choices you have associated with that data.
          </p>
          <p className="text-foreground/70 text-sm leading-relaxed">
            We use your data to provide and improve the Service. By using the
            Service, you agree to the collection and use of information in
            accordance with this policy. Unless otherwise defined in this Privacy
            Policy, terms used in this Privacy Policy have the same meanings as
            in our Terms and Conditions.
          </p>
        </div>

        {/* Sections */}
        <div className="space-y-10">
          {sections.map((s) => (
            <div key={s.title}>
              <h2 className="font-display text-lg font-bold text-foreground mb-4">
                {s.title}
              </h2>

              {s.content?.map((p, i) => (
                <p
                  key={i}
                  className="text-foreground/70 text-sm leading-relaxed mb-3"
                >
                  {p}
                </p>
              ))}

              {s.subsections?.map((sub) => (
                <div key={sub.title} className="mt-4 mb-4 ml-4">
                  <h3 className="font-display text-sm font-bold text-foreground mb-2">
                    {sub.title}
                  </h3>
                  <p className="text-foreground/70 text-sm leading-relaxed">
                    {sub.content}
                  </p>
                </div>
              ))}

              {s.list && (
                <ul className="mt-3 ml-4 space-y-1.5">
                  {s.list.map((item, i) => (
                    <li
                      key={i}
                      className="text-foreground/70 text-sm leading-relaxed flex items-start gap-2"
                    >
                      <span className="text-primary mt-1.5 shrink-0">•</span>
                      {item}
                    </li>
                  ))}
                </ul>
              )}

              {s.contact && (
                <p className="text-foreground/70 text-sm mt-3">
                  Email:{" "}
                  <a
                    href={`mailto:${s.contact}`}
                    className="text-primary hover:underline"
                  >
                    {s.contact}
                  </a>
                </p>
              )}

              {s.footer && (
                <p className="text-foreground/70 text-sm mt-4 italic">
                  {s.footer}
                </p>
              )}
            </div>
          ))}
        </div>
      </main>

      <FooterSection />
    </div>
  );
};

export default PrivacyPolicy;
