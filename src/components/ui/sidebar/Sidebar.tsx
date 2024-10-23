'use client'

import { IoCloseOutline, IoLogInOutline, IoLogOutOutline, IoPeopleOutline, IoPersonOutline, IoSearchOutline, IoShirtOutline, IoTicketOutline } from "react-icons/io5"
import clsx from "clsx"

import { useUiStore } from "@/store"
import { SidebarItem } from "./SidebarItem"

const sidebarItems1 = [
  {
    path: "/",
    icon: <IoPersonOutline size={30} />,
    title: "Perfil"
  },
  {
    path: "/",
    icon: <IoTicketOutline size={30} />,
    title: "Ordenes"
  },
  {
    path: "/",
    icon: <IoLogInOutline size={30} />,
    title: "Ingresar"
  },
  {
    path: "/",
    icon: <IoLogOutOutline size={30} />,
    title: "Salir"
  },
]

const sidebarItems2 = [
  {
    path: "/",
    icon: <IoShirtOutline size={30} />,
    title: "Productos"
  },
  {
    path: "/",
    icon: <IoTicketOutline size={30} />,
    title: "Ordenes"
  },
  {
    path: "/",
    icon: <IoPeopleOutline size={30} />,
    title: "Usuarios"
  },
]

export const Sidebar = () => {
  const isSideMenuOpen = useUiStore(state => state.isSideMenuOpen)
  const closeMenu = useUiStore(state => state.closeSideMenu)

  return (
    <div>
      {
        isSideMenuOpen && (
          <>
            {/* Background */}
            <div className="fixed top-0 left-0 w-screen h-screen z-10 bg-black opacity-30"></div>

            {/* Blur */}
            <div className="fade-in fixed top-0 left-00 w-screen h-screen z-10 backdrop-filter backdrop-blur-sm"></div>
          </>
        )
      }

      {/* SideMenu */}
      <nav className={
        clsx(
          "fixed p-5 right-0 top-0 w-[500px] h-screen bg-white z-20 shadow-2xl transform transition-all duration-300",
          {
            "translate-x-full": !isSideMenuOpen
          }
        )
      }>
        <IoCloseOutline
          size={50}
          className="absolute top-5 right-5 cursor-pointer"
          onClick={() => closeMenu()}
        />

        {/* Input */}
        <div className="relative mt-14">
          <IoSearchOutline size={20} className="absolute top-2 left-2" />
          <input
            type="text"
            placeholder="Buscar"
            className="w-full bg-gray-50 rounded pl-10 py-1 pr-10 border-b-2 text-xl border-gray-200 focus:outline-none focus:border-blue-500"
          />
        </div>

        {/* Menú */}
        <ul className="flex flex-col gap-2 mt-10">
          {
            sidebarItems1.map(item => (
              <SidebarItem key={item.title} {...item} />
            ))
          }

          <div className="w-full h-px bg-gray-200 my-5"></div>

          {
            sidebarItems2.map(item => (
              <SidebarItem key={item.title} {...item} />
            ))
          }

        </ul>

      </nav>

    </div>
  )
}

