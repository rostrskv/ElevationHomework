import logo from './logo.svg';
import './App.css';
import SpotCheck1 from './components/SpotCheck1';
import Excerise1 from './components/Exercise1';
import Excerise2 from './components/Exercise2';

function App() {
  return (
    <div className="App">
      <details><summary>SpotCheck 1</summary>
        <SpotCheck1 />
      </details>
      <details><summary>Exercise 1</summary>
        <Excerise1 />
      </details>
      <details open><summary>Exercise 2</summary>
        <Excerise2 />
      </details>
    </div>
  );
}

export default App;
