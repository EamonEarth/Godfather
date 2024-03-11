"use client";
import React from "react";

const Nav = () => {
  const mappingFunction = () => {
    let content = "circle";
    let shiftRoot = 100;
    let height = window.innerHeight;
    const reps = height / 12;
    const componentArray = [];

    for (let i = 0; i < reps; i++) {
      let newContent = content.substring(1) + content[0];
      componentArray.push(
        <div
          className={`sticky top-[0px] h-[12px] w-full flex  items-center text-teal-500 bg-teal-500/20 border-b border-dashed border-teal-500 rotate-180 opacity-60`}
        >
          <div
            className="text-xs"
            style={{
              transform: `translate(${shiftRoot * 1.618}px) `,
            }}
          >
            {content}
          </div>
        </div>
      );
      shiftRoot *= 1.034;
      content = newContent;
    }
    return componentArray;
  };

  return mappingFunction();
};

export default Nav;
