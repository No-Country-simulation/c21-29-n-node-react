import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import Logo from "../assets/Logoheader.svg";

import { useState } from "react";

const Header = () => {
  const [isOpenServices, setIsOpenServices] = useState(false);
  const [isOpenHelp, setIsOpenHelp] = useState(false);

  return (
    <>
      <div className="h-[3.125rem] font-abc ">
        <button className="bg-[#4B81B4] text-[1.25rem] h-[50px] w-[188px] text-white font-medium">
          PACIENTE
        </button>
        <button className="text-[1.25rem] h-[50px] w-[188px] text-[#1D2E50] font-medium">
          MEDICO
        </button>
      </div>

      <nav className="flex items-center font-abc justify-around border-b-[1.5px] shadow-[0_4px_4px_rgba(0,0,0,0.2)]">
        <div>
          <img
            className="cursor-pointer"
            src={Logo}
            alt="Logo Medilink"
          />
        </div>

        <div className="font-medium text-[20px] text-[#1D2E50] w-[538px] ml-[120px] flex justify-between">
          <div className="relative">
            <a
              href="#"
              onClick={() => setIsOpenServices(!isOpenServices)}
              className="flex items-center cursor-pointer"
            >
              Servicios{" "}
              <FontAwesomeIcon
                icon={faChevronDown}
                className="ml-6"
              />
            </a>
            {/* Dropdown */}
            {isOpenServices && (
              <div className="absolute mt-2 w-48 rounded-md shadow-lg bg-white z-10">
                <ul className="py-1">
                  <li>
                    <a
                      href="#"
                      className="block px-4 py-2 text-sm text-[#1D2E50] hover:bg-gray-100"
                    >
                      Opción 1
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="block px-4 py-2 text-sm text-[#1D2E50] hover:bg-gray-100"
                    >
                      Opción 2
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="block px-4 py-2 text-sm text-[#1D2E50] hover:bg-gray-100"
                    >
                      Opción 3
                    </a>
                  </li>
                </ul>
              </div>
            )}
          </div>
          <a href="#">Especialidades</a>

          <div className="relative">
            <a
              href="#"
              onClick={() => setIsOpenHelp(!isOpenHelp)}
              className="flex items-center cursor-pointer"
            >
              Ayuda{" "}
              <FontAwesomeIcon
                icon={faChevronDown}
                className="ml-6"
              />
            </a>
            {/* Dropdown */}
            {isOpenHelp && (
              <div className="absolute mt-2 w-48 rounded-md shadow-lg bg-white z-10">
                <ul className="py-1">
                  <li>
                    <a
                      href="#"
                      className="block px-4 py-2 text-sm text-[#1D2E50] hover:bg-gray-100"
                    >
                      Opción 1
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="block px-4 py-2 text-sm text-[#1D2E50] hover:bg-gray-100"
                    >
                      Opción 2
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="block px-4 py-2 text-sm text-{#1D2E50} hover:bg-gray-100"
                    >
                      Opción 3
                    </a>
                  </li>
                </ul>
              </div>
            )}
          </div>
        </div>

        <div className="flex p-4  space-x-8">
          <a
            href="/register"
            className="p-[10px] text-[20px] border-[3px] font-abc font-medium w-[174px] h-[53.54px] text-[#1D2E50] border-[#1D2E50] rounded-xl text-center hover:bg-[#DDE6EB] transition"
          >
            Registrarse
          </a>
          <a
            href="/login"
            className="p-[10px] text-[20px]  font-abc font-medium w-[174px] h-[53.54px] text-[#FFFFFF]  bg-[#1D2E50] rounded-xl text-center hover:bg-[#4B81B4] transition"
          >
            Ingresar
          </a>
        </div>
      </nav>
    </>
  );
};

export default Header;
