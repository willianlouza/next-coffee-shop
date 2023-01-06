import Image from "next/image";
import Button from "@mui/material/Button";
import Link from "next/link";
import { Search, ShoppingBagOutlined, Menu, Close } from "@mui/icons-material";
import NavLink from "../../nav-link";
import MenuBar from "../../menu-bar";
import { useState } from "react";
export default function Navbar() {
  const [menuVisible, setMenuVisible] = useState(false);
  return (
    <header className="z-10 w-full flex fixed top-0 left-0">
      <nav className="w-full relative bg-brown-800 flex place-items-center place-content-between lg:place-content-evenly px-6 lg:px-0 h-16 lg:h-20">
        <div>
          <button className="lg:hidden hover:text-brown-500" onClick={() => setMenuVisible(!menuVisible)}>
            {menuVisible? <Close /> : <Menu />}
          </button>
          <ul className="hidden lg:flex gap-10">
            <NavLink href="#" text="Início" />
            <NavLink href="#" text="Sobre" />
            <NavLink href="#" text="Cardápio" />
            <NavLink href="#" text="Reserva" />
          </ul>
        </div>
        <div className="fixed top-3 left-[calc(50%-1.75rem)] lg:left-[calc(50%-1.25rem)] w-10 h-10 lg:w-14 lg:h-14">
          <Image
            className="h-full w-full object-cover"
            src="/images/logo.png"
            alt="coffee shop logo"
            width={64}
            height={64}
          />
        </div>
        <div>
          <ul className="hidden lg:flex gap-10">
            <NavLink href="#" text="Loja" />
            <NavLink href="#" text="Contato" />
            <li className="hover:text-brown-500">
              <Link href="#">
                <Search width={34} />
              </Link>
            </li>
            <li className="hover:text-brown-500">
              <Link href="#">
                <ShoppingBagOutlined width={34} />
              </Link>
            </li>
          </ul>
          <ul className="flex gap-4 lg:hidden">
            <li className="hover:text-brown-500">
              <Link href="#">
                <Search width={34} />
              </Link>
            </li>
            <li className="hover:text-brown-500">
              <Link href="#">
                <ShoppingBagOutlined width={34} />
              </Link>
            </li>
          </ul>
        </div>
        <MenuBar isVisible={menuVisible} />
      </nav>
    </header>
  );
}
