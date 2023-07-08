"use client";
import { useContext } from "react";
import Image from "next/image";
import Link from "next/link";
import { MobileMenu } from "../contexts/mobileMenuContext";
import logo from "../images/logo.png";
import bottomDesign from "../images/1.png";
import topDesign from "../images/Ellipse 1.png";
import { FaInstagram, FaTwitter, FaFacebook } from "react-icons/fa";

const Header = () => {
  const { menu, dispatch } = useContext(MobileMenu);
  return (
    <header className="relative w-screen md:h-screen px-4 md:px-0">
      {/* mobile dropdown */}
      <div
        className={` ${
          menu ? "flex" : "hidden"
        } flex-row justify-center items-center fixed z-50 w-screen h-screen top-0 left-0 right-0  bg-secondary md:hidden`}
        onClick={() => dispatch("close")}
      >
        <div className="absolute top-4 right-4 text-4xl">&#10060;</div>
        <nav
          aria-label="mobile"
          className="flex flex-col justify-evenly items-center space-y-8"
        >
          <a href="#home" className="p-4 text-3xl font-extrabold">
            Home
          </a>
          <a href="#about" className="p-4 text-3xl font-extrabold">
            About Us
          </a>
          <a href="#services" className="p-4 text-3xl font-extrabold">
            Our Services
          </a>
          <a href="#reservations" className="p-4 text-3xl font-extrabold">
            Reservations
          </a>
        </nav>
      </div>

      <div className="max-w-4xl mx-auto pt-8 flex flex-col items-center">
        {/* logo and links */}
        <div className="w-full flex flex-row justify-between">
          {/* logo */}
          <div className=" md:w-2/12">
            <div className="w-full flex items-center">
              <div className="w-1/5 md:w-4/5">
                <Image
                  className="w-full"
                  src={logo}
                  height={200}
                  width={500}
                  alt="logo"
                />
              </div>
              <div className="2/5 md:w-3/5 text-3xl ml-4 leading-5">
                Serenity springs
              </div>
            </div>
          </div>

          {/* mobile hamburger */}
          <div className="text-3xl md:hidden" onClick={() => dispatch("open")}>
            &#9776;
          </div>

          {/* large screen navigations */}
          <div className="hidden md:flex w-8/12">
            <nav
              className="text-xs w-1/2 flex justify-evenly items-center"
              aria-label="header-nav"
            >
              <Link href="#about" className="cursor-pointer hover:underline">
                ABOUT US
              </Link>
              <Link href="#services" className=" hover:underline">
                OUR SERVEICES
              </Link>
              <Link href="#reservations" className=" hover:underline">
                RESERVATIONS
              </Link>
            </nav>

            {/* social icons */}
            <div className="w-1/2 flex justify-end items-center">
              <div className="w-1/3 flex justify-between items-center">
                <Link href="#">
                  <FaInstagram size={20} />
                </Link>
                <Link href="#">
                  <FaTwitter size={20} />
                </Link>
                <Link href="#">
                  <FaFacebook size={20} />
                </Link>
              </div>
            </div>
          </div>
        </div>

        <div className="w-full md:w-6/12 mt-20 text-center flex flex-col justify-center items-center">
          <div className="w-4/5 my-4">
            <h1 className="text-6xl md:text-7xl font-bold md:font-extrabold">
              Relax, unwind, & rejuvenate
            </h1>
          </div>
          <p className="w-3/5 md:w-full text-md md:ml-4">
            <span className="italic md:not-italic font-bold md:font-normal">
              Serenity Springs:
            </span>{" "}
            The ultimate spa experience in Santa Monica.
          </p>
          <button
            className="text-gray-700 text-lg md:text-xs font-bold px-10
             md:px-8 py-1 my-4 md:my-2 bg-white rounded-md border-none hover:text-xl "
          >
            Book Now
          </button>

          <div className="w-5 mb-8 md:mb-0">
            <Image
              className="w-full"
              src={bottomDesign}
              height={100}
              width={100}
              alt="1"
            />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
