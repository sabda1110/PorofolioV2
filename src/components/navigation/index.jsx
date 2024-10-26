'use client';
import React from 'react';
import { BtnList } from '@/app/data';
import NavButton from './NavButton';
import useResizeScreen from '../hooks/useResizeScreen';
import ResponsivComponent from '../ResponsivComponent';
import { motion } from 'framer-motion';

const containers = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3
    }
  }
};

const Navigation = () => {
  const angleIncremenet = 360 / BtnList.length;
  const sizeScreen = useResizeScreen();

  const isLarge = sizeScreen >= 1024;
  const isMedium = sizeScreen >= 768;
  return (
    <div className="w-full fixed h-screen flex items-center justify-center">
      <ResponsivComponent>
        {({ size }) => {
          return size && size >= 480 ? (
            <motion.div
              variants={containers}
              initial="hidden"
              animate="show"
              className="w-max flex items-center justify-center relative hover:pause animate-spin-slow group"
            >
              {BtnList.map((item, index) => {
                const angleRed = (index * angleIncremenet * Math.PI) / 180;
                const radius = isLarge
                  ? 'calc(20vw - 1rem)'
                  : isMedium
                  ? 'calc(30vw - 1rem)'
                  : 'calc(40vw - 1rem)';
                const x = `calc(${radius} * ${Math.cos(angleRed)})`;
                const y = `calc(${radius} * ${Math.sin(angleRed)})`;
                return <NavButton key={index} x={x} y={y} {...item} />;
              })}
            </motion.div>
          ) : (
            <>
              <motion.div
                variants={containers}
                initial="hidden"
                animate="show"
                className=" w-full px-2.5 xs:p-0 xs:w-max flex flex-col space-y-4 items-start xs:items-center justify-center group relative "
              >
                {BtnList.slice(0, BtnList.length / 2).map((item, index) => {
                  return <NavButton key={index} x={0} y={0} {...item} />;
                })}
              </motion.div>

              <motion.div
                variants={containers}
                initial="hidden"
                animate="show"
                className="flex w-full px-2.5 xs:p-0 xs:w-max flex-col space-y-4 items-end xs:items-center justify-center group relative "
              >
                {BtnList.slice(BtnList.length / 2, BtnList.length).map(
                  (item, index) => {
                    return (
                      <NavButton
                        key={index}
                        x={0}
                        y={0}
                        labelDirection="left"
                        {...item}
                      />
                    );
                  }
                )}
              </motion.div>
            </>
          );
        }}
      </ResponsivComponent>
    </div>
  );
};

export default Navigation;
