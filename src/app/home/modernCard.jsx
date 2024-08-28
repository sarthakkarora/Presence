import React from "react";

export function Card({ children, className }) {
  return (
    <div
      className={`!bg-white border border-gray-200 rounded-lg shadow-sm p-4 ${className}`}
    >
      {children}
    </div>
  );
}
