import './App.css';
import Exercise1 from './components/Exercise1';
import Exercise2 from './components/Exercise2';
import SpotCheck from './components/SpotCheck';

function App() {
  return (
    <div>
      <details open><summary>Spot Check</summary>
        <SpotCheck />
      </details>
      <details open><summary>Exercise 1</summary>
        <Exercise1 />
      </details>
      <details open><summary>Exercise 2</summary>
        <Exercise2 />
      </details>
    </div>
  );
}

export default App;
