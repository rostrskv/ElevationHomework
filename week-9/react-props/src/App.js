import logo from './logo.svg';
import './App.css';
import Company from './components/Company';

function generateCompanyTags(companies) {
  return companies.map(company =>
    <Company name={company.name}></Company>
  )
}

function App() {
  let companies = [
    { name: "Tesla", revenue: 140 },
    { name: "Microsoft", revenue: 300 },
    { name: "Google", revenue: 600 }]

  return (
    <div className="App">
      {generateCompanyTags(companies)}
    </div>
  );
}

export default App;
