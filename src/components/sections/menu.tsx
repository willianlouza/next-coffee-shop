import ButtonPrimary from "../buttons/button-primary";
import ProductMenuItem from "../cards/menu-product-item";
import ProductCard from "../cards/product-card";
export default function Menu() {
  return (
    <div className="py-32 flex flex-col gap-10 place-items-center place-content-center">
      <div className=" flex flex-col gap-16 place-items-center">
        <div className="text-center">
          <h2 className="text-brown-500 font-montserrat">Menu</h2>
          <h1 className="font-title text-4xl">O Mais Pedidos</h1>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 place-content-center">
          <ProductMenuItem />
          <ProductMenuItem />
          <ProductMenuItem />
          <ProductMenuItem />
          <ProductMenuItem />
          <ProductMenuItem />
          <ProductMenuItem />
          <ProductMenuItem />
        </div>
      </div>
    </div>
  );
}
