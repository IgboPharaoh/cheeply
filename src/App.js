import './App.css'
import StyledInput from './components/input/StyledInput';
import Navbar from './components/navbar/Navbar';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <StyledInput placeholder="YOUR NAME"/>
    </div>
  );
}


export default App;
