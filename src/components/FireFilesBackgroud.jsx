'use client'
import React, { useEffect, useState } from 'react'

const createFirefly = () => ({
    id: Math.random(),
    top: `${Math.random() * 100}%`,
    left: `${Math.random() * 100}%`,
    animationDuration: `${Math.random() * 5 + 5}s`,
})

const FireFilesBackgroud = () => {
  const [fireFlies, setFireFlies] = useState([]);

  useEffect(() => {
    const addFireflyPeriodically = () => {
        const newFirefly = createFirefly();
        setFireFlies((prev) => [...prev.slice(-14), newFirefly]);

    }
    const interval = setInterval(addFireflyPeriodically, 10000);
    return () => clearInterval(interval);
}, []);
  return (
    <div className='fixed w-full h-full top-0 left-0 -z-10 overflow-hidden '>
       {fireFlies.map((firefly) => {
          return <div key={firefly.id} className=' absolute rounded-full w-[20px] h-[20px] bg-cyberpunk-radial'
           style={{
            top: firefly.top,
            left: firefly.left,
            animation: `move ${firefly.animationDuration} infinite alternate`,
           }}
          >

          </div>
       })}
    </div>
  )
}

export default FireFilesBackgroud