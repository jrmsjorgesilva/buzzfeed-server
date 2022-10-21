import QuizModel from "../models/quizModel";

const buzzfeedMockData: QuizModel[] = [
  {
    quizId: "x42kew",
    title: "What cheese are you?",
    subtitle: "These quiz isn't cheese anything...",
    content: [
      {
        id: 0,
        text: "Pick a vacation destination",
        questions: [
          {
            text: "New York",
            image:
              "https://images.unsplash.com/photo-1528291151377-165f5107c82a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=385&q=80",
            alt: "Photo of empire state building during night",
            credit: "Christopher Czermak",
          },
          {
            text: "Austin",
            image:
              "https://images.unsplash.com/photo-1477519242566-6ae87c31d212?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
            alt: "Time-lapse photograph car lights on bridge",
            credit: "Denys Nevozhai",
          },
          {
            text: "Portland",
            image:
              "https://images.unsplash.com/photo-1533658280853-e4a10c25a30d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=726&q=80",
            alt: "High rise buildings",
            credit: "Max Bender",
          },
          {
            text: "New Orleans",
            image:
              "https://images.unsplash.com/photo-1523987355523-c7b5b0dd90a7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
            alt: "Road With people and house",
            credit: "Blake Wisz",
          },
        ],
      },
      {
        id: 1,
        text: "Pick some food:",
        questions: [
          {
            text: "Pizza",
            image:
              "https://images.unsplash.com/photo-1534308983496-4fabb1a015ee?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=876&q=80",
            alt: "Peperoni pizza",
            credit: "Alan Hardman",
          },
          {
            text: "Pasta",
            image:
              "https://images.unsplash.com/photo-1518675219903-c682c4b16b1d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80",
            alt: "Pasta in tomato sauce",
            credit: "Deva Darshan",
          },
          {
            text: "Hamburger",
            image:
              "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=699&q=80",
            alt: "hamburger",
            credit: "amirali mirhashemian",
          },
        ],
      },
      {
        id: 2,
        text: "Pick a Home",
        questions: [
          {
            text: "Traditional",
            image:
              "https://images.unsplash.com/photo-1572120360610-d971b9d7767c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
            alt: "Focus photograph of traditional house",
            credit: "Phil Hearing",
          },
          {
            text: "Modern",
            image:
              "https://images.unsplash.com/photo-1613490493576-7fde63acd811?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=871&q=80",
            alt: "Photograph of a modern house",
            credit: "Avi Werde",
          },
          {
            text: "House",
            image:
              "https://images.unsplash.com/photo-1568605114967-8130f3a36994?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
            alt: "Photograph of a normal house",
            credit: "vu anh",
          },
          {
            text: "Montains",
            image:
              "https://images.unsplash.com/photo-1632842621077-9ec1906d7ace?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=873&q=80",
            alt: "Photograph of a monmtain house",
            credit: "Vitor Vilas Boas",
          },
        ],
      },
    ],
    answer: [
      {
        combination: ["New York", "Pizza", "Traditional"],
        text: "Blue Cheese",
        image:
          "https://images.unsplash.com/photo-1626957341926-98752fc2ba90?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
        alt: "blue cheese",
      },
      {
        combination: ["Austin", "Pizza", "Traditional"],
        text: "Camembert",
        image:
          "https://images.unsplash.com/photo-1453078977505-10c3e375c2a0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=869&q=80",
        alt: "camembert",
      },
      {
        combination: ["Austin", "Pasta", "Mountains"],
        text: "Provolone",
        image:
          "https://images.unsplash.com/photo-1641297073997-9445f204f56f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
        alt: "provolone",
      },
    ],
  },
];

export default buzzfeedMockData;
