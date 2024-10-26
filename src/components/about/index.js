import ItemLayout from './ItemLayout';

const AboutDetail = () => {
  return (
    <div className=" py-20 w-full">
      <section className=" grid grid-cols-12 gap-4 xs:gap-6  md:gap-8 w-full">
        <ItemLayout
          className={
            ' col-span-full lg:col-span-8 row-span-2 flex-col items-center '
          }
        >
          <h2 className=" text-xl md:text-2xl text-left w-full capitalize">
            Tentang Saya
          </h2>
          <p className=" font-light text-xs sm:text-sm md:text-base">
            Halo, saya Sabda Setiawan! Saya adalah seorang programmer full stack
            dengan semangat besar untuk menciptakan solusi teknologi yang
            inovatif dan menarik. Lulusan dari Universitas Islam Riau, saya
            telah membangun fondasi kuat dalam bidang teknologi informasi dan
            pemrograman.
          </p>
        </ItemLayout>
        <ItemLayout className={' col-span-full xs:col-span-6 lg:col-span-4'}>
          <p className=" font-semibold w-full text-left text-2xl sm:text-5xl text-accent">
            4 <span className=" font-semibold text-base">Company</span>
          </p>
        </ItemLayout>
        <ItemLayout className={'col-span-full xs:col-span-6 lg:col-span-4'}>
          <p className=" font-semibold w-full text-left text-2xl sm:text-5xl text-accent">
            2+{' '}
            <span className=" font-semibold text-base">Pengalaman Kerja</span>
          </p>
        </ItemLayout>
        <ItemLayout
          className={' col-span-full sm:col-span-6 md:col-span-4 !p-0'}
        >
          <img
            alt="Gambar Github"
            className=" w-full h-auto"
            fill
            src={`https://github-readme-stats.vercel.app/api/top-langs?username=sabda1110&theme=transparent&hide_border=true&title_color=FEFE5B&text_color=FFFFFF&icon_color=FEFE5B&text_bold=false`}
            loading="lazy"
          />
        </ItemLayout>
        <ItemLayout className={' col-span-full md:col-span-8 !p-0'}>
          <img
            alt="Gambar Github"
            className=" w-full h-auto"
            fill
            src={`https://github-readme-stats.vercel.app/api?username=sabda1110&theme=transparent&hide_border=true&title_color=FEFE5B&text_color=FFFFFF&icon_color=FEFE5B&text_bold=false`}
            loading="lazy"
          />
        </ItemLayout>
        <ItemLayout className={'col-span-full'}>
          <img
            alt="Gambar Github"
            className=" w-full h-auto"
            fill
            src={`https://skillicons.dev/icons?i=js,ts,html,css,nestjs,nextjs,php,redux,prisma,py,tailwind,docker,nodejs,vue,express,react,vite,mongodb,mysql`}
            loading="lazy"
          />
        </ItemLayout>
        <ItemLayout className={' col-span-full md:col-span-6 !p-0'}>
          <img
            src="https://github-readme-streak-stats.herokuapp.com?user=sabda1110&theme=dark&hide_border=true&type=png&background=EB545400&ring=FEFE5B&currStreakLabel=FEFE5B"
            alt="GitHub Streak"
            loading="lazy"
          />
        </ItemLayout>
        <ItemLayout className={' col-span-full md:col-span-6 !p-0'}>
          <img
            alt="Gambar Github"
            className=" w-full h-auto"
            fill
            src={`https://github-readme-stats.vercel.app/api/pin/?username=sabda1110&repo=start-up&description_lines_count=2&theme=transparent&hide_border=true&title_color=FEFE5B&text_color=FFFFFF&icon_color=FEFE5B&text_bold=false`}
            loading="lazy"
          />
        </ItemLayout>
      </section>
    </div>
  );
};

export default AboutDetail;
