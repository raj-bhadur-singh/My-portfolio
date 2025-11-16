import { useEffect, useState } from 'react';

const ScrollProgress = () => {
  const [scrollTop, setScrollTop] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const winScroll = document.documentElement.scrollTop;
      const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const scrolled = (winScroll / height) * 100;
      setScrollTop(scrolled);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="fixed right-0 top-0 h-full w-2 z-50">
      <div
        className="bg-lime-400 w-full"
        style={{ height: `${scrollTop}%`, transition: 'height 0.2s ease-out' }}
      ></div>
    </div>
  );
};

export default ScrollProgress;
