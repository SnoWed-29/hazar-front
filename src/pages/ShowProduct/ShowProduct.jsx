import React, { useEffect } from 'react';
import SmallNavbar from '../../components/SmallNavbar';

const containerStyle = {
  flex: '1',
  position: 'relative',
  overflowY: 'auto',
  msOverflowStyle: 'none', /* Hide scrollbar on IE and Edge */
  scrollbarWidth: 'none' /* Hide scrollbar on Firefox */
};

export default function ShowProduct() {
  useEffect(() => {
    document.title = 'Hazar | Show Product'; // Set the desired page title here
  }, []);
  const images = [
    "https://hazar.ddns.net/storage/products/01HSK9YT49F49N519CJSM591MF.jpg",
    "https://hazar.ddns.net/storage/products/01HSK9YT4A0741554KQ0FKTQD1.jpg",
    "https://hazar.ddns.net/storage/products/01HSK9YT4CGMGZAJ8D7EJJB87S.jpg",
    "https://hazar.ddns.net/storage/products/01HSK9YT4F5HTKFBAKAEX2N4WH.jpg",
    "https://hazar.ddns.net/storage/products/01HSK9YT4HMRWX5JCZ4VFF6JX5.jpg",
    "https://hazar.ddns.net/storage/products/01HSK9YT4KCNB2MHYK4EV77CEN.jpg",
    "https://hazar.ddns.net/storage/products/01HSK9YT4MASK7QHAZGX53FWEK.jpg",
    "https://hazar.ddns.net/storage/products/01HSK9YT4NBYYYS1E0S85EM4FW.jpg"
  ];
  return (
    <>
      <div className="flex justify-between px-2">
        <div style={containerStyle} className=" p-4 w-1/2 flex md:flex-col items-center col-span-1 md:row-span-3 sm:row-span-1 md:h-fit mt-6 pt-0 md:pr-4 sm:pr-0 border-t border-b border-gray-200 overflow-y-auto scrollbar-hide md:max-h-[95vh]">
      {images.map((src, index) => (
        <img
          key={index}
          src={src}
          alt="Trench-coat Oura"
          className="h-full object-cover object-center lg:h-full lg:w-4/5 sm:w-full"
        />
      ))}
        </div>
        <div className="w-1/2">
          <SmallNavbar />
          <div className="border-b border-gray-200 md:pt-4 sm:pt-2 md:pb-2 md:px-16 flex flex-col justify-center">
          <h2 className="uppercase text-center pb-3 font-semibold">Trench-coat Oura</h2>
          <h3 className="text-center font-light">500.00 MAD</h3>
          <div className="flex justify-between pr-6 text-gray-500">
            <a href="https://hazar.ddns.net/MNT">
              <h3 className="group flex flex-row items-center relative transition-all ease-in-out before:transition-[width] before:ease-in-out before:duration-700 before:absolute before:bg-gray-400 before:origin-center before:h-[1px] before:w-0 hover:before:w-[50%] before:bottom-0 before:left-[50%] after:transition-[width] after:ease-in-out after:duration-700 after:absolute after:bg-gray-400 after:origin-center after:h-[1px] after:w-0 hover:after:w-[50%] after:bottom-0 after:right-[50%]">
                <img className="h-2 pr-2 group-hover:h-1.5 group-hover:-translate-y-1 transform duration-500" src="https://hazar.ddns.net/storage//logo/Filter_bar.svg" alt="" />
                <span className="pr-1 rounded-xl hover:text-slate-900 focus:outline-none ease transition-all duration-700">
                  Manteaux
                </span>
              </h3>
            </a>
            <h3>
              Trench Coat
            </h3>
          </div>
        </div>
        <div className="flex flex-col flex-wrap">
        <div className="flex flex-col">
        <h2 className="border-b border-gray-200 text-gray-500 pt-8 pb-2 px-8 uppercase w-3/5 text-sm">description</h2>
        <p className="px-4 pb-2 pt-4 text-justify text-gray-500 text-sm md:w-4/5 sm:w-full font-custom leading-6">
          Icône intemporelle de la mode, offrant une élégance classique et une fonctionnalité pratique. Avec sa silhouette flatteuse et sa ceinture à la taille, il crée une allure sophistiquée qui peut être portée aussi bien de façon décontractée que formelle
        </p>
        </div>
        <div className="flex flex-wrap w-full justify-around">
        <div className="w-1/2 md:w-1/3 md:mr-4">
          <h2 className="border-b border-gray-200 text-gray-500 pt-6 pb-2 px-8 mb-6 uppercase text-sm">Taille</h2>
          <div className="flex justify-center">
            <div className="grid md:grid-cols-3 grid-cols-2 gap-4 text-gray-400">
              <button className="relative group flex flex-col items-center justify-center text-sm w-6 hover:text-gray-900 focus:text-gray-900 ease-in-out transition-all duration-500">
                XS
                <span aria-hidden="true" className="absolute bottom-[-6px] left-[40%] ease-in-out left-0 mt-1 bg-gray-900 group-hover:border border-black border-opacity-10 transition-all duration-500  w-0 h-0 group-hover:w-1 group-focus:w-1 group-hover:h-1 group-focus:h-1"></span>
              </button>
              <button className="relative group flex flex-col items-center justify-center text-sm w-6 hover:text-gray-900 focus:text-gray-900 ease-in-out transition-all duration-500">
                S
                <span aria-hidden="true" className="absolute bottom-[-6px] left-[40%] ease-in-out left-0 mt-1 bg-gray-900 group-hover:border border-black border-opacity-10 transition-all duration-500  w-0 h-0 group-hover:w-1 group-focus:w-1 group-hover:h-1 group-focus:h-1"></span>
              </button>
              <button className="relative group flex flex-col items-center justify-center text-sm w-6 hover:text-gray-900 focus:text-gray-900 ease-in-out transition-all duration-500">
                L
                <span aria-hidden="true" className="absolute bottom-[-6px] left-[40%] ease-in-out left-0 mt-1 bg-gray-900 group-hover:border border-black border-opacity-10 transition-all duration-500  w-0 h-0 group-hover:w-1 group-focus:w-1 group-hover:h-1 group-focus:h-1"></span>
              </button>
              <button className="relative group flex flex-col items-center justify-center text-sm w-6 hover:text-gray-900 focus:text-gray-900 ease-in-out transition-all duration-500">
                XL
                <span aria-hidden="true" className="absolute bottom-[-6px] left-[40%] ease-in-out left-0 mt-1 bg-gray-900 group-hover:border border-black border-opacity-10 transition-all duration-500  w-0 h-0 group-hover:w-1 group-focus:w-1 group-hover:h-1 group-focus:h-1"></span>
              </button>
              <button className="relative group flex flex-col items-center justify-center text-sm w-6 hover:text-gray-900 focus:text-gray-900 ease-in-out transition-all duration-500">
                2XL
                <span aria-hidden="true" className="absolute bottom-[-6px] left-[40%] ease-in-out left-0 mt-1 bg-gray-900 group-hover:border border-black border-opacity-10 transition-all duration-500  w-0 h-0 group-hover:w-1 group-focus:w-1 group-hover:h-1 group-focus:h-1"></span>
              </button>
              <button className="relative group flex flex-col items-center justify-center text-sm w-6 hover:text-gray-900 focus:text-gray-900 ease-in-out transition-all duration-500">
                3XL
                <span aria-hidden="true" className="absolute bottom-[-6px] left-[40%] ease-in-out left-0 mt-1 bg-gray-900 group-hover:border border-black border-opacity-10 transition-all duration-500  w-0 h-0 group-hover:w-1 group-focus:w-1 group-hover:h-1 group-focus:h-1"></span>
              </button>
              {/* Add similar buttons for other sizes */}
            </div>
          </div>
        </div>
        <div className="w-1/2 md:w-1/3 md:mr-4">
          <h2 className="border-b border-gray-200 text-gray-500 pt-6 pb-2 px-8 mb-6 uppercase text-sm">Couleur</h2>
          <div className="grid md:grid-cols-3 grid-cols-2 gap-x-8 gap-y-3 place-content-center w-fit m-auto">
            <button className="group flex flex-col justify-center items-center cursor-pointer focus:outline-none ring-gray-400">
              <input type="radio" name="color-choice" value="White" className="sr-only" aria-labelledby="color-choice-0-label" />
              <span id="color-choice-0-label" className="sr-only">Orange</span>
              <span aria-hidden="true" className="h-4 w-4 bg-yellow-600"></span>
              <span aria-hidden="true" className="ease-in-out left-0 w-0 mt-1 bg-gray-900 group-hover:border border-black border-opacity-10 transition-all duration-500 h-0.5 group-hover:w-4 group-focus:w-4"></span>
            </button>
            <button className="group flex flex-col justify-center items-center cursor-pointer focus:outline-none ring-gray-400">
              <input type="radio" name="color-choice" value="White" className="sr-only" aria-labelledby="color-choice-0-label" />
              <span id="color-choice-0-label" className="sr-only">Orange</span>
              <span aria-hidden="true" className="h-4 w-4 bg-yellow-600"></span>
              <span aria-hidden="true" className="ease-in-out left-0 w-0 mt-1 bg-gray-900 group-hover:border border-black border-opacity-10 transition-all duration-500 h-0.5 group-hover:w-4 group-focus:w-4"></span>
            </button>
            <button className="group flex flex-col justify-center items-center cursor-pointer focus:outline-none ring-gray-400">
              <input type="radio" name="color-choice" value="White" className="sr-only" aria-labelledby="color-choice-0-label" />
              <span id="color-choice-0-label" className="sr-only">Orange</span>
              <span aria-hidden="true" className="h-4 w-4 bg-yellow-600"></span>
              <span aria-hidden="true" className="ease-in-out left-0 w-0 mt-1 bg-gray-900 group-hover:border border-black border-opacity-10 transition-all duration-500 h-0.5 group-hover:w-4 group-focus:w-4"></span>
            </button>
            <button className="group flex flex-col justify-center items-center cursor-pointer focus:outline-none ring-gray-400">
              <input type="radio" name="color-choice" value="White" className="sr-only" aria-labelledby="color-choice-0-label" />
              <span id="color-choice-0-label" className="sr-only">Orange</span>
              <span aria-hidden="true" className="h-4 w-4 bg-yellow-600"></span>
              <span aria-hidden="true" className="ease-in-out left-0 w-0 mt-1 bg-gray-900 group-hover:border border-black border-opacity-10 transition-all duration-500 h-0.5 group-hover:w-4 group-focus:w-4"></span>
            </button>
            <button className="group flex flex-col justify-center items-center cursor-pointer focus:outline-none ring-gray-400">
              <input type="radio" name="color-choice" value="White" className="sr-only" aria-labelledby="color-choice-0-label" />
              <span id="color-choice-0-label" className="sr-only">Orange</span>
              <span aria-hidden="true" className="h-4 w-4 bg-yellow-600"></span>
              <span aria-hidden="true" className="ease-in-out left-0 w-0 mt-1 bg-gray-900 group-hover:border border-black border-opacity-10 transition-all duration-500 h-0.5 group-hover:w-4 group-focus:w-4"></span>
            </button>
            <button className="group flex flex-col justify-center items-center cursor-pointer focus:outline-none ring-gray-400">
              <input type="radio" name="color-choice" value="White" className="sr-only" aria-labelledby="color-choice-0-label" />
              <span id="color-choice-0-label" className="sr-only">Orange</span>
              <span aria-hidden="true" className="h-4 w-4 bg-yellow-600"></span>
              <span aria-hidden="true" className="ease-in-out left-0 w-0 mt-1 bg-gray-900 group-hover:border border-black border-opacity-10 transition-all duration-500 h-0.5 group-hover:w-4 group-focus:w-4"></span>
            </button>
            {/* Add similar buttons for other colors */}
          </div>
        </div>
        </div>
        <div>
            <div className="md:row-span-1 col-span-1 h-fit pt-0 border-b border-gray-200 text-gray-500 pb-2 px-8 text-sm">
                CELA PEUT VOUS INTÉRESSER
            </div>
            <div className="pt-1 overflow-y-auto scrollbar-hide flex gap-x-4">
                <a className="hover:grayscale transition duration-300" href="https://hazar.ddns.net/Manteaux/ref-0001">
                    <img src="https://hazar.ddns.net/storage/products/01HSK9R1D52S83NVN7322R6342.jpg" alt="Black Bomber Long Coat" className="object-cover h-48 border border-gray-200" />
                </a>
                <a className="hover:grayscale transition duration-300" href="https://hazar.ddns.net/Manteaux/lapel">
                    <img src="https://hazar.ddns.net/storage/products/01HTZZAVRCCBQS6YKA0VTK0E9F.jpg" alt="LAPEL COLLAR COAT WITH BELT -STUDIO" className="object-cover h-48 border border-gray-200" />
                </a>
                <a className="hover:grayscale transition duration-300" href="https://hazar.ddns.net/Manteaux/tabard">
                    <img src="https://hazar.ddns.net/storage/products/01HTZZE5DRV1TD7191S41SFQAB.jpg" alt="MANTEAU NOIR EN LAINE MÉLANGÉE À EFFET TABARD" className="object-cover h-48 border border-gray-200" />
                </a>
                <a className="hover:grayscale transition duration-300" href="https://hazar.ddns.net/Manteaux/flanelle">
                    <img src="https://hazar.ddns.net/storage/products/01HTZZJ1934VV0WSBAY33HZ7JB.jpg" alt="TRENCH COURT EN LAINE ET FLANELLE MÉLANGÉES" className="object-cover h-48 border border-gray-200" />
                </a>
                <a className="hover:grayscale transition duration-300" href="https://hazar.ddns.net/Manteaux/croise">
                    <img src="https://hazar.ddns.net/storage/products/01HTZZKRN8WKRX34V5JMHRR9KR.jpg" alt="MANTEAU LONG CROISÉ AVEC DE LA LAINE" className="object-cover h-48 border border-gray-200" />
                </a>
                <a className="hover:grayscale transition duration-300" href="https://hazar.ddns.net/Manteaux/laine">
                    <img src="https://hazar.ddns.net/storage/products/01HV00A3T9XM1MS90YQRAX4WF2.jpg" alt="TRENCH EN MÉLANGE DE LAINE BLEU MARINE" className="object-cover h-48 border border-gray-200" />
                </a>
            </div>
        </div>
    </div>
        </div>
      </div>
    </>
  );
}
