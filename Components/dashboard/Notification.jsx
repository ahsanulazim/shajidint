import { IoChatbubbles } from "react-icons/io5";

export default function Notification() {
    return (
        <div
            tabIndex={0}
            className="card card-compact dropdown-content bg-base-100 z-1 mt-3 w-64 md:w-80 shadow"
        >
            <div className="card-body">
                <h2 className="text-lg font-bold">Notifications</h2>
                <ul className="list bg-base-100 px-0">
                    <li className="list-row items-start px-0">
                        <div className="avatar avatar-placeholder">
                            <div className="bg-info text-info-content w-8 rounded-full">
                                <IoChatbubbles />
                            </div>
                        </div>
                        <div className="min-w-0">
                            <div>New Massage</div>
                            <p className="list-col-wrap text-co text-xs opacity-60 truncate">
                                I want to work with shajid International. My company wants your product and services.
                            </p>
                            <h3 className=" text-xs">from Ahsanul Azim</h3>
                        </div>
                    </li>
                    <li className="list-row items-start px-0">
                        <div className="avatar avatar-placeholder">
                            <div className="bg-info text-info-content w-8 rounded-full">
                                <IoChatbubbles />
                            </div>
                        </div>
                        <div className="min-w-0">
                            <div>New Massage</div>
                            <p className="list-col-wrap text-co text-xs opacity-60 truncate">
                                I want to work with shajid International. My company wants your product and services.
                            </p>
                            <h3 className=" text-xs">from Ahsanul Azim</h3>
                        </div>
                    </li>
                    <li className="list-row items-start px-0">
                        <div className="avatar avatar-placeholder">
                            <div className="bg-info text-info-content w-8 rounded-full">
                                <IoChatbubbles />
                            </div>
                        </div>
                        <div className="min-w-0">
                            <div>New Massage</div>
                            <p className="list-col-wrap text-co text-xs opacity-60 truncate">
                                I want to work with shajid.
                            </p>
                            <h3 className=" text-xs">from Ahsanul Azim</h3>
                        </div>
                    </li>
                    <li className="list-row items-start px-0">
                        <div className="avatar avatar-placeholder">
                            <div className="bg-info text-info-content w-8 rounded-full">
                                <IoChatbubbles />
                            </div>
                        </div>
                        <div className="min-w-0">
                            <div>New Massage</div>
                            <p className="list-col-wrap text-co text-xs opacity-60 truncate">
                                I want to work with shajid International. My company wants your product and services.
                            </p>
                            <h3 className=" text-xs">from Ahsanul Azim</h3>
                        </div>
                    </li>

                </ul>
            </div>
        </div>
    )
}
