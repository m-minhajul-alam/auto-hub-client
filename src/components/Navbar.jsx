import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { AuthContext } from "../proivders/AuthProvider";

const Navbar = () => {
    const { user, logOut } = useContext(AuthContext);
    const handelLogOut = () => {
        logOut()
            .then()
            .catch()
    }
    const navLinks = <>
        <li><NavLink to={"/"}
            className={({ isActive, isPending }) =>
                isPending ? "pending" :
                    isActive ? "font-semibold text-red-600"
                        : "font-light"
            }> Home </NavLink></li>

        {user && <>
            <li><NavLink to={"/addProduct"}
                className={({ isActive, isPending }) =>
                    isPending ? "pending" :
                        isActive ? "font-semibold  text-red-600"
                            : "font-light"
                }> Add Product </NavLink></li>

            <li><NavLink to={"/myCart"}
                className={({ isActive, isPending }) =>
                    isPending ? "pending" :
                        isActive ? "font-semibold  text-red-600"
                            : "font-light"
                }> My Cart </NavLink></li>
        </>}

        <li><NavLink to={"/login"}
            className={({ isActive, isPending }) =>
                isPending ? "pending" :
                    isActive ? "font-semibold  text-red-600"
                        : "font-light"
            }> Login </NavLink></li>
    </>

    const setDarkMode = () => {
        document.querySelector('body').setAttribute("data-theme", "dark");
    };

    const setLightMode = () => {
        document.querySelector('body').setAttribute("data-theme", "light");
    };

    const toggleTheme = (e) => {
        if (e.target.checked) setDarkMode();
        else setLightMode();
    };

    return (
        <div>
            {/* Navbar for md and lg screen */}
            <div className="navbar hidden lg:flex">
                <div data-aos="fade-down" data-aos-duration="1000" className="navbar-start">
                    <a href='/'
                        className="text-xl font-bold ">
                        <span>AUTO<span className="text-red-600">Hub</span></span></a>
                </div>

                <div data-aos="fade-down" data-aos-duration="1000" className="navbar-center flex">
                    <ul className="menu-horizontal gap-5">
                        {navLinks}
                    </ul>
                </div>

                <div data-aos="fade-down" data-aos-duration="1000" className="navbar-end">
                    <div className="flex justify-center items-center gap-4 mr-2">
                        {
                            user ? <div className="flex flex-col items-end text-gray-400">
                                <p>{user.displayName}</p>
                                <button onClick={handelLogOut} className="text-gray-400 text-xs font-bold">Logout</button></div>
                                : " "
                        }
                        {
                            user ? <img className="w-10 rounded-full" src={user.photoURL || "https://i.ibb.co/r69Q4h6/user-icon-gray.png"} />
                                : <img className="w-10 rounded-full" src="https://i.ibb.co/r69Q4h6/user-icon-gray.png" />
                        }
                    </div>
                    <label className="swap swap-rotate">

                        {/* this hidden checkbox controls the state */}
                        <input onChange={toggleTheme} type="checkbox" />

                        {/* sun icon */}
                        <svg className="swap-on fill-current w-8 h-8" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z" /></svg>

                        {/* moon icon */}
                        <svg className="swap-off fill-current w-8 h-8" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z" /></svg>

                    </label>
                </div>
            </div>

            {/* Navbar for sm screen */}
            <div className="navbar lg:hidden">
                <div className="flex-1">
                    <a href='/' className="text-xl font-bold ">
                        <span>AUTO<span className="text-red-600">Hub</span></span></a>
                </div>

                <div className="flex justify-end flex-1 px-2">
                    <div className="flex items-stretch">
                        <div className="dropdown text-gray-400 dropdown-end mr-2">
                            <label tabIndex={0} className="\">
                                {
                                    user ? <img className="w-8 rounded-full" src={user.photoURL || "https://i.ibb.co/r69Q4h6/user-icon-gray.png"} />
                                        : <img className="w-8 rounded-full" src="https://i.ibb.co/r69Q4h6/user-icon-gray.png" />
                                }
                            </label>
                            <ul tabIndex={0} className="dropdown-content z-[1] p-2 text-center text-gray-400 shadow bg-base-100 w-40 mt-3">
                                <li>
                                    {
                                        user ?
                                            <p className="text-gray-400">{user.displayName}</p>
                                            : " "
                                    }
                                </li>
                                <li>
                                    {
                                        user ?
                                            <button onClick={handelLogOut} className="text-gray-400">Logout</button>
                                            : " "
                                    }
                                </li>
                                {navLinks}
                            </ul>
                        </div>
                        <label className="swap swap-rotate">
                            {/* this hidden checkbox controls the state */}
                            <input onChange={toggleTheme} type="checkbox" />

                            {/* sun icon */}
                            <svg className="swap-on fill-current w-7 h-7" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z" /></svg>

                            {/* moon icon */}
                            <svg className="swap-off fill-current w-7 h-7" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z" /></svg>
                        </label>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;