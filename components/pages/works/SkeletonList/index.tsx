import React, { useState, useEffect } from "react";
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'
import { useTheme } from 'next-themes'

interface SkeletonProps {
    visible: boolean;
}

const SkeletonCard = ({ visible }: SkeletonProps): JSX.Element => {
    return (
        <Theme>
            <ul className="flex flex-col gap-8 sm:gap-10">
                {[...Array(2)].map((x) => (
                    <li key={x} className={`${visible ? "flex" : "hidden"} flex-col-reverse sm:flex-row justify-between gap-4 `}>
                        <div className="w-full flex-1 max-w-[450px] sm:flex sm:flex-col sm:justify-between sm:items-start ">
                            <div className="w-[350px]">
                                <Skeleton height={50} width={200} />
                                <div className="space-y-2" >
                                    <Skeleton height={20} width={350} count={3} />
                                </div>
                                <Skeleton height={40} width={250} />
                            </div>
                            <div id="tags" className="flex items-center flex-wrap gap-2">
                                <Skeleton height={35} width={100} />
                                <Skeleton height={35} width={115} />
                                <Skeleton height={35} width={90} />
                            </div>
                        </div>
                        <div className="w-full flex-1 sm:max-w-[350px] mb-4 sm:mb-0 rounded overflow-hidden relative group">
                            <Skeleton className="w-full h-52 sm:w-[350px] sm:h-[350px] rounded-lg bg-white " />
                        </div>
                    </li>
                ))}
            </ul>
        </Theme>
    );
};

const Theme = ({ children }) => {
    const [mounted, setMounted] = useState(false)
    const { theme } = useTheme()
    useEffect(() => setMounted(true), [])

    if (!mounted) return null

    return (
        <div>
            {theme === "dark" ?
                <div>
                    <SkeletonTheme baseColor='#202020' highlightColor="#444" >
                        {children}
                    </SkeletonTheme>
                </div>
                :
                <div>
                    {children}
                </div>
            }
        </div>
    );
};

export default SkeletonCard;

