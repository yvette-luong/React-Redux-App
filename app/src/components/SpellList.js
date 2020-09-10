import React from "react";
import Spell from "./Spell";
import { connect } from "react-redux";

function SpellList(props) {
  return (
    <div>
      <h2>THE SPELLS</h2>
      {props.spells.map((spell) => {
        return <Spell key={spell.index} spell={spell} />;
      })}
    </div>
  );
}
function mapStateToProps(state) {
  return {
    spells: state.spells,
  };
}
export default connect(mapStateToProps, {})(SpellList);
