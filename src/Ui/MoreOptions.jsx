import React from "react";

export default function MoreOptions({ text, Icon }) {
  return (
    <div className="MoreOptions">
      <Icon />

      <h2>{text}</h2>
    </div>
  );
}
