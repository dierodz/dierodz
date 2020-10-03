
import { useState, useEffect } from 'react';

const getDeviceConfig = (width) => {
  if (width < 320) {
    return 'xs';
  } else if (width >= 320 && width < 720) {
    return 'sm';
  } else if (width >= 720 && width < 1024) {
    return 'md';
  } else if (width >= 1024) {
    return 'lg';
  }
};

const useBreakpoint = () => {
  const [brkPnt, setBrkPnt] = useState();
  useEffect(() => {
    const calcInnerWidth = function () {
      setBrkPnt(getDeviceConfig(window.innerWidth))
    };
    calcInnerWidth()
    window.addEventListener('resize', calcInnerWidth);
    return () => window.removeEventListener('resize', calcInnerWidth);
  }, []);

  return brkPnt;
}
export default useBreakpoint;