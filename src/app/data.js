/*
Websites:

- https://github.com/pmndrs/gltfjsx (GLTF JSX for 3D Models)
- https://lucide.dev/icons/ (Lucide Icons)
- https://github.com/anuraghazra/github-readme-stats (Github Readme Stats)
- https://skillicons.dev (Skill Icons to show skills)
- https://github-readme-streak-stats.herokuapp.com (Github Readme Streak Stats)

:root {
  --background: 27 27 27;
  --foreground: 225 225 225;
  --muted: 115 115 115;
  --accent: 254 254 91; #FEFE5B
}

*/

export const projectsData = [
  {
    id: 1,
    name: 'Tumutuku',
    description: 'Membantu berbagai tugas',
    date: '2024-01-10',
    demoLink: 'https://start-up-nine.vercel.app/'
  },
  {
    id: 2,
    name: 'Service API Chat',
    description: 'Service kebutuhan api Chat',
    date: '2022-06-20',
    demoLink: 'https://github.com/sabda1110/ServiceAPIChat'
  },
  {
    id: 3,
    name: 'Portofolio V1 ',
    description: 'Plan and track expenses',
    date: '2022-12-10',
    demoLink:
      'https://sabda1110.github.io/?fbclid=PAZXh0bgNhZW0CMTEAAaZCgnbgdkzBrUBa2O0PIUZ9alUf0Sl_M6dKwgbJVVk7Yt2wrwjT14XcwNY_aem_Vw974Q7pDQzezGB93toX9Q'
  }
];

export const BtnList = [
  { label: 'Home', link: '/', icon: 'home', newTab: false },
  { label: 'About', link: '/aboutMe', icon: 'about', newTab: false },
  { label: 'Projects', link: '/project', icon: 'projects', newTab: false },
  { label: 'Contact', link: '/contact', icon: 'contact', newTab: false },
  {
    label: 'Github',
    link: 'https://www.github.com/sabda1110',
    icon: 'github',
    newTab: true
  },
  {
    label: 'LinkedIn',
    link: 'https://www.linkedin.com/in/sabda-setiawan-6a8185162',
    icon: 'linkedin',
    newTab: true
  },
  {
    label: 'Instagram',
    link: 'https://www.instagram.com/sabda1110',
    icon: 'instagram',
    newTab: true
  },
  {
    label: 'Resume',
    link: '/resume.pdf',
    icon: 'resume',
    newTab: true
  }
];
