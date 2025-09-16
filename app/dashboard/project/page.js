import Breadcrumbs from "@/Components/dashboard/Breadcrumbs";
import ProjectCard from "@/Components/dashboard/ProjectCard";
import Link from "next/link";
import { FaPlus } from "react-icons/fa6";

export default function project() {
    return (
        <>
            <Breadcrumbs title="Projects" />
            <div className="flex items-center justify-between mb-10 gap-5">
                <div>

                    <h1 className="font-medium text-2xl sm:text-4xl tracking-tighter">Projects</h1>
                    <p className="text-gray-400 text-sm sm:text-md tracking-tighter">Add, Edit & View Projects you&apos;re working on</p>
                </div>
                <button className="btn rounded-md btn-neutral hidden sm:inline-flex"><FaPlus /> Add Project</button>
                <div className="fab sm:hidden fixed z-10 bottom-5 right-5">
                    <div className="tooltip tooltip-left" data-tip="Add Project">
                        <button className="btn btn-lg btn-circle btn-neutral"><FaPlus /></button>
                    </div>
                </div>
            </div>
            {/* Project Card */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 2xl:grid-cols-4 gap-5">

                <ProjectCard />
                <ProjectCard />
                <ProjectCard />
                <ProjectCard />
                <ProjectCard />
                <ProjectCard />
                <ProjectCard />
                <ProjectCard />
            </div>
        </>
    )
}
