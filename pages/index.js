import Head from "next/head";
import About from "../components/About";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Nav from "../components/Nav";
import Work from "../components/Work";

export default function Home() {
  return (
    <div className="m-0 p-0 bg-gray-900 text-white">
      <Head>
        <title>Abdallah Portfolio</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Nav />
      <Header />

      <main>
        <section className="flex md:flex-nowrap flex-wrap justify-center font-sans font-medium">
          <div className="bg-gray-800 py-5 px-16 rounded flex-col items-center justify-center text-center mb-4 md:mb-0 sm:mx-2">
            <h5 className="text-2xl">
              <small>+</small> 16
            </h5>
            <h6 className="font-thin">Happy Clients</h6>
          </div>
          <div className="bg-gray-800 py-5 px-16 rounded flex-col items-center justify-center text-center mb-4 md:mb-0 sm:mx-2">
            <h5 className="text-2xl">
              <small>+</small> 26
            </h5>
            <h6 className="font-thin">Completed Projects</h6>
          </div>
          <div className="bg-gray-800 py-5 px-16 rounded flex-col items-center justify-center text-center mb-4 md:mb-0 sm:mx-2">
            <h5 className="text-2xl">
              <small>+</small> 1400
            </h5>
            <h6 className="font-thin">Hours Billed</h6>
          </div>
        </section>

        {/* About */}
        <About />

        {/* Work */}
        <Work />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
