"use client";

import React from "react";

type StandardButtonProps = {
  label?: string;
  onClick?: () => void;
  className?: string;
};

const StandardButton = ({
  label = "Kup teraz",
  onClick,
  className = "",
}: StandardButtonProps) => {
  return (
    <div className="flex justify-end">
      <button
        onClick={onClick}
        className={`${className}`}
        style={{width: 144, height: 44}}
      >
        {label}
      </button>
    </div>
  );
};

export default StandardButton;
