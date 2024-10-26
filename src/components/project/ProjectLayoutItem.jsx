'use client';
import Link from 'next/link';
import { motion } from 'framer-motion';

const item = {
  hidden: { opacity: 0, y: 100 },
  show: { opacity: 1, y: 0 }
};

const NavLink = motion.create(Link);

const ProjectLayoutItem = ({ name, description, date, demoLink }) => {
  return (
    <NavLink
      variants={item}
      href={demoLink}
      target={'_blank'}
      className=" text-sm md:text-base flex items-center justify-between w-full relative rounded-lg overflow-hidden p-4 md:p-6 custom-bg"
    >
      <section className="flex items-center justify-center space-x-2">
        <h2 className="  text-foreground">{name}</h2>
        <p className=" text-muted hidden sm:inline-block ">{description}</p>
      </section>
      <span className="  self-end flex-1 mx-2 mb-1 bg-transparent border-b border-dashed border-muted" />
      <p className="text-foreground sm:text-muted">
        {new Date(date).toDateString()}
      </p>
    </NavLink>
  );
};

export default ProjectLayoutItem;
