import Card from "./Card";
import Title from "./Title";

const Work = () => {
  const technologies1 = [
    { id: 1, name: "GatsbyJS" },
    { id: 2, name: "Graphql" },
    { id: 3, name: "Redux" },
    { id: 4, name: "Redux-persist" },
    { id: 5, name: "Tailwind CSS" },
    { id: 6, name: "Wordpress CMS" },
  ];
  const technologies2 = [
    { id: 1, name: "GatsbyJS" },
    { id: 2, name: "Graphql" },
    { id: 3, name: "Redux" },
    { id: 4, name: "Stripe" },
    { id: 5, name: "Strapi CMS" },
    { id: 6, name: "Styled Components" },
  ];
  const technologies3 = [
    { id: 1, name: "React" },
    { id: 2, name: "Redux" },
    { id: 3, name: "Redux-saga" },
    { id: 4, name: "Firebase" },
    { id: 5, name: "Styled Components" },
    { id: 6, name: "Stripe" },
  ];
  const technologies4 = [
    { id: 1, name: "GatsbyJS" },
    { id: 2, name: "Styled Components" },
    { id: 3, name: "Markdown" },
  ];

  const links1 = ["https://cutbyfred.com/"];
  const links2 = [
    "https://shopse.netlify.app/",
    "https://github.com/AbdallahAbis/Shopse-client",
  ];
  const links3 = [
    "https://wearandsmile.netlify.app/",
    "https://github.com/AbdallahAbis/smile",
  ];
  const links4 = [
    "https://abis.dev/v1.abis.dev",
    "https://github.com/AbdallahAbis/Abdallah-Abis",
  ];

  return (
    <section id="work" className="my-24 px-9 py-16 mx-auto">
      <Title text="Experimental Work" />

      <div className="my-8 flex flex-col flex-wrap md:flex-row justify-center items-center">
        <Card
          image="/../Capture.png"
          techno={technologies1}
          desc="I've had the pleasure to work with PATH to build an online presence for Cut By Fred where they can sell their products and allow clients to book appointments, I handled most of the UI, Functionality, and API calls while PATH has handled wordpress CMS and some of the UI details."
          visit={links1}
        />
        <Card
          image="/../Clothes.png"
          techno={technologies2}
          desc="Shopse is a complete online shop. Built from scratch using Gatsby and pure CSS for performance and SEO, it has Search, Sort, Category functionalities."
          visit={links2}
        />
        <Card
          image="/../Gentiym.jpg"
          techno={technologies3}
          desc="Wear and Shop is my first website built using React.js and it's an imaginary eCommerce website that was designed and developed by me. I tried to implement most of the necessary things on an eCommerce website."
          visit={links3}
        />
        <Card
          image="/../Capture.png"
          techno={technologies4}
          desc="I built version 1 of my portfolio while learning Gatsby.js, the portfolio has bunch of CSS animations and it was re-designed by me as the design was inspired but another person."
          visit={links4}
        />
      </div>
    </section>
  );
};

export default Work;
