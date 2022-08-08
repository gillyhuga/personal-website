import React, { useEffect, useState } from 'react';
import { RiSunLine, RiMoonClearLine } from 'react-icons/ri';
import { useTheme } from 'next-themes'

const ThemeSwitch = () => {
    const [mounted, setMounted] = useState(false)
    const { theme, setTheme } = useTheme()
    useEffect(() => setMounted(true), [])

    if (!mounted) return null

    return (
        <div className="transition duration-500 ease-in-out rounded-full  hover:text-primary dark:hover:text-primary dark:text-white cursor-pointer p-2">
            {theme === 'dark' ? (
                <RiSunLine
                    onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
                    className=" h-6 w-6"
                    aria-hidden="true"
                />
            ) : (
                <RiMoonClearLine
                    onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
                    className="h-6 w-6"
                    aria-hidden="true"
                />
            )}
        </div>
    );
};

export default ThemeSwitch;