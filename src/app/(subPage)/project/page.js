import Image from 'next/image';
import bg from '../../../../public/background/backgroud-projects.png';
import ProjectList from '@/components/project/ProjectList';
import { projectsData } from '../../data';
import RenderModal from '@/components/RenderModal';
import Staff from '@/components/models/Staff';

export default function Home() {
  return (
    <>
      <Image
        src={bg}
        alt="backgroud-image"
        className="-z-50 fixed w-full h-full top-0 left-0 object-cover object-center opacity-25"
      />
      <ProjectList projects={projectsData} />

      <div className=" flex items-center justify-center fixed top-16 lg:top-20 -translate-x-1/2 lg:translate-x-0 -z-10 left-1/2 lg:-left-24 h-screen">
        <RenderModal>
          <Staff />
        </RenderModal>
      </div>
    </>
  );
}
