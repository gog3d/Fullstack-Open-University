import { useState } from 'react';

const zerObj = {};

const Vote = ({vote, selected}) => {
    return (
      <div>
       has votes {vote[selected]}
      </div>
    );
};

  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.'
  ];

  for (const i in anecdotes) {
    zerObj[i] = 0;
  }

const App = () => {

  const [selected, setSelected] = useState(0);
  const [vote, setVote] = useState(zerObj);
  const [number, setNumber] = useState(0);

  const selectAnecdotes = () => {
    const lenght = anecdotes.length;
    const number = Math.floor(Math.random() * lenght);
    setSelected(number)
  };

  const selectVote = () => {
    vote[selected] += 1;
    setVote(vote);
    setNumber(vote[selected]);
  };

  return (
    <div>
      <div>{anecdotes[selected]}</div>
      <Vote vote={vote} selected={selected}/>
      <button onClick={selectVote}>
        vote
      </button>
      <button onClick={selectAnecdotes}>
        next anecdote
      </button>
    </div>
  );
}

export default App;
