import Link from "next/link";
import React from "react";
import logo from '@/public/images/website-icon.png';
import Image from 'next/image';
import { FaHome, FaUser, FaFolder, FaCog } from "react-icons/fa";

const SidebarItem = ({ icon, name, path }) => {
    return (
        <div className="space-y-3">
            <Link href={path} legacyBehavior>
                <a className="flex items-center px-4 py-2 text-gray-600 transition-colors duration-300 transform rounded-xl w-full dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800 dark:hover:text-gray-200 hover:text-gray-700">
                    {icon}
                    <span className="mx-2 text-lg font-medium">{name}</span>
                </a>
            </Link>
        </div>
    );
};


const AdminSidebar = () => {
    const sidebarItems = [
        {
            icon: <FaHome className="w-5 h-5" />,
            name: "Dashboard",
            path: "/admin/dashboard"
        },
        {
            icon: <FaFolder className="w-5 h-5" />,
            name: "Projects",
            path: "/admin/projects"
        },
        {
            icon: <FaUser className="w-5 h-5" />,
            name: "Profile",
            path: "/admin/profile"
        },
    ];

    return (
        <aside className="flex flex-col w-64 h-screen px-5 py-8 overflow-y-auto bg-white border-r rtl:border-r-0 rtl:border-l dark:bg-gray-900 dark:border-gray-700">
          <Link legacyBehavior href="/">
                                <a className="h-8 w-auto sm:h-10">
                                    <Image
                                        src={logo}
                                        alt="Gilly"
                                        width={40}
                                        height={40}
                                    />
                                </a>
                            </Link>

            <div className="flex flex-col justify-between flex-1 mt-20">
                <nav className="-mx-3 space-y-2">
                    {sidebarItems.map((item, index) => (
                        <SidebarItem
                            key={index}
                            icon={item.icon}
                            name={item.name}
                            path={item.path}
                        />
                    ))}
                </nav>
            </div>
            <div className="mt-auto">
            <a className="flex items-center px-4 py-2 text-gray-600 transition-colors duration-300 transform rounded-xl w-full dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800 dark:hover:text-gray-200 hover:text-gray-700">
            <FaCog className="w-5 h-5" />
                    <span className="mx-2 text-lg font-medium">Logout</span>
                </a>
            </div>
        </aside>
    );
};

export default AdminSidebar;
