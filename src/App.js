import './App.css';
import OurWork from './component/OurWork';
import Navbar from './component/Navbar'
import ProductCollection from './component/ProductCollection';
import VideoBackground from './component/VideoBackground';

function App() {
  return (<>
    <div className="App">
      <div className="offer">Buy 2 or more surf products and get 25% off!<span>Shop now</span>
      </div>
      <Navbar />
      <VideoBackground />
      <ProductCollection />
      <OurWork/>
    </div>
  </>
  );
}
export default App;
