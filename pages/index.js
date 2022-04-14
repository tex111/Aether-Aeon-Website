import Header from "../components/Header";
import Navbar from "../components/Navbar";

export default function Home() {
  const pages = [{ title: "Alpha release" }, { title: "Patreon Launched" }];
  return (
    <>
      <Header pageName="Home" />
      <Navbar />
      <main></main>
      <footer></footer>
    </>
  );
}
