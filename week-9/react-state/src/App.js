import logo from './logo.svg';
import './App.css';
import SpotCheck1 from './components/SpotCheck1';
import SpotCheck2 from './components/SpotCheck2';
import SpotCheck3 from './components/SpotCheck3';
import SpotCheck4 from './components/SpotCheck4';
import SpotCheck5 from './components/SpotCheck5';
import Exercise1 from './components/Exercise1';
import Exercise2 from './components/Exercise2';
import Exercise3 from './components/Exercise3';

function App() {
  return (
    <div>
      <details><summary>SpotCheck 1</summary>
        <SpotCheck1 />
      </details>
      <details><summary>SpotCheck 2</summary>
        <SpotCheck2 />
      </details>
      <details><summary>SpotCheck 3</summary>
        <SpotCheck3 />
      </details>
      <details><summary>SpotCheck 4</summary>
        <SpotCheck4 />
      </details>
      <details><summary>SpotCheck 5</summary>
        <SpotCheck5 />
      </details>
      <details><summary>Exercise 1</summary>
        <Exercise1 />
      </details>
      <details><summary>Exercise 2</summary>
        <Exercise2 />
      </details>
      <details><summary>Exercises 3-4</summary>
        <Exercise3 />
      </details>    
      </div>
  );
}

export default App;
