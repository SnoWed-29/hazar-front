import React, { useEffect } from 'react'
import Navbar from '../../components/Navbar'
import ProductsGrid from '../../components/ProductsGrid'

export default function Product() {
  useEffect(() => {
    document.title = 'Hazar | Products'; // Set the desired page title here
  }, []);

  return (
   <>
    <Navbar color="text-zinc-600" />
    <div className="w-full border-b-1 border-b-zinc-600">
      <div className="flex w-11/12 mx-auto  flex-col h-fit pt-6 px-4 sm:pt-4 sm:px-16 border-b border-gray-200 pb-4">
          <div className="flex items-center justify-between content-center">
              <h2 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-4xl">Manteaux</h2>
              <a href="/categories" className="text-sm font-custom font-medium text-zinc-600 flex flex-col overflow-hidden group">
                  <div className="relative transition-all ease-in-out before:transition-[width] before:ease-in-out before:duration-700 before:absolute before:bg-gray-400 before:origin-center before:h-[1px] before:w-0 hover:before:w-[50%] before:bottom-0 before:left-[50%] after:transition-[width] after:ease-in-out after:duration-700 after:absolute after:bg-gray-400 after:origin-center after:h-[1px] after:w-0 hover:after:w-[50%] after:bottom-0 after:right-[50%]">
                      <div className="group flex flex-row items-center mt-1">
                          <img className="h-2 pr-2 group-hover:h-1.5 group-hover:-translate-y-1 transform duration-500" src="https://hazar.ddns.net/storage//logo/Filter_bar.svg" alt="" />
                          <span className="pr-1 rounded-xl hover:text-slate-900 focus:outline-none ease transition-all duration-700">
                              Tout les articles
                          </span>
                      </div>
                  </div>
              </a>
          </div>
          <p class="text-sm mt-4 text-gray-500 md:text-base">Nous sommes ravis de vous annoncer l'arrivée de notre toute dernière collection de vêtements. Explorez une sélection époustouflante de styles tendance, parfaits pour toutes les occasions !</p>
      </div>
    </div>
    <div className="w-full h-18 ">
        <div className="container h-full p-2 mx-auto flex justify-around w-full">
          <a href="/categories" className="group py-1 flex flex-col overflow-hidden text-default font-medium text-zinc-600">
               <span className="mb-1 px-2 rounded-xl hover:text-slate-900 focus:outline-none active:bg-zinc-600 active:text-white ease transition-all duration-600">
                Trench Coat
              </span>
              <span className="ease left-0 h-0 w-0 border-b-2 border-zinc-600 transition-all duration-600 group-hover:w-full"></span>  
            </a>
                    <a href="/categories" className="group py-1 flex flex-col overflow-hidden text-default font-medium text-zinc-600">
               <span className="mb-1 px-2 rounded-xl hover:text-slate-900 focus:outline-none active:bg-zinc-600 active:text-white ease transition-all duration-600">
                Doudoune
              </span>
              <span className="ease left-0 h-0 w-0 border-b-2 border-zinc-600 transition-all duration-600 group-hover:w-full"></span>  
            </a>
                    <a href="/categories" className="group py-1 flex flex-col overflow-hidden text-default font-medium text-zinc-600">
               <span className="mb-1 px-2 rounded-xl hover:text-slate-900 focus:outline-none active:bg-zinc-600 active:text-white ease transition-all duration-600">
                Long Coat
              </span>
              <span className="ease left-0 h-0 w-0 border-b-2 border-zinc-600 transition-all duration-600 group-hover:w-full"></span>  
            </a>
        </div>
    </div>
    <ProductsGrid />
   </>
  )
}
