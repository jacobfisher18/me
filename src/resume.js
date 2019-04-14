import pic_1 from './images/pic_1.png'
import pic_2 from './images/pic_2.png'
import tutorfly_1 from './images/tutorfly_1.png'
import tutorfly_2 from './images/tutorfly_2.png'
import tutorfly_3 from './images/tutorfly_3.png'

export const experiences = [
  {
    company: 'Tutorfly, Inc.',
    title: 'Software Development Intern',
    timeframe: 'September 2018 – Present',
    bullets: [
      'Worked as a full-stack web developer, reporting directly to the CTO, on various web and native projects',
      "Implemented a web analytics system through Google Analytics to track click and pageview events throughout the site in order to optimize the site's UI",
      'Developed a large part of the mobile application via React Native, including designing mockups for the screens and developing in an agile environment',
    ]
  },
  {
    company: 'Creative Artists Agency',
    title: 'Business Technology Solutions Intern (Music Touring)',
    timeframe: 'June 2018 – August 2018',
    bullets: [
      'Developed the preliminary data acquisition strategy for music data sources meant to inform agents’ decisions about tour routing for their clients',
      'Collaborated with talent agents as well as members of the Business Technology Solutions team to understand project requirements and develop use cases',
      'Consulted for the agency by defining data source categories, identifying key assessment criteria, and providing recommendations of APIs and other data services to ingest',
    ]
  },
  {
    company: 'FOX Networks Group',
    title: 'Full-Stack Software Engineering Intern',
    timeframe: 'June 2017 – September 2017',
    bullets: [
      'Worked as a full-stack software engineering intern for the API team in the Fox Digital Consumer Group',
      'Implemented from scratch a suite of internal tools to improve workflow for the other developers, including a project management tool meant to track developer progress on tasks and keep team members informed',
      'Utilized the MERN stack to manage all aspects of the applications, including front-end design and development, back-end architecture, and data storage',
    ]
  },
]

export const projects = [
  {
    title: 'Tutorfly Mobile App',
    link: 'https://itunes.apple.com/us/app/tutorfly/id1458933486?mt=8&app=itunes&ign-mpt=uo%3D4',
    githubLink: '',
    blurb: 'I served as one of the principle developers in building out the Tutorfly mobile app from scratch using React Native and Expo. I worked in an agile time with 2 other developers in implementing authorization, state management, ui-development, interfacing with graphql, and more. The app was released to the iOS App Store on April 14, 2019.',
    images: [
      {
        src: tutorfly_1,
        caption: '0011. Tutorfly mobile app launch screen',
      },
      {
        src: tutorfly_2,
        caption: "0012. The 'find a tutor' page",
      },
      {
        src: tutorfly_3,
        caption: '0013. The profile page',
      }
    ],
  },
  {
    title: 'Spotify Playlist Analyzer',
    link: '',
    githubLink: 'https://github.com/jacobfisher18/playlist_analyzer',
    blurb: 'This personal project is a web app that integrates with the Spotify API to show you descriptive stats about your playlists. Use it to discover which of your playlists is the most “dancable,” or which tracks are the most popular.',
    images: [
      {
        src: pic_1,
        caption: '0021. landing page',
      },
      {
        src: pic_2,
        caption: '0022. home page',
      },
    ]
  },
  {
    title: 'Tutorfly Web Analytics',
    link: '',
    githubLink: '',
    blurb: 'My first project with Tutorfly was to implement web analytics for their web application. I set up Google Analytics with custom event tracking to track things like how often new users signed up, or the zip codes that get searched most often. The work involved familiarizing myself with the codebase to access relevant variables and injecting javascript throughout the web app.',
    images: []
  },
  {
    title: 'FOX DCGAPI Internal Tools',
    link: '',
    githubLink: '',
    blurb: 'Interning at the Fox Digital Consumer Group, my project was to implement from scratch a suite of internal tools to help out the API team. The main internal tool was a full stack web application that interfaced with the github API to track the status of their JIRA tickets. I built a back-end in Node, Express, and MongoDB, and a front-end in React and Redux.',
    images: []
  },
  {
    title: 'CAA Music Touring Data Strategy',
    link: '',
    githubLink: '',
    blurb: "This one isn't quite a web dev job, but it was an interesting project I really enjoyed. At CAA my job was to research and recommend a data-acquisition strategy for the music touring department. I looked into API's provided by large and small companies, and compiled information on what data existed where. The deliverable from the end of my project will guide the agents in their pursiot to make more educated data-driven decisions about tour routing for their clients.",
    images: []
  },
]

export const skills = [
  'HTML5',
  'CSS3',
  'JavaScript',
  'React',
  'Redux',
  'React Native',
  'Node.js',
  'MongoDB',
  'Express.js',
  'C++',
  'Agile Development',
  'State Management',
  'Asynchronous Computing',
  'REST APIs',
  'Front End Frameworks',
]

export const interests = [
  'Los Angeles Sports Teams',
  'Linguistics',
  'UCLA Bruins',
  'Spotify Playlists',
  'Cool Movies',
  'UCLA Spring Sing',
  'User Interfaces',
  'Road Trips',
]