import { MdOutlineLocationOn, MdOutlinePhone } from "react-icons/md";
import ContactFrom from "./ContactFrom";
import {
  FaFacebook,
  FaLinkedinIn,
  FaRegEnvelope,
  FaWhatsapp,
} from "react-icons/fa6";
import { BsWechat } from "react-icons/bs";

export default function Contact() {
  return (
    <div className="max-w-[1440px] mx-auto p-5 md:px-10 md:py-20 flex flex-col md:items-center md:flex-row gap-5">
      <div>
        <h2 className="font-bold text-4xl lg:text-5xl tracking-tighter mb-5 text-balance">
          For Any Questions Assistance or Business Inquiries
        </h2>

        <div className="flex flex-col gap-y-7">
          <p className="flex items-center gap-x-2">
            <FaRegEnvelope />
            <a href="mailto:shajidint@gmail.com">shajidint@gmail.com</a>
          </p>
          <p className="flex items-center gap-x-2">
            <MdOutlinePhone />
            <a href="tel:+8801741587230">01741 587 230</a>
          </p>
          <p className="flex items-center gap-x-2">
            <MdOutlineLocationOn />
            195/2/G, Shantibagh, Dhaka-1217, Bangladesh
          </p>
          <div className="flex gap-x-5 text-lg">
            <a href="#">
              <FaFacebook />
            </a>
            <a href="#">
              <FaWhatsapp />
            </a>
            <a href="#">
              <BsWechat />
            </a>
            <a href="#">
              <FaLinkedinIn />
            </a>
          </div>
        </div>
      </div>
      <ContactFrom />
    </div>
  );
}
