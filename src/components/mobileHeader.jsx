import Link from "next/link";
import Image from "next/image";

const MobileHeader = () => {
  return (
    <div className="navbar bg-white-100">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h7"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-gradient-to-r from-purple-600 to-blue-600 rounded-box w-52"
          >
            <li>
              <Link
                href={"/"}
                className="hover:underline hover:underline-offset-8 hover:decoration-accent"
              >
                <span className="text-#1F2937-400 hover:text-black">Home</span>
              </Link>
            </li>
            <li>
              <Link
                href={"/projects"}
                className="hover:underline hover:underline-offset-8 hover:decoration-accent"
              >
                <span className="text-#1F2937-400 hover:text-black">
                  projects
                </span>
              </Link>
            </li>
            <li>
              <Link
                href={"/about"}
                className="hover:underline hover:underline-offset-8 hover:decoration-accent"
              >
                <span className="text-#1F2937-400 hover:text-black">About</span>
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="navbar-center">
        <Link className="btn btn-ghost text-xl" href={"/"}>
          Isa Sloot Portfolio
        </Link>
      </div>
    </div>
  );
};
export default MobileHeader;
