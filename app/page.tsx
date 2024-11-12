import AboutSection from "@/components/About";
import Grid from "@/components/Grid";
import Hero from "@/components/Hero";
import { FloatingNav } from "@/components/ui/floating-navbar";


export default function Home() {
  return (
    <main className='relative flex bg-black-100 flex-col items-center overflow-hidden justify-center px-5 mx-auto sm:px-10' >

    <div className='max-w-7xl w-full'>
      <FloatingNav navItems={[
        {name:"Home",link:'/'}
      ]}/>
      <Hero/>
      <AboutSection/>
    </div>

   </main>
  );
}
