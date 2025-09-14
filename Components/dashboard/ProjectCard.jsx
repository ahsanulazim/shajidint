import Image from "next/image";
import { FaPenToSquare, FaTrashCan } from "react-icons/fa6";

export default function ProjectCard() {
    return (
        <>
            <div className="card bg-base-100 w-full sm:max-w-96 shadow-sm">
                <figure>
                    <Image width={576} height={448}
                        src="/Gear.webp"
                        className="rounded-lg w-full lg:max-w-md xl:max-w-xl"
                        alt="Card Image"
                    />
                </figure>
                <div className="card-body">
                    <h2 className="card-title">Armored Vehicle Parts</h2>
                    <p>A card component has a figure, a body part, and inside body there are title and actions parts</p>
                    <div className="card-actions justify-between items-center mt-2">



                        <div className="flex items-center gap-3">

                            <div className="avatar avatar-placeholder">
                                <div className="bg-neutral text-neutral-content w-8 sm:w-10 rounded-full">
                                    <img className="" src="/plabon.jpg" />
                                </div>
                            </div>
                            <div>
                                <h3 className="text-sm md:text-md">Ahsanul Azim</h3>
                                <div className="text-xs uppercase font-semibold opacity-60">Admin</div>
                            </div>
                        </div>
                        <div>
                            <button className="btn btn-warning btn-sm rounded-md"><FaPenToSquare /></button>
                            <button className="btn btn-error btn-sm rounded-md ml-2"><FaTrashCan /></button>
                        </div>


                    </div>
                </div>
            </div>
        </>
    )
}
