import { conferencePublications, journalPublications } from "./publications";
import { projectsDetailed } from "./projects";

export const nav = [
  { label: "About", href: "/about" },
  { label: "Projects", href: "/projects" },
  { label: "Publications", href: "/publications" },
  { label: "Activities", href: "/activities" },
  { label: "Demos", href: "/demos" },
];

const totalPublications =
  conferencePublications.reduce((n, g) => n + g.entries.length, 0) +
  journalPublications.reduce((n, g) => n + g.entries.length, 0);

export const stats = [
  { value: "2008", label: "Founded" },
  { value: `${totalPublications}+`, label: "Publications" },
  { value: String(projectsDetailed.length), label: "Funded projects" },
  { value: "14", label: "Research areas" },
];

export const heroCategories = [
  {
    tag: "ASR",
    label: "Automatic Speech Recognition",
    blurb: "Multi-dialect and dysarthric-speech recognition systems for Indian languages.",
  },
  {
    tag: "TTS",
    label: "Text-to-Speech Synthesis",
    blurb: "Small-footprint, prosody-rich speech synthesis across 13 Indian languages.",
  },
  {
    tag: "ISL",
    label: "Indian Sign Language",
    blurb: "Vision-based ISL recognition and sign-to-speech conversion systems.",
  },
  {
    tag: "MT",
    label: "Machine Translation",
    blurb: "Speech-to-speech translation built for the structure of Indian languages.",
  },
];

export const expertise = [
  {
    tag: "ASR",
    title: "Speech recognition",
    description:
      "Automatic speech recognition, multi-dialect ASR, and silent speech recognition for Indian languages.",
  },
  {
    tag: "TTS",
    title: "Speech synthesis & prosody",
    description:
      "Text-to-speech synthesis, prosody modelling, and voice conversion tuned for natural, expressive speech.",
  },
  {
    tag: "MT",
    title: "Language & translation",
    description:
      "Machine translation systems built for the linguistic structure of Indian languages.",
  },
  {
    tag: "ISL",
    title: "Assistive speech technology",
    description:
      "Speech-enabled assistive devices for cerebral palsy, autism spectrum disorder, and speech-input aids.",
  },
];

export const researchAreas = [
  "Automatic speech recognition",
  "Text-to-speech synthesis",
  "Prosody modelling",
  "Machine translation",
  "Speaker identification",
  "Speaker spoofing",
  "Speech enhancement",
  "Music signal processing",
  "Voice conversion",
  "Speech-enabled assist devices",
  "Assistive speech technology for cerebral palsy & autism spectrum disorder",
  "Array microphone-based speech analysis",
  "Silent speech recognition",
  "Forensic & whisper speech analysis",
];

export const about = {
  intro:
    "Speech Lab, in the Department of Electronics and Communication Engineering at Sri Sivasubramaniya Nadar College of Engineering (SSNCE), Chennai, was established in 2008 with Prof. Hema A. Murthy, IIT Madras, as mentor. The lab initially came into existence to carry out a MeitY-funded project on developing text-to-speech synthesis systems for Indian languages, and now runs several ongoing government- and privately-funded projects. Its members include faculty, research scholars, UG and PG students, and project staff working in speech and language processing.",
  founded: "2008",
  mentor: "Prof. Hema A. Murthy, IIT Madras",
};

export const funders = [
  { name: "MeitY", logo: "/funders/meity.svg" },
  { name: "IIT Madras", logo: "/funders/iit-madras.svg" },
  { name: "IIT Dharwad", logo: "/funders/iit-dharwad.svg" },
  { name: "DST – TIDE", logo: "/funders/dst.png" },
  { name: "AICTE", logo: "/funders/aicte.png" },
  { name: "Tamil Virtual Academy", logo: "/funders/tva.jpg" },
  { name: "HCL Technologies", logo: "/funders/hcltech.svg" },
  { name: "Shiv Nadar University", logo: "/funders/snu.jpg" },
];

export const contactUrl = "https://cal.com/justinbenito";

export const vision =
  "To significantly reduce communication barriers, between human beings and between humans and machines, that are predominantly caused by a language barrier, a disability, or illiteracy.";

export const mission = [
  "Develop a multidisciplinary environment to promote fundamental and applied research in speech and audio.",
  "Build state-of-the-art, socially-beneficial applications that enhance human–computer and human–human interaction.",
  "Promote collaborative research with industry to bridge the gap between research and available technology.",
  "Provide a forum to interact with other researchers, and offer training and consultancy to those who need it.",
];

export const people = {
  heads: [
    {
      name: "Dr. P. Vijayalakshmi",
      role: "Professor & Head, Dept. of Electronics and Communication Engineering, SSNCE",
      email: "vijayalakshmip@ssn.edu.in",
    },
    {
      name: "Dr. T. Nagarajan",
      role: "Professor & Head, Dept. of Computer Science, Shiv Nadar University Chennai",
      email: "nagarajant@snuchennai.edu.in",
    },
  ],
  linkedin: "https://www.linkedin.com/company/centre-for-speech-technology-ssnce",
};

export const contact = {
  address:
    "Sri Sivasubramaniya Nadar College of Engineering, Rajiv Gandhi Salai (OMR), Kalavakkam – 603 110, Chennai",
  phone: "044 – 27474844, Extn: 226",
};

export const demos = [
  {
    title: "Tamil Text-to-Speech System",
    description:
      "Type Tamil text and hear it synthesized by the lab's unit-selection and HMM-based TTS systems, built under the MeitY-funded Indian-language TTS project.",
    href: "http://speech.ssn.edu.in/SpeechSynthesis/index.html",
  },
  {
    title: "Speech-Enabled Interactive Enquiry System (Agriculture, Tamil)",
    description:
      "A Tamil speech interface that lets a farmer query agricultural information by voice, developed with the Tamil Virtual Academy.",
    href: "http://speech.ssn.edu.in/SpeechSynthesis/agri_home/welcome.html",
  },
];

export const activities = {
  workshops: [
    {
      title: "HTS Workshop — HMM-based Speech Synthesis",
      date: "26 – 30 November 2012",
      description:
        "Conducted with IIT Madras; around 30 members of the TTS Consortium built HMM-based speech synthesis systems in 12 Indian languages (Tamil, Malayalam, Telugu, Hindi, Marathi, Odia, Bodo, Assamese, Manipuri, Rajasthani, Gujarathi and Bengali) using a common phone set derived with Dr. K. Samudravijaya (TIFR).",
    },
  ],
  wissap: {
    title: "Winter School on Speech and Audio Processing (WiSSAP) 2016",
    date: "8 – 11 January 2016",
    description:
      "Held on the theme “Speech Prosody”, the eleventh WiSSAP overall, organized by Prof. Hema A. Murthy (IIT Madras), Prof. T. Nagarajan, Prof. P. Vijayalakshmi and Prof. A. Shahina. Sponsored by Tamil Virtual Academy, ISCA, TDIL, CTS, Audience and SSN Trust, with 215 participants from India and abroad and guest lectures from Prof. Mark Hasegawa-Johnson (UIUC), Prof. Yi Xu (UCL), Prof. Marc Swerts (Tilburg) and Prof. Israel Cohen (Technion).",
  },
  internships: [
    {
      title: "Summer Internship — 2012",
      date: "6 – 30 June 2012",
      description:
        "UG students from the IT and ECE departments built limited-domain and unrestricted-domain unit-selection synthesis systems with about an hour of Tamil data at the phoneme, CV and syllable level.",
    },
    {
      title: "Other internships",
      date: "2016 onward",
      description:
        "Ms. Anusha Kamat (BITS Goa) built monolingual and bilingual USS/HTS Konkani voices over a 2-month internship; Mr. Kiran Reddy (Ph.D scholar, IIT Kharagpur) worked on voice-conversion-based polyglot synthesis during a one-week visit.",
    },
  ],
  otherWorkshops: [
    {
      title: "IEEE SPS-sponsored FDP on Speech and Vision-Enabled Intelligent Systems",
      coordinators: "Dr. P. Vijayalakshmi, M. Anbuselvi",
      venue: "Department of ECE, SSNCE",
      date: "18 – 23 November 2019",
    },
    {
      title: "SISOCA — Speech-Input Speech-Output Communication Aid Workshop (Sessions I & II)",
      coordinators: "Dr. P. Vijayalakshmi, Dr. T. Nagarajan",
      venue: "SSN College of Engineering",
      date: "10–12 Oct 2018 & 14–16 Nov 2018",
    },
    {
      title: "IEEE SPS-sponsored Workshop: Conventional ML to Deep Learning for Speech, Image & Text Processing",
      coordinators: "Dr. P. Vijayalakshmi, Dr. M. Anbuselvi",
      venue: "Department of ECE, SSNCE",
      date: "16 – 18 August 2018",
    },
    {
      title: "Two-day Workshop on Technologies for Speaker and Language Recognition",
      coordinators: "Dr. P. Vijayalakshmi, Dr. T. Nagarajan, Ms. B. Ramani",
      venue: "SSN College of Engineering",
      date: "29 – 30 April 2015",
    },
    {
      title: "Workshop on HMM-based Speech Synthesis",
      coordinators: "Dr. T. Nagarajan, Dr. P. Vijayalakshmi",
      venue: "SSN College of Engineering",
      date: "26 – 30 November 2012",
    },
    {
      title: "Workshop on Automatic Speech Recognition",
      coordinators: "Dr. T. Nagarajan, Dr. P. Vijayalakshmi, Dr. A. Shahina",
      venue: "SSN College of Engineering, Chennai",
      date: "26 – 29 December 2010",
    },
    {
      title: "Workshop on Speech Processing and its Applications",
      coordinators: "Dr. T. Nagarajan, Dr. P. Vijayalakshmi",
      venue: "SSN College of Engineering, Chennai",
      date: "21 – 22 February 2008",
    },
  ],
};
