import { useEffect } from "react";
import AOS from 'aos';

const AboutMe = () => {
const technologies = [
        ["HTML", "CSS", "Boostrap", "JavaScript (ES6+)", "Tailwind CSS", "ReactJS"],
        ["C#", "ASP.Net Core", "ASP.Net Framework", "Laravel", "SQL Server", "MySQL"],
    ];
    
    useEffect(() => {
        console.log('AOS initialized');
        AOS.init({ duration: 1000 });
    }, []);

    let image = "data:image/jpeg;base64,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";
    return (
        <div id="aboutSection" data-aos="fade-up" className="snap-start flex flex-col w-full items-center py-20">
            {/* // ? 0.1 About Me */}
            <div
                className="flex flex-col space-y-8 px-4 sm:px-0 w-full sm:w-[500px] md:w-[700px] lg:w-[900px] "  >
                    <div className="flex flex-row items-center ">
                    <div className="flex flex-row  items-center mr-4 w-56">
                        {/* <FontAwesomeIcon className={"flex-none h-4 md:h-6 w-4 md:w-5 translate-y-[0.5px] text-AAsecondary"} /> */}
                        <span className="text-AAsecondary font-Header text-sm  sm:text-xl"> 01.</span>
                        <span className=" text-gray-200 font-bold text-lg sm:text-2xl pl-4">
                        About Me
                        </span>
                    </div>
                    <div className=" bg-gray-400 h-[0.2px] w-full"></div>
                
                </div>
                {/* // ? Paragraphs */}

                <div className="w-full flex flex-col md:flex-row space-y-8 md:space-y-0  md:space-x-8 sm:space-x-2 ">
                <div className="w-full md:w-7/12 space-y-4 sm:text-base text-sm ">
                    <div className="font-Header ">
                    <span className="text-gray-400 "> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                            Hello! My name is Sonita, and I am a passionate software engineer and problem solver, dedicated to
                        creating impactful codes. My journey in computer science began in 2022 when
                        I delved into the <span className="text-AAsecondary">Web Design</span> . Little did I know that programming skills
                        would become essential in pursuing this interest, marking the start of my programming journey.
                    </span>
                    </div>
                    <div className="font-Header ">
                    <span className="text-gray-400 "> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        Since pursuing my computer science degree, my career has taken me through diverse industries, allowing me to
                        refine my expertise in 
                        <span className="text-AAsecondary"> Desktop </span> 
                        and
                        <span className="text-AAsecondary"> Web Development </span>
                        . In the realm of{" "}, my passion for web and continuous
                        learning drives me to make a positive impact and advance technology.
                    </span>
                    </div>
            
                    <div className="font-Header tracking-wide">
                    <span className="text-gray-400  ">
                        Here are a few technologies I&apos;ve been working with recently :
                    </span>
                    </div>
                    <div className="font-Header tracking-wide flex flex-row space-x-16 sm:w-full">
                        <div className="flex flex-row space-x-2 items-center">
                            <div className="flex flex-col space-y-4 sm:text-base text-sm">
                            {technologies[0].map((tech, index) => {
                                return (
                                <div key={index} className="flex flex-row items-center space-x-2">
                                    {/* <ArrowIcon className={"h-3 w-3 text-AAsecondary"} /> */}
                                    <span className="text-gray-400 sm:text-sm text-xs">{tech}</span>
                                </div>
                                );
                            })}
                        </div>
                    </div>
                    <div className="flex flex-row items-center">
                        <div className="flex flex-col space-y-4 sm:text-base text-sm">
                        {technologies[1].map((tech, index) => {
                            return (
                            <div key={index} className="flex flex-row items-center space-x-2">
                                {/* <ArrowIcon className={"h-3 w-3 text-AAsecondary"} /> */}
                                <span className="text-gray-400 sm:text-sm text-xs">{tech}</span>
                            </div>
                            );
                        })}
                        </div>
                    </div>
                    </div>
                </div>
                {/* // ? Image in Desktop and Tablet */}
                <div className="group relative lg:w-96 lg:h-96 md:w-72 md:h-72 md:block hidden ">
                    <div
                    className="group-hover:translate-x-3 group-hover:translate-y-3
                    duration-300 absolute w-5/6 h-5/6 border-2 border-AAsecondary translate-x-5 
                    translate-y-5 rounded"
                    ></div>

                    <div className="absolute w-5/6 h-5/6  rounded overflow-hidden">
                    <div className="absolute w-full h-full group-hover:opacity-0 bg-AAsecondary opacity-10 duration-300 rounded overflow-hidden"></div>
                    <image
                        src={ image }
                        className={"object-contain rounded-lg"}
                        alt="Not Found"
                    />
                    </div>
                </div>
                {/* // ?Image in Mobile */}
                <div className="relative w-full h-48 md:hidden  flex justify-center items-center" >
                    <div className="absolute w-48 h-full  rounded  translate-x-5 translate-y-5 border-2 border-AAsecondary"></div>
                    <div className="absolute w-48 h-full rounded overflow-hidden">
                    <image src={ image } className={"object-contain rounded-lg"} alt="Not Found" />
                    </div>
                    <div className="absolute w-48 h-full  bg-AAsecondary opacity-10 md:opacity-60  rounded overflow-hidden"></div>
                </div>
                </div>
            </div>
        </div>
    );
}

export default AboutMe;