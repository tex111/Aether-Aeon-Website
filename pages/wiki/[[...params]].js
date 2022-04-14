import { useRouter } from "next/router";
import HeadComponent from "../../components/HeadComponent";
import Navbar from "../../components/Navbar";

export default function Wiki() {
  const router = useRouter();
  const { params = [] } = router.query;

  return (
    <>
      <HeadComponent pagename="Wiki" />
      <Navbar />
      <main></main>
      <footer></footer>
    </>
  );
}
