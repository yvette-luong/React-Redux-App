import React, { useEffect } from "react";
import SpellList from "./components/SpellList";
import { connect } from "react-redux";
import { fetchSpells } from "./store/actions/spellActions";

import "./App.css";

function App({ fetchSpells, loadingSpells, errorMessage }) {
  useEffect(() => {
    fetchSpells();
  }, [fetchSpells]);
  return (
    <div className="App">
      <div className="App-header"> 
        <div className="list-wrap"> 
        <h1>Welcome to Spell List!</h1>     
        {!loadingSpells ? <SpellList /> : <div>....Searching in SpellBook</div>}
        {errorMessage !== "" ? <div>{errorMessage}</div> : null}
        </div>
      </div>
    </div>
  );
}
function mapStateToProps(state) {
  return {
    loadingSpells: state.loadingSpells,
    errorMessage: state.errorMessage,
  };
}
export default connect(mapStateToProps, { fetchSpells })(App);
