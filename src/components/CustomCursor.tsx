import React, { useEffect, useState } from 'react';

const CustomCursor: React.FC = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isVisible, setIsVisible] = useState(false);
  const [isDarkBackground, setIsDarkBackground] = useState(true);

  useEffect(() => {
    const updateCursorPosition = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
      setIsVisible(true);
      
      // Detect background color at cursor position
      const element = document.elementFromPoint(e.clientX, e.clientY);
      if (element) {
        // Check element and its parents for background classes
        let currentElement: Element | null = element;
        let isDark = true; // Default to dark
        
        while (currentElement && currentElement !== document.body) {
          const classes = currentElement.classList.toString();
          
          // Check for dark backgrounds
          if (classes.includes('bg-black') || classes.includes('bg-gray-900') || 
              classes.includes('bg-gray-800') || classes.includes('bg-gray-700') ||
              classes.includes('bg-gray-600') || classes.includes('bg-[#030303]')) {
            isDark = true;
            break;
          }
          
          // Check for light backgrounds
          if (classes.includes('bg-white') || classes.includes('bg-gray-50') || 
              classes.includes('bg-gray-100') || classes.includes('bg-gray-200') ||
              classes.includes('bg-gray-300')) {
            isDark = false;
            break;
          }
          
          currentElement = currentElement.parentElement;
        }
        
        setIsDarkBackground(isDark);
        
        // Debug log
        console.log('Element classes:', element.classList.toString(), 'IsDark:', isDark);
      }
    };

    const hideCursor = () => {
      setIsVisible(false);
    };

    const showCursor = () => {
      setIsVisible(true);
    };

    document.addEventListener('mousemove', updateCursorPosition);
    document.addEventListener('mouseenter', showCursor);
    document.addEventListener('mouseleave', hideCursor);

    return () => {
      document.removeEventListener('mousemove', updateCursorPosition);
      document.removeEventListener('mouseenter', showCursor);
      document.removeEventListener('mouseleave', hideCursor);
    };
  }, []);

  return (
    <div
      className="custom-cursor"
      style={{
        transform: `translate(${position.x}px, ${position.y}px)`,
        opacity: isVisible ? 1 : 0,
      }}
    >
      <div 
        className="cursor-triangle"
        style={{
          borderBottomColor: isDarkBackground ? 'white' : 'black'
        }}
      ></div>
    </div>
  );
};

export default CustomCursor; 