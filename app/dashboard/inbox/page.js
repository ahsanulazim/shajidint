import Link from "next/link";
import { FaEye, FaPenToSquare, FaTrashCan } from "react-icons/fa6";

export default function inbox() {

    const entries = [
        { id: 1, name: "MD Aminul Islam", date: "January 10, 2025", email: 'aminul@shajidint@gmail.com' },
        { id: 2, name: "Jane Smith", date: "February 15, 2025", email: 'jane@yahoo.com' },
        { id: 3, name: "Sam Johnson", date: "March 20, 2025", email: 'sam@outlook.com' }

    ];

    return (
        <>
            <div>
                <div className="breadcrumbs text-sm">
                    <ul>
                        <li><Link href="/dashboard">Dashboard</Link></li>
                        <li>Inbox</li>
                    </ul>
                </div>
                <h1 className="font-medium text-2xl sm:text-4xl tracking-tighter">Inbox</h1>
                <p className="text-gray-400 text-sm sm:text-md tracking-tighter">See All massages and entries</p>
            </div>
            <div className="overflow-x-auto  bg-white shadow-md rounded-lg p-5 mt-5">
                <table className="table table-xs md:table-md">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Date</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* Table Rows */}
                        {entries.map(entry => (
                            <tr key={entry.id}>
                                <th>{entry.id}</th>
                                <td>{entry.name}</td>
                                <td>{entry.email}</td>
                                <td>{entry.date}</td>
                                <td>
                                    <div className="flex gap-2">
                                        <button><FaEye className="text-gray-400 hover:text-success" /></button>
                                        <button><FaPenToSquare className="text-gray-400 hover:text-info" /></button>
                                        <button><FaTrashCan className="text-gray-400 hover:text-error" /></button>
                                    </div>
                                </td>
                            </tr>))}
                    </tbody>
                </table>
            </div>
        </>
    )
}
