import { FaFacebook, FaInstagram, FaLinkedinIn, FaTiktok, FaTwitter } from "react-icons/fa";

function SocialIcons() {
  return (
    <div className="flex gap-2 pb-6 pt-4">
      <FaFacebook className="hover:text-blue-600 cursor-pointer text-[1.5rem]" />
      <FaTiktok className="hover:white cursor-pointer text-[1.5rem]" />
      <FaLinkedinIn className="hover:text-blue-700 cursor-pointer text-[1.5rem]" />
      <FaInstagram className="hover:text-pink-500 cursor-pointer text-[1.5rem]" />
    </div>
  );
}

export default SocialIcons;
