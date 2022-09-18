import React, { useEffect, useState } from 'react';
import { RiSunLine, RiMoonClearLine } from 'react-icons/ri';
import { useTheme } from 'next-themes'

const ThemeSwitch = () => {
    const [mounted, setMounted] = useState(false)
    const { theme, setTheme } = useTheme()
    useEffect(() => setMounted(true), [])

    if (!mounted) return null

    return (
        <div className="transition duration-500 ease-in-out hover:bg-white text-base hover:bg-opacity-50 rounded-lg dark:text-white cursor-pointer p-2 hover:text-primary">
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