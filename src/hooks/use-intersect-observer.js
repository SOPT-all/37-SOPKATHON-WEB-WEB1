import { useEffect } from "react";
import { useState } from "react";

const useIntersectionObserver = ({ rootMargin, threshold, onIntersect }) => {
  const [target, setTarget] = useState(null); // 스크롤 감시 target ref
  const [root, setRoot] = useState(null); // 스크롤 container ref

  useEffect(() => {
    if (!target || !root) {
      return;
    }

    const observer = new IntersectionObserver(onIntersect, {
      root,
      rootMargin,
      threshold,
    });

    observer.observe(target);
    return () => {
      observer.unobserve(target);
    };
  }, [target, root, rootMargin, threshold, onIntersect]);

  return { setTarget, setRoot };
};
export default useIntersectionObserver;
