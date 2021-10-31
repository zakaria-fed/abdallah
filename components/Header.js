const Header = () => {
  return (
    <header className="md:flex-row flex-col flex py-40 justify-center items-center">
      <div className="header__content flex-col justify-center max-w-2xl md:justify-around px-5 lg:px-0">
        <h1 className="font-normal text-5xl w-full">
          Success is the sum of small efforts, repeated day in and day out
          <span className="text-green-400 text-3xl font-bold">.</span>
        </h1>
        <p className="my-6">
          I'm a front-end web developer, currently freelancing full-time on
          Upwork, I offer money-back guarantee, premium, after-sales service,
          you can always check my past client’s feedback in the testimonials
          section to make sure you are in good hands.
        </p>

        {/* Button */}
        <button className="py-2 px-4 rounded bg-green-700 text-white font-medium  hover:bg-white hover:text-black transition-all duration-150">
          TESTIMONIALS
        </button>
      </div>
      <div className="md:mt-0 mt-10 header__gif hidden md:block">
        <iframe
          src="https://giphy.com/embed/mAZf4H4Pi0wwlj3ZAw"
          frameBorder="0"
          className="giphy-embed m-auto w-64 h-80"
          allowFullScreen
        ></iframe>
      </div>
    </header>
  );
};

export default Header;
