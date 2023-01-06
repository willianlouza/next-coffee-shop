import ButtonPrimary from "../buttons/button-primary";
import ProductCard from "../cards/product-card";

export default function PopularProducts() {
  return (
    <div className="flex flex-col gap-10 place-items-center place-content-center">
      <div className="max-w-7xl flex flex-col gap-16 place-items-center">
        <div className="text-center">
          <h2 className="text-brown-500 font-montserrat">Indispensáveis</h2>
          <h1 className="font-title text-4xl">Mais Populares</h1>
        </div>
        <div className="flex flex-wrap lg:flex-nowrap gap-6 place-content-center">
          <ProductCard title="Frutas Vermelhas" price={72} rate={4} />
          <ProductCard title="Favo de Mel" price={72} rate={5} delay={0.2} />
          <ProductCard title="Kawá Caramelo" price={72} rate={4} delay={0.4} />
        </div>
        <ButtonPrimary className="w-48" text="Ver Produtos" />
      </div>
    </div>
  );
}
