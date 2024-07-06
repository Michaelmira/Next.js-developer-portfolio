import Image from "next/image";
import Hero from "./componets/Hero";
import { FloatingNav } from "./componets/ui/FloatingNav";
import { FaHome } from "react-icons/fa";
import Grid from "./componets/Grid";
import RecentProjects from "./componets/RecentProjects";
import Clients from "./componets/Clients";
import Experience from "./componets/Experience";
import Approach from "./componets/Approach";
import Footer from "./componets/Footer";
import { navItems } from "@/data";

export default function Home() {
  return (
    <main className="relative bg-black-100 flex justify-center items-center flex-col mx-auto sm:px-10 px-5 overflow-clip">
      <div className="max-w-7xl w-full" >
        <FloatingNav navItems={navItems} />
        <Hero />  
        <Grid />
        <RecentProjects />
        <Clients />
        <Experience />
        <Approach />
        <Footer />
      </div>

    </main>
  );
}
