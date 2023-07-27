import logo from './logo.svg';
import './App.css';
import Wardrobe from './components/Wardrobe';

const upperCase = str => str.toUpperCase()

const App = () => {
  let wardrobe = [
    { type: "shirt", color: "red", size: "Medium" },
    { type: "shirt", color: "blue", size: "Medium" },
    { type: "pants", color: "blue", size: "Medium" },
    { type: "accessory", color: "sapphire", size: "" },
    { type: "accessory", color: "lilac", size: "" }
  ]
  return (
    <div className="App">
      <Wardrobe wardrobe={wardrobe}></Wardrobe>
    </div>
  );
};

export default App;
