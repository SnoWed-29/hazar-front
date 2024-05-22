import React, { useState } from 'react';

export default function SmallNavbar() {
  const [isMenuVisible, setIsMenuVisible] = useState(false);

  const toggleMenu = () => {
    setIsMenuVisible(!isMenuVisible);
  };

  return (
    <>
      <nav>
        <div id="mobileNav" className="w-full justify-between flex px-1">
          <div className="w-1/3 text-3xl flex justify-start items-center">
            <a href="#" id="menuBtn" onClick={toggleMenu}>
              <svg
                id="barSvg"
                className="animate_fadeIn hover:cursor-pointer"
                width="46px"
                height="24px"
                viewBox="0 0 25 13"
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
                xmlnsXlink="http://www.w3.org/1999/xlink"
              >
                <g id="Menu-bar" transform="translate(1.000000, 0.000000)" stroke="#898B8F">
                  <line x1="0.182539683" y1="0.5" x2="22.8174603" y2="0.5" id="Line"></line>
                  <line x1="8.5" y1="6.5" x2="14.5" y2="6.5" id="Line"></line>
                  <line x1="0.182539683" y1="12.5" x2="22.8174603" y2="12.5" id="Line"></line>
                </g>
              </svg>
            </a>
          </div>
          <div className="w-1/3">
            <a href="/" className="group py-1 flex flex-col overflow-hidden">
              <img className="h-20" src="https://hazar.ddns.net/storage//logo/Logo_Hazar.svg" alt="Logo" />
              <span className="ease left-0 h-0 w-0 border-b-2 border-zinc-600 transition-all duration-700 group-hover:w-full"></span>
            </a>
          </div>
          <div className="w-1/3 flex justify-end items-center">
            <i className="fa-solid fa-user"></i>
          </div>
        </div>
      </nav>
      {isMenuVisible && (
        <div className="relative flex-col w-full rounded-md opacity-95 bg-black mobileMenu">
          <div className="flex flex-col justify-center items-center space-y-4 pt-3">
            
            <a href="https://hazar.ddns.net/MNT" className="group w-full items-center py-1 flex flex-col overflow-hidden text-lg font-medium text-white">
              <span className="mb-1 px-4 rounded-xl focus:outline-none active:bg-zinc-600 active:text-white ease-in-out transition-all duration-700">
                Manteaux
              </span>
              <span className="ease left-0 h-0 w-0 border-b-2 border-white transition-all duration-500 group-hover:w-1/3"></span>
            </a>
            
            <a href="https://hazar.ddns.net/RB" className="group w-full items-center py-1 flex flex-col overflow-hidden text-lg font-medium text-white">
              <span className="mb-1 px-4 rounded-xl focus:outline-none active:bg-zinc-600 active:text-white ease-in-out transition-all duration-700">
                Robes
              </span>
              <span className="ease left-0 h-0 w-0 border-b-2 border-white transition-all duration-500 group-hover:w-1/3"></span>
            </a>
            
            <a href="https://hazar.ddns.net/CH" className="group w-full items-center py-1 flex flex-col overflow-hidden text-lg font-medium text-white">
              <span className="mb-1 px-4 rounded-xl focus:outline-none active:bg-zinc-600 active:text-white ease-in-out transition-all duration-700">
                Chaussures
              </span>
              <span className="ease left-0 h-0 w-0 border-b-2 border-white transition-all duration-500 group-hover:w-1/3"></span>
            </a>
            
            <a href="https://hazar.ddns.net/SAM" className="group w-full items-center py-1 flex flex-col overflow-hidden text-lg font-medium text-white">
              <span className="mb-1 px-4 rounded-xl focus:outline-none active:bg-zinc-600 active:text-white ease-in-out transition-all duration-700">
                Sac
              </span>
              <span className="ease left-0 h-0 w-0 border-b-2 border-white transition-all duration-500 group-hover:w-1/3"></span>
            </a>
            
            <a href="https://hazar.ddns.net/PTL" className="group w-full items-center py-1 flex flex-col overflow-hidden text-lg font-medium text-white">
              <span className="mb-1 px-4 rounded-xl focus:outline-none active:bg-zinc-600 active:text-white ease-in-out transition-all duration-700">
                Pantalons
              </span>
              <span className="ease left-0 h-0 w-0 border-b-2 border-white transition-all duration-500 group-hover:w-1/3"></span>
            </a>
            
            <a href="https://hazar.ddns.net/VST" className="group w-full items-center py-1 flex flex-col overflow-hidden text-lg font-medium text-white">
              <span className="mb-1 px-4 rounded-xl focus:outline-none active:bg-zinc-600 active:text-white ease-in-out transition-all duration-700">
                Vestes
              </span>
              <span className="ease left-0 h-0 w-0 border-b-2 border-white transition-all duration-500 group-hover:w-1/3"></span>
            </a>
            
            <div className="w-full flex justify-center my-5 pb-4">
              <a
                type="button"
                className="rounded border-2 px-7 pb-[8px] pt-[10px] text-sm font-medium uppercase leading-normal text-white border-white transition duration-300 ease-in-out hover:bg-black hover:bg-opacity-75 hover:text-neutral-100 focus:border-neutral-100 focus:text-neutral-100 focus:outline-none focus:ring-0 active:border-neutral-200 active:text-neutral-200 dark:hover:bg-neutral-100 dark:hover:bg-opacity-10"
                href="/admin"
              >
                Se connecter
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
