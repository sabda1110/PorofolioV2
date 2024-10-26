'use client';

import useResizeScreen from "./hooks/useResizeScreen";


const ResponsivComponent = ({children}) => {

  const size = useResizeScreen();
  return (
    <>
      {children({size})}
    </>
  )
}

export default ResponsivComponent