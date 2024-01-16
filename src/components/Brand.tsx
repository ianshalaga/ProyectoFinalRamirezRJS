import logo from "../assets/images/project-soul-logo.webp";
import { Link } from "react-router-dom";
import { urls } from "../utils/routes";

const Brand = () => {
  return (
    <h1 className="col-span-2 flex justify-center items-center font-bold text-sky-50">
      <Link
        to={urls.home}
        className="hover:text-pink-400 transition duration-500"
      >
        <div className="flex justify-center items-center">
          {/* <img
            className="h-9"
            src={"images/project-soul-logo.webp"}
            alt="Project Soul Logo"
          /> */}
          <img className="h-9" src={logo} alt="Project Soul Logo" />
          Project Soul Media
        </div>
      </Link>
    </h1>
  );
};

export default Brand;
