import { useState } from 'react';
import './App.css';
import Card from './components/card';
import {words} from './data/words.js';

import './assets/css/style.css';

function randomNumberInRange(min, max) {
  // 👇️ get number between min (inclusive) and max (inclusive)
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function getWord() {
  const index = randomNumberInRange(0, words.length - 1);
  return words[index];
}

function App() {

  const [word, setword] = useState(getWord());

  function newcard () {
    setword(getWord());
  }

  return (
    <>
      <div className="container">
        <Card word={word}/>
        <button onClick={newcard}>new card</button>
      </div>
    </>
  );
}

export default App;
