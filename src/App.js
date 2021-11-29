import './App.css'
import ProductAdvert from './components/product-ad/ProductAdvert';
import AssuranceTab from './components/assurance/AssuranceTab';
import LandingPage from './components/pages/LandingPage';
import ProductPage from './components/pages/ProductPage';

function App() {
  return (
    <div className="App">
      <LandingPage/>
      <ProductPage/>
      <AssuranceTab/>
      <ProductAdvert/>
    </div>
  );
}


export default App;
