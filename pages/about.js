import Head from "next/head";
import Navbar from "../components/Navbar";

export default function About() {

   return (
      <>
         <Head>
            <title>Aether Aeon - About</title>
            <link rel="icon" href="/favicon.ico" />
         </Head>
         <main>
            <Navbar/>
         </main>
      </>
   )
}