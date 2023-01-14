import { useState } from 'react';

const StatisticLine = ({ text, value }) => {
  return (
    <tr>
      <td>{text}</td>
      <td>{value}</td>
    </tr>
  )
};

const Statistics = ({ good, neutral, bad }) => {
  if (good || neutral ||bad) {
    return (
      <div>
        <table>
          <tbody>
            <StatisticLine text={'good'} value={good} />
            <StatisticLine text={'neutral'} value={neutral} />
            <StatisticLine text={'bad'} value={bad} />
            <StatisticLine text={'all'} value={good + neutral + bad} />
            <StatisticLine text={'average'} value={(good*1 + neutral*0 + bad*-1) / (good + neutral + bad)} />
            <StatisticLine text={'positive'} value={(good * 100) /(good + neutral + bad)} />
          </tbody>
        </table>
      </div>
    )
  } else {
    return (
      <div></div>
    );
  }
};

const App = () => {
    const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.'
  ]

  const [selected, setSelected] = useState(0);

  const selectAnecdotes = () => {
    const lenght = anecdotes.length;
    const number = Math.floor(Math.random() * lenght);
//    console.log(number);
    setSelected(number)
  };

  return (
    <div>
        <div>{anecdotes[selected]}</div>
        <button onClick={selectAnecdotes}>
          next anecdote
        </button>
    </div>
  );
}

export default App;