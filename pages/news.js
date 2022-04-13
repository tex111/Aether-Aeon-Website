import Head from "next/head";
import Navbar from "../components/Navbar";

export default function News() {

   return (
      <>
         <Head>
            <title>Aether Aeon - News</title>
            <link rel="icon" href="/favicon.ico" />
         </Head>
         <main>
            <Navbar/>
         </main>
      </>
   )
}