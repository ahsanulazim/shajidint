import Team from "@/Components/dashboard/Team";
import Link from "next/link";

export default function page() {
    return (
        <>
            <div>
                <div className="breadcrumbs text-sm">
                    <ul>
                        <li><Link href="/dashboard">Dashboard</Link></li>
                        <li>Team</li>
                    </ul>
                </div>
                <h1 className="font-medium text-2xl sm:text-4xl tracking-tighter">Team</h1>
                <p className="text-gray-400 text-sm sm:text-md tracking-tighter">Add, Edit & View Team Members</p>
            </div>
            <Team />
        </>
    )
}
