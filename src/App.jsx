import Header from '/src/components/Header/Header';
import Intro from './components/Intro/Intro';
import Companies from './components/Companies/Companies';
import ProductCategories from './components/Category/ProductCategories';
import Value from './components/Values/Value';
import Contact from './components/Contact/Contact';

function App() {
  return (
    <div className='App'>
      <Header />
      <Intro />
      <Companies />
      <ProductCategories />
      <Value />
      <Contact />
    </div>
  );
}

export default App;
