import logo from './logo.svg';
import './App.css';
import SpotCheck1 from './components/SpotCheck1';
import SpotCheck2 from './components/SpotCheck2';
import SpotCheck3 from './components/SpotCheck3';
import SpotCheck4 from './components/SpotCheck4';
import SpotCheck5 from './components/SpotCheck5';

function App() {
  return (
    <div>
      <details><summary>SpotCheck1</summary>
        <SpotCheck1 />
      </details>
      <details><summary>SpotCheck2</summary>
        <SpotCheck2 />
      </details>
      <details><summary>SpotCheck3</summary>
        <SpotCheck3 />
      </details>
      <details><summary>SpotCheck4</summary>
        <SpotCheck4 />
      </details>
      <details><summary>SpotCheck5</summary>
        <SpotCheck5 />
      </details>
    </div>
  );
}

export default App;
