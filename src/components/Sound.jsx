'use client';
import React, { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { Volume2, VolumeX } from 'lucide-react';
import { createPortal } from 'react-dom';

const Modal = ({ onClose, toggle }) => {
  return createPortal(
    <div className=" fixed inset-0 bg-backgroud/60 backdrop-blur-sm flex items-center justify-center">
      <section className=" bg-backgroud/20 border border-accent/30 border-solid backdrop-blur-[6px] py-8 px-6 xs:px-10 sm:px-16 rounded shadow-glass-inset text-center space-y-8">
        <p className=" font-light">
          Do you like to play the background music ?
        </p>
        <div className=" flex items-center justify-center space-x-4">
          <button
            className=" px-4 py-2 border border-accent/30 border-solid hover:shadow-glass-sm rounded mr-2"
            onClick={toggle}
          >
            Yes
          </button>
          <button
            className=" px-4 py-2 border border-accent/30 border-solid hover:shadow-glass-sm rounded"
            onClick={onClose}
          >
            No
          </button>
        </div>
      </section>
    </div>,
    document.getElementById('my-modal')
  );
};

const Sound = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const audioRef = useRef(null);

  const handleFirstUserInteraction = () => {
    const musicConsent = localStorage.getItem('musicConsent');
    if (musicConsent === 'true' && !isPlaying) {
      audioRef.current.play().catch((err) => {
        console.error('Audio play failed:', err);
      });
      setIsPlaying(true);
    }
    // Remove event listeners after first interaction
    ['click', 'keydown', 'touchstart'].forEach((event) => {
      document.removeEventListener(event, handleFirstUserInteraction);
    });
  };

  useEffect(() => {
    const consent = localStorage.getItem('musicConsent');
    console.log(consent, 'sabda consent');

    if (consent === 'true') {
      setIsPlaying(true);
      // Add event listeners only if audio is allowed
      ['click', 'keydown', 'touchstart'].forEach((event) => {
        document.addEventListener(event, handleFirstUserInteraction);
      });
    } else {
      setShowModal(true);
    }
  }, []);

  const toggle = () => {
    setIsPlaying((prev) => !prev);
    !isPlaying ? audioRef.current.play() : audioRef.current.pause();
    localStorage.setItem('musicConsent', String(!isPlaying));
    setShowModal(false);
  };
  return (
    <div className=" fixed top-4 right-2.5 xs:right-4 z-50 group">
      {showModal && (
        <Modal onClose={() => setShowModal(false)} toggle={toggle} />
      )}
      <audio ref={audioRef} loop>
        <source
          src={'/audio/cyberPuckAudio.mp3'}
          type="audio/mpeg"
          preload="auto"
        />
        Yout browser does not support the audio element
      </audio>
      <motion.button
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 1 }}
        onClick={toggle}
        className="w-10 h-10 xs:w-14 xs:h-14 text-foreground rounded-full flex items-center justify-center cursor-pointer z-50 p-2.5 xs:p-4 custom-bg"
        aria-label="Home"
        name="Home"
      >
        {isPlaying ? (
          <Volume2
            className="w-full h-full text-foreground group-hover:text-accent"
            strokeWidth={1.5}
          />
        ) : (
          <VolumeX
            className="w-full h-full text-foreground group-hover:text-accent"
            strokeWidth={1.5}
          />
        )}
      </motion.button>
    </div>
  );
};

export default Sound;
