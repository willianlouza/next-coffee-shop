import Image from "next/image";
export default function ProductMenuItem() {
  return (
    <div className="cursor-pointer place-content-between flex flex-nowrap border border-white/50 hover:border-white place-items-center gap-6 lg:gap-24 p-4">
      <div className="flex flex-nowrap gap-2 place-items-center">
        <div className="w-10 h-10 lg:w-16 lg:h-16">
          <Image
            className="w-full h-full object-cover"
            src="/images/coffee-2.jpg"
            alt="coffee"
            width={150}
            height={150}
          />
        </div>
        <h1 className="font-title text-sm lg:text-xl">Americano rosted gred</h1>
      </div>
      <span className="text-brown-500 text-sm lg:text-lg">R$ 12.00</span>
    </div>
  );
}
