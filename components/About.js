const About = () => {
  return (
    <section className="my-16 px-9 flex flex-col md:flex-row xl:px-0 justify-center items-center">
      <div className="about__content md:mr-4">
        <h1 className="font-normal text-5xl w-full">
          A Little About Me
          <span className="text-green-400 text-3xl font-bold">.</span>
        </h1>

        <p className="my-5 max-w-xl">
          A JAM Stack web developer who specializes in JavaScript Technologies,
          Experience in building complete websites with Backend using CMS. I
          have been freelancing and networking with other developers for enough
          time to be a good designer and developer, in less than 1 year as a
          freelancer I have worked for +10 clients and worked on +15 projects.
          <br />
          “Less Is More”, Writing less code leads to clean, functional software
          that’s easy to maintain over time, I always try to follow this concept
          and write as little code as possible. "Simplicity is Key", Minimalist
          design lets the content stand out and shine. This is why a simple
          website design is the first choice I think of when it comes to
          designing.
        </p>

        <div className="about__skills flex items-center sm:pl-4 pl-2">
          <div className="bg-green-600 w-1 h-28 rounded"></div>
          <div className="ml-5 flex flex-wrap">
            <div>
              <div className="flex my-2 text-md font-mono">
                <span className="text-green-600">⁙</span>
                <h4 className="ml-2">HTML5 & CSS3</h4>
              </div>
              <div className="flex my-2 text-md font-mono">
                <span className="text-green-600">⁙</span>
                <h4 className="ml-2">Gatsby.js</h4>
              </div>
              <div className="flex my-2 text-md font-mono">
                <span className="text-green-600">⁙</span>
                <h4 className="ml-2">Tailwind</h4>
              </div>
              <div className="flex my-2 text-md font-mono">
                <span className="text-green-600">⁙</span>
                <h4 className="ml-2">Styled-Components</h4>
              </div>
            </div>
            <div className="ml-5">
              <div className="flex my-2 text-md font-mono">
                <span className="text-green-600">⁙</span>
                <h4 className="ml-2">JavaScript / ES6</h4>
              </div>
              <div className="flex my-2 text-md font-mono">
                <span className="text-green-600">⁙</span>
                <h4 className="ml-2">Redux.js</h4>
              </div>
              <div className="flex my-2 text-md font-mono">
                <span className="text-green-600">⁙</span>
                <h4 className="ml-2">Bootstrap</h4>
              </div>
              <div className="flex my-2 text-md font-mono">
                <span className="text-green-600">⁙</span>
                <h4 className="ml-2">Firebase</h4>
              </div>
            </div>
            <div className="ml-5">
              <div className="flex my-2 text-md font-mono">
                <span className="text-green-600">⁙</span>
                <h4 className="ml-2">React.js</h4>
              </div>
              <div className="flex my-2 text-md font-mono">
                <span className="text-green-600">⁙</span>
                <h4 className="ml-2">Sass & Scss</h4>
              </div>
              <div className="flex my-2 text-md font-mono">
                <span className="text-green-600">⁙</span>
                <h4 className="ml-2">Redux-saga</h4>
              </div>
              <div className="flex my-2 text-md font-mono">
                <span className="text-green-600">⁙</span>
                <h4 className="ml-2">Redux-Thunk</h4>
              </div>
            </div>
          </div>
        </div>
      </div>

      <img className="m-auto md:ml-4 md:m-0 my-4 rounded-full w-48 h-48" src="/../Me.jpg" alt="Me" />
    </section>
  );
};

export default About;
