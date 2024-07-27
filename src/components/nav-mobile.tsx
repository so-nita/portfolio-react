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
                        className="fixed left-0 shadow-4xl right-0 top-[3.5rem] p-5 pt-0 [#00] border-b border-b-white/20"
                    >
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

export default NavMobile;