import { useEffect, useState } from "react"

const useResizeScreen = () => {
  const [sizeScreen, setScreen] = useState(null);
  

  useEffect(() => {

    const getScreen = () => window.innerWidth;

    const handleResize = () => setScreen(getScreen());

    handleResize();
    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize',handleResize);
  },[])
  return sizeScreen;
}

export default useResizeScreen