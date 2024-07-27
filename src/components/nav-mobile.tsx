import { useClickAway } from "react-use";
import { useState, useRef } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Squash as Hamburger } from "hamburger-react";
import { routes } from "../Routes";

const NavMobile = () => {
    const [isOpen, setOpen] = useState(false);
    const ref = useRef(null);
    useClickAway(ref, () => setOpen(false));

    return(
        <div ref={ref} className="lg:hidden ">
            <Hamburger toggled={isOpen} size={20} toggle={setOpen}/>
            <AnimatePresence>
                { isOpen && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.2 }}
                        //className="fixed left-0 shadow-4xl right-0 top-[3.5rem] p-5 pt-0 [#0B192FB3] border-b"
                        className="fixed left-0 right-0 top-[3.5rem] p-5 pt-0 bg-custom-primary bg-opacity-70 border-b shadow-custom-inset"
                    >
                        <ul className="grid gap-2">
                        {routes.map((route, idx) => {
                            const { Icon } = route;
                            return(
                                <motion.li
                                    initial = {{ scale: 0, opacity: 0 }}
                                    animate={{ scale: 1, opacity: 1 }}
                                >
                                    <a 
                                        href={route.href} onClick={() => setOpen((prev)=> !prev)}
                                        className="flex items-center justify-between w-full p-5 rounded-xl bg-neutral-950"
                                    >
                                        <span className="flex gap-1 text-lg">{route.title}</span>
                                        <Icon className="text-xl" />
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