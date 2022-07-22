
import {useState} from "react"

const StatisticsLine = ({text, value}) =>  {
return (
  <tr>
    <td>{text}</td>
    <td>{value}</td>
  </tr>
)
}
const Button = ({onClick, text}) => <button onClick={onClick}>{text}</button>

const Statistics = ({good, neutral, bad}) => {


  let all = good + bad + neutral;
  let average = (good - bad) / all
  let positive = good/all*100

  if (all === 0) {
    return <>
      <h3>No feedback given</h3>
    </>
  } 

  return <table>
    <tbody>
      <StatisticsLine text ="good" value={good} />
      <StatisticsLine text ="neutral" value={neutral} />
      <StatisticsLine text ="bad" value={bad} />
      <StatisticsLine text ="all" value={all} />
      <StatisticsLine text ="average" value={average} />
      <StatisticsLine text ="positive" value={`${positive}%`} />  
    </tbody>
  </table>  
}

function App() {

  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const goodFeed = () => {
    setGood(good +1)
  }

  const neutralFeed = () => {
    setNeutral(neutral +1)
  }

  const badFeed = () => {
    setBad(bad +1)
  }

  return (<>
    <h1>give feedback</h1>
    <div>
      <Button onClick={goodFeed} text="good"/>
      <Button onClick={neutralFeed} text="neutral" />
      <Button onClick={badFeed} text="bad"/>
    </div>

    <h1>statistics</h1>
    <Statistics bad={bad} good={good} neutral={neutral}/>
  </>
  );
}

export default App;
