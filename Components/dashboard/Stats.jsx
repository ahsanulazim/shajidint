import { FaCaretUp } from "react-icons/fa6";

export default function Stats() {
    return (
        <div className="outline hover:text-white hover:bg-main sm:max-w-3xs p-5 rounded-md">
            <h3 className="font-bold">Total Projects</h3>
            <h2 className="text-4xl">50</h2>
            <p className="text-xs text-complement"><span className="border hover:border-white inline-flex items-center rounded-md p-0.5 mr-2">5%<FaCaretUp /></span>increased from last month</p>
        </div>
    )
}
