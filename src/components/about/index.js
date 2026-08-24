import ItemLayout from './ItemLayout';

const AboutDetail = () => {
  return (
    <div className=" py-20 w-full">
      <section className=" grid grid-cols-12 gap-4 xs:gap-6  md:gap-8 w-full">
        <ItemLayout
          className={
            ' col-span-full lg:col-span-8 row-span-2 flex-col !items-start !space-y-4 '
          }
        >
          <h2 className=" text-xl md:text-2xl text-left w-full capitalize text-accent font-semibold">
            Tentang Saya & Eksplorasi AI
          </h2>
          <p className=" font-light text-xs sm:text-sm md:text-base leading-relaxed text-foreground">
            Halo, saya Sabda Setiawan! Saya adalah seorang Full Stack Developer dan AI Engineer enthusiast dengan semangat tinggi dalam membangun solusi teknologi modern, scalable, dan inovatif. Lulusan dari Universitas Islam Riau, saya berpengalaman mengembangkan aplikasi web end-to-end serta mengintegrasikan ekosistem Artificial Intelligence terkini.
          </p>
          <p className=" font-light text-xs sm:text-sm md:text-base leading-relaxed text-foreground">
            Saya aktif mengeksplorasi dan mengimplementasikan arsitektur AI modern seperti <strong className="text-accent font-medium">Agentic Workflows & Multi-Agent Systems</strong>, <strong className="text-accent font-medium">Model Context Protocol (MCP)</strong> untuk menghubungkan LLM dengan data dan tools nyata, serta <strong className="text-accent font-medium">9router / Smart LLM Routing</strong> untuk orkestrasi berbagai model AI secara efisien, adaptif, dan andal.
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

        {/* AI & Tech Highlights */}
        <ItemLayout className={'col-span-full flex-col !items-start !space-y-4'}>
          <h3 className="text-lg md:text-xl font-semibold text-accent w-full text-left">
            Keahlian AI & Rekayasa Sistem Cerdas
          </h3>
          <div className="flex flex-wrap gap-2.5 sm:gap-3 w-full">
            {[
              'Agentic AI & Autonomous Workflows',
              'Model Context Protocol (MCP)',
              '9router / Smart LLM Routing',
              'LLM Integration (Gemini, OpenAI, Claude)',
              'Function Calling & Tool Calling Systems',
              'Full Stack Web Development',
              'RAG & Context Engineering',
              'API Orchestration & Cloud Services'
            ].map((skill, idx) => (
              <span
                key={idx}
                className="px-3 py-1.5 rounded-lg text-xs sm:text-sm font-medium bg-background/70 border border-accent/40 text-foreground shadow-sm"
              >
                ⚡ {skill}
              </span>
            ))}
          </div>
        </ItemLayout>

        <ItemLayout
          className={' col-span-full sm:col-span-6 md:col-span-4 !p-0'}
        >
          <img
            alt="GitHub Top Languages"
            className=" w-full h-auto"
            src={`https://github-readme-stats-eight-theta.vercel.app/api/top-langs?username=sabda1110&bg_color=00000000&hide_border=true&title_color=FEFE5B&text_color=FFFFFF&icon_color=FEFE5B&text_bold=false`}
            loading="lazy"
          />
        </ItemLayout>
        <ItemLayout className={' col-span-full md:col-span-8 !p-0'}>
          <img
            alt="GitHub Stats"
            className=" w-full h-auto"
            src={`https://github-readme-stats-eight-theta.vercel.app/api?username=sabda1110&bg_color=00000000&hide_border=true&title_color=FEFE5B&text_color=FFFFFF&icon_color=FEFE5B&text_bold=false`}
            loading="lazy"
          />
        </ItemLayout>
        <ItemLayout className={'col-span-full'}>
          <img
            alt="Skill Icons"
            className=" w-full h-auto"
            src={`https://skillicons.dev/icons?i=js,ts,html,css,nestjs,nextjs,php,redux,prisma,py,tailwind,docker,nodejs,vue,express,react,vite,mongodb,mysql`}
            loading="lazy"
          />
        </ItemLayout>
        <ItemLayout className={' col-span-full md:col-span-6 !p-0'}>
          <img
            src="https://streak-stats.demolab.com?user=sabda1110&theme=dark&hide_border=true&background=00000000&ring=FEFE5B&currStreakLabel=FEFE5B"
            alt="GitHub Streak"
            className=" w-full h-auto"
            loading="lazy"
          />
        </ItemLayout>
        <ItemLayout className={' col-span-full md:col-span-6 !p-0'}>
          <img
            alt="GitHub Pinned Repo"
            className=" w-full h-auto"
            src={`https://github-readme-stats-eight-theta.vercel.app/api/pin/?username=sabda1110&repo=start-up&description_lines_count=2&bg_color=00000000&hide_border=true&title_color=FEFE5B&text_color=FFFFFF&icon_color=FEFE5B&text_bold=false`}
            loading="lazy"
          />
        </ItemLayout>
      </section>
    </div>
  );
};

export default AboutDetail;
