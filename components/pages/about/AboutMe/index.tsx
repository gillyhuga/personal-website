import AnimationLayout from "@/components/layout/AnimationLayout";
import { RoughNotation } from "react-rough-notation";

const AboutMe = () => {
    return (
        <>
            <div className="pt-14 md:pt-24 text-lg">
                <h1 className="text-3xl py-5">
                    <RoughNotation type="underline" show strokeWidth={2} padding={2} color="#999999">About</RoughNotation>
                </h1>
                <AnimationLayout>
                    <p className="text-secondary dark:prose-dark">
                        Experienced in software engineering, especially in frontend engineer field, based in <a className='underline hover:no-underline font-semibold' href='https://www.google.com/search?q=Malang' target="_blank" rel="noopener noreferrer">Malang, Indonesia</a>.
                        I am currently study in <a className='underline hover:no-underline font-semibold' href='https://umm.ac.id/' target="_blank" rel="noopener noreferrer">University Muhammadiyah Malang</a> with Bachelor&apos;s degree in Informatics (Computer Science). I have been programming from high school through college to learn about software engineering. I enjoy writing HTML, CSS, Javascript/Typescript, and React.
                    </p>
                    <p className="pt-5 text-secondary dark:prose-dark">
                        I love exploring everything related to technology. When i was in college i join many community and orgs to expand my knowledge, I&apos;m member of <a className='underline hover:no-underline font-semibold' href='https://infotech.umm.ac.id/' target="_blank" rel="noopener noreferrer">Infotech UMM</a> , part of Information Systems Division, and I&apos;m the <a className='underline hover:no-underline font-semibold' href='https://infotech.umm.ac.id/simutu/asisten/profile/MjAxOTEwMzcwMzExMzM2' target="_blank" rel="noopener noreferrer">Laboratory Assistant</a> of <a className='underline hover:no-underline font-semibold' href='https://infotech.umm.ac.id/' target="_blank" rel="noopener noreferrer">Informatics Laboratory UMM</a>.
                    </p>
                    <p className="pt-5 text-secondary dark:prose-dark">
                        When I&apos;m not in front of a computer screen, I&apos;m probably playing and <a className='underline hover:no-underline font-semibold' href='https://open.spotify.com/user/312tbfzm3r2i2eqeiurzp2uajpyy' target="_blank" rel="noopener noreferrer">listening music</a>.
                    </p>
                </AnimationLayout>
            </div>
        </>
    )
}

export default AboutMe;