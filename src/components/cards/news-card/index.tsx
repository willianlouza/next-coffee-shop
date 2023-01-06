import Image from "next/image";
import { ArrowForwardRounded } from "@mui/icons-material";
import { motion } from "framer-motion";
interface IProps {
  author: string;
  date: string;
  title: string;
  image: string;
  animationDelay?: number;
}
export default function NewsCard(props: IProps) {
  const { image = "", author = "Author", date = "20/01/2023", title = "Title", animationDelay = 0 } = props;
  return (
    <motion.div
      initial={{ opacity: 0, translateX: "-3rem" }}
      whileInView={{ opacity: 1, translateX: 0 }}
      viewport={{ amount: 0.2, once: true }}
      transition={{ duration: 1, delay: animationDelay }}
      className="bg-brown-800 max-w-sm"
    >
      <div className="h-72 overflow-hidden">
        <Image className="h-full w-full object-cover" src={image} alt="Coffee" width={500} height={500} />
      </div>
      <div className="px-6 flex flex-col gap-4 py-6">
        <div className="w-full flex place-content-between">
          <span className="flex gap-1">
            <p className="text-brown-500">Por:</p>
            <p>{author}</p>
          </span>
          <span>{date}</span>
        </div>
        <div className="overflow-hidden whitespace-nowrap text-ellipsis max-w-lg font-title text-lg lg:text-3xl">
          {title}
        </div>
        <button className="group">
          <span className="lg:text-lg text-brown-400 group-hover:text-brown-500 flex flex-nowrap gap-2 place-items-center">
            <p>Saiba mais</p>
            <ArrowForwardRounded className="group-hover:translate-x-2 transition-transform duration-150" />
          </span>
        </button>
      </div>
    </motion.div>
  );
}
