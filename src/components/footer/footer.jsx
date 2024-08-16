import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { FiGithub, FiFacebook, FiLinkedin } from "react-icons/fi";
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

const Icons = [
    { href : 'https://github.com/so-nita', Icon: FiGithub },
    { href : '', Icon: FiLinkedin },
    { href : 'https://www.facebook.com/nar.ritaa?mibextid=LQQJ4d', Icon: FiFacebook },
];

const ClickableIcon = (props) => {
    return (
        <a href={props.href} className="" target="_blank" rel="noreferrer">
            <props.Icon className="w-5 h-5 text-gray-400 hover:text-AAsecondary fill-current hover:cursor-pointer" />
        </a>
    );
};
    
export default function Fotter(props) {
    return (
        <>
            <div className="bg-AAprimary flex flex-col justify-center items-center py-8 space-y-4">
                
                <h2 className="text-slate-50 hover:text-AAsecondary font-bold text-lg sm:text-2xl">  Be in Touch</h2>
                <div className="text-center description w-full sm:w-9/12 md:w-3/4 lg:w-1/2 lg:px-10 md:px-7 px-12">
                    <span className="text-center pb-5 font-Header sm:text-base text-sm text-gray-400 ">
                        Although I'm always excited about new opportunities, 
                        and my inbox <FontAwesomeIcon className='text-AAsecondary' icon={faEnvelope} /> {" "}
                        is wide open! If you want to drop a message or just wanna connect,  
                        I'll make it a point to get back to you!
                    </span>
                </div>
                {/* // ? Reach me at */}
                <div className={`pt-5 flex flex-row space-x-8 ${props.hideSocialsInDesktop ? "lg:hidden" : ""}`}>

                    {Icons.map((iconData, index) => {
                        return <ClickableIcon key={index} href={iconData.href} Icon={iconData.Icon} />;
                    })}
                    <a href={"mailto:sonita.borin2@gmail.com"} ><FontAwesomeIcon className='text-gray-400 hover:text-AAsecondary' icon={faEnvelope} style={{ fontSize: '19px' }}/></a>
                </div>
                    
                <a href={props.githubUrl} target="_blank" rel="noreferrer">
                    <div className="group flex flex-col font-mono justify-center items-center text-gray-400  text-sm space-y-2">
                        <span className="group-hover:text-AAsecondary sm:text-sm text-xs">
                            Built by Sonita
                        </span>
            
                        <span className="text-xs flex flex-row items-center space-x-2 group-hover:text-AAsecondary cursor-pointer">
                            <FontAwesomeIcon icon={FiGithub} className="w-4 h-4 text-gray-400 fill-current group-hover:text-AAsecondary" />
                            <span className="cursor-pointer">©Source code - Github</span>
                        </span>
                    </div>
                </a>
            </div>
        </>
    );
}