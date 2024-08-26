"use client";

import React, { useState, useRef, useEffect } from 'react';

const SwipeButton = ({ onCheckIn, onCheckOut }) => {
  const [isCheckedIn, setIsCheckedIn] = useState(false);
  const buttonRef = useRef(null);
  const containerRef = useRef(null);

  useEffect(() => {
    updateButtonPosition();
  }, [isCheckedIn]);

  const updateButtonPosition = () => {
    const button = buttonRef.current;
    const container = containerRef.current;
    if (button && container) {
      const containerWidth = container.offsetWidth;
      const buttonWidth = button.offsetWidth;
      button.style.transform = isCheckedIn
        ? `translateX(${containerWidth - buttonWidth - 4}px)`
        : 'translateX(0)';
    }
  };

  const handleInteraction = (e) => {
    e.preventDefault();
    const container = containerRef.current;
    const button = buttonRef.current;
    if (container && button) {
      const containerWidth = container.offsetWidth;
      const buttonWidth = button.offsetWidth;
      const threshold = containerWidth / 2;
      
      let clientX;
      if (e.type === 'touchend') {
        clientX = e.changedTouches[0].clientX;
      } else {
        clientX = e.clientX;
      }

      const buttonRect = button.getBoundingClientRect();
      const buttonPosition = buttonRect.left + buttonWidth / 2;

      if (buttonPosition > threshold && !isCheckedIn) {
        setIsCheckedIn(true);
        onCheckIn();
      } else if (buttonPosition <= threshold && isCheckedIn) {
        setIsCheckedIn(false);
        onCheckOut();
      } else {
        // If not crossing the threshold, snap back to the original position
        updateButtonPosition();
      }
    }
  };

  return (
    <div 
      ref={containerRef}
      className={`w-72 h-14 rounded-full relative overflow-hidden transition-colors duration-300 ${isCheckedIn ? 'bg-red-400' : 'bg-green-300'}`}
      onClick={handleInteraction}
      onTouchEnd={handleInteraction}
    >
      <div 
        ref={buttonRef}
        className="w-12 h-12 bg-white rounded-full absolute top-1 left-1 flex items-center justify-center text-xs font-bold text-gray-700 cursor-pointer transition-all duration-300 select-none whitespace-nowrap px-2"
      >
        <span className="pointer-events-none">
          {isCheckedIn ? '<=' : '=>'}
        </span>
      </div>
    </div>
  );
};

export default SwipeButton;