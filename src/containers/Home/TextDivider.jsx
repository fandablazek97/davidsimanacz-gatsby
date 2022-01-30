import React from "react";

export default function TextDivider({ children }) {
  return (
    <div className="py-20 md:py-32 bg-gradient-to-r from-indigo-900 to-indigo-700 md:to-indigo-500 text-white text-center">
      <div className="ui-wrapper">{children}</div>
    </div>
  );
}
