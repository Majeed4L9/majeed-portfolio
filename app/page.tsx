import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import WorkBoard from "@/components/WorkBoard";
import Fit from "@/components/Fit";
import Ask from "@/components/Ask";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <div className="wrap">
      <Header />
      <main id="top">
        <Hero />
        <About />
        <WorkBoard />
        <Fit />
        <Ask />
        <Contact />
      </main>
      <footer className="foot">
        <span>Written for the Fredrin UI/UX designer listing, October 2026</span>
        <span>
          Press <kbd>T</kbd> to switch theme · <a href="#top">Back to top</a>
        </span>
      </footer>
    </div>
  );
}
