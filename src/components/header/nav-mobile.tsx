import { useClickAway } from "react-use";
import { useState, useRef } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Squash as Hamburger } from "hamburger-react";
import { routes } from "../../Routes";

const NavMobile = () => {
    const [isOpen, setOpen] = useState(false);
    const ref = useRef(null);
    useClickAway(ref, () => setOpen(false));

    return (
        <div ref={ref} className="lg:hidden px-2">
            <Hamburger toggled={isOpen} size={26} toggle={setOpen} color="#64ffda" />
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.2 }}
                        className="fixed left-0 right-0 top-[3.5rem] p-5 bg-custom-primary bg-opacity-100 h-full mt-4 pt-8"
                        // style={{ zIndex: 1000 }}
                    >
                        <ul className="grid gap-2">
                            {routes.map((route, idx) => {
                                const { Icon } = route;
                                return (
                                    <motion.li
                                        key={idx} // Added key prop
                                        initial={{ scale: 0, opacity: 0 }}
                                        transition={{ delay: idx * 0.05 }}
                                        animate={{ scale: 1, opacity: 1 }}
                                    >
                                        <a
                                            href={route.href} onClick={() => setOpen((prev) => !prev)}
                                            className="flex items-center justify-between w-full p-5"
                                        >
                                            <span className="flex items-center gap-0 text-lg">
                                                {/* <Icon className="text-xl mr-3" /> */}
                                                <span className="font-mono">0{idx+1}{"."}</span>
                                                <span className="text-AAsecondary">{"< "}</span>{route.title}<span className="text-AAsecondary ml-2">{" />"}</span>
                                            </span>
                                            {/* <span className="flex items-center gap-2 text-lg">
                                                <FontAwesomeIcon className="text-AAsecondary" size="sm" icon={faAngleLeft} />
                                                <span className="flex items-center gap-x-0">
                                                    {route.title}
                                                </span>
                                                <FontAwesomeIcon className="text-AAsecondary" size="sm" icon={faAngleRight} />
                                            </span> */}
                                        </a>
                                    </motion.li>
                                );
                            })}
                        </ul>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

export default NavMobile;
