import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';
import Tuote from './Tuote';
import uuid from 'react-uuid';

function App() {
  const [tuotteet, setTuotteet] = useState([]);

  useEffect(() => {
    const tuoteLista = Array();
    tuoteLista.push(new Tuote(1, 'Kahvi',5));
    tuoteLista.push(new Tuote(2, 'Maito',2));
    tuoteLista.push(new Tuote(3, 'Keksi',3));
    setTuotteet(tuoteLista);
  },[])

  return (
    <div style={{margin: '30px'}}>
      <h3>Ostoslista</h3>
      <table>
        <thead>
        <tr>
          <th>Nimi</th>
          <th>Hinta</th>
        </tr>
        </thead>
        <tbody>
          {
            tuotteet.map(tuote => (
              <tr key={uuid()}>
                <td>{tuote.nimi}</td>
                <td>{tuote.hinta}</td>
              </tr>
            ))
          }
        </tbody>
      </table>
    </div>
  );
}

export default App;
