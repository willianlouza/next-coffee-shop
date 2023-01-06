import Image from "next/image";
import { motion } from "framer-motion";
import ButtonAddCart from "../../buttons/button-add-cart";
import { StarOutline, Star } from "@mui/icons-material";
import { useEffect, useState } from "react";
interface IProps {
  rate?: number;
  delay?: number;
  price: number;
  title: string;
}
export default function ProductCard(props: IProps) {
  const { delay = 0, rate = 0, title, price } = props;
  const [stars, setStars] = useState<React.ReactNode>([<></>]);

  useEffect(() => {
    const starRow = [];
    for (let i = 0; i < 5; i++) {
      if (rate > i) {
        starRow.push(<Star key={i}/>);
      } else {
        starRow.push(<StarOutline key={i} />);
      }
    }
    setStars(starRow);
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0, rotateY: 45 }}
      whileInView={{ opacity: 1, rotateY: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 1, delay: delay }}
      className="group relative bg-brown-800 p-10 flex flex-col place-items-center gap-4 overflow-hidden"
    >
      <div className="bg-gradient-to-t to-brown-500 from-orange-400 p-6">
        <Image
          className="h-full w-full object-cover"
          src="/images/coffee-14.png"
          alt="coffee bag"
          width={500}
          height={500}
        />
      </div>
      <span className="flex flex-nowrap gap-2 place-items-center">
        <p className="text-brown-500">COFFEE</p>
        <div className="flex flex-nowrap text-brown-500">{stars}</div>
      </span>
      <h3 className="font-title text-xl">{title}</h3>
      <p className="text-brown-500">R$ {price.toFixed(2).replace('.', ',')}</p>
      <ButtonAddCart className="absolute -bottom-16 group-hover:bottom-4 transition-all duration-300 "/>
    </motion.div>
  );
}
