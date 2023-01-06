import React from "react";
import NavLink from "../nav-link";

interface IProps {
    isVisible: boolean;
}
const MenuBar = React.forwardRef<HTMLDivElement, IProps>((props, ref) => {
  return (
    <div ref={ref} className={`${props.isVisible? 'translate-x-0' : '-translate-x-52'} absolute h-screen z-20 top-16 lg:top-20 left-0 bg-brown-700/25 backdrop-blur-lg px-12 py-6 transition-transform duration-150 ease-in`}>
      <div>
        <ul className="flex flex-col gap-4">
          <NavLink href="#" text="Início" />
          <NavLink href="#" text="Sobre" />
          <NavLink href="#" text="Cardápio" />
          <NavLink href="#" text="Reserva" />
          <NavLink href="#" text="Loja" />
          <NavLink href="#" text="Contato" />
        </ul>
      </div>
    </div>
  );
});

MenuBar.displayName = "Menu";

export default MenuBar;
