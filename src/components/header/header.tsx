import React, { useRef, useState, useEffect, useContext } from "react";
import NavDesktop from './nav-desktop';
import NavMobile  from './nav-mobile';


/* <Logo finishedLoading={props.finishedLoading} /> */

const Header = () => {
  return (
    <div className="fixed top-0 left-0 right-0 bg-[#0B192FB3] shadow-custom-inset py-2">
    <nav className="container flex items-center justify-between py-1 lg:py-5">
      {/* <span className="text-lg pl-2">⚡️</span> */}
      <span className="text-lg pl-2" >🌟</span>
      <NavMobile />
      <NavDesktop />
    </nav>
  </div>
  );
}

export default Header;
