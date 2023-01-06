import { motion } from "framer-motion";
import { Parallax } from "react-parallax";
import ButtonPrimary from "../buttons/button-primary";

export default function HeroSection() {
  return (
    <Parallax
      blur={1}
      strength={200}
      bgClassName="object-cover"
      bgImage="/images/hero.jpg"
      className="mt-14 lg:mt-20 w-full h-96 lg:h-[40rem] flex place-content-center lg:place-content-start place-items-center"
    >
      <motion.div
        initial={{ opacity: 0, translateX: "-3rem" }}
        animate={{ opacity: 1, translateX: 0 }}
        transition={{ duration: 1 }}
        className="px-12 lg:px-0 text-center lg:text-start lg:max-w-3xl lg:ml-32 lg:place-items-start flex flex-col place-items-center gap-6"
      >
        <h1 className="font-title text-4xl lg:text-8xl">Aprecie o Seu Café da Manhã.</h1>
        <h2 className="text-sm lg:text-lg text-neutral-300 font-montserrat">
          Celebramos a experiência do café em cada detalhe, desde o criterioso processo de seleção do grão, até a
          torrefação e o produto final.
        </h2>
        <ButtonPrimary className="w-44" text="Reserva" />
      </motion.div>
    </Parallax>
  );
}
