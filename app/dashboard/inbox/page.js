'use client'

import Breadcrumbs from "@/Components/dashboard/Breadcrumbs";
import ModalInbox from "@/Components/dashboard/ModalInbox";
import Link from "next/link";
import { useRef } from "react";
import { FaEye, FaPenToSquare, FaTrashCan } from "react-icons/fa6";

export default function Inbox() {

    const entries = [
        { id: 1, name: "MD Aminul Islam", date: "January 10, 2025", email: 'aminul@shajidint@gmail.com' },
        { id: 2, name: "Jane Smith", date: "February 15, 2025", email: 'jane@yahoo.com' },
        { id: 3, name: "Sam Johnson", date: "March 20, 2025", email: 'sam@outlook.com' }

    ];

    const deleteMsg = useRef();

    const handleMsgDel = () => {
        deleteMsg.current.showModal();
    }

    return (
        <>
            <ModalInbox ref={deleteMsg} />
            <Breadcrumbs title="Inbox" />
            <div>

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
                                        <button className="btn btn-success btn-circle btn-sm md:btn-md"><FaEye /></button>
                                        <button className="btn btn-info btn-circle btn-sm md:btn-md"><FaPenToSquare /></button>
                                        <button className="btn btn-error btn-circle btn-sm md:btn-md" onClick={handleMsgDel}><FaTrashCan /></button>
                                    </div>
                                </td>
                            </tr>))}
                    </tbody>
                </table>
            </div>
        </>
    )
}
