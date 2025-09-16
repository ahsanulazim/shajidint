import Breadcrumbs from "@/Components/dashboard/Breadcrumbs";
import { FaFacebook, FaLinkedin, FaPenToSquare, FaSquareXTwitter } from "react-icons/fa6";

export default function page() {
  return (
    <>
      <Breadcrumbs title="Profile" />
      <div>

        <h1 className="font-medium text-2xl sm:text-4xl tracking-tighter">
          Profile
        </h1>
        <p className="text-gray-400 text-sm sm:text-md tracking-tighter">
          Your Personal Informations
        </p>
      </div>
      <div className="flex flex-col md:flex-row gap-10 mt-5 items-center bg-white p-8 rounded-md shadow-sm max-w-fit">
        <div className="avatar">
          <div className="ring-main ring-offset-base-100 w-56 rounded-full ring-2 ring-offset-2">
            <img
              className="max-w-56"
              src="/plabon.jpg"
              alt="Ahsanul Azim Plabon"
            />
          </div>
        </div>

        <fieldset className="fieldset w-xs">
          <div className="flex items-center gap-x-5 mb-5">
            <h1 className="text-3xl tracking-tighter whitespace-nowrap">Personal Information</h1>
            <button className="btn rounded-md btn-neutral"><FaPenToSquare />Edit</button>
          </div>
          <label className="label">Name</label>
          <p className="text-lg">Ahsanul Azim Plabon</p>
          <label className="label">Email</label>
          <p className="text-lg">ahsanulazim6@gmail.com</p>
          <label className="label">Phone</label>
          <p className="text-lg">01612345678</p>
          <label className="label">Designation</label>
          <p className="text-lg">Founder & CEO</p>
          <label className="label">Social Accounts</label>
          <div className="flex gap-x-2">
            <a href="#" className="text-xl"><FaFacebook /></a>
            <a href="#" className="text-xl"><FaLinkedin /></a>
            <a href="#" className="text-xl"><FaSquareXTwitter /></a>
          </div>
        </fieldset>
      </div>
    </>
  );
}
