export type Locale = 'fr' | 'en'

export interface TranslationDictionary {
  common: {
    backToHome: string
    contactUs: string
    bookCall20Min: string
    whatsAppDirect: string
    freeDiagnostic: string
    viewCaseStudy: string
    allRightsReserved: string
    inProduction: string
    responseUnder24h: string
    doualaCameroon: string
    madeWithHeart: string
    frenchOnlyNotice: string
    legalAndPrivacy: string
  }
  header: {
    home: string
    services: string
    portfolio: string
    aiAutomation: string
    about: string
    team: string
    blog: string
    contact: string
    startProject: string
  }
  footer: {
    tagline: string
    solutionsTitle: string
    navigationTitle: string
    contactTitle: string
    systemsCustom: string
    aiChatbots: string
    uiuxDesign: string
    fleetManagement: string
    cloudInfra: string
  }
  home: {
    heroTag: string
    heroTitlePart1: string
    heroTitleHighlight: string
    heroTitlePart2: string
    heroSubtitle: string
    heroCtaPrimary: string
    heroCtaSecondary: string
    trustBasedIn: string
    trustBasedSub: string
    trustProduction: string
    trustProductionSub: string
    trustSupport: string
    trustSupportSub: string
    whatWeBuildTitle: string
    pillarsTag: string
    pillarsTitle: string
    pillarsTitleHighlight: string
    pillars: {
      build: {
        title: string
        desc: string
        services: string[]
      }
      design: {
        title: string
        desc: string
        services: string[]
      }
      grow: {
        title: string
        desc: string
        services: string[]
      }
    }
    stepsTag: string
    stepsTitle: string
    steps: {
      s1: { title: string; desc: string }
      s2: { title: string; desc: string }
      s3: { title: string; desc: string }
      s4: { title: string; desc: string }
      s5: { title: string; desc: string }
    }
    techTag: string
    techTitle: string
    techHighlight: string
    techCategories: {
      frontend: string
      backend: string
      database: string
      infra: string
      design: string
      mobile: string
    }
    sigfotBadge: {
      title: string
      desc: string
    }
    sigfotBar: string
    sigfotHighlights: {
      modules: string
      migrations: string
      support: string
      production: string
    }
    whyUsTag: string
    whyUsTitlePart1: string
    whyUsTitleHighlight: string
    whyUsDesc1: string
    whyUsDesc2: string
    whyItems: {
      speed: { title: string; desc: string }
      trust: { title: string; desc: string }
      quality: { title: string; desc: string }
      support: { title: string; desc: string }
    }
    projectTypes: {
      web: string
      mobile: string
      design: string
      systems: string
      marketing: string
      apis: string
    }
    portfolioTag: string
    portfolioTitlePart1: string
    portfolioTitleHighlight: string
    portfolioViewAll: string
    portfolioFeatured: string
    pillarsExplore: string
    scrollHint: string
    viewOnline: string
    stackTag: string
    stackTitle: string
    stackHighlight: string
    finalCtaTag: string
    finalCtaTitle: string
    finalCtaHighlight: string
    finalCtaDesc: string
  }
  services: {
    heroTag: string
    heroTitle: string
    heroHighlight: string
    heroSubtitle: string
    includedServices: string
    requestQuote: string
    pricingTag: string
    pricingTitle: string
    pricingSubtitle: string
    sections: {
      dev: {
        title: string
        subtitle: string
        desc: string
        items: string[]
      }
      design: {
        title: string
        subtitle: string
        desc: string
        items: string[]
      }
      content: {
        title: string
        subtitle: string
        desc: string
        items: string[]
      }
      marketing: {
        title: string
        subtitle: string
        desc: string
        items: string[]
      }
      it: {
        title: string
        subtitle: string
        desc: string
        items: string[]
      }
      training: {
        title: string
        subtitle: string
        desc: string
        items: string[]
      }
    }
  }
  pricing: {
    tag: string
    title: string
    subtitle: string
    priceLabel: string
    durationLabel: string
    customQuote: string
    inQuote: string
    startingFrom200k: string
    webPriceNote: string
    specialtyBadge: string
    ctaQuote: string
    plans: {
      web: {
        name: string
        target: string
        desc: string
        features: string[]
      }
      system: {
        name: string
        target: string
        desc: string
        features: string[]
      }
      chatbot: {
        name: string
        target: string
        desc: string
        features: string[]
      }
    }
  }
  portfolio: {
    heroTag: string
    heroTitle: string
    heroHighlight: string
    heroSubtitle: string
    allCategories: string
    featuredProject: string
    viewFullStudy: string
    noProjectsFound: string
    featuredTag: string
    caseStudyTitle: string
    caseStudyHighlight: string
    inProductionBadge: string
    flagshipBadge: string
    saasDevBadge: string
    sigfotSubtitle: string
    challengeLabel: string
    challengeDesc: string
    solutionLabel: string
    solutionDesc: string
    metricModules: string
    metricRoles: string
    metricMigrations: string
    metricTables: string
    pillar1Title: string
    pillar1Desc: string
    pillar2Title: string
    pillar2Desc: string
    pillar3Title: string
    pillar3Desc: string
    otherTag: string
    otherTitle: string
    otherHighlight: string
    catAll: string
    catDev: string
    catAi: string
    catDesign: string
    catContent: string
    catMarketing: string
    ctaTag: string
    ctaTitle: string
    ctaHighlight: string
    ctaSubtitle: string
    ctaStart: string
    ctaWhatsapp: string
    cardFlagship: string
    cardViewStudy: string
    cardDetailedStudy: string
  }
  blog: {
    heroTag: string
    heroTitle: string
    heroHighlight: string
    heroSubtitle: string
    readArticle: string
    emptyTitle: string
    emptySubtitle: string
    backToBlog: string
    ctaTitle: string
    ctaSubtitle: string
    ctaWhatsapp: string
    ctaContact: string
    posts: {
      post1: {
        title: string
        excerpt: string
        category: string
      }
      post2: {
        title: string
        excerpt: string
        category: string
      }
    }
  }
  aiAutomation: {
    heroTag: string
    heroTitlePart1: string
    heroTitleHighlight: string
    heroSubtitle: string
    requestDiagnostic: string
    viewConcreteExample: string
    capabilitiesTag: string
    capabilitiesTitle: string
    cards: {
      c1: { title: string; desc: string; tag: string }
      c2: { title: string; desc: string; tag: string }
      c3: { title: string; desc: string; tag: string }
      c4: { title: string; desc: string; tag: string }
    }
    targetAudienceTag: string
    targets: string[]
    methodologyTag: string
    methodologyTitle: string
    methodSteps: {
      m1: { title: string; desc: string }
      m2: { title: string; desc: string }
      m3: { title: string; desc: string }
      m4: { title: string; desc: string }
    }
    proofTag: string
    proofTitle: string
    proofDesc: string
    proofTechnicalNote: string
    proofMetrics: {
      modules: string
      tables: string
      migrations: string
    }
    proofReadStudy: string
    prototypeBadge: string
    prototypeTitle: string
    prototypeDesc: string
    prototypeCta: string
    scenarioTag: string
    scenarioTitle: string
    scenarioDesc: string
    scenarioResult: string
    dataPrivacyTitle: string
    dataPrivacyDesc: string
    faqTag: string
    faqTitle: string
    faq: {
      q1: { q: string; a: string }
      q2: { q: string; a: string }
      q3: { q: string; a: string }
      q4: { q: string; a: string }
    }
    finalCtaTitle: string
    finalCtaSubtitle: string
  }
  transport: {
    heroTag: string
    heroTitlePart1: string
    heroTitleHighlight: string
    heroSubtitle: string
    challengesTag: string
    challengesTitle: string
    challenges: {
      c1: { title: string; desc: string }
      c2: { title: string; desc: string }
      c3: { title: string; desc: string }
      c4: { title: string; desc: string }
    }
    solutionTag: string
    solutionTitle: string
    solutionDesc: string
    solutionPillars: {
      p1: { title: string; desc: string }
      p2: { title: string; desc: string }
      p3: { title: string; desc: string }
      p4: { title: string; desc: string }
    }
    proofTag: string
    proofTitle: string
    proofDesc: string
    proofMetrics: {
      modules: string
      tables: string
      migrations: string
      bankAccounts: string
    }
    proofCta: string
    methodologyTag: string
    methodologyTitle: string
    methodSteps: {
      s1: { title: string; desc: string }
      s2: { title: string; desc: string }
      s3: { title: string; desc: string }
      s4: { title: string; desc: string }
    }
    faqTag: string
    faqTitle: string
    faq: {
      q1: { q: string; a: string }
      q2: { q: string; a: string }
      q3: { q: string; a: string }
      q4: { q: string; a: string }
    }
    finalCtaTitle: string
    finalCtaSubtitle: string
  }
  about: {
    heroTag: string
    heroTitle: string
    heroHighlight: string
    heroSubtitle: string
    visionTag: string
    visionTitle: string
    visionHighlight: string
    visionDesc: string
    missionTag: string
    missionTitle: string
    missionHighlight: string
    missionDesc: string
    valuesTag: string
    valuesTitle: string
    valuesHighlight: string
    values: {
      v1: { title: string; desc: string }
      v2: { title: string; desc: string }
      v3: { title: string; desc: string }
      v4: { title: string; desc: string }
    }
    ctaTitle: string
    ctaDesc: string
    ourStory: string
  }
  team: {
    heroTag: string
    heroTitle: string
    heroHighlight: string
    heroSubtitle: string
    joinTitle: string
    joinHighlight: string
    joinDesc: string
    applyBtn: string
  }
  contact: {
    heroTag: string
    heroTitle: string
    heroHighlight: string
    heroSubtitle: string
    labels: {
      phone: string
      email: string
      address: string
      whatsapp: string
    }
    addressValue: string
    coordTitle: string
    whatsappTitle: string
    whatsappSub: string
    socialsTitle: string
    formTitle: string
    formHighlight: string
    formSubtitle: string
    form: {
      nameLabel: string
      namePlaceholder: string
      nameRequired: string
      emailLabel: string
      emailPlaceholder: string
      emailRequired: string
      emailInvalid: string
      phoneLabel: string
      phonePlaceholder: string
      subjectLabel: string
      subjectPlaceholder: string
      subjectRequired: string
      subjectOptions: {
        dev: string
        design: string
        content: string
        marketing: string
        support: string
        training: string
        other: string
      }
      messageLabel: string
      messagePlaceholder: string
      messageRequired: string
      sendButton: string
      sending: string
      successTitle: string
      successMessage: string
      sendAnother: string
      errorMessage: string
    }
  }
  legal: {
    tag: string
    title: string
    lastUpdate: string
    sections: {
      editorTitle: string
      editorText: string
      editorHeadquarters: string
      editorPhone: string
      editorEmail: string
      editorDirector: string
      hostingTitle: string
      hostingText: string
      dataTitle: string
      dataText: string
      dataContactTitle: string
      dataContactText: string
      dataAnalyticsTitle: string
      dataAnalyticsText: string
      intellectualPropertyTitle: string
      intellectualPropertyText: string
      cookiesTitle: string
      cookiesText: string
      rightsTitle: string
      rightsText: string
    }
  }
  meta: {
    homeTitle: string
    homeDesc: string
    servicesTitle: string
    servicesDesc: string
    aiTitle: string
    aiDesc: string
    transportTitle: string
    transportDesc: string
    aboutTitle: string
    aboutDesc: string
    teamTitle: string
    teamDesc: string
    contactTitle: string
    contactDesc: string
    legalTitle: string
    legalDesc: string
    portfolioTitle: string
    portfolioDesc: string
    blogTitle: string
    blogDesc: string
  }
}
