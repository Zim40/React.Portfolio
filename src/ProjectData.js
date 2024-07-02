const cardData = [
  {
    image: process.env.PUBLIC_URL + "/FinanceApp.png",
    title: "Finance App",
    text: `For more information click the button below.`,
    Url: "https://finance-app-orpin.vercel.app/",
    technology: ["TypeScript", "TailwindCss", "Postgres", "DrizzleORM", "NextJs"],
    completionStatus: false,
  },
  {
    image: process.env.PUBLIC_URL + "/FetchEvent.png",
    title: "Fetch Event",
    text: `For more information click the button below.`,
    Url: "https://github.com/Zim40/FetchEvent",
    technology: ["JavaScript", "HTML", "CSS", "TicketMasterAPI", "REST", "Express"],
    completionStatus: true,
  },
  {
    image: process.env.PUBLIC_URL + "/Screenshot.png",
    title: "RuralTech: Admin Inventory",
    text: "For more information click the button below. ",
    Url: "https://github.com/Zim40/RuralTech-Ecommerce-",
    technology: ["JavaScript", "HTML", "CSS", "React", "REST", "MongoDB", "Express", "Apollo-Server", "Bcrypt", "JWT", "Mongoose", "GraphQL"],
    completionStatus: true,
  },
  {
    image: process.env.PUBLIC_URL + "/wordleApp.png",
    title: "Wordle Replica",
    text: "For more information click the button below. ",
    Url: "https://github.com/Zim40/Wordle-Replica",
    technology: ["JavaScript", "HTML", "CSS", "React"],
    completionStatus: false,
  },
];
export default cardData;
