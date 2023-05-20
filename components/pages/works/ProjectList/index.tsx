import React, { memo } from "react";
import { AiOutlineLink } from "react-icons/ai";
import Image from "@/components/pages/works/Image";

interface ProjectsProps {
    offset?: number;
    selectedTag?: string;
    dataProjects?: any;
}

function Projects({ offset, selectedTag, dataProjects }: ProjectsProps) {
    type ProjectType = typeof dataProjects[0];
    const fileteredProjects = (): ProjectType[] => {
        if (selectedTag) {
            return dataProjects.filter(({ tags }) => tags?.includes(selectedTag)).slice(0, offset || dataProjects.length);
        }

        return dataProjects.slice(0, offset || dataProjects.length);
    };

    return (

        <ul className="flex flex-col gap-8 sm:gap-10">
            {fileteredProjects().map(({
                id,
                name,
                description,
                image,
                url,
                tags,
            }: ProjectType) => (
                <li key={id} className="flex flex-col-reverse sm:flex-row justify-between gap-4 ">
                    <div className="w-full flex-1 max-w-[450px] sm:flex sm:flex-col sm:justify-between sm:items-start">
                        <div>
                            <a
                                href={url}
                                className="text-2xl sm:text-3xl md:text-4xl font-display text-black-100 mb-4 inline-block underline hover:no-underline underline-offset-1"
                                title={`Open ${name} in new tab`}
                            >
                                {name}
                            </a>
                            <p className="text-left line-clamp-3 text-base dark:prose-dark">
                                {description}
                            </p>
                            <a
                                href={url}
                                className="bg-primary/5 dark:bg-gray-900 rounded-lg py-3 px-4 text-sm inline-block whitespace-nowrap my-2 w-full max-w-[335px] overflow-hidden text-ellipsis"
                                target="_blank"
                                rel="noreferrer noopener"
                                title={`Open ${name} in new tab`}
                            >
                                <AiOutlineLink className="inline-block mr-2 h-6 w-6" />
                                {" "}
                                {url.length > 40 ? `${url.slice(0, 40)}...` : url}
                            </a>
                        </div>

                        <div id="tags" className="flex items-center flex-wrap gap-2">
                            {tags && tags.map((tag, idx) => {
                                const isSelected = selectedTag && selectedTag.toLowerCase() === tag.toLowerCase();

                                return (
                                    <span key={idx} className={`py-2 px-4 select-none rounded-lg dark:bg-gray-900 bg-primary/5 text-sm font-medium ${isSelected ? "active" : ""}`}>
                                        {tag}
                                    </span>
                                );
                            })}
                        </div>
                    </div>

                    <div className="w-full flex-1 sm:max-w-[350px] mb-4 sm:mb-0 rounded-lg overflow-hidden relative group">
                        <div className="absolute z-10 w-full h-full p-4 bg-black text-white  bg-opacity-50 flex items-center justify-center test-center opacity-0 invisible group-hover:opacity-100 group-hover:visible tranistion-all duration-300 ease-in-out">
                            <a
                                href={url}
                                className="text-white text-xl text-center font-semibold underline hover:no-underline underline-offset-1"
                                target="_blank"
                                rel="noreferrer noopener"
                                title={`Open ${name} in new tab`}
                            >
                                {name}
                            </a>
                        </div>
                        <Image
                            alt={name}
                            src={image}
                            className="w-full h-52 sm:w-[350px] sm:h-[350px] "
                        />
                    </div>
                </li>
            ))}
        </ul>


    );
}

export default memo(Projects);