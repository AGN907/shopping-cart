import logo from '../assets/logo.svg'
import { Link } from "react-router-dom";

export default function Header() {

    return (
        <>
        <div className="flex items-center justify-center p-4">
            <div className="">
                <img className="" src={logo} />
            </div>
            <nav className="ml-auto mr-32">
                <ul className="flex justify-center text-xl">
                    <li>
                        <Link to='/' className="mx-4">Home</Link>
                    </li>
                    <li>
                        <Link to='/shop/products' className="mx-4">Shop</Link>
                    </li>
                </ul>
            </nav>
            <li className="ml-auto list-none">
            <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 24 24"><path fill="currentColor" d="M18 6h-2c0-2.21-1.79-4-4-4S8 3.79 8 6H6c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2zm-6-2c1.1 0 2 .9 2 2h-4c0-1.1.9-2 2-2zm6 16H6V8h2v2c0 .55.45 1 1 1s1-.45 1-1V8h4v2c0 .55.45 1 1 1s1-.45 1-1V8h2v12z"></path></svg>
            </li>
        </div>
        </>
    )
}