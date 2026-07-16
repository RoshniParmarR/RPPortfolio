import React, { useEffect, useRef, useState } from 'react';

const ScrollReveal = ({
  children,
  className = '',
  delay = 0,
  duration = 800,
  direction = 'up',
  threshold = 0.1,
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      {
        threshold,
        rootMargin: '0px 0px -50px 0px',
      }
    );

    const currentRef = ref.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, [threshold]);

  const getDirectionClass = () => {
    switch (direction) {
      case 'up':
        return 'translate-y-8';
      case 'down':
        return '-translate-y-8';
      case 'left':
        return 'translate-x-8';
      case 'right':
        return '-translate-x-8';
      case 'scale':
        return 'scale-95';
      default:
        return 'translate-y-8';
    }
  };

  const transitionStyle = {
    transitionDuration: `${duration}ms`,
    transitionDelay: `${delay}ms`,
  };

  return (
    <div
      ref={ref}
      style={transitionStyle}
      className={`transition-all ease-out ${
        isVisible ? 'opacity-100 translate-y-0 translate-x-0 scale-100' : `opacity-0 ${getDirectionClass()}`
      } ${className}`}
    >
      {children}
    </div>
  );
};

export default ScrollReveal;
