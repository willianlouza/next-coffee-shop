import NewsCard from "../cards/news-card";
import {Send} from '@mui/icons-material'
export default function News() {
  return (
    <div className="pt-32 pb-12 flex flex-col gap-10 place-items-center place-content-center">
      <div className="max-w-7xl w-full flex flex-col gap-16 place-items-center">
        <div className="text-center">
          <h2 className="text-brown-500 font-montserrat">Notícias</h2>
          <h1 className="font-title text-4xl">Mais Recentes</h1>
        </div>

        <div className="flex flex-col lg:flex-row flex-wrap lg:place-items-center gap-12 place-content-center w-full">
          <NewsCard
            image="/images/coffee-1.jpg"
            author="Lays"
            date="22/01/2023"
            title="Coquetéis ideais para barmens"
          />
          <NewsCard
            image="/images/coffee-4.jpg"
            author="Lays"
            date="22/01/2023"
            title="Coquetéis ideais para barmens"
          />
          <NewsCard
            image="/images/coffee-6.jpg"
            author="Lays"
            date="22/01/2023"
            title="Coquetéis ideais para barmens"
          />
        </div>

        <div className="text-center flex flex-col gap-6">
          <h1 className="font-title text-2xl lg:text-5xl">Fique Por Dentro</h1>
          <div className="flex lg:w-96">
          <input className="flex-1 bg-brown-800 p-4" placeholder="Seu Email" type="email" name="" id="" />
          <button className="bg-brown-500 p-4 hover:bg-brown-600"><Send /></button>
          </div>
          
        </div>
      </div>
    </div>
  );
}
