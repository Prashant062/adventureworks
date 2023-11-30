import './App.css';
import Contact from './component/Contact';
import ImageBox from './component/ImageBox ';
import OurWork from './component/OurWork';
import Navbar from './component/Navbar'
import ProductCollection from './component/ProductCollection';
import VideoBackground from './component/VideoBackground';
import EcoWorks from './component/EcoWorks';
import GrandCost from './component/GrandCost';
import NewArrivals from './component/NewArrivals';
import Trending from './component/Trending';
import Footer from './component/Footer';

function App() {
  return (<>
    <div className="App">
      <div className="offer">Buy 2 or more surf products and get 25% off!<span>Shop now</span>
      </div>
      <Navbar />
      <VideoBackground />
      <ProductCollection />
      <OurWork/>
      <ImageBox/>
    <EcoWorks/>
    <GrandCost/>
    <NewArrivals/>
    <Trending/>
    <Contact/>
    <Footer/>
    </div>
  </>
  );
}
export default App;
