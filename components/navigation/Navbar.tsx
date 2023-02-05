import Link from "next/link";
import {
  TfiMenu,
  TfiHome,
  TfiInfoAlt,
} from "react-icons/tfi";
import { MdForum } from "react-icons/md";
import { TbPokeball } from "react-icons/tb";
import NavUserInfo from "./NavUserInfo";

export const enlaces = [
  { label: "Principal", route: "/", icon: <TfiHome /> },
  {
    label: "Posts",
    route: "/posts",
    icon: <MdForum />,
  },
  {
    label: "Acerca de",
    route: "/about",
    icon: <TfiInfoAlt />,
  },
  {
    label: "Test",
    route: "/test",
    icon: <TbPokeball />,
  },
];

export default function Navbar() {
  return (
    <div className="navbar bg-base-200">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost btn-circle">
            <TfiMenu />
          </label>
          <ul
            tabIndex={0}
            className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-200 rounded-box w-52"
          >
            {enlaces.map((en) => {
              return (
                <li key={en.label}>
                  <Link href={en.route} legacyBehavior>
                    <a>
                      {en.icon} {en.label}
                    </a>
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
      <div className="navbar-center">
        <Link href="/" className="btn btn-ghost normal-case text-xl">
          ReiVicci
        </Link>
      </div>
      <div className="navbar-end">
        <NavUserInfo/>
      </div>
    </div>
  );
};
