import { routes } from "../utils/routes";
import NavItem from "./NavItem";

const NavBar = () => {
  return (
    <nav className="col-span-7 flex justify-start items-center px-3 font-bold">
      <ul className="flex space-x-2">
        {routes.map((route, index) => {
          const routeKey = Object.keys(route)[0];
          return (
            <NavItem
              key={index}
              href={route[routeKey].url}
              text={route[routeKey].text}
            />
          );
        })}
      </ul>
    </nav>
  );
};

export default NavBar;
