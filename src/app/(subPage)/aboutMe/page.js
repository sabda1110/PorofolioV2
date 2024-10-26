import Image from "next/image";
import bg from '../../../../public/background/backgroud-about.png'
import RenderModal from "@/components/RenderModal";
import HatModel from "@/components/models/Hat";
import AboutDetail from "@/components/about";




export default function Home() {
  return (
    <>
      <Image src={bg} alt="backgroud-image" className="-z-50 fixed w-full h-full top-0 left-0 object-cover object-center opacity-20" />

      <div className=" w-full h-3/5 xs:h-3/4 sm:h-screen absolute top-1/2 -translate-y-1/2 left-0">
        <RenderModal>
          <HatModel/>
        </RenderModal>
      </div>
      <div className="w-full h-screen relative flex flex-col items-center justify-center ">
        <section className=" absolute flex flex-col items-center text-center top-1/2 sm:top-[60%] left-1/2 -translate-y-1/2 -translate-x-1/2">
          <h1 className=" font-bold text-6xl xs:text-7xl sm:text-8xl lg:text-9xl text-accent">Whatsab</h1>
          <p className=" font-light text-foreground text-ls">{`I'm a web developer`}</p>
        </section>
      </div>

      <AboutDetail/>
    </>
  );
}
