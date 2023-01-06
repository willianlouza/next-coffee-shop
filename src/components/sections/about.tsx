import Image from "next/image";
import CoffeeCard from "../cards/coffee-card";
import { motion } from "framer-motion";
export default function AboutSection() {
  return (
    <div className="py-32 flex flex-col gap-16 place-content-center">
      <div className="max-w-7xl m-auto grid grid-cols-1 lg:grid-cols-3 lg:place-items-center gap-6">
        <CoffeeCard index="01" text="O melhor sabor do café" image="/images/coffee-12.jpg" />
        <CoffeeCard transitionDelay={0.5} index="02" text="Lugar para se perder" image="/images/coffee-13.jpg" />
        <CoffeeCard transitionDelay={1} index="03" text="Torrefação Adequada" image="/images/coffee-17.jpg" />
      </div>

      <div className="max-w-7xl m-auto grid  grid-cols-1 lg:grid-rows-4 lg:grid-cols-4 place-items-center gap-6">
        <motion.div
          initial={{ opacity: 0, translateX: "-3rem" }}
          whileInView={{ opacity: 1, translateX: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true, amount: 0.5 }}
          className="h-full lg:row-start-1 lg:row-end-3"
        >
          <Image
            className="w-full h-full object-cover"
            src="/images/coffee-7.jpg"
            alt="coffee flavour"
            width={500}
            height={500}
          />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, translateY: "3rem" }}
          whileInView={{ opacity: 1, translateY: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true, amount: 0.5 }}
          className="h-full lg:row-start-3 lg:row-end-5"
        >
          <Image
            className="w-full h-full object-cover"
            src="/images/coffee-9.jpg"
            alt="coffee flavour"
            width={500}
            height={500}
          />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, translateY: "-3rem" }}
          whileInView={{ opacity: 1, translateY: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true, amount: 0.5 }}
          className="h-full lg:row-start-1 lg:row-end-5"
        >
          <Image
            className="h-full object-cover"
            src="/images/coffee-11.jpg"
            alt="coffee flavour"
            width={500}
            height={500}
          />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, translateX: "3rem" }}
          whileInView={{ opacity: 1, translateX: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true, amount: 0.5 }}
          className="lg:row-start-1 lg:row-end-5 lg:col-start-3 lg:col-end-5 h-full w-full bg-brown-800"
        >
          <div className="w-full text-center lg:text-start h-full flex flex-col gap-4 p-6 lg:p-12">
            <span className="text-brown-500 font-montserrat">Nossa História</span>
            <h1 className="font-title text-2xl lg:text-5xl">Crie uma nova história com a gente</h1>
            <span className="text-neutral-400 lg:text-xl">
              Ex enim voluptate proident id proident exercitation in cillum fugiat aliqua. Cupidatat incididunt irure
              exercitation est officia culpa eu esse commodo labore excepteur nulla. Lorem non adipisicing laboris est
              laboris non. Proident fugiat nisi magna nulla ea do.
            </span>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
