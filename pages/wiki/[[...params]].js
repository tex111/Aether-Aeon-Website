import { useRouter } from "next/router";
import Header from "../../components/Header";
import Navbar from "../../components/Navbar";

export default function Wiki() {
  const router = useRouter();
  const { params = [] } = router.query;

  return (
    <>
      <Header pageName="Wiki" />
      <Navbar />
      <main></main>
      <footer></footer>
    </>
  );
}
