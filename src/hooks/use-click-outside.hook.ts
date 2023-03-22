import { RefObject, useEffect, useRef } from "react";

const useHook = <T = HTMLElement>(callback: () => void): RefObject<T> | undefined => {
  const ref = useRef<T>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent): void => {
      if (ref.current && !(ref.current as any).contains(event.target)) {
        callback();
      }
    };

    document.addEventListener("click", handleClickOutside);

    return (): void => {
      document.removeEventListener("click", handleClickOutside);
    };
  });

  return ref;
};

export default useHook;
