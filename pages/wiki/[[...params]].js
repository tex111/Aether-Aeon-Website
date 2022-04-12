import {useRouter} from "next/router";
import Navbar from "../../components/Navbar";
import Head from "next/head";

export default function Wiki() {
   const router = useRouter()
   const { params = [] } = router.query

   return (
      <>
         <Head>
            <title>Aether Aeon - Wiki</title>
            <link rel="icon" href="/favicon.ico" />
         </Head>
         <main>
            <Navbar/>
            <h1>Wiki Page</h1>
         </main>
      </>
   )
}