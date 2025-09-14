import { FaTriangleExclamation } from "react-icons/fa6";

export default function ModalInbox({ ref }) {
    return (
        <>
            <dialog ref={ref} id="my_modal_1" className="modal">
                <div className="modal-box">
                    <div className="avatar avatar-placeholder flex justify-center">
                        <div className="bg-error text-error-content w-20 rounded-full">
                            <span className="text-3xl"><FaTriangleExclamation /></span>
                        </div>
                    </div>

                    <p className="py-4 text-center text-balance">You are going to delete the massage! Are you sure?</p>
                    <div className="modal-action justify-center gap-x-8">
                        <form method="dialog">
                            {/* if there is a button in form, it will close the modal */}
                            <button className="btn rounded-md">No, Keep It</button>
                        </form>
                        <button className="btn btn-error rounded-md">Yes, Delete It</button>
                    </div>
                </div>
            </dialog>
        </>
    )
}
