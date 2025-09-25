'use client'

import { NavContext } from '@/context/MyContext';
import React, { useContext, useState } from 'react'
import { FaTriangleExclamation } from 'react-icons/fa6'

export default function LogoutModal({ logoutUser }) {

    const { handleLogout } = useContext(NavContext);

    const [loading, setLoading] = useState(false);

    const confirmLogout = () => {
        setLoading(true)
        handleLogout();
        setLoading(false)
    }

    return (
        <>
            <dialog ref={logoutUser} id="my_modal_1" className="modal">
                <div className="modal-box">
                    <div className="avatar avatar-placeholder flex justify-center">
                        <div className="bg-error text-error-content w-20 rounded-full">
                            <span className="text-3xl">
                                <FaTriangleExclamation />
                            </span>
                        </div>
                    </div>

                    <p className="py-4 text-center text-balance">
                        You are going to logout. Are you sure?
                    </p>
                    <div className="modal-action justify-center gap-x-8">
                        <form method="dialog">
                            {/* if there is a button in form, it will close the modal */}
                            <button className="btn btn-success rounded-md">Stay Logged in</button>
                        </form>

                        <button
                            type="submit"
                            onClick={confirmLogout}
                            className="btn btn-error rounded-md"
                            disabled={loading ? true : false}
                        >
                            {loading ? (
                                <>
                                    <span className="loading loading-spinner"></span>
                                    loading
                                </>
                            ) : (
                                <>Log me out</>
                            )}
                        </button>
                    </div>
                </div>
            </dialog>
        </>

    )
}
