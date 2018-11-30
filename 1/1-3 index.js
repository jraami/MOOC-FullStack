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
        <Osa partName = {props.partNames[0]} partNumber = {props.partNumbers[0]} />
        <Osa partName = {props.partNames[1]} partNumber = {props.partNumbers[1]} />
        <Osa partName = {props.partNames[2]} partNumber = {props.partNumbers[2]} />
    </div>
    )
}

const Osa = (props) => {
    return (
        <div>
            <p>{props.partName}, {props.partNumber} tehtävää.</p>
        </div>
    )
}

const Yhteensa = (props) => {
    return (
    <div>
        <p>Yhteensä {props.assignmentSum} tehtävää.</p>
    </div>
    )
}

const App = () => {
    const kurssi = 'Half Stack -sovelluskehitys'
    const osa1 = {
        nimi: 'Reactin perusteet',
        tehtavia: 10
    }
    const osa2 = {
        nimi: 'Tiedonvälitys propseilla',
        tehtavia: 7
    }
    const osa3 = {
        nimi: 'Komponenttien tila',
        tehtavia: 14
    }

  return (
    <div>
      <Otsikko heading = {kurssi} />
      <Sisalto partNames = {[osa1.nimi, osa2.nimi, osa3.nimi]} partNumbers = {[osa1.tehtavia, osa2.tehtavia, osa3.tehtavia]} />   
      <Yhteensa assignmentSum = {osa1.tehtavia + osa2.tehtavia + osa3.tehtavia} />
    </div>
  )
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
)
