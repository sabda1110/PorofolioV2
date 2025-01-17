'use client';
import ProjectLayoutItem from './ProjectLayoutItem';
import { motion } from 'framer-motion';

const containers = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3,
      delayChildren: 1.5
    }
  }
};

const ProjectList = ({ projects }) => {
  return (
    <motion.div
      variants={containers}
      initial="hidden"
      animate="show"
      className=" w-full max-w-auto xl:max-w-4xl px-4 mx-auto lg:px-16 space-y-6 md:space-y-8 flex flex-col items-center"
    >
      {projects.map((item, index) => {
        return <ProjectLayoutItem key={index} {...item} />;
      })}
    </motion.div>
  );
};

export default ProjectList;
