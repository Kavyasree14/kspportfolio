import About from "@/components/About";
import Cta from "@/components/Cta";
import Work from "@/components/Work";
import Hero from "@/components/hero";


export default function Home() {
  return(<main>
    <Hero/>
    <About />
    <Work />
    <Cta />
  </main>
  );
}
