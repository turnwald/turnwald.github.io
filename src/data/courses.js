// Add courses here. Links use { label, url }; demo links may also have a topic heading.
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
    title: 'Mobile Robots and ROS / Mobile Roboter und ROS',
    description: 'Interactive demonstrations of mobile robot locomotion, localization and planning.',
    materials: [],
    demos: [
      { topic: 'Kinematics / Kinematik', label: 'Instantaneous Center of Rotation and Wheel Orientation / Momentanpol und Radausrichtung (Deutsch)', url: '/labs/mobile-robots/CH3_icr_wheel_plot_only.html' },
      { topic: 'Kinematics / Kinematik', label: 'TurtleBot Kinematic Model / Kinematisches TurtleBot-Modell (Deutsch)', url: '/labs/mobile-robots/turtlebot_unicycle.html' },
      { topic: 'Locomotion / Fortbewegung', label: 'Rimless Wheel / Speichenrad ohne Felge (English)', url: '/labs/mobile-robots/CH3_rlw_only.html' },
      { topic: 'Locomotion / Fortbewegung', label: 'Rimless Wheel and Straight-Leg Walker / Speichenrad ohne Felge und Starrbeinläufer (English)', url: '/labs/mobile-robots/CH3_rlw_slw.html' },
      { topic: 'Locomotion / Fortbewegung', label: '2-DOF Walker: Constant ρ vs. Constant z / Zweifreiheitsgrad-Läufer: Konstantes ρ vs. konstantes z (English)', url: '/labs/mobile-robots/CH3_walker_2dof.html' },
      { topic: 'Localization / Lokalisierung', label: '1D Bayes Filter: Door Localization / Eindimensionaler Bayes-Filter: Lokalisierung anhand von Türen (Deutsch)', url: '/labs/mobile-robots/CH5_bayes_filter_doors_plot_only.html' },
      { topic: 'Navigation and Planning / Navigation und Planung', label: 'A* – Interactive Search / A* – Interaktive Suche (Deutsch)', url: '/labs/mobile-robots/CH5_astar_interaktiv.html' },
      { topic: 'Navigation and Planning / Navigation und Planung', label: 'RRT* – Tree Construction / RRT* – Baumaufbau (Deutsch)', url: '/labs/mobile-robots/CH5_rrtstar_baumaufbau_einfach.html' },
      { topic: 'Navigation and Planning / Navigation und Planung', label: 'RRT* – Interactive Path Planning / RRT* – Interaktive Pfadplanung (Deutsch)', url: '/labs/mobile-robots/CH5_rrtstar_rewiring_interaktiv.html' }
    ],
    repositories: []
  },
  {
    slug: 'aktorik',
    title: 'Robotic Actuators / Aktorik in der Robotik',
    description: 'Interactive demonstrations of electric machines and drive sizing.',
    materials: [],
    demos: [
      { topic: 'DC Machines / Gleichstrommaschinen', label: 'Armature Voltage and Field Weakening / Ankerspannung und Feldschwächung (Deutsch)', url: '/labs/aktorik/CH2_Folie45_Ankerspannung_und_Feldschwaechung_interaktiv.html' },
      { topic: 'DC Machines / Gleichstrommaschinen', label: 'Characteristics of Excitation Types / Kennlinien der Erregungsarten (Deutsch)', url: '/labs/aktorik/CH2_Folie46_Kennlinien_der_Erregungsarten_interaktiv.html' },
      { topic: 'DC Machines / Gleichstrommaschinen', label: 'Dynamics of a Separately Excited DC Machine / Dynamik der fremderregten Gleichstrommaschine (Deutsch)', url: '/labs/aktorik/CH2_Folie47_Dynamik_der_fremderregten_Maschine_interaktiv.html' },
      { topic: 'Synchronous Machines / Synchronmaschinen', label: 'Power and Characteristic Curves / Leistung und Kennlinien (Deutsch)', url: '/labs/aktorik/CH3_Synchronmaschine_Leistung_Kennlinien_interaktiv.html' },
      { topic: 'Synchronous Machines / Synchronmaschinen', label: 'Interactive Phasor Diagram / Interaktives Zeigerdiagramm (Deutsch)', url: '/labs/aktorik/CH3_Synchronmaschine_Zeigerdiagramm_interaktiv_v2.html' },
      { topic: 'Drive Sizing / Antriebsauslegung', label: 'PMSM/BLDC Drive Sizing / Auslegung eines PMSM/BLDC-Antriebs (Deutsch)', url: '/labs/aktorik/CH5_Antriebsauslegung_interaktiv.html' }
    ],
    repositories: []
  }
];