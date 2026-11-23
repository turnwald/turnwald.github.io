// Add courses here. Each entry: { slug, title, description, materials: [{ label, url }], demos: [{ label, url }], repositories: [{ label, url }] }.
export const courses = [
  {
    slug: 'model-predictive-control',
    title: 'Model Predictive Control',
    description: 'Teaching notebooks and projects for the THI master’s course on Model Predictive Control.',
    materials: [{ label: 'Lecture companion notebooks and projects', url: 'https://github.com/turnwald/thimpc' }],
    demos: [],
    repositories: [{ label: 'thimpc on GitHub', url: 'https://github.com/turnwald/thimpc' }]
  },
  {
    slug: 'mobile-robots',
    title: 'Mobile Robots and ROS',
    description: 'Interactive demonstrations of mobile robot locomotion, localization and planning.',
    materials: [],
    demos: [
      { label: 'Momentanpol und Radausrichtung (Deutsch)', url: '/labs/mobile-robots/CH3_icr_wheel_plot_only.html' },
      { label: 'Rimless Wheel (English)', url: '/labs/mobile-robots/CH3_rlw_only.html' },
      { label: 'Rimless Wheel and Straight-Leg Walker (English)', url: '/labs/mobile-robots/CH3_rlw_slw.html' },
      { label: '2-DOF Walker: rho const. vs. z const. (English)', url: '/labs/mobile-robots/CH3_walker_2dof.html' },
      { label: 'A* – Interaktive Suche (Deutsch)', url: '/labs/mobile-robots/CH5_astar_interaktiv.html' },
      { label: '1D Bayes-Filter – Türen (Deutsch)', url: '/labs/mobile-robots/CH5_bayes_filter_doors_plot_only.html' },
      { label: 'RRT* – Baumaufbau (Deutsch)', url: '/labs/mobile-robots/CH5_rrtstar_baumaufbau_einfach.html' },
      { label: 'RRT* – Interaktive Pfadplanung (Deutsch)', url: '/labs/mobile-robots/CH5_rrtstar_rewiring_interaktiv.html' },
      { label: 'TurtleBot – kinematisches Modell (Deutsch)', url: '/labs/mobile-robots/turtlebot_unicycle.html' }
    ],
    repositories: []
  },
  {
    slug: 'aktorik',
    title: 'Aktorik in der Robotik',
    description: 'Interactive demonstrations of electric machines and drive sizing.',
    materials: [],
    demos: [
      { label: 'Gleichstrommaschine – Ankerspannung und Feldschwächung (Deutsch)', url: '/labs/aktorik/CH2_Folie45_Ankerspannung_und_Feldschwaechung_interaktiv.html' },
      { label: 'Gleichstrommaschine – Kennlinien der Erregungsarten (Deutsch)', url: '/labs/aktorik/CH2_Folie46_Kennlinien_der_Erregungsarten_interaktiv.html' },
      { label: 'Gleichstrommaschine – Dynamik der fremderregten Maschine (Deutsch)', url: '/labs/aktorik/CH2_Folie47_Dynamik_der_fremderregten_Maschine_interaktiv.html' },
      { label: 'Synchronmaschine – Leistung und Kennlinien (Deutsch)', url: '/labs/aktorik/CH3_Synchronmaschine_Leistung_Kennlinien_interaktiv.html' },
      { label: 'Synchronmaschine – Interaktives Zeigerdiagramm (Deutsch)', url: '/labs/aktorik/CH3_Synchronmaschine_Zeigerdiagramm_interaktiv_v2.html' },
      { label: 'Auslegung eines PMSM/BLDC-Antriebs (Deutsch)', url: '/labs/aktorik/CH5_Antriebsauslegung_interaktiv.html' }
    ],
    repositories: []
  }
];