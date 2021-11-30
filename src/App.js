import './App.css'
import ProductAdvert from './components/product-ad/ProductAdvert';
import AssuranceTab from './components/assurance/AssuranceTab';
import LandingPage from './components/pages/LandingPage';
import ProductPage from './components/pages/ProductPage';
import Subscribe from './components/subscribe/Subscribe';

function App() {
  return (
    <div className="App">
      <LandingPage/>
      <ProductPage/>
      <AssuranceTab/>
      <ProductAdvert/>
      <Subscribe/>
    </div>
  );
}


export default App;
