import { RoughNotation } from "react-rough-notation";

const Contact = () => {
    return (
        <>
            <div className="pt-14 text-lg">
                <h1 className="text-3xl py-5">
                    <RoughNotation type="underline" show strokeWidth={2} padding={2} color="#999999">Contact</RoughNotation>
                </h1>
                <p className="text-secondary dark:prose-dark">
                    Want to talk about technology related project or just drink something tasty together?
                </p>
                <p className="pt-5 text-secondary dark:prose-dark">
                    If yes, please don&apos;t be shy and just reach me at <a className='underline hover:no-underline font-semibold' href='mailto:hello@gillyhuga.com'>hello@gillyhuga.com</a>. Anyway, thanks for visiting my profile :)
                </p>
            </div>
        </>
    )
}

export default Contact;