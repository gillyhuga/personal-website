import Loader from "@/components/common/Loader";
import Layout from "@/components/layout/BaseLayout";
import ProjectList from "@/components/pages/works/ProjectList";
import axios from "axios";
import { useEffect, useState } from "react";
import { RoughNotation } from "react-rough-notation";
import toast from 'react-hot-toast';

const Portfolio = () => {
  const tags = ["React", "TailwindCSS", "Bootstrap"]
  const [selectedTag, setSelectedTag] = useState<string>("");
  const [projects, setProjects] = useState([])
  const [loading, setLoading] = useState(true)

  const handleTagClick = (tag: string) => {
    if (selectedTag === tag) {
      return setSelectedTag("");
    }
    return setSelectedTag(tag);
  };

  const getData = async () => {
    await axios.get("https://api.gillyhuga.com/api/v1/projects")
      .then((response) => {
        setProjects(response.data.data)
        setLoading(false)
      }).catch((error) => {
        toast.error(error.message)
      })
  }

  useEffect(() => {
    getData()
  }, [])

  return (
    <Layout>
      <div className="pt-28 pb-4 w-full min-h-[calc(100vh-5rem)] text-lg">
        <div className="flex flex-col space-y-2 border-b border-b-base mb-6">
          <div className="whitespace-pre-line font-semibold sm:mx-0 text-5xl md:text-5xl xl:text-6xl" >
            <RoughNotation type="underline" show strokeWidth={2} color="#999999">Works</RoughNotation>
          </div>
          <p className="text-xl text-secondary py-5">
            This is a list of projects I&apos;ve worked on. Feel free to check out my Github profile to see more projects I&apos;ve worked on.
          </p>

          <div className="flex flex-col sm:flex-row items-start gap-2 pb-6 ">
            <span className="font-medium text-black-100 block py-1">
              Tags :{" "}
            </span>

            <ul className="flex flex-row flex-wrap gap-2">
              {tags.map((tag) => (
                <li
                  key={tag}
                  className={`bg-primary/5 select-none py-2 px-4 rounded-full text-sm font-medium border-[2px] ${selectedTag === tag ? "active border-base" : "border-transparent"}`}
                  onClick={() => handleTagClick(tag)}
                >
                  {tag}
                </li>
              ))}
            </ul>
          </div>
        </div>
        <Loader visible={loading} />
        {projects && <ProjectList selectedTag={selectedTag} dataProjects={projects} />}
      </div>
    </Layout>
  );
}

export default Portfolio;