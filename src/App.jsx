import Header from '/src/components/Header/Header';
import Intro from './components/Intro/Intro';
import Companies from './components/Companies/Companies';

function App() {
  return (
    <div className='App'>
      <Header />
      <Intro />
      <Companies />
      {/* <ProductSlider/> */}
    </div>
  );
}

export default App;
