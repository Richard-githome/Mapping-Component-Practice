import React from "react";
import emojipedia from "../emojipedia";
import DictionCard from "./Dictcard";

function createDictionary(emojipedia) {
  return (
    <DictionCard
      key={emojipedia.id}
      emoji={emojipedia.emoji}
      name={emojipedia.name}
      meaning={emojipedia.meaning}
    />
  );
}

function App() {
  return (
    <div>
      <h1>
        <span>emojipedia</span>
      </h1>

      <dl className="dictionary">{emojipedia.map(createDictionary)}</dl>
    </div>
  );
}

export default App;
