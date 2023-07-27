import logo from './logo.svg';
import './App.css';
import Company from './components/Company';

const upperCase = str => str.toUpperCase()

const App = () => {
  let companies = [
    { name: "Tesla", revenue: 140 },
    { name: "Microsoft", revenue: 300 },
    { name: "Google", revenue: 600 }]

  return (
    <div className="App">
      {companies.map(company =>
        <Company
          name={company.name}
          revenue={company.revenue}
          upperCase={upperCase(company.name)}
        />
      )
      }
    </div>
  );
};

export default App;
