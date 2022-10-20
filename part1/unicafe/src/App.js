import { useState } from 'react'

const Info = ({ message }) => <div><h1>{message}</h1></div>

const Button = ({ handleClick, text }) => (
  <button onClick={handleClick}>
    {text}
  </button>
)

const StatisticsLine = ({ text, value }) => {
  return (
    <tr>
      <td>{text}: </td>
      <td>{value} </td>
    </tr>
  )
}

const Statistics = ({ good, neutral, bad }) => {

  const totalFeedback = good + neutral + bad
  const averageFeedback = (good - bad) / totalFeedback
  const positiveFeedback = (good/totalFeedback)*100 +"%"

  if (totalFeedback === 0) {
    return (
      <div>
        No feedback given
      </div>
    )
  }

  return (
    <div>
      <table>
        <tbody>
          <StatisticsLine text="good" value ={good} />
          <StatisticsLine text="neutral" value ={neutral} />
          <StatisticsLine text="bad" value= {bad} />
          <StatisticsLine text="All" value= {totalFeedback} />
          <StatisticsLine text="Average" value= {averageFeedback} />
          <StatisticsLine text="Positive" value= {positiveFeedback} />
        </tbody>
      </table>
    </div>
  )
}

const App = () => {

  const headline = 'Give Feedback'
  const stats = 'Statistics'
  
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const setToGood = () => {
    setGood(good +1)
  }

  const setToNeutral = () => {
    setNeutral(neutral +1)
  }

  const setToBad = () => {
    setBad(bad +1)
  }

  return (
    <div>
      <Info message={headline} />
      <Button handleClick={setToGood} text='Good' />
      <Button handleClick={setToNeutral} text='Neutral' />
      <Button handleClick={setToBad} text='Bad' />

      <Info message={stats} />

      <Statistics good = {good} neutral = {neutral} bad = {bad} />
    </div>
  )
}

export default App
