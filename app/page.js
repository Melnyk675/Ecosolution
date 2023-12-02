import { Header }  from "./components/Header/Header";
import { MainSection } from "./components/Main/Main";
import { About } from "./components/About/About";
import { Faq } from "./components/Faq/Faq";

export default function Home() {
    return (
      <>
        <Header />
        <main style={{ paddingTop: "114px" }}>
        <MainSection />
        <About />
        <Faq />
        </main>
      </>
    );
  }