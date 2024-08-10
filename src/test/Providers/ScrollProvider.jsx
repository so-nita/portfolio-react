'use client';

import { useLenis } from '@studio-freight/react-lenis';
import { createContext, useState, useContext } from 'react';

// Create a default value for the context
const ScrollContext = createContext({
    scrollY: 0,
});

// Provider component
export const ScrollProvider = ({ children }) => {
    const [scrollY, setScrollY] = useState(0);

    // Using the useLenis hook to update scrollY state
    useLenis(({ scroll }) => {
        setScrollY(scroll);
    });

    return (
        <ScrollContext.Provider value={{ scrollY }}>
            {children}
        </ScrollContext.Provider>
    );
};

// Custom hook to use the ScrollContext
export const useScroll = () => useContext(ScrollContext);
