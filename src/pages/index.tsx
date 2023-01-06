import Head from "next/head";
import Image from "next/image";
import ButtonPrimary from "../components/buttons/button-primary";
import Layout from "../components/layout/layout";
import { motion } from "framer-motion";
import { Background, Parallax } from "react-parallax";
import HeroSection from "../components/sections/hero";
import AboutSection from "../components/sections/about";
import PopularProducts from "../components/sections/popular-products";
import Menu from "../components/sections/menu";
import Map from "../components/sections/map";
import News from "../components/sections/news";

export default function Home() {
  return (
    <>
      <Head>
        <title>Coffee Shop</title>
        <meta name="description" content="Coffee Shop, o melhor café do brasil." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout>
        <HeroSection />
        <div className="h-full w-full px-16 lg:px-32">
          <AboutSection />
          <PopularProducts />
          <Menu />
          <Map />
          <News />
        </div>
      </Layout>
    </>
  );
}
