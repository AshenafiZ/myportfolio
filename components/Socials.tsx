import Link from "next/link";
import { FaTelegram, FaLinkedin, FaGithub, FaTwitter } from "react-icons/fa";
const socials = [
    {icon: <FaTelegram />, path: "/"},
    {icon: <FaGithub />, path: "/"},
    {icon: <FaLinkedin />, path: "/"},
    {icon: <FaTwitter />, path: "/"},
]
interface Props {
  containerStyles?: string,
  iconStyles?: string
}
const Socials: React.FC<Props> = ({containerStyles, iconStyles} ) => {
  return (
    <div className={containerStyles}>
      {socials.map((item, index) => (
        <Link key={index} className={iconStyles} href={item.path}>{item.icon}</Link>
      ))}
    </div>
  )
}

export default Socials