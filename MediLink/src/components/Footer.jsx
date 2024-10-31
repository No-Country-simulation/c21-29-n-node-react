import Logo from "../assets/LogoFooter.svg";
import Instagram from "../assets/Instagram.svg";
import X from "../assets/X.svg";
import Facebook from "../assets/Facebook.svg";
import { useNavigate } from "react-router-dom";

const Footer = () => {
  const navigate = useNavigate();
  const toMain = () => {
    navigate("/");
    window.scrollTo(0, 0);
  };
  return (
    <footer className="bg-[#1D2E50] w-full font-abc mt-8">
      <div className="max-w-[1440px] h-[91px] mx-auto flex justify-around items-center px-4 ">
        {/* Sección izquierda */}
        <img
          className="cursor-pointer"
          src={Logo}
          alt="logofooter"
          onClick={toMain}
        />
        <ul className="flex mr-36 items-center space-x-4 text-[#DDE6EB]">
          <li className="text-[20px]">Acerca de este sitio:</li>
          <li className="text-[20px]">Terminos y Condiciones</li>
          <li className="text-[20px]">
            <span>|</span>
          </li>
          <li className="text-[20px]">Sugerencias y reclamos</li>
        </ul>

        {/* Sección derecha (Redes sociales) */}
        <div className="flex space-x-8">
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white text-[#515151] w-12 h-12 flex items-center justify-center rounded-full"
          >
            <img
              src={X}
              alt="Logo X"
            />
          </a>
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white text-[#515151] w-12 h-12 flex items-center justify-center rounded-full"
          >
            <img
              src={Facebook}
              alt="Logo facebook"
            />
          </a>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white text-[#515151] w-12 h-12 flex items-center justify-center rounded-full"
          >
            <img
              src={Instagram}
              alt="Logo Instagram"
            />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
