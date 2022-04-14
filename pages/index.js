import HeadComponent from "../components/HeadComponent";
import Navbar from "../components/Navbar";

export default function Home() {
  const pages = [{ title: "Alpha release" }, { title: "Patreon Launched" }];
  return (
    <>
      <HeadComponent pagename="Home" />
      <Navbar />
      <main></main>
      <footer></footer>
    </>
  );
}
