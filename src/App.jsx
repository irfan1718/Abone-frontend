import Header from '/src/components/Header/Header';
import Intro from './components/Intro/Intro';
import Companies from './components/Companies/Companies';
import ProductCategories from './components/Category/ProductCategories';
import Values from './components/Values/Values';

function App() {
  return (
    <div className='App'>
      <Header />
      <Intro />
      <Companies />
      <ProductCategories />
      <Values />
    </div>
  );
}

export default App;
