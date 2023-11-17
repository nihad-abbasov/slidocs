// templates
export const templates = [
  {
    id: 1,
    name: "Services1",
    imgUrl: "/templates/temp1.webp",
    category: "Category1",
    amountAvailable: 15,
  },
  {
    id: 2,
    name: "Services2",
    imgUrl: "/templates/temp2.webp",
    category: "Category2",
    amountAvailable: 20,
  },
  {
    id: 3,
    name: "Services3",
    imgUrl: "/templates/temp3.webp",
    category: "Category3",
    amountAvailable: 10,
  },
  {
    id: 4,
    name: "Services4",
    imgUrl: "/templates/temp4.webp",
    category: "Category4",
    amountAvailable: 20,
  },
  {
    id: 5,
    name: "Services5",
    imgUrl: "/templates/temp5.webp",
    category: "Category5",
    amountAvailable: 15,
  },
  {
    id: 6,
    name: "Services6",
    imgUrl: "/templates/temp6.webp",
    category: "Category6",
    amountAvailable: 18,
  },
  {
    id: 7,
    name: "Service7",
    imgUrl: "/templates/temp1.webp",
    category: "Category7",
    amountAvailable: 15,
  },
  {
    id: 8,
    name: "Services8",
    imgUrl: "/templates/temp2.webp",
    category: "Category8",
    amountAvailable: 20,
  },
  {
    id: 9,
    name: "Services9",
    imgUrl: "/templates/temp3.webp",
    category: "Category9",
    amountAvailable: 10,
  },
  {
    id: 10,
    name: "Services10",
    imgUrl: "/templates/temp4.webp",
    category: "Category10",
    amountAvailable: 20,
  },
  {
    id: 11,
    name: "Services11",
    imgUrl: "/templates/temp5.webp",
    category: "Category11",
    amountAvailable: 15,
  },
  {
    id: 12,
    name: "Services12",
    imgUrl: "/templates/temp6.webp",
    category: "Category12",
    amountAvailable: 18,
  },
  {
    id: 13,
    name: "Services13",
    imgUrl: "/templates/temp1.webp",
    category: "Category13",
    amountAvailable: 20,
  },
  {
    id: 14,
    name: "Services14",
    imgUrl: "/templates/temp2.webp",
    category: "Category14",
    amountAvailable: 10,
  },
  {
    id: 15,
    name: "Services15",
    imgUrl: "/templates/temp3.webp",
    category: "Category15",
    amountAvailable: 20,
  },
  {
    id: 16,
    name: "Services16",
    imgUrl: "/templates/temp4.webp",
    category: "Category16",
    amountAvailable: 15,
  },
  {
    id: 17,
    name: "Services17",
    imgUrl: "/templates/temp5.webp",
    category: "Category17",
    amountAvailable: 18,
  },
];

export const templatesShortList = templates.slice(0, 6);

export const templatesAmount = templates.length;

export const templateDetails = [
  {
    id: 1,
    name: "Services1",
    imgUrl: "/templates/temp1.webp",
    category: "Services1",
    amountAvailable: 15,
    description:
      "A comprehensive suite of service templates designed to help you efficiently manage and deliver your business offerings.",
    features: [
      "Fully customizable layouts",
      "Integration with leading service management tools",
      "Responsive design for mobile and desktop",
    ],
    price: 49.99,
    reviews: [
      {
        user: "John Doe",
        rating: 5,
        comment: "These templates saved me a ton of time and effort!",
      },
      {
        user: "Jane Smith",
        rating: 4,
        comment: "Very professional designs and easy to use.",
      },
    ],
    relatedTemplates: [2, 3, 4],
  },
  {
    id: 2,
    name: "Services2",
    imgUrl: "/templates/temp2.webp",
    category: "Category2",
    amountAvailable: 20,
    description:
      "Boost your online store with these cutting-edge e-commerce templates.",
    features: [
      "Shopping cart integration",
      "High-resolution product galleries",
      "User reviews and ratings system",
    ],
    price: 59.99,
    reviews: [
      {
        user: "Emily R.",
        rating: 5,
        comment:
          "The perfect start for my online business, absolutely love it!",
      },
      {
        user: "Markus B.",
        rating: 4,
        comment: "Good quality templates with lots of features.",
      },
    ],
    relatedTemplates: [1, 3, 5],
  },
  // Third product entry with varied details.
  {
    id: 3,
    name: "Services3",
    imgUrl: "/templates/temp3.webp",
    category: "Category3",
    amountAvailable: 10,
    description: "Showcase your work with these stunning portfolio templates.",
    features: [
      "Elegant photo galleries",
      "Social media integration",
      "Contact forms and CV download",
    ],
    price: 39.99,
    reviews: [
      {
        user: "Alex D.",
        rating: 5,
        comment:
          "My portfolio looks sleek and professional now, highly recommended!",
      },
      {
        user: "Sara K.",
        rating: 3,
        comment: "Decent templates, but I needed something more customizable.",
      },
    ],
    relatedTemplates: [2, 4, 5],
  },
  // Fourth product entry with varied details.
  {
    id: 4,
    name: "Services4",
    imgUrl: "/templates/temp4.webp",
    category: "Category4",
    amountAvailable: 25,
    description: "Professional templates tailored for corporate websites.",
    features: [
      "Corporate branding options",
      "Team member profiles",
      "Annual report publishing tools",
    ],
    price: 69.99,
    reviews: [
      {
        user: "Johnathan M.",
        rating: 5,
        comment: "Impressed by the range of features and ease of use!",
      },
      {
        user: "Lisa G.",
        rating: 4,
        comment: "Great for quick website setup with a professional look.",
      },
    ],
    relatedTemplates: [1, 3, 5],
  },
  // Fifth product entry with varied details.
  {
    id: 5,
    name: "Services5",
    imgUrl: "/templates/temp5.webp",
    category: "Category5",
    amountAvailable: 30,
    description: "Engage your audience with these versatile blog templates.",
    features: [
      "SEO friendly designs",
      "Ad space optimization",
      "Comment sections",
    ],
    price: 29.99,
    reviews: [
      {
        user: "Michelle O.",
        rating: 5,
        comment: "Blogging made easy and beautiful - what's not to love?",
      },
      {
        user: "David P.",
        rating: 5,
        comment: "The features provided are exactly what any blogger needs.",
      },
    ],
    relatedTemplates: [1, 2, 3, 4],
  },
  {
    id: 6,
    name: "Services6",
    imgUrl: "/templates/temp6.webp",
    category: "Category6",
    amountAvailable: 12,
    description:
      "Delicious designs to give your restaurant the perfect online presence.",
    features: [
      "Menu showcases",
      "Online reservation systems",
      "Photo galleries of dishes",
    ],
    price: 54.99,
    reviews: [
      {
        user: "Gordon F.",
        rating: 5,
        comment:
          "Our customers love the new website. Booking tables has never been easier!",
      },
      {
        user: "Sandra E.",
        rating: 4,
        comment:
          "Very functional and great design. It gave our brand a huge lift.",
      },
    ],
    relatedTemplates: [2, 3, 4, 5],
  },
  {
    id: 7,
    name: "Services7",
    imgUrl: "/templates/temp1.webp",
    category: "Category7",
    amountAvailable: 18,
    description: "Get moving with these dynamic fitness website templates.",
    features: [
      "Workout program listings",
      "Membership sign-up and management",
      "Trainer profiles and schedules",
    ],
    price: 44.99,
    reviews: [
      {
        user: "Leo T.",
        rating: 5,
        comment:
          "A robust platform for our gym, and our members find it easy to use!",
      },
      {
        user: "Paula Q.",
        rating: 3,
        comment: "Functional, but could use more vibrant designs.",
      },
    ],
    relatedTemplates: [1, 3, 4, 5, 6],
  },
  {
    id: 8,
    name: "Services8",
    imgUrl: "/templates/temp2.webp",
    category: "Category8",
    amountAvailable: 7,
    description: "Plan and publish your events with these dedicated templates.",
    features: [
      "Event calendars",
      "Ticket sales integration",
      "Photo and video galleries",
    ],
    price: 64.99,
    reviews: [
      {
        user: "Carmen V.",
        rating: 5,
        comment:
          "I organized my entire wedding using this template. Fantastic and easy!",
      },
      {
        user: "Terry B.",
        rating: 4,
        comment:
          "Great features for any event organizer, and the support team is very helpful.",
      },
    ],
    relatedTemplates: [2, 4, 5, 6, 7],
  },
  {
    id: 9,
    name: "Services9",
    imgUrl: "/templates/temp3.webp",
    category: "Category9",
    amountAvailable: 22,
    description:
      "Chic and trendy templates perfect for fashion bloggers and retailers.",
    features: [
      "Lookbook layouts",
      "Social media integration for trends",
      "E-commerce capabilities for online shops",
    ],
    price: 74.99,
    reviews: [
      {
        user: "Andre F.",
        rating: 5,
        comment:
          "It's stylish, it's sleek, it's everything a fashion site needs.",
      },
      {
        user: "Julia L.",
        rating: 5,
        comment: "The best template for fashionistas and professionals alike!",
      },
    ],
    relatedTemplates: [1, 3, 5, 6, 7, 8],
  },
  {
    id: 10,
    name: "Services10",
    imgUrl: "/templates/temp4.webp",
    category: "Category10",
    amountAvailable: 9,
    description:
      "Learn and teach with these educational templates designed for institutions and tutors.",
    features: [
      "Course catalogs",
      "Learning management systems",
      "Interactive media sections",
    ],
    price: 49.99,
    reviews: [
      {
        user: "Diana Y.",
        rating: 5,
        comment:
          "The perfect solution for our online courses. Highly versatile and user-friendly.",
      },
      {
        user: "Bob K.",
        rating: 4,
        comment:
          "A great starting point for educational websites, though some custom development was needed for our specific needs.",
      },
    ],
    relatedTemplates: [2, 4, 5, 6, 7, 8, 9],
  },
  {
    id: 11,
    name: "Services11",
    imgUrl: "/templates/temp5.webp",
    category: "Category11",
    amountAvailable: 14,
    description:
      "Empower your charity with templates that resonate with your cause.",
    features: [
      "Donation systems",
      "Event promotion tools",
      "Volunteer sign-up forms",
    ],
    price: 34.99,
    reviews: [
      {
        user: "Maggie N.",
        rating: 5,
        comment:
          "Our fundraising has never been this streamlined. Perfect for non-profits!",
      },
      {
        user: "Liam P.",
        rating: 4,
        comment:
          "Really brings the community together and makes it easy to contribute.",
      },
    ],
    relatedTemplates: [1, 2, 3, 5, 6, 7, 10],
  },
  {
    id: 12,
    name: "Services12",
    imgUrl: "/templates/temp6.webp",
    category: "Category12",
    amountAvailable: 16,
    description:
      "Showcase your photography skills with templates designed to impress.",
    features: [
      "High-resolution image support",
      "Client proofing portals",
      "E-commerce integration for print sales",
    ],
    price: 59.99,
    reviews: [
      {
        user: "Zoey T.",
        rating: 5,
        comment:
          "My work looks stunning on this platform. Highly recommend for photographers!",
      },
      {
        user: "Lucas M.",
        rating: 4,
        comment: "A gallery feature is top-notch. Attracts lots of clients.",
      },
    ],
    relatedTemplates: [2, 3, 4, 5, 7, 8, 11],
  },
  {
    id: 13,
    name: "Services13",
    imgUrl: "/templates/temp1.webp",
    category: "Category13",
    amountAvailable: 20,
    description: "Futuristic templates that make your tech business stand out.",
    features: [
      "Innovative design elements",
      "Cutting-edge UI/UX",
      "Integration with modern platforms",
    ],
    price: 79.99,
    reviews: [
      {
        user: "Derek W.",
        rating: 5,
        comment: "Our tech startup's website looks like it's from the future!",
      },
      {
        user: "Anna S.",
        rating: 4,
        comment: "Love the techy feel and the smooth animations.",
      },
    ],
    relatedTemplates: [1, 2, 4, 5, 6, 9, 12],
  },
  {
    id: 14,
    name: "Services14",
    imgUrl: "/templates/temp2.webp",
    category: "Category14",
    amountAvailable: 8,
    description:
      "High-quality templates designed for real estate listings and brokerages.",
    features: ["Listing databases", "Map integrations", "Agent profiles"],
    price: 69.99,
    reviews: [
      {
        user: "Sophia G.",
        rating: 5,
        comment: "My real estate listings have never looked better!",
      },
      {
        user: "Ethan K.",
        rating: 4,
        comment:
          "Provides all the tools I need to manage my properties online.",
      },
    ],
    relatedTemplates: [1, 3, 5, 6, 7, 8, 13],
  },
  {
    id: 15,
    name: "Services15",
    imgUrl: "/templates/temp3.webp",
    category: "Category15",
    amountAvailable: 11,
    description:
      "Craft your online identity with these personal branding templates.",
    features: [
      "Bio sections",
      "Portfolio features",
      "Testimonials and endorsements",
    ],
    price: 49.99,
    reviews: [
      {
        user: "Olivia R.",
        rating: 5,
        comment:
          "I built my personal brand with this and got incredible feedback!",
      },
      {
        user: "Noah E.",
        rating: 4,
        comment:
          "It's simple, clean, and professional. Just what I was looking for.",
      },
    ],
    relatedTemplates: [1, 2, 3, 4, 6, 7, 9, 14],
  },
  {
    id: 16,
    name: "Services16",
    imgUrl: "/templates/temp4.webp",
    category: "Category16",
    amountAvailable: 13,
    description:
      "Dynamic and engaging templates perfect for gaming communities and streamers.",
    features: [
      "Live stream integrations",
      "Community forums",
      "Leaderboards and score tracking",
    ],
    price: 64.99,
    reviews: [
      {
        user: "Ava C.",
        rating: 5,
        comment: "It's a gamer's dream. My community loves it.",
      },
      {
        user: "Jackson T.",
        rating: 4,
        comment:
          "Great for connecting with my audience and sharing game stats.",
      },
    ],
    relatedTemplates: [1, 2, 3, 5, 7, 8, 10, 15],
  },
  {
    id: 17,
    name: "Services17",
    imgUrl: "/templates/temp5.webp",
    category: "Category17",
    amountAvailable: 10,
    description:
      "Explore the world with these travel templates, ideal for bloggers and agencies.",
    features: [
      "Travel itinerary planners",
      "Booking systems",
      "User reviews and ratings",
    ],
    price: 54.99,
    reviews: [
      {
        user: "Mia B.",
        rating: 5,
        comment: "Makes travel planning a breeze. Love the features!",
      },
      {
        user: "Aiden L.",
        rating: 4,
        comment: "Visually appealing and very functional for travel stories.",
      },
    ],
    relatedTemplates: [1, 2, 4, 5, 6, 8, 9, 11, 16],
  },
];


export const slides = [
  {
    id: 1,
    name: "Slide 1",
    imgUrl: "/slide.webp",
    text: "Pitch Deck Template that saves you ton of time",
  },
  {
    id: 2,
    name: "Slide 2",
    imgUrl: "/slide.webp",
    text: "Lorem ipsum sit amet nolin pilom kante kondogbia",
  },
  {
    id: 3,
    name: "Slide 3",
    imgUrl: "/slide.webp",
    text: "Milan pirlo Ibrahimovic maldini cafu zidane",
  },
  {
    id: 4,
    name: "Slide 4",
    imgUrl: "/slide.webp",
    text: "Pitch Deck Template that saves you ton of time",
  },
  {
    id: 5,
    name: "Slide 5",
    imgUrl: "/slide.webp",
    text: "Lorem ipsum sit amet nolin pilom kante kondogbia",
  },
  {
    id: 6,
    name: "Slide 6",
    imgUrl: "/slide.webp",
    text: "Milan pirlo Ibrahimovic maldini cafu zidane",
  },
];


// Standouts
export const standouts = [
  {
    id: 1,
    iconPath: "/standoutIcons/star.svg",
    name: "Up-to-date design",
    description:
      "We're following the design trends. The slides are never getting older",
  },
  {
    id: 2,
    iconPath: "/standoutIcons/target.svg",
    name: "Clear documentation",
    description: "Laconic user guide will help you to start without troubles",
  },
  {
    id: 3,
    iconPath: "/standoutIcons/likeable.svg",
    name: "Good mood",
    description: "Just relax and collect your presentations without worries",
  },
];