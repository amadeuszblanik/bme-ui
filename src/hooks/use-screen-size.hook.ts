import { useEffect, useState } from "react";

const DEFAULT_WIDTH = 390;
const DEFAULT_HEIGHT = 844;

const useHook = (): { width: number; height: number } => {
  const [width, setWidth] = useState<number>(DEFAULT_WIDTH);
  const [height, setHeight] = useState<number>(DEFAULT_HEIGHT);

  useEffect(() => {
    const { innerWidth, innerHeight } = window;

    setWidth(innerWidth);
    setHeight(innerHeight);

    const handleWindowResize = () => {
      setWidth(window.innerWidth);
      setHeight(window.innerHeight);
    };

    window.addEventListener("resize", handleWindowResize);

    return () => window.removeEventListener("resize", handleWindowResize);
  }, []);

  return { width, height };
};

export default useHook;
