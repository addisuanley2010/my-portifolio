import React from "react";
import { NavLink, useLocation } from "react-router-dom";

const Header: React.FC = () => {
    const location = useLocation();

console.log(location,'this loc')
    return (
        <div className="text-white p-4 fixed w-full top-0 z-10 bg-transparent">
            <div className="container mx-auto flex justify-end">
                <div className="flex items-center space-x-4">
                    <NavLink
                        to={"#"}
                        className={`hover:text-emerald-500 ${!location.hash ? "text-emerald-500 font-bold underline" : ""}`}
                    >
                        Home
                    </NavLink>
                     <NavLink
                        to={"#about"}
                        className={`hover:text-emerald-500 ${location.hash === "#about" ? "text-emerald-500 font-bold underline" : ""}`}
                    >
                        About
                    </NavLink>
                    <NavLink
                        to={"#skills"}
                        className={`hover:text-emerald-500 ${location.hash === "#skills" ? "text-emerald-500 font-bold underline" : ""}`}
                    >
                        Skills
                    </NavLink>
                    <NavLink
                        to={"#projects"}
                        className={`hover:text-emerald-500 ${location.hash === "#projects" ? "text-emerald-500 font-bold underline" : ""}`}
                    >
                        Projects
                    </NavLink>
                    <NavLink
                        to={"#educations"}
                        className={`hover:text-emerald-500 ${location.hash === "#educations" ? "text-emerald-500 font-bold underline" : ""}`}
                    >
                        Education
                    </NavLink>
                    <NavLink
                        to={"#services"}
                        className={`hover:text-emerald-500 ${location.hash === "#services" ? "text-emerald-500 font-bold underline" : ""}`}
                    >
                        Services
                    </NavLink>
                    <NavLink
                        to={"#contact"}
                        className={`hover:text-emerald-500 ${location.hash === "#contact" ? "text-emerald-500 font-bold underline" : ""}`}
                    >
                        Contact
                    </NavLink>
                   
                </div>
            </div>
        </div>
    );
};

export default Header;