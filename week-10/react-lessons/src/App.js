import './App.css';
import ReactInput from './components/react-input/ReactInput';
import ReactLifecycle from './components/react-lifecycle/ReactLifecycle';

function App() {
  return (
    <div>
      <details>
        <summary>React input lesson</summary>
        <ReactInput />
      </details>
      <details open>
        <summary>React Lifecycle and the UseEffect Hook lesson</summary>
        <ReactLifecycle />
      </details>
    </div>
  );
}

export default App;
