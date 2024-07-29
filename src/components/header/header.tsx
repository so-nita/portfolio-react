import NavDesktop from './nav-desktop';
import NavMobile  from './nav-mobile';
// import Logo from '../../public/assets/logo.svg';

const Header = () => {
  return (
    <div className="fixed top-0 left-0 right-0 bg-neutral-950 border-b border-neutral-700">
    <nav className="container flex items-center justify-between py-1 lg:py-5">
      <span className="text-lg pl-2">⚡️</span>
      {/* <img src={Logo} className="App-logo" alt="logo" /> */}
      <NavMobile />
      <NavDesktop />
    </nav>
  </div>
  );
}

export default Header;