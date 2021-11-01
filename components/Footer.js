import Title from "./Title";
import Link from "next/link";

const Footer = () => {
  return (
    <footer id="talk" className="px-9 py-16">
      <center>
        <Title text="Get in Touch!" />
        <h6 className="text-sm font-mono text-green-600">
          I'm Looking for Opportunities
        </h6>

        <p className="my-10 font-medium max-w-xl">
          If you are looking for a freelancer then you are in the right place,
          as I’m currently freelancing full time, or if you are looking for a
          full-time employee, otherwise, if you just want to say hi, I will
          definitely say Hi back to you.
        </p>

        <Link href="mailto:zakariyaimzilen@gmail.com">
          <button className="bg-green-900 text-green-200 text-sm font-serif rounded-sm px-8 py-3 mb-4">
            Contact me via E-mail
          </button>
        </Link>
        <br />
        <Link href="https://www.fiverr.com/zakaria_fed">
          <button className="bg-green-900 text-green-200 text-sm font-serif rounded-sm px-8 py-3 mb-4">
            Contact me on UpWork
          </button>
        </Link>
      </center>
    </footer>
  );
};

export default Footer;
