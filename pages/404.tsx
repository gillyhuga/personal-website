import Layout from "@/components/layout/BaseLayout";
import Link from "next/link";
import Image from "next/image";
import Image404 from "@/public/images/404.png";

export default function Page404() {
    return (
        <Layout>
            <div className="whitespace-pre-line text-center sm:mx-0 font-bold " >
                <Image
                    src={Image404}
                    priority
                    alt="Error 404"
                    width={350}
                    height={350}
                />
                <p className="py-6 text-lg xl:text-3xl font-bold">Unfortunately, this page doesn&apos;t exist.</p>
                <Link legacyBehavior href={"/"}>
                    <a className="py-2 px-4 bg-primary text-white font-semibold rounded-lg shadow-xl hover:bg-opacity-90">Back to Home</a>
                </Link>
            </div>
        </Layout>
    )
}