import './App.css'
import AssuranceTab from './components/assurance/AssuranceTab';
import LandingPage from './components/pages/LandingPage';
import ProductPage from './components/pages/ProductPage';

function App() {
  return (
    <div className="App">
      <LandingPage/>
      <ProductPage/>
      <AssuranceTab/>
    </div>
  );
}


export default App;
