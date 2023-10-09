import logo from "../assets/logo.svg";
import { Link } from "react-router-dom";

export default function Header({ cartLength }) {
  return (
    <div className="bg-white">
      <div className="flex items-center p-4 shadow-sm shadow-slate-400">
        <div className="w-42">
          <img className="w-full" src={logo} />
        </div>
        <div className="ml-auto mr-24 hidden sm:flex">
          <ul className="hidden w-full justify-between text-2xl sm:flex">
            <li className="mx-4">
              <Link to="/">Home</Link>
            </li>
            <li className="mx-4">
              <Link to="shop/products">Shop</Link>
            </li>
          </ul>
        </div>
        <div className="ml-auto flex gap-2">
          <div className=" flex">
            <Link to="cart" className="relative flex">
              {cartLength > 0 && (
                <span className="absolute right-6 top-0 rounded-[50%] bg-orange-500 px-1 text-sm text-gray-100 ">
                  {cartLength}
                </span>
              )}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="36"
                height="36"
                viewBox="0 0 24 24"
              >
                <path
                  fill="currentColor"
                  d="M4 22V6h4q0-1.65 1.175-2.825T12 2q1.65 0 2.825 1.175T16 6h4v16H4Zm2-2h12V8h-2v3h-2V8h-4v3H8V8H6v12Zm4-14h4q0-.825-.588-1.413T12 4q-.825 0-1.413.588T10 6ZM6 20V8v12Z"
                ></path>
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
