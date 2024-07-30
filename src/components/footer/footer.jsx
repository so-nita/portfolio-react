import { FiGithub, FiFacebook, FiLinkedin } from "react-icons/fi";
const IconsData = [
    { href : '', Icon: FiGithub },
    { href : '', Icon: FiFacebook },
    { href : '', Icon: FiLinkedin },
];

const Footer = () => {
    return(
        <footer>
            { IconsData.map((item, index) => {
                return(
                    <a href={item.href}> {item.Icon} </a>
                )
            })}
        </footer>
    )
};

export default Footer;