import { FaFacebook, FaGithub, FaInstagram, FaTwitter } from "react-icons/fa";

const SocialLinks = () => {
  return (
    <ul className="flex gap-2">
      <li>
        <a href="" className="flex btn-3 p-1 rounded-lg">
          <FaTwitter className="w-7 h-7" />
        </a>
      </li>
      <li>
        <a href="" className="flex btn-3 p-1 rounded-lg">
          <FaFacebook className="w-7 h-7" />
        </a>
      </li>
      <li>
        <a href="" className="flex btn-3 p-1 rounded-lg">
          <FaInstagram className="w-7 h-7" />
        </a>
      </li>
      <li>
        <a href="" className="flex btn-3 p-1 rounded-lg">
          <FaGithub className="w-7 h-7" />
        </a>
      </li>
    </ul>
  );
};
export default SocialLinks;
