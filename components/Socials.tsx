import Link from "next/link";
import { FaTelegram, FaLinkedin, FaGithub, FaWhatsapp } from "react-icons/fa";
import { SiUpwork } from "react-icons/si"; 

const socials = [
    { icon: <FaTelegram />, path: "https://t.me/az122119" },
    { icon: <FaGithub />, path: "https://github.com/AshenafiZ" },
    { icon: <FaLinkedin />, path: "https://www.linkedin.com/in/ashenafi-zewdie/" },
    { icon: <FaWhatsapp />, path: "https://wa.me/+251921273127" }, 
    { icon: <SiUpwork />, path: "https://www.upwork.com/freelancers/~01b97601eac9287bb1 " } 
];

interface Props {
  containerStyles?: string;
  iconStyles?: string;
}

const Socials: React.FC<Props> = ({ containerStyles, iconStyles }) => {
  return (
    <div className={containerStyles}>
      {socials.map((item, index) => (
        <Link
          key={index}
          className={iconStyles}
          href={item.path}
          target="_blank" 
          rel="noopener noreferrer" 
        >
          {item.icon}
        </Link>
      ))}
    </div>
  );
};

export default Socials;
