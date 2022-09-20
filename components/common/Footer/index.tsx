import Link from 'next/link';
import { RiLinkedinBoxFill, RiInstagramFill, RiGithubFill } from 'react-icons/ri';
const social = [
    {
        title: "Linkedin",
        url: "https://www.linkedin.com/in/gillyhuga/",
        icon: RiLinkedinBoxFill,
    },
    {
        title: "Instagram",
        url: "https://www.instagram.com/halogilly/",
        icon: RiInstagramFill,
    },
    {
        title: "Github",
        url: "https://github.com/gillyhuga",
        icon: RiGithubFill,
    },
]

const Footer = () => {
    return (
        <>
            <footer className="flex w-screen max-w-7xl mx-auto px-4 sm:px-6 ">
                <div className="py-6 px-4 md:flex md:items-center md:justify-between w-full text-base dark:text-white ">
                    <span className=" hidden sm:block">© 2022 Gilly Huga Anargya. All Rights Reserved.
                    </span>
                    <ul className='flex items-center justify-center'>
                        {
                            social.map((item) => {
                                const Icon = item.icon;
                                return (
                                    <Link key={item.title} href={item.url}>
                                        <a target="_blank" rel='noreferrer' className='mx-4 flex items-centert  hover:text-gray-900'>
                                        <Icon className="h-6 w-6"/>
                                            <span className='ml-2 hidden sm:block'>
                                                {item.title}
                                            </span>
                                        </a>
                                    </Link>
                                )
                            })
                        }
                    </ul>
                </div>
            </footer>
        </>
    )
}

export default Footer;