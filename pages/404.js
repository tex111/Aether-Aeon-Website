import Head from "next/head";
import Navbar from "../components/Navbar";

export default function PageNotFound() {
   return (
      <>
         <Head>
            <title>Aether Aeon - 404</title>
            <link rel="icon" href="/favicon.ico" />
         </Head>
         <main>
            <Navbar/>
            <h1>Error Code: 404 (Page not Found)</h1>
         </main>
      </>
   )
}