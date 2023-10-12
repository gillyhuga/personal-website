import Link from "next/link";

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

export default SidebarItem