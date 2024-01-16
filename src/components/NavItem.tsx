import React from "react";
import { Link } from "react-router-dom";

interface NavItemProps {
  href: string;
  text: string;
}

const NavItem: React.FC<NavItemProps> = ({ href, text }) => {
  return (
    <Link
      className="rounded p-1 px-3 font-semibold hover:bg-sky-700 text-sky-50 transition duration-500"
      to={href}
    >
      {text}
    </Link>
  );
};

export default NavItem;
