import Image from "next/image";
import { motion } from "framer-motion";
import { useState } from "react";
import ButtonPrimary from "../../buttons/button-primary";
interface IProps {
  index?: string;
  text?: string;
  image: string;
  transitionDelay?: number;
  className?: string;
}
export default function CoffeeCard(props: IProps) {
  const { className = "", index = "", text = "", image, transitionDelay = 0 } = props;

  return (
    <motion.div
      className={`${className} group hover:cursor-pointer`}
      initial={{ opacity: 0, translateY: "3rem" }}
      whileInView={{ opacity: 1, translateY: 0 }}
      transition={{ duration: 1, delay: transitionDelay }}
      viewport={{ once: true, amount: 0.2 }}
    >
      <span className="flex flex-nowrap gap-2 font-title leading-9">
        <h1 className="text-brown-500 text-xl">{index}</h1>
        <h1 className="text-xl">{text}</h1>
      </span>

      <div className="mt-4 relative overflow-hidden">
        <div className="transition-all duration-300 ease-out overflow-hidden bg-black bg-opacity-50 w-full h-0 group-hover:h-full absolute bottom-0 left-0">
          <div className="h-full w-full flex flex-col place-items-center place-content-evenly p-12">
            <h3 className="font-montserrat text-center text-neutral-300">
              In do incididunt labore cillum deserunt nisi est officia id ipsum consectetur enim sit. Id culpa esse
              aliqua occaecat ea. Deserunt id dolore.
            </h3>
            <ButtonPrimary className="w-40" text="Reservar" />
          </div>
        </div>
        <Image className="w-full h-full object-cover" src={image} alt="coffee flavour" width={500} height={500} />
      </div>
    </motion.div>
  );
}
