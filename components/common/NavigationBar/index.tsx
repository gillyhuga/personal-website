import { Fragment } from 'react'
import dynamic from "next/dynamic";
import { Popover, Transition } from '@headlessui/react'
import Link from "next/link";
import { HiOutlineDotsHorizontal } from 'react-icons/hi';
import { BiHomeAlt, BiGlobe, BiBookAlt, BiUser } from 'react-icons/bi';
import logo from '@/public/images/website-icon.png';
import Image from 'next/image'
import { withRouter } from 'next/router';

const ThemeChanger = dynamic(() => import("@/components/common/ThemeSwitch"), { ssr: false });

const menu = [
    {
        name: 'Works',
        description: 'Works.',
        href: '/works',
        icon: BiGlobe,
    },
    {
        name: 'Blog',
        description: 'Blog.',
        href: '/blog',
        icon: BiBookAlt,
    },
    {
        name: 'About',
        description: 'About.',
        href: '/about',
        icon: BiUser,
    },
]

const Navbar = ({ router }: any) => {
    return (
        <Popover className="fixed inset-x-0 top-0 flex flex-row z-50 justify-between bg-clip-padding backdrop-filter bg-opacity-30 border-b dark:border-transparent backdrop-blur-md">
            {({ open }) => (
                <>
                    <div className="w-screen max-w-7xl mx-auto px-4 sm:px-6">
                        <div className="flex justify-between items-center py-3 md:justify-start md:space-x-10">
                            <div className="flex justify-start lg:w-0 lg:flex-1">
                                <Link href="/" className="h-8 w-auto sm:h-10">
                                    <Image
                                        src={logo}
                                        alt="Gilly"
                                        width={40}
                                        height={40}
                                    />
                                </Link>
                            </div>
                            <div className="-mr-2 -my-2 md:hidden">
                                <Popover.Button className="bg-white dark:bg-gray-900 bg-opacity-50 rounded-md p-2 inline-flex items-center justify-center  hover:text-gray-500 hover:bg-gray-100 ">
                                    <HiOutlineDotsHorizontal className="h-6 w-6" aria-hidden="true" />
                                </Popover.Button>
                            </div>
                            <div className="hidden md:flex items-center justify-end md:flex-1 lg:w-0 space-x-4">
                                {menu.map((item) => (
                                    <Link legacyBehavior
                                        key={item.name}
                                        href={item.href}
                                    >
                                        <a className={"rounded-lg px-3 py-2 text-base dark:text-white  font-medium hover:bg-opacity-50 hover:bg-white hover:text-primary" + `${router.asPath.match(item.href) ? 'text-primary dark:text-white underline underline-offset-[6px]  decoration-[3px] decoration-primary' : ''}`}>{item.name}</a>
                                    </Link>
                                ))}
                                <ThemeChanger />
                            </div>
                        </div>
                    </div>

                    <Transition
                        as={Fragment}
                        enter="duration-200 ease-out"
                        enterFrom="opacity-0 scale-95"
                        enterTo="opacity-100 scale-100"
                        leave="duration-100 ease-in"
                        leaveFrom="opacity-100 scale-100"
                        leaveTo="opacity-0 scale-95"
                    >
                        <Popover.Panel className="absolute top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden">
                            {({ close }) => (
                                <div className="rounded-lg shadow-lg bg-white dark:bg-gray-900 divide-y-2 divide-gray-50">
                                    <div className="pt-5 pb-6 px-5">
                                        <div className="flex items-center justify-between">
                                            <div>
                                                <Image
                                                    className="h-8 w-auto"
                                                    src={logo}
                                                    alt="G for Gilly"
                                                    width={40}
                                                    height={40}
                                                />
                                            </div>
                                            <div className="-mr-2">
                                                <div className="bg-white dark:bg-gray-900 rounded-md p-2 inline-flex items-center justify-center  hover:bg-gray-100 hover:dark:bg-gray-800">
                                                    <ThemeChanger />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="mt-6">
                                            <nav className="grid gap-y-2">

                                                {menu.map((item) => (
                                                    <Link legacyBehavior
                                                        key={item.name}
                                                        href={item.href}
                                                    >
                                                        <a onClick={() => close()} className={"p-3 flex items-center rounded-md bg-white dark:bg-gray-900 hover:bg-gray-100 hover:dark:bg-gray-800" + `${router.asPath.match(item.href) ? ' bg-gray-100 dark:bg-gray-800' : ''}`}>
                                                            <item.icon className="flex-shrink-0 h-6 w-6 text-primary" aria-hidden="true" />
                                                            <span className="ml-3 text-base font-medium dark:text-white">{item.name}</span>
                                                        </a>
                                                    </Link>
                                                ))}
                                            </nav>
                                        </div>
                                    </div>
                                </div>
                            )}
                        </Popover.Panel>
                    </Transition>
                </>
            )}
        </Popover>


    )
}

export default withRouter(Navbar);