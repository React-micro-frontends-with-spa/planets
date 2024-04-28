import React from "react";

export default function PlanetAttribute({ title, value, children, className = '', style = {} }) {
  return (
    <div className={`flex ${className}`} style={style}>
      <div className="pr-6 w-40 font-bold">{title}</div>
      {value ? <div>{value}</div> : <div>{children}</div>}
    </div>
  );
}
