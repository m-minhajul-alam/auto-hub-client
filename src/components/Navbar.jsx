import { NavLink } from "react-router-dom";

const Navbar = () => {
    const navLinks = <>
        <li><NavLink to={"/"}
            className={({ isActive, isPending }) =>
                isPending ? "pending" :
                    isActive ? "font-semibold"
                        : "font-light"
            }> Home </NavLink></li>
    </>

    return (
        <div>
            {/* Navbar for md and lg screen */}
            <div className="navbar hidden lg:flex">
                <div data-aos="fade-down" data-aos-duration="1000" className="navbar-start">
                    <a href='/'
                        className="text-xl font-bold ">
                        <span>auto<span className="text-red-500">Hub</span></span></a>
                </div>

                <div data-aos="fade-down" data-aos-duration="1000" className="navbar-center flex">
                    <ul className="menu-horizontal gap-5">
                        {navLinks}
                    </ul>
                </div>

                <div data-aos="fade-down" data-aos-duration="1000" className="navbar-end">
                    <img className="w-8 rounded-full" src="https://i.ibb.co/r69Q4h6/user-icon-gray.png" />
                </div>
            </div>

            {/* Navbar for sm screen */}
            <div className="navbar lg:hidden">
                <div className="flex-1">
                    <a href='/'
                        className="text-xl font-bold ">
                        <span>auto<span className="text-red-500">Hub</span></span></a>
                </div>

                <div className="flex justify-end flex-1 px-2">
                    <div className="flex items-stretch">
                        <div className="dropdown text-blue-950 dropdown-end">
                            <label tabIndex={0} className="\">
                                <img className="w-8 rounded-full" src="https://i.ibb.co/r69Q4h6/user-icon-gray.png" />
                            </label>
                            <ul tabIndex={0} className="dropdown-content z-[1] p-2 pl-5 shadow bg-base-100 w-40 mt-3">
                                {navLinks}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;