import logo from './logo.svg';
import './App.css';
import Company from './components/Company';

function App() {
  let companies = [
    { name: "Tesla", revenue: 140 },
    { name: "Microsoft", revenue: 300 },
    { name: "Google", revenue: 600 }]

  return (
    <div className="App">
      <Company name={companies[0].name}></Company>
    </div>
  );
}

export default App;
