import Image from "next/image";
import Link from "next/link";
import { BlogType } from "@/types/blog";

const BlogCard = ({ body, slug }: BlogType): JSX.Element => {
    const { title, date, image, description } = body;

    return (
        <Link href={`/blog/` + slug}>
            <a className="w-full transform duration-300 border-gray-200 dark:border-gray-200 shadow-md overflow-hidden rounded-2xl hover:-translate-y-1 active:translate-y-0 active:scale-95">
                <div className="flex flex-col h-full p-4 dark:bg-sky-500/5 bg-grey/10">
                    <div className="flex rounded-lg overflow-hidden relative mb-3">
                        <div className="absolute top-2 right-2 z-10">
                            <div className="flex items-center bg-gray-700/60 px-2 py-1 rounded-md">
                                <p className="font-bold text-xs text-white">
                                    {date}
                                </p>
                            </div>
                        </div>
                        <div className="w-full">
                            <Image
                                src={image ? image : "/images/no-thumbnail.png"}
                                alt={title}
                                width="712"
                                height="360"
                                layout="responsive"
                                placeholder="blur"
                                blurDataURL={image ? image : "/images/no-thumbnail.png"}
                                priority
                            />
                        </div>
                    </div>
                    <p className="text-2xl font-medium underline hover:no-underline underline-offset-1 dark:text-white">
                        {title}
                    </p>
                    <p className="text-base text-justify mb-auto mt-1">
                        {description}
                    </p>
                </div>
            </a>
        </Link>
    );
};

export default BlogCard;
