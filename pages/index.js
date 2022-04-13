import Head from "next/head";
import Navbar from "../components/Navbar";

export default function Home() {
   
   return (
      <>
         <Head>
            <title>Aether Aeon - Home</title>
            <link rel="icon" href="/favicon.ico" />
         </Head> 
         <main>
           <Navbar/>
         </main>
      </>
   )
}
