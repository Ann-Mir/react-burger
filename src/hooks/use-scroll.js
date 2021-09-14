import React from 'react';

export const useScroll = (containerRef, targetsRefs, callback) => {
  console.log(targetsRefs);
  React.useEffect(() => {
    const container = containerRef.current;

    const options = {
      root: container,
      rootMargin: '0px 0px -80% 0px',
      threshold: 0.5,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          callback(entry);
        }
      });
    }, options);

    targetsRefs.forEach((el) => {
      if (el.current) {
        observer.observe(el.current);
      }
    });

    return () => {
      targetsRefs.forEach((el) => {
        if (el.current) {
          observer.unobserve(el.current);
        }
      });
    };
  }, [containerRef, targetsRefs, callback]);
}
