import { FaPlus } from "react-icons/fa6";
import Stats from "./Stats";

export default function Dashboard() {
    return (
        <>
            <div className="flex items-center justify-between mb-10 gap-5">
                <div>
                    <h1 className="font-medium text-2xl sm:text-4xl tracking-tighter">Dashboard</h1>
                    <p className="text-gray-400 text-sm sm:text-md tracking-tighter">Plan, prioritize and accomplish your tasks with ease</p>
                </div>
                <button className="btn rounded-md btn-neutral hidden sm:inline-flex"><FaPlus /> Add Project</button>
                <div className="fab sm:hidden absolute bottom-5 right-5">
                    <button className="btn btn-lg btn-circle btn-neutral"><FaPlus /></button>
                </div>
            </div>
            {/* Project Status */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-5">
                <Stats />
                <Stats />
                <Stats />
                <Stats />
            </div>

        </>
    )
}
