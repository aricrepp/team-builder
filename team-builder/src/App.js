import React, {useState} from 'react';
import logo from './logo.svg';
import TeamCard from './components/TeamCard.js';
import TeamCardForm from './components/TeamCardForm.js';
import './App.css';

function App() {
  const [cards, setCards] = useState([{}]);
  const [cards2, setCards2] = useState([{}]);

  const handleSubmit = (newcard) => {
    setCards([...cards, newcard]);
  };

  const handleMove1 = (newcard) => {
    setCards2([...cards, newcard]);
  };

  return (
    <div className="App">
      <div className="container">
        <h1 className="heading">Team Creator</h1>
        <TeamCardForm onSubmit={handleSubmit} />
        <div className='teamContainer'>
          <div className='team'>
            <TeamCard cards={cards} onMove={handleMove1}/>
          </div>
          <div className='team'>
            <TeamCard cards={cards2} onMove={handleMove1}/>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
