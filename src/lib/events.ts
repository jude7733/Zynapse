export const eventsList = [
  "Hackathon",
  "AR Treasure Hunt",
  "Debugging",
  "Web Development",
  "Relay Coding",
  "Tech Quiz",
  "PPT Presentation",
  "Wikipedia Game",
];

export const individualEvents = [
  {
    id: 1,
    title: "Web Development",
    description: "Showcase your web development prowess.",
    alt: "WebWeave",
    prize: { first: 3000, second: 2000 },
    imageSrc: "/web-design.jpeg",
    rules: {
      do: [
        "Ensure you have a good understanding of HTML, CSS, and JavaScript",
        "System will be provided",
        "Pay close attention to the specific task provided at the start ",
        "The result will be based on equal points for design, functionality and interactivity",
      ],
      dont: [
        "Avoid using external libraries or frameworks unless specified",
        "Do not bring any external reference materials or notes",
        "Follow all instructions and decisions provided by the organizers and judges",
      ],
    },
    closed: true,
  },
  {
    id: 2,
    title: "Debugging",
    description: "Fix bugs, compete, and enhance skills.",
    alt: "CoDebug",
    prize: { first: 3000, second: 2000 },
    imageSrc: "/debugging.jpeg",
    rules: {
      do: [
        "The competition is based on C/C++ programming",
        "Pay close attention to the questions in the preliminary quiz.",
        "Writing materials for the quiz and systems for debugging will be provided",
        "Judges and organizers decision will be final",
      ],
      dont: [
        "No external reference or usage of internet from any device is allowed",
        "Do not end debugging without identifying and correcting all errors(Syntax, Logical, or Semantic)",
        "No extra time would be allocated to anyone",
      ],
    },
    closed: true,
  },
  {
    id: 3,
    title: "E-football",
    description: "Dive into action! Join the PES competition",
    alt: "E-football",
    prize: { first: 2000, second: 1000 },
    imageSrc: "/Pes-tour.jpeg",
    rules: {
      do: [
        "Total number of rounds will be decided on terms of total entry in the tournament.",
        "Only 3 iconic cards, 2 legend cards, 2 featured cards are allowed.",
        "Once an opponent complaints that you are a long baller or a lag cheater(with video proof), you will be disqualified.",
      ],
      dont: [],
    },
    closed: true,
  },
  {
    id: 4,
    title: "Wikipedia Game",
    description:
      "Navigate Wikipedia links to the target using only the hyperlinks.",
    alt: "Wikipedia Game",
    prize: { first: 1000, second: 0 },
    imageSrc: "/wikipedia.jpg",
    rules: {
      do: [
        "Navigate from one Wikipedia page to another specific page using only the hyperlinks within the articles.",
        "Start on a randomly chosen Wikipedia page.",
      ],
      dont: [
        "Players can only click on internal links (no search bar!).",
        "First person to reach the target page wins!",
      ],
    },
    closed: true,
  },
  {
    id: 5,
    title: "PPT Presentation",
    description: "Present your ideas and innovations. (School students only)",
    alt: "PPT Presentation",
    prize: { first: 2000, second: 1000 },
    imageSrc: "/PPT_present.jpeg",
    rules: {
      do: [
        "School students only",
        "Participants may select any topic related to Computer Science and Technology",
        "Suggested topics include but are not limited to: \n\t\tTechnology and Innovation \n\t\tScience and Society \n\t\tSocial issues and Ethics \n\t\tFuture-Oriented topics \n\t\tArtificial Intelligence and Beyond \n\t\tSustainability and Technology",
        "The presentation should be between 5-7 minutes and maximum of 15 slides",
      ],
      dont: [
        "The presentation should be in English",
        "All content must be original. Plagiarism will result in immediate disqualification",
      ],
    },
    closed: true,
  },
];

export const teamEvents = [
  {
    id: 7,
    title: "Relay Coding",
    description: "Team up and code in a relay format.",
    alt: "Relay Coding",
    prize: { first: 5000, second: 3000 },
    imageSrc: "/relay_coding.jpeg",
    team: "relayCoding",
    url: "/register/relay-coding",
    count: "3-4",
    rules: {
      do: [
        "Team will consist of 3-4 members",
        "Only the team lead needs to register but is required to add members details",
        "Utilize the 5 minutes before the relay begins to discuss your strategy with your team",
        "Each team member should pick up where the previous member left off based solely on the code]",
      ],
      dont: [
        "Strictly no verbal, written, or non-verbal communication is allowed during the event",
        "Any form of communication between team members during the coding phase will result in immediate disqualification",
        "Follow all instructions and decisions provided by the organizers and judges",
      ],
    },
    closed: true,
  },
  {
    id: 8,
    title: "Tech Quiz",
    description: "Prove your tech knowledge in this quiz.",
    alt: "GeekOut",
    prize: { first: 2000, second: 1000 },
    imageSrc: "/Tech_quiz.jpeg",
    team: "techQuiz",
    url: "/register/tech-quiz",
    count: "2",
    rules: {
      do: [
        "The quiz will have multiple rounds",
        "Each round will have a different set of questions",
        "The quiz will be conducted in English",
      ],
      dont: [
        "Do not bring mobile or external devices during the quiz",
        "Do not use any unfair means to cheat",
        "Follow all instructions and decisions provided by the organizers and judges",
      ],
    },
    closed: true,
  },
  {
    id: 9,
    title: "BGMI",
    description: "Battle it out in the battlegrounds of BGMI.",
    alt: "",
    prize: { first: 2000, second: 1000 },
    imageSrc: "/bgmi.jpg",
    team: "bgmi",
    url: "/register/bgmi",
    count: "4",
    rules: {
      do: [
        "4 player squad must",
        "Players must use their own network",
        "Must come with your smartphones and latest game version",
        "Ensure Erangel, Sanhok, Miramar maps are downloaded for the competition",
      ],
      dont: [
        "The first 20 slots are assigned on a first-come, first-served basis",
        "If there are more teams, the remaining 5 slots are assigned by TDM elimination",
      ],
    },
    closed: true,
  },
];

export const hackathonDetails = {
  id: 10,
  title: "Hackathon",
  description: "30 hours brain storming with exciting price",
  alt: "Hack'n Tech",
  prize: { first: 15000, second: 10000, third: 5000 },
  imageSrc: "/Hackathon.jpeg",
  team: "hackathon",
  url: "/hackathon",
  rules: {
    do: [
      "College students only",
      "Team must contain 3-4 members",
      "Maximum 15 teams will be allowed",
      "If registration exceeds 15 teams, each team will be requested to submit idea and the best 15 teams will be selected",
      "The first registrant becomes the Team Leader",
      "Team Leader is responsible for registering the team members and naming the team",
      "Participants should bring the system and resources required for the hackathon",
      "Teams cannot be changed once the hackathon begins",
      "Team ID will be allocated",
      "Design and prototype an innovative solution for the problem statement given",
      "Team must submit an abstract and detailed roadmap outlining their approach to solving the problem statement provided",
      "The decision of the judges and organizers shall be treated as final and binding on all",
      "The working prototypes has priority to win",
      "Wifi and accommodation facilities will be provided",
    ],
    dont: [],
  },
};
