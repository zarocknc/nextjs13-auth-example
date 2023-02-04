"use client";

import { useSession, signIn, signOut } from "next-auth/react";
import Link from "next/link";
import { TfiBell } from "react-icons/tfi";
import {BsFillGearFill} from "react-icons/bs"

export default function NavUserInfo() {
  const { data: session } = useSession();

  if (session) {
    return (
      <>
        <button className="btn btn-ghost btn-circle">
          <div className="indicator">
            <TfiBell />
            <span className="badge badge-xs badge-primary indicator-item"></span>
          </div>
        </button>
        <div className="dropdown dropdown-end">
          <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
            <div className="w-10 rounded-full">
              <img src={session.user?.image as string} />
            </div>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-200 rounded-box w-52"
          >
            <li>
              <Link href="/test" legacyBehavior>
                <a className="justify-between">Perfil</a>
              </Link>
            </li>
            <li>
              <a>
                Settings
                <span className="badge">soon</span>
              </a>
            </li>
            <li>
              <a
                className="btn btn-warning"
                onClick={() => {
                  signOut();
                }}
              >
                Logout
              </a>
            </li>
          </ul>
        </div>
      </>
    );
  }
  return (
    <>
<button className="btn btn-ghost btn-circle">
          <div className="indicator">
            <BsFillGearFill />
          </div>
        </button>
      <a
        className="btn btn-primary"
        onClick={() => {
          signIn();
        }}
      >
        Iniciar sesion
      </a>
    </>
  );
}
