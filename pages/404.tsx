import Layout from "@/components/layout/BaseLayout";
import Link from "next/link";

export default function Page404() {
    return (
        <Layout>
            <div className="whitespace-pre-line text-center sm:mx-0 font-bold " >
                <h1 className="text-7xl font-normal md:text-8xl xl:text-9xl">({">"}_{"<"})</h1>
                <p className="py-6 text-lg xl:text-3xl font-bold">Unfortunately, this page doesn&apos;t exist.</p>
                <Link href={"/"}>
                    <a className="bg-primary text-white font-medium text-md py-1 px-4 rounded-full">Back to Home</a>
                </Link>
            </div>
        </Layout>
    )
}