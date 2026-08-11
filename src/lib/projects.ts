export type ProjectDetail = {
  slug: string;
  title: string;
  investigators: string[];
  consortiumLeader?: string;
  fundingAgency: string;
  shortAgency: string;
  fundAllocated?: string;
  duration: string;
  description: string;
  link?: { label: string; href: string };
};

export const projectsDetailed: ProjectDetail[] = [
  {
    slug: "tts-indian-languages",
    title: "Development of Text-to-Speech Synthesis for Indian Languages",
    investigators: [
      "Dr. T. Nagarajan (PI)",
      "Dr. P. Vijayalakshmi (Co-PI)",
      "Dr. A. Shahina (Co-PI)",
    ],
    consortiumLeader: "IIT Madras",
    fundingAgency:
      "Department of Information Technology (DIT) – Ministry of Electronics and Information Technology (MeitY)",
    shortAgency: "MeitY, with IIT Madras",
    fundAllocated: "₹77 lakh",
    duration: "2012 – 2017",
    description:
      "Small-footprint text-to-speech systems for 13 Indian languages, of which SSN was responsible for Tamil.",
    link: {
      label: "Try the Tamil TTS demo",
      href: "http://speech.ssn.edu.in/SpeechSynthesis/index.html",
    },
  },
  {
    slug: "dysarthric-assessment",
    title: "An Assessment and Intelligibility Modification System for Dysarthric Speakers",
    investigators: ["Dr. P. Vijayalakshmi (PI)", "Dr. T. Nagarajan (Co-PI)"],
    fundingAgency: "All India Council for Technical Education (AICTE) – Research Promotion Scheme (RPS)",
    shortAgency: "AICTE",
    fundAllocated: "₹9 lakh",
    duration: "2010 – 2013",
    description:
      "A detection and assessment system analysing problems related to laryngeal, velopharyngeal and articulatory subsystems for dysarthric speakers.",
  },
  {
    slug: "agri-enquiry-tamil",
    title: "Speech Enabled Interactive Enquiry System in Tamil",
    investigators: [
      "Dr. T. Nagarajan (PI)",
      "Dr. P. Vijayalakshmi (Co-PI)",
      "Dr. B. Bharathi (Co-PI)",
      "Ms. Sasirekha (Co-PI)",
    ],
    fundingAgency: "Tamil Virtual Academy (TVA)",
    shortAgency: "Tamil Virtual Academy",
    fundAllocated: "₹9.52 lakh",
    duration: "2016 – 2017",
    description:
      "A speech-enabled interactive enquiry system that lets a farmer interact with a machine through Tamil speech to obtain agricultural information.",
    link: {
      label: "Try the Agri enquiry demo",
      href: "http://speech.ssn.edu.in/SpeechSynthesis/agri_home/welcome.html",
    },
  },
  {
    slug: "sisoca",
    title: "Speech-Input Speech-Output Communication Aid (SISOCA) for Speakers with Cerebral Palsy",
    investigators: ["Dr. P. Vijayalakshmi (PI)", "Dr. T. Nagarajan (Co-PI)"],
    fundingAgency: "Department of Science and Technology – Technology Interventions for Disabled and Elderly (DST–TIDE)",
    shortAgency: "DST – TIDE",
    fundAllocated: "₹13.72 lakh",
    duration: "2017 – 2020",
    description:
      "A speech-input speech-output communication aid built as a Raspberry Pi-based handheld device for dysarthric speakers.",
  },
  {
    slug: "malay-tamil-tts",
    title: "HMM-based Text-to-Speech Synthesis System for Malaysian Tamil",
    investigators: ["Dr. T. Nagarajan (PI)", "Dr. P. Vijayalakshmi (Co-PI)"],
    fundingAgency: "Murasu Systems Sdn Bhd, Malaysia",
    shortAgency: "Murasu Systems, Malaysia",
    fundAllocated: "₹4 lakh",
    duration: "2016 – 2017",
    description: "A small footprint text-to-speech system for Malaysian Tamil.",
  },
  {
    slug: "assistive-aids-visually-challenged",
    title: "Speech Assistive Aids for Visually Challenged People",
    investigators: ["Dr. T. Nagarajan (PI)", "Dr. P. Vijayalakshmi (Co-PI)"],
    fundingAgency: "Tamil Virtual Academy (TVA)",
    shortAgency: "Tamil Virtual Academy",
    fundAllocated: "₹25 lakh",
    duration: "2018 – 2020",
    description:
      "Four assistive aids combining text-to-speech synthesis and speech recognition to help visually challenged people read and write with ease.",
  },
  {
    slug: "pronunciation-error-detection",
    title: "Tamil Pronunciation Error Detection Aid for Children – Prototype",
    investigators: ["Dr. T. Nagarajan (PI)"],
    fundingAgency: "Murasu Systems Sdn Bhd, Malaysia",
    shortAgency: "Murasu Systems, Malaysia",
    fundAllocated: "₹0.5 lakh",
    duration: "2019 – 2020",
    description: "A feedback system for children that detects pronunciation errors.",
  },
  {
    slug: "see-sound-live",
    title: "See Sound Live",
    investigators: ["Dr. P. Vijayalakshmi (PI, Lead Consultant)"],
    fundingAgency: "4S Medical Systems",
    shortAgency: "4S Medical Systems",
    fundAllocated: "₹2.71 lakh",
    duration: "2020 – 2023",
    description:
      "A scoring system for deaf learners of speech, helping them speak by means of visual stimulus.",
  },
  {
    slug: "assistive-speech-nltm-bhashini",
    title: "Assistive Speech Technologies — NLTM BHASHINI",
    investigators: ["Dr. P. Vijayalakshmi", "Dr. T. Nagarajan"],
    consortiumLeader: "IIT Madras",
    fundingAgency: "Ministry of Electronics and Information Technology (MeitY)",
    shortAgency: "MeitY, with IIT Madras",
    fundAllocated: "₹85.26 lakh",
    duration: "2022 – 2025",
    description:
      "Assessment and therapy tools for speech articulatory disorders, ASR systems for dysarthric speakers, adaptive-rate TTS for people with articulation disorders and the visually challenged, and speech-based emotion recognition for disordered speech such as dysarthria.",
  },
  {
    slug: "prosody-modelling-nltm-bhashini",
    title: "Prosody Modelling for TTS — NLTM BHASHINI",
    investigators: ["Dr. T. Nagarajan (PI)", "Dr. P. Vijayalakshmi (Co-PI)"],
    consortiumLeader: "IIT Madras",
    fundingAgency: "Ministry of Electronics and Information Technology (MeitY)",
    shortAgency: "MeitY, with IIT Madras",
    fundAllocated: "₹98.41 lakh",
    duration: "2022 – 2025",
    description:
      "Prosodically rich annotation for ASR output usable for translation and transcreation, improved TTS naturalness, and a voice conversion system.",
  },
  {
    slug: "shiksha-hindi-tamil-mt",
    title: "Shiksha Initiative — Building a Hindi-to-Tamil Translation System",
    investigators: ["Dr. P. Vijayalakshmi", "Dr. K. Mrinalini"],
    fundingAgency: "HCL Technologies Limited",
    shortAgency: "HCL Technologies",
    fundAllocated: "₹10.28 lakh",
    duration: "2022 – 2023",
    description: "Translating the text content of the Shiksha Initiative (in Hindi) into Tamil.",
  },
  {
    slug: "s2s-translator-eng-hindi-tamil",
    title: "Standalone Speech-to-Speech Translator for English, Hindi and Tamil Languages",
    investigators: ["Dr. T. Nagarajan (PI)", "Dr. P. Vijayalakshmi (Co-PI)"],
    consortiumLeader: "IIT Dharwad",
    fundingAgency: "SERB – IMPRINT II C",
    shortAgency: "SERB, with IIT Dharwad",
    fundAllocated: "₹60 lakh",
    duration: "2023 – 2026 (Sanctioned)",
    description:
      "A speech-to-speech conversation system in English, Hindi and Tamil, in the domains of travel, health and agriculture.",
  },
  {
    slug: "multi-dialect-asr-tamil",
    title: "Real-time Multi Dialect Automatic Speech Recognition System for Tamil",
    investigators: [
      "Dr. B. Bharathi (PI)",
      "Dr. P. Vijayalakshmi (Co-PI)",
      "Dr. T. Nagarajan (Co-PI)",
    ],
    fundingAgency: "Tamil Virtual Academy (TVA)",
    shortAgency: "Tamil Virtual Academy",
    fundAllocated: "₹13.77 lakh",
    duration: "2023 – 2024",
    description:
      "A real-time automatic speech recognition system for conversational speech across five Tamil dialects.",
  },
];

const latestSlugs = [
  "s2s-translator-eng-hindi-tamil",
  "assistive-speech-nltm-bhashini",
  "prosody-modelling-nltm-bhashini",
];

export const latestProjects = latestSlugs
  .map((slug) => projectsDetailed.find((p) => p.slug === slug))
  .filter((p): p is ProjectDetail => Boolean(p));
