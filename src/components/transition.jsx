import React, { useEffect, useRef, useState } from "react";
import "../styles/transition.css";

const Transition = () => {
    const blobRef = useRef(null);
    const [mouseX, setMouseX] = useState(window.innerWidth/2);
    const [mouseY, setMouseY] = useState(window.innerHeight/2);

    useEffect(() => {
        const handleMouseMove = (e) => {
        setMouseX(e.pageX);
        setMouseY(e.pageY);
        };

    document.addEventListener("mousemove", handleMouseMove);

        return () => {
            document.removeEventListener("mousemove", handleMouseMove);
        };
    }, []);

    useEffect(() => {
        if (blobRef.current) {
            blobRef.current.style.left = `${mouseX}px`;
            blobRef.current.style.top = `${mouseY}px`;
        }
        document.body.style.overflow = "hidden";
    }, [mouseX, mouseY]);

    return (
        <div className="blob" ref={blobRef}>
            <div className="light-shadow"></div>
        </div>
    );
};

export default Transition;
