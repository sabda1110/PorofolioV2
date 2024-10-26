'use client';
import { motion } from 'framer-motion';
import clsx from 'clsx';
const ItemLayout = ({ children, className }) => {
  return (
    <motion.div
      initial={{ scale: 0 }}
      whileInView={{ scale: 1 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      className={clsx(
        'custom-bg p-6 sm:p-8 rounded-xl flex items-center space-y-8 justify-center',
        className
      )}
    >
      {children}
    </motion.div>
  );
};

export default ItemLayout;
