import NavDesktop from './nav-desktop';
import NavMobile  from './nav-mobile';
import Logo from '../logo/logo';

const Header = () => {
  return (
    <div className="fixed top-0 left-0 right-0 bg-[#0B192F] shadow-custom-inset py-2">
    <nav className="container flex items-center justify-between py-1 lg:py-5">
      {/* <span className="text-lg pl-2">⚡️</span> */}
      {/* <span className="text-lg pl-2" >🌟</span> */}
      <span className="text-lg pl-2" ><Logo /></span>
      <NavMobile />
      <NavDesktop />
    </nav>
  </div>
  );
}

export default Header;
