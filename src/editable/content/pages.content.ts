import { slot4BrandConfig } from '@/editable/theme/brand.config'

export const pagesContent = {
  home: {
    metadata: {
      title: 'Media distribution, releases, and coverage updates',
      description: 'Explore media distribution briefs, announcements, coverage notes, and publication-ready updates through a clean archive experience.',
      openGraphTitle: 'Media distribution, releases, and coverage updates',
      openGraphDescription: 'Discover media releases, distribution notes, campaign updates, and connected coverage from one focused publication hub.',
      keywords: ['media distribution', 'press release', 'newsroom updates', 'media coverage'],
    },
    hero: {
      badge: 'Media distribution desk',
      title: ['Distribute releases, coverage,', 'and public updates with clarity.'],
      description: 'Browse campaign announcements, media briefs, publication notes, and distribution-ready stories organized for fast discovery.',
      primaryCta: { label: 'Browse media updates', href: '/media-distribution' },
      secondaryCta: { label: 'Search archive', href: '/search' },
      searchPlaceholder: 'Search releases, outlets, categories, and updates',
      focusLabel: 'Focus',
      featureCardBadge: 'latest cover rotation',
      featureCardTitle: 'Latest posts shape the visual identity of the homepage.',
      featureCardDescription: 'Recent images and stories stay at the center of the experience without changing any core platform behavior.',
    },
    intro: {
      badge: 'Distribution workflow',
      title: 'Built for teams that need media updates to travel cleanly.',
      paragraphs: [
        'This site brings together distribution briefs, release copy, campaign context, and searchable updates so visitors can move naturally from headline to detail.',
        'Instead of scattering announcements across disconnected surfaces, the platform keeps media distribution content organized with consistent navigation and readable summaries.',
        'Whether someone starts with a release, a campaign note, a company update, or a supporting resource, they can keep discovering related media context without friction.',
      ],
      sideBadge: 'At a glance',
      sidePoints: [
        'Reading-first homepage with stronger emphasis on stories and imagery.',
        'Connected sections for articles, visuals, listings, and supporting resources.',
        'Cleaner browsing rhythm designed to make exploration feel easier.',
        'Lightweight interactions that keep the experience fast and readable.',
      ],
      primaryLink: { label: 'Browse distribution', href: '/media-distribution' },
      secondaryLink: { label: 'Search updates', href: '/search' },
    },
    cta: {
      badge: 'Start exploring',
      title: 'Move every media update through one connected experience.',
      description: 'Browse releases, coverage notes, distribution briefs, and supporting resources through one clearer visual system.',
      primaryCta: { label: 'Browse Distribution', href: '/media-distribution' },
      secondaryCta: { label: 'Contact Desk', href: '/contact' },
    },
    taskSection: {
      heading: 'Latest {label}',
      descriptionSuffix: 'Browse the newest posts in this section.',
    },
  },
  about: {
    badge: 'Our Story',
    title: 'A clearer way to organize media distribution.',
    description: `${slot4BrandConfig.siteName} helps media teams, brands, and publishers present distribution updates in one focused public archive.`,
    paragraphs: [
      'Instead of splitting releases, campaign notes, and media coverage into disconnected pages, the platform keeps related updates easy to scan and easy to understand.',
      'Whether someone starts with a release, a distribution brief, a source note, or a supporting resource, they can continue exploring without losing context.',
      'The experience is designed for trust: concise summaries, real post data, readable detail pages, and clear routes into search, contact, and creation.',
    ],
    values: [
      {
        title: 'Release-first structure',
        description: 'Every page prioritizes headlines, summaries, categories, and context so media updates can be understood quickly.',
      },
      {
        title: 'Connected coverage',
        description: 'Distribution posts, search, creation, contact, and detail pages share one visual system so discovery feels natural.',
      },
      {
        title: 'Credible presentation',
        description: 'We focus on clean navigation, calm spacing, and practical calls to action so visitors can act on useful content faster.',
      },
    ],
  },
  contact: {
    eyebrow: `Contact ${slot4BrandConfig.siteName}`,
    title: 'Reach the media distribution desk.',
    description: 'Send release material, campaign questions, correction requests, syndication opportunities, or publishing support notes. We will route your message to the right lane.',
    formTitle: 'Send a media request',
  },

  search: {
    metadata: {
      title: 'Search',
      description: 'Search media distribution posts, releases, topics, categories, and coverage updates across the site.',
    },
    hero: {
      badge: 'Search the media archive',
      title: 'Find releases, coverage notes, and distribution updates faster.',
      description: 'Use keywords, categories, and content types to discover media distribution posts from every active section of the site.',
      placeholder: 'Search by release, outlet, topic, category, or title',
    },
    resultsTitle: 'Latest media distribution content',
  },
  create: {
    metadata: {
      title: 'Create',
      description: 'Create and submit new media distribution content for the site.',
    },
    locked: {
      badge: 'Creator access',
      title: 'Login to create media updates.',
      description: 'Use your account to open the publishing workspace and create release briefs, campaign notes, and distribution posts.',
    },
    hero: {
      badge: 'Media publishing workspace',
      title: 'Create distribution-ready updates.',
      description: 'Choose the content type, add release details, source links, summaries, and body content for a clean media distribution post.',
    },
    formTitle: 'Content details',
    submitLabel: 'Submit content',
    successTitle: 'Content submitted successfully.',
  },
  auth: {
    login: {
      metadataDescription: 'Login page for this site.',
      badge: 'Member access',
      title: 'Welcome back to your media desk.',
      description: 'Login to continue browsing, managing submissions, and creating media distribution content from your account.',
      formTitle: 'Login',
      submitLabel: 'Continue',
      noAccount: 'No account matched these details. Create an account first, then login.',
      success: 'Login successful. Redirecting...',
      createCta: 'Create an account',
    },
    signup: {
      metadataDescription: 'Signup page for this site.',
      badge: 'Site access',
      title: 'Create your account and start distributing.',
      description: 'Create an account to access the media workspace, save details, and submit distribution content through the site.',
      formTitle: 'Create account',
      submitLabel: 'Create account',
      passwordShort: 'Use at least 4 characters for the password.',
      success: 'Account created successfully. Redirecting...',
      loginCta: 'Login',
    },
  },
  detailPages: {
    article: {
      relatedTitle: 'Related articles',
      fallbackTitle: 'Article details',
    },
    listing: {
      relatedTitle: 'Related listings',
      fallbackTitle: 'Listing details',
    },
    image: {
      relatedTitle: 'Related visuals',
      fallbackTitle: 'Image details',
    },
    profile: {
      relatedTitle: 'Suggested articles',
      fallbackDescription: 'Profile details will appear here once available.',
      visitButton: 'Visit Official Site',
    },
  },
} as const
