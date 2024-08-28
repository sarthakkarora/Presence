'use client';

import React, { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { LogIn, LogOut } from 'lucide-react';

function CheckInOutButton({ 
  isCheckedIn, 
  handleCheckIn, 
  handleCheckOut 
}) {
  const [isDisabled, setIsDisabled] = useState(false);

  const handleClick = () => {
    if (isDisabled) return;

    setIsDisabled(true);
    if (isCheckedIn) {
      handleCheckOut();
    } else {
      handleCheckIn();
    }

    setTimeout(() => {
      setIsDisabled(false);
    }, 1500);
  };

  return (
    <div className="relative justify-center">
      <Button 
        onClick={handleClick} 
        disabled={isDisabled}
        className={`flex items-center gap-2 w-80 transition-none ${
          isDisabled ? 'opacity-50 cursor-not-allowed' : ''
        }`}
        style={{ pointerEvents: isDisabled ? 'none' : 'auto' }}
      >
        {isCheckedIn ? (
          <>
            <LogOut size={18} />
            Check Out
          </>
        ) : (
          <>
            <LogIn size={18} />
            Check In
          </>
        )}
      </Button>
    </div>
  );
}

export default CheckInOutButton;