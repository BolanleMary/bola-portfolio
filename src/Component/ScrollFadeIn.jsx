import React, { useRef, useEffect, useState } from 'react';

export default function ScrollFadeIn({ children, className = '' }) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      if (!ref.current) return;

      const top = ref.current.getBoundingClientRect().top;
      const windowHeight = window.innerHeight;

      // Trigger fade-in if element top is less than window height - offset
      if (top < windowHeight - 50) {
        setVisible(true);
      } else {
        setVisible(false); // remove if you want animation once only
      }
    };

    window.addEventListener('scroll', onScroll);
    onScroll(); // check visibility on mount

    return () => {
      window.removeEventListener('scroll', onScroll);
    };
  }, []);

  return (
    <div
      ref={ref}
      className={`  ${className} transition-opacity transition-transform duration-1000 ease-out ${
        visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      }`}
    >
      {children}
    </div>
  );
}
