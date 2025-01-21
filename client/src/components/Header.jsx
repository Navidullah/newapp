// components/Header.jsx
import { Navbar } from "flowbite-react";
import { SiBeekeeperstudio } from "react-icons/si";
import { BiLogIn } from "react-icons/bi";
import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <Navbar fluid rounded className="justify-between flex-wrap">
      <Navbar.Brand>
        <SiBeekeeperstudio className="text-4xl" />
        <Link
          to="/"
          className="ml-1 self-center whitespace-nowrap text-xl font-semibold dark:text-white"
        >
          The Blogger
        </Link>
      </Navbar.Brand>
      <div className="flex items-center gap-2 md:order-2 ">
        <Link
          to="/signin"
          className="flex items-center justify-evenly  bg-primary rounded-full text-white  py-2 w-[100px]"
        >
          <BiLogIn />
          Sign In
        </Link>
        <Navbar.Toggle />
      </div>
      <Navbar.Collapse>
        <Navbar.Link href="/" active className="text-primary">
          Home
        </Navbar.Link>
        <Navbar.Link href="/about">About</Navbar.Link>
        <Navbar.Link href="/contact">Contact</Navbar.Link>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Header;
