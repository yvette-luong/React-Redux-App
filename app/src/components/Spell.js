import React from "react";

function Spell({ spell }) {
  return (
    <div className="spell-list">
      <h3>Name : {spell.name}</h3>
      <h3> Link : {spell.url}</h3>
      <h3>Index : {spell.index}</h3>
    </div>
  );
}

export default Spell;
