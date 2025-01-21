// components/Sidebar.jsx
import React from "react";
import { TbCategory } from "react-icons/tb";
import { RiBloggerLine } from "react-icons/ri";
import { LiaComments } from "react-icons/lia";
import { TbUsers } from "react-icons/tb";
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <aside className="w-64 bg-blue-100 p-4 hidden md:block">
      <ul className="space-y-4">
        <li>
          <Link to="/" className="flex items-center gap-2 ">
            <TbCategory />
            Catagories
          </Link>
        </li>
        <li>
          <Link to="/about" className=" flex items-center gap-2">
            <RiBloggerLine />
            Blogs
          </Link>
        </li>
        <li>
          <Link to="/blogs" className="flex items-center gap-2 ">
            <LiaComments />
            Comments
          </Link>
        </li>
        <li>
          <Link to="/contact" className="flex items-center gap-2">
            <TbUsers />
            Users
          </Link>
        </li>
      </ul>
    </aside>
  );
};

export default Sidebar;
