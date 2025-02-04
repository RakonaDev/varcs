import React from "react";

export function Container ({
  children
}: { children: React.ReactNode }) {
  return (
    <div className="max-w-[90rem] h-full mx-auto px-4">
      { children }
    </div>
  )
}