import { useState } from 'react';

const StatisticLine = ({ text, value }) => {
  return (
    <div>{text} {value}</div>
  )
};

const Statistics = ({ good, neutral, bad }) => {
  if (good ||neutral ||bad) {
    return (
      <div>
        <StatisticLine text={'good'} value={good}/>
        <StatisticLine text={'neutral'} value={neutral}/>
        <StatisticLine text={'bad'} value={bad}/>
        <div>all {good + neutral + bad}</div>
        <div>average {(good*1 + neutral*0 + bad*-1) /  (good + neutral + bad)}</div>
        <div>positive {(good * 100) /(good + neutral + bad)} %</div>
      </div>
    )
  } else {
    return (
      <div></div>
    );
  }
};

const App = () => {

  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);
  const [average, setAverage] = useState(0)
  const [positive, setPositive] = useState(0)

  return (
    <div>
      <h1>give feedback</h1>
      <div>
        <button onClick={ () => setGood(good + 1) }>
          good
        </button>
        <button onClick={ () => setNeutral(neutral + 1) }>
          neutral
        </button>
        <button onClick={ () => setBad(bad + 1) }>
          bad
        </button>
        <h1>statistics</h1>
        <Statistics good={good} neutral={neutral} bad={bad} />
      </div>
    </div>
  );
}

export default App;