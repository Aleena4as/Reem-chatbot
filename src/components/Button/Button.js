import React from "react";

/**
 * Generic Function
 *
 * Reusable for all the Components
 *
 */

export default ({ className = "", onClick, disabled = false, id = "", children }) => {
  return (
    <button onClick={onClick} className={className} id={id} disabled={disabled}>
      {children}
    </button>
  );
};
