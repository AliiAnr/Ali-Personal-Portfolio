export const projects = [
  {
    id: 1,
    title: "Ctzone - Timezone Converter",
    description:
      "An offline first iOS app that makes cross timezone coordination effortless. Ctzone highlights overlapping working hours, converts times instantly across multiple cities, and handles DST edge cases without requiring an internet connection.",
    image: "/project-covers/ctzone/ctzone-3.webp",
    appIcon: "/project-icons/ctzone-icon.png",
    tags: ["iOS", "Productivity", "Utilities", "Timezones", "Offline"],
    technologies: [
      "Swift",
      "SwiftUI",
      "Core Data",
      "UserDefaults",
      "Combine",
      "Foundation",
    ],
    tools: ["Xcode", "Figma", "Confluence", "GitHub"],
    url: "https://apps.apple.com/us/app/ctzone/id6748931770",
    githubUrl: "",

    star: {
      situation:
        'Global collaboration has made time zone coordination a daily task for remote teams, freelancers, and product squads spread across cities like Jakarta, Singapore, London, and San Francisco. In practice, people still rely on mental math, ad hoc searches, or calendar invites just to answer simple questions like “What is 10:30 AM my time in Berlin next Tuesday?”, and those guesses frequently break around daylight saving time (DST) switches. Missed or late meetings, unclear handoff windows, and repeated "what time is that for you?" messages quietly erode productivity.\n\nExisting tools often assume reliable connectivity, funnel users into calendar-first flows, or feel heavyweight for quick, on the go checks. Many are web dependent, bury DST nuances behind multiple taps, or require sign-in/sync that adds friction and privacy trade offs. For mobile scenarios, travel, spotty networks, or heads down work. People need something faster than opening a calendar, lighter than a full scheduling app, and more trustworthy than mental arithmetic.\n\nThis environment created a clear gap for an iOS first, offline reliable time converter that makes differences instantly visible, derisks DST, and reduces cognitive load for everyday planning. Whether you’re aligning standups across continents, setting customer support hours, or scheduling interviews across hemispheres.',
      task: [
        "Design and build an intuitive iOS app to compare and convert times across multiple time zones",
        "Provide clear visual highlights for overlapping working hours to simplify scheduling",
        "Ensure accurate, deterministic behavior during DST transitions and when offline",
        "Enable quick, lightweight workflows suitable for mobile first users",
        "Implement unit and UI testing to guarantee reliability and reduce crash rates",
        "Optimize performance for cold start speed, smooth scrolling, and low latency interactions",
      ],
      action: [
        "Led the development of the Ctzone app using SwiftUI, implementing MVVM architecture along with SOLID principle for clean code and easy maintenance",
        "Designed UI/UX in accordance with Apple HIG with light/dark mode theme support, ensuring a consistent experience across all screen sizes",
        "Implemented SwiftUI architecture with Combine based state for responsive, lightweight screens",
        "Implemented a manual conversion flow using Foundation’s avoid network dependency and ensure deterministic results",
        "Designed a ‘Time Scrubber’ that lets users slide a base time and see all cities update in real time, with working-hour bands highlighted",
        "Added multi city compare, favorite cities, and quick search with persistent storage via Core Data",
        "Handled DST boundaries with targeted states",
        "Optimized for offline use and cold start performance with preloaded time zone metadata",
        "Conducted usability tests and iterated on typography/contrast to meet iOS accessibility guidelines",
      ],
      result: [
        "Delivered a fully offline first experience no sign-in or network required for core conversions",
        "Deterministic & accurate time conversion in >100 test scenarios (including DST transitions)",
        "Cold start under 250 ms on mid range devices. Scrolling & slider interactions at 60 fps",
        "Improved reliability during DST changes through deterministic calculations and tests around boundary dates",
        "Writing unit & UI tests using XCTest, achieving >90% code coverage and reducing the crash rate by 30%",
        "Beta users reported 35% fewer back and forth messages",
        "Faster planning and sharing of proposed times",
      ],
    },

    roles: ["iOS Developer", "UI/UX Designer", "Researcher"],

    mockups: [
      "/project-covers/ctzone/ctzone-1.png",
      "/project-covers/ctzone/ctzone-2.png",
      "/project-covers/ctzone/ctzone-3.webp",
    ],
  },

  {
    id: 2,
    title: "Runday - Smart Recovery",
    description:
      "An iOS app that analyzes HealthKit to prevent overtraining. Runday gives simple, actionable recovery recommendations, zone based load insights, and gentle nudges to keep your training sustainable.",
    image: "/project-covers/runday/runday-3.png",
    appIcon: "/project-icons/runday-icon.png",
    tags: ["iOS", "Health", "Fitness", "Recovery", "Privacy"],
    technologies: [
      "HealthKit",
      "Swift",
      "SwiftUI",
      "Combine",
      "UserDefaults",
      "Foundation",
      "Swift Charts",
    ],
    tools: ["Xcode", "Sketch", "Confluence", "Github"],
    url: "https://example.com/runday", // belum WOII
    githubUrl: "https://github.com/example/runday",

    star: {
      situation:
        "Over the past few years, beginner runners have gained unprecedented access to data pace, heart rate, VO₂ estimates, sleep, and more yet most still struggle with one deceptively simple question: “What should I do today so I don’t overtrain?” Popular apps excel at collecting numbers but often stop short of converting them into clear, day to day recovery decisions. As a result, many beginner runners stack hard sessions, misinterpret heart rate zones, or chase weekly mileage without acknowledging cumulative fatigue.\n\nAt the same time, the realities of modern life irregular schedules, limited time, and varying stress make it hard to follow rigid plans. Beginner runners need guidance that adapts to how they actually trained, not just what a generic calendar says. They want to see when their body likely needs rest, when an easy jog is enough, and when it’s safe to push without digging through charts or learning new jargon.\n\nThe market also presents practical barriers. Some platforms require accounts, sync data to external services, or prioritize social features over clarity, creating privacy trade offs and cognitive overload. For many beginner runners, a simpler path is needed: keep data local, honor user consent, and translate the essentials time in heart rate zones, recent load trends, and session difficulty into a single, confident recommendation for today.\n\nRunday was conceived for this gap. It focuses on the moments that matter: after a run (what does this mean for tomorrow?), before lacing up (what should I do today?), and during the week (am I tipping toward overtraining?). By computing a zone-weighted training load from HealthKit, contextualizing it with rolling training trends, and surfacing it through friendly Recovery Cards and widgets, Runday aims to reduce decision fatigue, support sustainable progress, and protect beginner runners privacy with on-device processing.",
      task: [
        "Design an iOS app that translates HealthKit data into simple daily recovery decisions",
        "Implement zone aware training load scoring with rolling trends to prevent overtraining",
        "Build run tracking and dashboard screens to surface distance, duration, heart rate, and zone distribution clearly",
        "Visualize fatigue, freshness, and load insights through charts and Recovery Cards with minimal cognitive load",
        "Integrate HealthKit with granular permissions and efficient anchored/observer queries",
        "Ensure all computations remain on device for privacy, with no accounts or third party servers",
        "Optimize performance for cold start, chart interactions, and smooth scrolling using Instruments profiling",
        "Conduct usability tests and iterate to validate clarity, accessibility, and task success",
      ],
      action: [
        "Architected and implemented Runday’s smart recovery engine using SwiftUI, HealthKit, and Combine to deliver personalized post run recommendations and keep users from overtraining",
        "Designed and built comprehensive run tracking screens that display distance, duration, and average heart rate, plus an intuitive dashboard of heart rate zones and training load insights",
        "Engineered advanced metrics (TRIMP, Acute Training Load) to translate raw health data into actionable recovery plans, helping both beginners and seasoned runners stay injury free",
        "Structured the app around MVVM with light themes per Apple HIG, ensuring a clean, responsive UI and easy maintenance",
        "Integrated HealthKit with granular permissions and anchored/observer queries for efficient updates",
        "Computed zone weighted training load from time in zone, added rolling training trends to contextualize stress vs freshness",
        "Designed Recovery Cards that translate load into next best actions with simple rationales",
        "Built Charts for load trends, HR zone distribution, and session difficulty. Emphasized clarity and Dynamic Type accessibility",
        "Implemented today’s recovery suggestion and next recommended window",
        "Persisted summaries and user preferences locally, no accounts, no external servers",
        "Profiled startup and scrolling with Instruments. Optimized queries and view updates to keep interactions smooth at 60 fps",
      ],
      result: [
        "Beta tests showed users identified a suitable recovery plan in <20 seconds on first use",
        "Surveyed testers reported fewer back to back ‘hard’ days and better adherence to recovery guidance",
        "Cold start 250 ms on mid range devices, stable frame pacing during chart interactions in profiling",
        "Clear privacy stance: all computations on device, no third party analytics by default",
        "Testers successfully followed recovery guidance without needing extra instructions",
      ],
    },

    roles: ["iOS Developer", "Researcher"],

    mockups: [
      "/project-covers/runday/runday-1.png",
      "/project-covers/runday/runday-2.png",
      "/project-covers/runday/runday-3.png",
    ],
  },

  {
    id: 3,
    title: "WeDraw - Trace & Create",
    description:
      "An iOS Augmented Reality tracing app that lets users place a reference image in world space, then move, rotate, and scale it smoothly. Even if the anchor is lost, drawing feels stable and intuitive.",
    image: "/project-covers/wedraw/wedraw-3.png",
    appIcon: "/project-icons/wedraw-icon.png",
    tags: [
      "iOS",
      "Augmented Reality",
      "Graphics",
      "Design",
      "Drawing",
      "Productivity",
    ],
    technologies: [
      "UIKit",
      "Vision",
      "ARKit",
      "SceneKit",
      "Swift",
      "RealityKit",
      "Core Data",
      "Lottie",
    ],
    tools: ["Xcode", "Figma", "Confluence", "Github"],
    url: "https://apps.apple.com/us/app/wedraw-trace-create/id6747817632",
    githubUrl: "",

    star: {
      situation:
        "Interviews showed 70% beginners find the head hardest to draw. Core pains: turning one photo into consistent multi angle drawings, keeping proportions/symmetry/landmarks, and conveying expression. Traditional or screen bound tools don’t build 3D spatial understanding. Experts note the absence of interactive spatial aids leads to plateaus. Existing solutions fall short AR overlays act like flat stickers, 3D mannequins stay on screen, and scans lack study detail. Beginners need structured, traceable, 3D guidance. WeDraw addresses this with an iOS AR flow with stable world space references you can move/rotate/scale, Loomis style guides, and anchor loss tolerance so practice continues across angles without re alignment.",
      task: [
        "Design a low friction AR tracing flow with instant place/align/lock controls",
        "Keep transforms stable in world space and usable even when the anchor is temporarily lost",
        "Preserve reference proportions with dynamic, aspect aware sizing",
        "Deliver a clear, tactile UI that works one handed",
        "Integrate an on device Vision pipeline to compare user sketches against the original reference",
        "Improve Vision accuracy with adaptive thresholding, contour smoothing, and scale/orientation normalization",
      ],
      action: [
        "Implemented world space transform controls with pan/pinch/rotate gestures mapped to translation, uniform scale, and yaw constrained to preserve aspect ratio for the tracing image",
        "Added an anchor loss fallback: when tracking quality drops, editing stays enabled and transforms persist. relocks seamlessly once tracking recovers",
        "Built a smooth mode selection carousel (Trace in AR / Draw with Reference) with scale/opacity transitions and page indicators for quick mental parsing",
        "Applied temporal smoothing (low pass damping) to camera driven updates to reduce micro jitter without feeling laggy",
        "Built an on device Vision pipeline (edge/contour extraction + shape matching) to compare the user’s sketch with the reference and surface a simple deviation score with optional overlay hints",
        "Improved accuracy via adaptive thresholding, contour smoothing, and orientation/scale normalization. Tuned tolerances for line weight and lighting variance across devices",
        "Benchmarked and optimized the vision path for low latency",
        "Separated `anchorImage` from `tracingImage` and sized the tracing plane dynamically based on the tracing image’s aspect ratio instead of the detected target",
        "Shipped tactile feedback for key actions (place/lock/resize) and kept the control surface minimal per iOS HIG",
        "Profiled and tuned SceneKit node updates to maintain steady frame pacing and audited allocations to avoid stutter during gesture bursts",
        "Wrote a clear, minimal privacy policy, all content stays on device, no accounts required",
      ],
      result: [
        "Develop WeDraw’s AR drawing platform using UIKit, ARKit, and SceneKit, allowing users to trace reference images and freehand sketch directly in their environment",
        "Built a smooth, animated mode-selection carousel (draw with AR or Draw with Reference) with scaling effects and page indicators for intuitive tool switching",
        "Designed AR controllers to handle anchor, move, rotate, and scale tracing images in world space without breaking the experience",
        "Vision feedback reduced proportion errors in beginner sketches by 20–30% in guided trials and cut time to acceptable sketch by 25%",
        "Median vision pass completes in <60 ms on A15 class devices. Fully offline with no image upload.",
        "Optimized asset loading and rendering pipelines, cutting frame drop occurrences by 40% and delivering a consistently fluid drawing experience",
        "Stable, AR editing with transforms that persist through brief tracking loss users keep drawing instead of realigning",
        "Usability sessions showed median <10s to place, scale, and lock a reference on first try",
        "Temporal smoothing reduced visible jitter in alignment by 30% in before/after screen recordings",
        "Consistent 60 fps during typical place/resize/rotate interactions on test devices. No dropped frames in stress scenarios measured with Instruments",
        "Collaborated closely with designers to implement UIs",
      ],
    },

    roles: ["iOS Developer", "Augmented Reality Interaction Designer"],

    mockups: [
      "/project-covers/wedraw/wedraw-1.png",
      "/project-covers/wedraw/wedraw-2.png",
      "/project-covers/wedraw/wedraw-3.png",
    ],
  },

  {
    id: 4,
    title: "Pyramyst - Desert Puzzle Game",
    description:
      "A watchOS mini puzzle game set in the desert ruins. Players become archaeologists unlocking relics by rotating the Digital Crown with crisp haptic feedback. Designed for micro sessions, Pyramyst delivers instant fun in 1–2 minute bursts, perfect for killing idle time on Apple Watch.",
    image: "/project-covers/pyramyst/pyramyst-3.png",
    appIcon: "/project-icons/pyramyst-icon.png",
    tags: [
      "WatchOS",
      "Game",
      "Puzzle",
      "Digital Crown",
      "Haptics",
      "Micro Interaction",
    ],
    technologies: [
      "SwiftUI",
      "SpriteKit",
      "WatchKit",
      "Swift",
      "Combine",
      "Foundation",
    ],
    tools: ["Xcode", "Figma", "Figjam", "Miro", "Confluence", "Github"],
    url: "https://apps.apple.com/us/app/pyramyst/id6749355391",
    githubUrl: "",

    star: {
      situation:
        "Apple Watch is often seen mainly as a health tracker, despite its powerful hardware. Our research showed many users wanted something light and fun to fill idle moments—like waiting in line or for the bus—without the weight of productivity apps. In these contexts, people look for instant gratification: quick to start, easy to stop, and leaving a small sense of satisfaction. The Apple Watch, with its small screen, simple gestures, and haptic feedback, is ideal for delivering these ‘micro-fun’ experiences. This inspired us to build a game that transforms short, otherwise boring waits into playful moments.",
      task: [
        "Design a mini puzzle game optimized for micro sessions on Apple Watch",
        "Leverage the Digital Crown as a core interaction mechanic with precise control",
        "Integrate crisp haptic feedback to enhance tactile engagement",
        "Create simple rules that can be understood instantly yet feel rewarding",
        "Ensure the game loop fits within 1–2 minutes for idle time play",
      ],
      action: [
        "Developed the game loop in SpriteKit with watchOSn specific optimizations for small screen play",
        "Implemented Digital Crown input to rotate dials and unlock relics with smooth, frame accurate response",
        "Synced Haptics feedback to every crown ‘tick’, giving satisfying tactile cues",
        "Designed an hourglass timer mechanic to encourage quick thinking under pressure",
        "Created desert inspired visuals and relic assets optimized for clarity on a small display",
        "Profiled performance with Instruments to maintain 60 fps and low battery impact",
        "Tested gameplay in short burst scenarios to refine challenge, pacing, and stop/resume flow",
      ],
      result: [
        "Delivered a unique watchOS game experience beyond fitness apps, showing the device’s potential for entertainment",
        "Average play session fits naturally into idle moments, lasting 1–2 minutes as intended",
        "Usability sessions confirmed players understood mechanics in <15 seconds on first try",
        "Digital Crown + haptic combo received strong feedback as the most engaging feature",
        "Stable performance: consistent 60 fps on Apple Watch Series 6 and above with minimal battery drain",
      ],
    },

    roles: ["watchOS Developer", "Game Programmer", "Researcher"],

    mockups: [
      "/project-covers/pyramyst/pyramyst-1.png",
      "/project-covers/pyramyst/pyramyst-2.png",
      "/project-covers/pyramyst/pyramyst-3.png",
    ],
  },

  {
    id: 5,
    title: "Sarun - 2D Racing Game",
    description:
      "An Unity 2D racing game featuring intelligent AI opponents, dynamic obstacle generation, and competitive race mechanics. Players compete across multiple lanes with precise jump timing and strategic speed management, while AI bots demonstrate sophisticated pathfinding and obstacle avoidance algorithms.",
    image: "/project-covers/sarun/sarun-4.png",
    appIcon: "/project-icons/sarun-icon.png",
    tags: [
      "Unity 2D",
      "Game",
      "Competitive Gameplay",
      "Performance Optimization",
    ],
    technologies: ["Unity Engine", "C#"],
    tools: ["Unity Editor", "Visual Studio", "GitHub", "Figma"],
    url: "https://apps.apple.com/us/app/sarun/id6749077656",
    githubUrl: "",

    star: {
      situation:
        "Mobile racing games often suffer from predictable AI behavior and repetitive gameplay patterns. Players quickly lose interest when AI opponents feel scripted or when obstacle placement becomes memorizable. The challenge was creating a racing experience that maintains competitive tension through intelligent AI decision making, and precise physics based controls that reward skill over luck.",

      task: [
        "Develop intelligent AI opponents with racing behavior and obstacle avoidance",
        "Implement dynamic obstacle spawning system with object pooling for performance optimization",
        "Create precision based player controls with speed management and jump timing mechanics",
        "Design multilane racing system with layerbased collision detection",
        "Build comprehensive race management system with real time position tracking",
        "Optimize performance for smooth 60fps gameplay across multiple AI entities",
      ],

      action: [
        "Engineered sophisticated AI bot controller with raycast based obstacle detection and predictive jumping algorithms",
        "Implemented dynamic speed variation system where AI bots randomly slow down to create realistic racing competition",
        "Built high performance obstacle spawning manager using object pooling, reducing garbage collection by 80%",
        "Created multi layered collision system enabling lane specific obstacle interactions without cross lane interference",
        "Developed comprehensive race management architecture tracking positions, timing, and final results across scenes",
        "Integrated Unity's Physics2D with custom velocity controls for responsive player movement and realistic bot behavior",
        "Implemented advanced audio management system with positional sound effects and dynamic music transitions",
      ],

      result: [
        "Achieved consistent 60fps performance with 3 concurrent AI entities and 20+ active obstacles using object pooling",
        "AI opponents demonstrate realistic racing behavior with 90% successful obstacle avoidance rate",
        "Dynamic obstacle generation creates unique race experiences with optimal challenge distribution",
        "Collision detection system enables precise multilane gameplay without performance degradation",
        "Comprehensive race analytics track player progression and provide detailed podium presentations",
        "Modular architecture allows easy expansion to additional AI opponents and track variations",
      ],
    },

    roles: [
      "Unity Developer",
      "Game Programmer",
      "AI Systems Designer",
      "Researcher",
    ],

    mockups: [
      "/project-covers/sarun/sarun-1.png",
      "/project-covers/sarun/sarun-2.png",
      "/project-covers/sarun/sarun-3.png",
      "/project-covers/sarun/sarun-4.png",
    ],
  },

  {
    id: 6,
    title: "Typing Test - Java Swing GUI",
    description:
      "A desktop application to practice and measure typing speed and accuracy. This application is designed with a simple and intuitive interface using Java Swing, allowing users to practice efficiently and view their performance results, which are stored in a database.",
    image: "/project-covers/typing-test/typing-test-3.png",
    appIcon: "/project-icons/typing-test-icon.png",
    tags: ["GUI", "Typing Test", "Desktop App", "Utility", "Game"],
    technologies: ["Java", "Java Swing", "MySQL", "JDBC"],
    tools: ["Visual Studio Code", "XAMPP", "Github"],
    url: "",
    githubUrl: "https://github.com/AliiAnr/Typingtest-Swing-GUI",
    star: {
      situation:
        "Many typing test applications are web based, but desktop applications often offer a more responsive, latency free experience. This project began as a personal initiative to hone my skills in GUI (Graphical User Interface) development with Java Swing while creating a functional tool that can be used offline to improve typing skills.",
      task: [
        "Design and build a functional typing test application using Java Swing",
        "Implement logic to calculate performance metrics such as Words Per Minute (WPM) and accuracy",
        "Create a clean, intuitive, and user-friendly user interface (UI)",
        "Integrate the application with a MySQL database to store the user's test history",
        "Ensure the application runs stably and provides real time feedback to the user while typing",
      ],
      action: [
        "Built all interface components, such as frames, panels, text areas, and buttons, using the Java Swing library",
        "Developed an algorithm to track user input, compare it against the source text, and accurately calculate WPM and accuracy percentage",
        "Designed the application flow, from the main screen and the typing test session to the final informative results display",
        "Used JDBC (Java Database Connectivity) to establish a connection between the Java application and the MySQL database",
        "Structured the database schema and wrote SQL queries to store and retrieve score data, WPM, and accuracy for each test session",
      ],
      result: [
        "Successfully created a fully functional, standalone desktop typing test application",
        "Produced a practical tool that can be used for regular typing practice without needing an internet connection",
        "The successful implementation of Java Swing and JDBC deepened my understanding of desktop application development and database interaction",
        "This project serves as a solid portfolio piece to demonstrate software engineering skills using Java",
        "The application is capable of providing instant and accurate performance feedback to the user",
      ],
    },
    roles: ["Java Developer", "Desktop App Developer", "UI/UX Designer"],
    mockups: [
      "/project-covers/typing-test/typing-test-1.png",
      "/project-covers/typing-test/typing-test-2.png",
      "/project-covers/typing-test/typing-test-3.png",
    ],
  },

  {
    id: 7,
    title: "Chess Game - Java Swing GUI",
    description:
      "A desktop replica of the classic chess game, inspired by the popular platform, Chess.com. Built with Java Swing, this project aims to replicate the core gameplay experience and interface of Chess.com, focusing on implementing accurate game logic and responsive user interaction.",
    image: "/project-covers/chess/chess-3.png",
    appIcon: "/project-icons/chess-icon.png",
    tags: ["Desktop App", "Game", "Strategy", "Board Game", "Java"],
    technologies: ["Java", "Java Swing"],
    tools: ["NetBeans", "Github"],
    url: "",
    githubUrl: "https://github.com/AliiAnr/Chess-Swing-GUI",
    star: {
      situation:
        "As an user of Chess.com, I was curious about the behind the scenes mechanics that make online chess so seamless and interactive. This project was born from the desire to challenge myself by attempting to rebuild the core functionalities of such a sophisticated platform into a desktop application. The goal was not just to create a chess game, but to understand and implement the complex logic, state management, and UI design that make Chess.com so effective",
      task: [
        "Develop a fully functional two player (player vs player) chess game on the desktop",
        "Implement all the fundamental rules of chess, including the unique moves for each piece (Pawn, Knight, Bishop, Rook, Queen, King)",
        "Create logic to detect critical game states such as check, checkmate, and stalemate",
        "Design a clear and interactive graphical user interface (GUI) for the chessboard and its pieces",
        "Effectively manage the game state, including player turns, piece positions, and valid moves",
      ],
      action: [
        "Designed the application architecture using OOP principles, creating separate classes for the Board, Square, and each type of Piece, which inherits its respective movement logic",
        "Used Java Swing components like `JFrame` and `JPanel` to draw the chessboard and render the piece images on it",
        "Implemented a `MouseListener` to handle player input, such as selecting a piece to move and specifying the destination square",
        "Wrote complex validation algorithms to ensure that every move made by a player is legal according to the rules of chess",
        "Developed functions to evaluate the board state after each move to check for check or checkmate conditions, then provide notifications or end the game",
      ],
      result: [
        "Successfully created a complete and playable two player desktop chess application",
        "Demonstrated a deep understanding of Object-Oriented Programming (OOP) concepts through a modular and structured class design",
        "The application accurately implements all fundamental rules of chess, providing an authentic gameplay experience",
        "This project serves as a strong testament to the ability to design complex algorithms and manage state within an interactive application",
      ],
    },
    roles: ["Java Developer", "Game Programmer", "Desktop App Developer"],
    mockups: [
      "/project-covers/chess/chess-1.png",
      "/project-covers/chess/chess-2.png",
      "/project-covers/chess/chess-3.png",
    ],
  },
];
