import Image from "next/image";
import bg from '../../public/background/backgroud-home.png'
import RenderModal from "@/components/RenderModal";
import Wizard from "@/components/models/Wizard";
import Navigation from "@/components/navigation";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between relative">
      <Image src={bg} alt="backgroud-image" fill className="-z-50 w-full h-full object-cover object-center opacity-20" />
      <div className="w-full h-screen">
        <Navigation/>
        <RenderModal>
          <Wizard />
        </RenderModal>
      </div>
    </main>
  );
}
