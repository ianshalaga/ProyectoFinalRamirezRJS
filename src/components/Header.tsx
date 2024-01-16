import Brand from "./Brand";
import CartWidget from "./CartWidget";
import NavBar from "./NavBar";

const Header = () => {
  return (
    // <header className="container flex justify-between px-10 items-center bg-sky-900 text-sky-50 h-12 fixed w-full top-0 z-50">
    <header className="container grid grid-cols-10 bg-sky-900 text-sky-50 fixed w-full top-0 z-50 h-12">
      <Brand />
      <NavBar />
      <CartWidget />
    </header>
  );
};

export default Header;
