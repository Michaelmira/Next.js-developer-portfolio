import Image from "next/image";
import Hero from "./componets/Hero";
import { FloatingNav } from "./componets/ui/FloatingNav";
import { FaHome } from "react-icons/fa";
import Grid from "./componets/Grid";

export default function Home() {
  return (
    <main className="relative bg-black-100 flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5">
      <div className="max-w-7xl w-full" >
        <FloatingNav navItems={[
          {name: 'Home', link: '/', icon: <FaHome />}
        ]} />
        <Hero />  
        <Grid />

      </div>

    </main>
  );
}
