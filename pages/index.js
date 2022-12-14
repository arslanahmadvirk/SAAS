import Head from "next/head";
import Image from "next/image";
import Features from "../components/Features";
import Hero from "../components/Hero";
import Pricing from "../components/Pricing";
import FAQs from "../components/FAQs";
import Clients from "../components/Clients";
import Contact from "../components/Contact";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div>
      <Head>
        <title>SAAS</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="bg-white mx-auto">
        <Hero />
        <Features />
        <Pricing />
        <FAQs />
        <Clients />
        <Contact />
      </main>
    </div>
  );
}
