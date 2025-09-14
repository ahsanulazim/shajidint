import { FaCaretDown, FaCaretUp, FaDollarSign, FaFileZipper, FaTriangleExclamation } from "react-icons/fa6";
import { IoChatbubbles } from "react-icons/io5";

export default function Stats({ stat }) {
    return (
        <div className="bg-white p-5 rounded-md shadow-sm flex items-center justify-between">
            <div>
                <h3 className="font-bold text-gray-400 uppercase text-sm mb-1">{stat.title}</h3>
                <h2 className="text-4xl mb-1">{stat.value}</h2>
                <p className="text-xs"><span className={`border inline-flex items-center rounded-md p-0.5 mr-2 ${stat.up ? "text-success" : "text-error"}`}>{stat.percent}{stat.up ? <FaCaretUp /> : <FaCaretDown />}</span>since last month</p>
            </div>
            <div className="avatar avatar-placeholder">

                {stat.id === 1 && <div className="bg-accent text-accent-content w-16 rounded-full"><FaFileZipper className="text-2xl" /></div>}
                {stat.id === 2 && <div className="bg-info text-info-content w-16 rounded-full"><IoChatbubbles className="text-2xl" /></div>}
                {stat.id === 3 && <div className="bg-success text-success-content w-16 rounded-full"><FaDollarSign className="text-2xl" /></div>}
                {stat.id === 4 && <div className="bg-warning text-warning-content w-16 rounded-full"><FaTriangleExclamation className="text-2xl" /></div>}

            </div>
        </div >
    )
}
