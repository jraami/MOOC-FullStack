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
        <Osa part = {props.parts[0]} />
        <Osa part = {props.parts[1]} />
        <Osa part = {props.parts[2]} />
    </div>
    )
}

const Osa = (props) => {
    return (
        <div>
            <p>{props.part.nimi}, {props.part.tehtavia} tehtävää.</p>
        </div>
    )
}

const Yhteensa = (props) => {
    let summa = props.parts[0].tehtavia + props.parts[1].tehtavia + props.parts[2].tehtavia
    return (
    <div>
        <p>Yhteensä {summa} tehtävää.</p>
    </div>
    )
}

const App = () => {
    const kurssi = {
        nimi: 'Half Stack -sovelluskehitys',
        osat: [
          {
            nimi: 'Reactin perusteet',
            tehtavia: 10
          },
          {
            nimi: 'Tiedonvälitys propseilla',
            tehtavia: 7
          },
          {
            nimi: 'Komponenttien tila',
            tehtavia: 14
          }
        ]
      }
  return (
    <div>
      <Otsikko heading = {kurssi.nimi} />
      <Sisalto parts = {kurssi.osat} />  
      <Yhteensa parts = {kurssi.osat} />
    </div>
  )
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
)
