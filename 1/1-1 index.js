import React from 'react'
import ReactDOM from 'react-dom'

const Otsikko = (props) => {
    return (
    <div>
        <h1>{props.heading}</h1>
    </div>
    )
}

const Sisalto = (props) => {
    return (
    <div>
        <p>{props.partName} {props.assignments}</p>
    </div>
    )
}

const Yhteensa = (props) => {
    return (
    <div>
        <p>yhteensä {props.assignmentSum} tehtävää</p>
    </div>
    )
}

const App = () => {
  const kurssi = 'Half Stack -sovelluskehitys'
  const osa1 = 'Reactin perusteet'
  const tehtavia1 = 10
  const osa2 = 'Tiedonvälitys propseilla'
  const tehtavia2 = 7
  const osa3 = 'Komponenttien tila'
  const tehtavia3 = 14

  return (
    <div>
      <Otsikko heading = {kurssi} />
      <Sisalto partName = {osa1} assignments = {tehtavia1} />
      <Sisalto partName = {osa2} assignments = {tehtavia2} />
      <Sisalto partName = {osa3} assignments = {tehtavia3} />
      <Yhteensa assignmentSum = {tehtavia1 + tehtavia2 + tehtavia3} />
    </div>
  )
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
)
