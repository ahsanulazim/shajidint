import Breadcrumbs from "@/Components/dashboard/Breadcrumbs";
import Team from "@/Components/dashboard/Team";
import Link from "next/link";
import { FaPlus } from "react-icons/fa6";

export default function page() {
    return (
        <>
            <Breadcrumbs title="Team" />
            <div className="flex items-center justify-between mb-10 gap-5">
                <div>
                    <h1 className="font-medium text-2xl sm:text-4xl tracking-tighter">Team</h1>
                    <p className="text-gray-400 text-sm sm:text-md tracking-tighter text-balance">Add, Edit & View Team Members</p>
                </div>
                <Link href="/dashboard/team/addemployee"><button className="btn rounded-md btn-neutral hidden sm:inline-flex"><FaPlus /> Add Employee</button></Link>
            </div>
            <div className="fab sm:hidden fixed z-10 bottom-5 right-5">
                <div className="tooltip tooltip-left" data-tip="Add Employee">
                    <Link href="/dashboard/team/addemployee"><button className="btn btn-lg btn-circle btn-neutral"><FaPlus /></button></Link>
                </div>
            </div>
            <Team />
        </>
    )
}
